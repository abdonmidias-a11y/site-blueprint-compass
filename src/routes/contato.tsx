import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/InternalPages";

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
  component: ContactPage,
});
