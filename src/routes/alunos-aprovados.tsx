import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/Section";

export const Route = createFileRoute("/alunos-aprovados")({
  head: () => ({
    meta: [
      { title: "Alunos aprovados | Autoescola Abdon" },
      { name: "description", content: "Galeria de alunos aprovados da Autoescola Abdon." },
      { property: "og:title", content: "Alunos aprovados | Autoescola Abdon" },
      { property: "og:description", content: "Galeria de alunos aprovados da Autoescola Abdon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <PlaceholderPage title="Alunos aprovados" intro="Galeria de alunos aprovados da Autoescola Abdon." />,
});
