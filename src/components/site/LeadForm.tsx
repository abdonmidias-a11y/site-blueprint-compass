import { useRef, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES, UNITS } from "@/lib/site-data";
import { leadSchema } from "@/lib/lead-schema";
import { submitLead } from "@/lib/leads.functions";
import { captureAttribution, getAttribution, track, trackConfirmedLead } from "@/lib/tracking";

export function LeadForm({ service = "" }: { service?: string }) {
  const pathname = useLocation({ select: (l) => l.pathname });
  const navigate = useNavigate();
  const send = useServerFn(submitLead);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [currentService, setService] = useState(service);
  const [unit, setUnit] = useState("");
  const started = useRef(false);
  const pending = useRef(false);
  const identity = useRef<{ submission_id: string; started_at: number } | null>(null);
  function start() {
    if (!identity.current) identity.current = { submission_id: crypto.randomUUID(), started_at: Date.now() };
    if (started.current) return;
    started.current = true;
    captureAttribution();
    track("form_start", { servico: currentService || undefined, unidade: unit || undefined, origem: pathname });
  }
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending.current) return;
    start();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = leadSchema.safeParse({ ...fields, ...getAttribution(), ...identity.current, source_page: pathname, consent: fields.consent === "on" });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Confira os campos."); return; }
    pending.current = true;
    setBusy(true); setError("");
    try {
      const result = await send({ data: parsed.data });
      if (!result.ok) { setError("Não foi possível salvar seu contato. Tente novamente; seus dados foram mantidos."); return; }
      trackConfirmedLead(result.id, { servico: parsed.data.service, unidade: parsed.data.unit, origem: pathname });
      try { sessionStorage.setItem("abdon_last_receipt", result.id); } catch { /* optional receipt display */ }
      await navigate({ to: "/obrigado" });
    } catch {
      setError("Não foi possível enviar. Verifique sua conexão e tente novamente; seus dados foram mantidos.");
    } finally { pending.current = false; setBusy(false); }
  }
  return <form aria-label="Formulário de contato" className="grid gap-4 sm:grid-cols-2" onFocus={start} onSubmit={submit}>
    <fieldset disabled={busy} className="contents">
      <Input aria-label="Nome" name="name" autoComplete="name" placeholder="Nome" required minLength={2} maxLength={100} className="h-12 rounded-xl" />
      <Input aria-label="WhatsApp" name="whatsapp" type="tel" autoComplete="tel" placeholder="WhatsApp com DDD" required maxLength={30} className="h-12 rounded-xl" />
      <select aria-label="Serviço de interesse" name="service" required value={currentService} onChange={(e) => setService(e.target.value)} className="h-12 min-w-0 rounded-xl border border-input bg-background px-3 text-sm">
        <option value="" disabled>Serviço de interesse</option>{SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
      </select>
      <select aria-label="Unidade de preferência" name="unit" required value={unit} onChange={(e) => { setUnit(e.target.value); track("select_unit", { unidade: e.target.value, servico: currentService || undefined, origem: pathname, canal: "formulario" }); }} className="h-12 min-w-0 rounded-xl border border-input bg-background px-3 text-sm">
        <option value="" disabled>Unidade de preferência</option>{UNITS.map((u) => <option key={u.id} value={u.name}>{u.name}</option>)}
      </select>
      <Input aria-label="E-mail (opcional)" name="email" type="email" autoComplete="email" maxLength={255} placeholder="E-mail (opcional)" className="h-12 rounded-xl sm:col-span-2" />
      <Textarea aria-label="Mensagem (opcional)" name="message" maxLength={1000} placeholder="Mensagem (opcional)" className="rounded-xl sm:col-span-2" />
      <div className="sr-only" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
      <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2"><input type="checkbox" name="consent" required className="mt-1" /><span>Autorizo o uso dos meus dados para contato e li a <Link className="text-primary underline" to="/politica-de-privacidade">Política de Privacidade</Link>.</span></label>
      {error && <p role="alert" className="text-destructive sm:col-span-2">{error}</p>}
      <Button type="submit" variant="brand" size="xl" className="sm:col-span-2" disabled={busy}>{busy ? "Enviando…" : "Enviar contato"}</Button>
    </fieldset>
  </form>;
}