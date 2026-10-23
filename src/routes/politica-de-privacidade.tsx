import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/site/InternalPages";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Autoescola Abdon São Luís" },
      { name: "description", content: "Saiba como são tratados os dados de contato enviados à Autoescola Abdon em São Luís/MA e como exercer seus direitos." },
      { property: "og:title", content: "Política de Privacidade | Autoescola Abdon São Luís" },
      { property: "og:description", content: "Saiba como são tratados os dados de contato enviados à Autoescola Abdon em São Luís/MA e como exercer seus direitos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});
