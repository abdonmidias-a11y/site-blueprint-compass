import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/InternalPages";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato em São Luís MA | Autoescola Abdon" },
      { name: "description", content: "Solicite atendimento da Autoescola Abdon para sua CNH em São Luís/MA. Escolha São Francisco, Vila Palmeira ou Renascença." },
      { property: "og:title", content: "Contato em São Luís MA | Autoescola Abdon" },
      { property: "og:description", content: "Solicite atendimento da Autoescola Abdon para sua CNH em São Luís/MA. Escolha São Francisco, Vila Palmeira ou Renascença." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});
