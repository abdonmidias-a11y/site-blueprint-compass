import type { ReactNode } from "react";
import { Clock } from "lucide-react";

export function SectionHeading({ eyebrow, title, intro, light = false, center = false }: {
  eyebrow: string; title: string; intro?: string; light?: boolean; center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`text-xs font-bold tracking-[0.2em] uppercase ${light ? "text-secondary" : "text-primary"}`}>{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className={`mt-4 text-base sm:text-lg ${light ? "opacity-80" : "text-muted-foreground"}`}>{intro}</p>}
    </div>
  );
}

/** Marks content that depends on material not yet supplied by Abdon. */
export function PendingNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-dashed border-secondary bg-secondary/10 p-4 text-sm">
      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary-foreground" />
      <p className="text-secondary-foreground">{children}</p>
    </div>
  );
}

export function PlaceholderPage({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="container-site py-24">
      <SectionHeading eyebrow="Em breve" title={title} intro={intro} />
      <div className="mt-8 max-w-2xl">
        <PendingNote>Página prevista para a Etapa 2 da construção do site.</PendingNote>
      </div>
    </section>
  );
}
