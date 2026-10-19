import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/Section";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Abdon | Autoescola Abdon" },
      { name: "description", content: "Conheça a história e a estrutura da Autoescola Abdon." },
      { property: "og:title", content: "Sobre a Abdon | Autoescola Abdon" },
      { property: "og:description", content: "Conheça a história e a estrutura da Autoescola Abdon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <PlaceholderPage title="Sobre a Abdon" intro="Conheça a história e a estrutura da Autoescola Abdon." />,
});
