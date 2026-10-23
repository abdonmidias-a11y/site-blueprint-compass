import { createFileRoute } from "@tanstack/react-router";
import { ApprovedPage } from "@/components/site/InternalPages";

export const Route = createFileRoute("/alunos-aprovados")({
  head: () => ({
    meta: [
      { title: "Alunos aprovados em São Luís | Autoescola Abdon" },
      { name: "description", content: "Celebre as conquistas dos alunos da Autoescola Abdon em São Luís/MA. Uma história de dedicação, aprendizado e superação." },
      { property: "og:title", content: "Alunos aprovados em São Luís | Autoescola Abdon" },
      { property: "og:description", content: "Celebre as conquistas dos alunos da Autoescola Abdon em São Luís/MA. Uma história de dedicação, aprendizado e superação." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ApprovedPage,
});
