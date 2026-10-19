import { createFileRoute, notFound } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/Section";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} | Autoescola Abdon` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} | Autoescola Abdon` },
          { property: "og:description", content: loaderData.service.short },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary" },
        ]
      : [{ title: "Serviço indisponível | Autoescola Abdon" }, { name: "robots", content: "noindex" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  return <PlaceholderPage title={service.title} intro={service.short} />;
}
