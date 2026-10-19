import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/Section";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Nossos serviços | Autoescola Abdon" },
      { name: "description", content: "Todos os serviços da Autoescola Abdon em São Luís/MA." },
      { property: "og:title", content: "Nossos serviços | Autoescola Abdon" },
      { property: "og:description", content: "Todos os serviços da Autoescola Abdon em São Luís/MA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <PlaceholderPage title="Nossos serviços" intro="Todos os serviços da Autoescola Abdon em São Luís/MA." />,
});
