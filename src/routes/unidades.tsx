import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/Section";

export const Route = createFileRoute("/unidades")({
  head: () => ({
    meta: [
      { title: "Nossas unidades | Autoescola Abdon" },
      { name: "description", content: "Endereços, mapas e WhatsApp das três unidades Abdon." },
      { property: "og:title", content: "Nossas unidades | Autoescola Abdon" },
      { property: "og:description", content: "Endereços, mapas e WhatsApp das três unidades Abdon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <PlaceholderPage title="Nossas unidades" intro="Endereços, mapas e WhatsApp das três unidades Abdon." />,
});
