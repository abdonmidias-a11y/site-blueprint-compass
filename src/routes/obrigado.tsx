import { createFileRoute, Link, useHydrated } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/obrigado")({
  head: () => ({ meta: [
    { title: "Obrigado pelo contato | Autoescola Abdon" },
    { name: "description", content: "Confirmação do contato enviado à Autoescola Abdon." },
    { property: "og:title", content: "Obrigado pelo contato | Autoescola Abdon" },
    { property: "og:description", content: "Confirmação do contato enviado à Autoescola Abdon." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex" },
  ] }),
  component: ThankYou,
});

function ThankYou() {
  const hydrated = useHydrated();
  let confirmed = false;
  if (hydrated) { try { confirmed = Boolean(sessionStorage.getItem("abdon_last_receipt")); } catch { /* no receipt */ } }
  return <section className="container-site min-h-[60vh] py-20 text-center">
    <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
    <h1 className="mt-6 text-4xl font-bold">{confirmed ? "Obrigado pelo contato!" : "Autoescola Abdon"}</h1>
    <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{confirmed ? "Seus dados foram salvos e estão disponíveis para atendimento pela unidade escolhida." : "Para enviar seus dados à Abdon, preencha o formulário de contato."}</p>
    <Button variant="brand" size="xl" className="mt-8" asChild><Link to={confirmed ? "/" : "/contato"}>{confirmed ? "Voltar ao início" : "Ir para contato"}</Link></Button>
  </section>;
}