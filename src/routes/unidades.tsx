import { createFileRoute } from "@tanstack/react-router";
import { UnitsPage } from "@/components/site/InternalPages";

export const Route = createFileRoute("/unidades")({
  head: () => ({
    meta: [
      { title: "Unidades em São Luís MA | Autoescola Abdon" },
      { name: "description", content: "Encontre a matriz São Francisco e as unidades Vila Palmeira e Renascença da Autoescola Abdon. Endereços, mapas e contatos em São Luís/MA." },
      { property: "og:title", content: "Unidades em São Luís MA | Autoescola Abdon" },
      { property: "og:description", content: "Encontre a matriz São Francisco e as unidades Vila Palmeira e Renascença da Autoescola Abdon. Endereços, mapas e contatos em São Luís/MA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: UnitsPage,
});
