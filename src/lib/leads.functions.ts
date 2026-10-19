import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const opt = (max: number) => z.string().trim().max(max).optional().transform((v) => (v ? v : null));

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  whatsapp: z.string().trim().transform((v) => v.replace(/\D/g, "")).pipe(z.string().min(10, "WhatsApp inválido").max(13, "WhatsApp inválido")),
  service: z.string().trim().min(1, "Escolha um serviço").max(100),
  unit: z.string().trim().min(1, "Escolha uma unidade").max(50),
  email: z.union([z.literal(""), z.string().trim().email("E-mail inválido").max(255)]).optional().transform((v) => (v ? v : null)),
  message: opt(1000),
  consent: z.literal(true, { errorMap: () => ({ message: "É preciso aceitar a política de privacidade" }) }),
  website: z.string().max(0).optional(), // honeypot
  source_page: opt(300),
  referrer: opt(500),
  utm_source: opt(200), utm_medium: opt(200), utm_campaign: opt(200), utm_term: opt(200), utm_content: opt(200),
  gclid: opt(200), fbclid: opt(200),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { website: _hp, ...row } = data;
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { error } = await supabase.from("leads").insert(row);
    if (error) {
      console.error("lead insert failed", error.message);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
