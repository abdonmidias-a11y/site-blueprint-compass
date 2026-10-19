import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/Section";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Autoescola Abdon" },
      { name: "description", content: "Fale com a Autoescola Abdon." },
      { property: "og:title", content: "Contato | Autoescola Abdon" },
      { property: "og:description", content: "Fale com a Autoescola Abdon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <PlaceholderPage title="Contato" intro="Fale com a Autoescola Abdon." />,
});
