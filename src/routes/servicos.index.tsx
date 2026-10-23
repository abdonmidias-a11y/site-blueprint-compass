import { createFileRoute } from "@tanstack/react-router";
import { ServicesDirectory } from "@/components/site/InternalPages";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços de CNH em São Luís MA | Autoescola Abdon" },
      { name: "description", content: "Primeira CNH A e B, mudança de categoria D e E, aulas para habilitados, renovação e orientação na Autoescola Abdon em São Luís/MA." },
      { property: "og:title", content: "Serviços de CNH em São Luís MA | Autoescola Abdon" },
      { property: "og:description", content: "Primeira CNH A e B, mudança de categoria D e E, aulas para habilitados, renovação e orientação na Autoescola Abdon em São Luís/MA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServicesDirectory,
});
