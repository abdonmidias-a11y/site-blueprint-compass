import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/InternalPages";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "29 anos de história em São Luís | Autoescola Abdon" },
      { name: "description", content: "Conheça os 29 anos da Autoescola Abdon, sua missão, equipe e frota diversificada, com três unidades em São Luís/MA." },
      { property: "og:title", content: "29 anos de história em São Luís | Autoescola Abdon" },
      { property: "og:description", content: "Conheça os 29 anos da Autoescola Abdon, sua missão, equipe e frota diversificada, com três unidades em São Luís/MA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});
