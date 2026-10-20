import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/site/InternalPages";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Autoescola Abdon" },
      { name: "description", content: "Como a Autoescola Abdon trata seus dados." },
      { property: "og:title", content: "Política de Privacidade | Autoescola Abdon" },
      { property: "og:description", content: "Como a Autoescola Abdon trata seus dados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});
