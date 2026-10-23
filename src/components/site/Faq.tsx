import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/lib/site-data";
import { SectionHeading } from "./Section";
import { useUnitSelector } from "./UnitSelector";

export function Faq({ service }: { service?: string }) {
  const { open } = useUnitSelector();
  return <section className="container-site py-20">
    <SectionHeading eyebrow="Dúvidas frequentes" title="Ainda tem dúvidas sobre sua habilitação?" intro="Reunimos algumas das perguntas mais comuns para ajudar você a entender melhor as etapas da sua CNH." center />
    <div className="mx-auto mt-10 max-w-3xl space-y-3">
      {FAQ.map((item) => <details key={item.question} className="rounded-2xl border bg-card p-5"><summary className="cursor-pointer font-semibold">{item.question}</summary><p className="mt-4 leading-relaxed text-muted-foreground">{item.answer}</p></details>)}
      <div className="pt-6 text-center"><p className="mb-4 text-muted-foreground">Ainda tem dúvidas? Nossa equipe pode ajudar.</p><Button variant="brand" size="xl" onClick={() => open(service)}><MessageCircle /> Tirar dúvidas pelo WhatsApp</Button></div>
    </div>
  </section>;
}