import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, Bus, Car, CircleDot, IdCard, ImageIcon, MapPin, MessageCircle, Navigation,
  Plus, Quote, RefreshCw, ArrowRight, HelpCircle, Building2, Layers, Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo-abdon.png.asset.json";
import { SectionHeading, PendingNote } from "@/components/site/Section";
import { useUnitSelector } from "@/components/site/UnitSelector";
import { SERVICES, UNITS, formatPhone, mapsQuery, unitAddress, whatsappUrl } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autoescola Abdon — A mais completa do Maranhão | São Luís" },
      { name: "description", content: "Primeira habilitação, mudança e inclusão de categoria, reciclagem e mais. Três unidades em São Luís/MA: São Francisco, Vila Palmeira e Renascença." },
      { property: "og:title", content: "Autoescola Abdon — A mais completa do Maranhão" },
      { property: "og:description", content: "Três unidades em São Luís/MA. Fale com a unidade mais perto de você pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ICONS: Record<string, LucideIcon> = {
  car: Car, bus: Bus, plus: Plus, refresh: RefreshCw, wheel: CircleDot, id: IdCard, award: Award,
};

function Index() {
  return (
    <>
      <Hero />
      <Highlights />
      <Services />
      <HowToStart />
      <About />
      <Gallery />
      <Testimonials />
      <QuickForm />
      <Units />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  const { open } = useUnitSelector();
  return (
    <section className="relative overflow-hidden bg-hero text-primary-foreground">
      <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-secondary" /> 3 unidades em São Luís/MA
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-7xl">
            Sua CNH começa na <span className="text-secondary">Abdon.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-85 sm:text-xl">
            A mais completa do Maranhão. Escolha a unidade mais perto de você e fale agora com a nossa equipe.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="xl" onClick={() => open()}>
              <MessageCircle /> Quero começar minha CNH
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="#servicos">Ver serviços <ArrowRight /></a>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md animate-rise [animation-delay:150ms]">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-secondary/25 blur-3xl" />
          <img src={logo.url} alt="Logomarca Autoescola Abdon" className="relative w-full rounded-[2rem] shadow-lift" />
        </div>
      </div>
      <div className="h-3 road-line bg-ink" />
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: Building2, title: "Três unidades", text: "São Francisco, Vila Palmeira e Renascença." },
    { icon: Layers, title: "Sete serviços", text: "Da primeira habilitação aos cursos especializados." },
    { icon: Headphones, title: "Atendimento direto", text: "Fale com a unidade escolhida pelo WhatsApp." },
  ];
  return (
    <section className="container-site -mt-0 py-20">
      <SectionHeading eyebrow="Diferenciais" title="Por que escolher a Abdon" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-3xl border bg-card p-7 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground"><i.icon className="h-6 w-6" /></span>
            <h3 className="mt-5 font-display text-xl font-bold">{i.title}</h3>
            <p className="mt-2 text-muted-foreground">{i.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6"><PendingNote>Diferenciais oficiais (estrutura, frota, aprovação, condições) aguardando informações da Abdon.</PendingNote></div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-muted py-20">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Nossos serviços" title="Tudo para você dirigir com segurança" />
          <Button variant="brand" size="lg" asChild><Link to="/servicos">Todos os serviços <ArrowRight /></Link></Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, idx) => {
            const Icon = ICONS[s.icon];
            return (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift ${idx === 0 ? "sm:col-span-2 lg:row-span-2 bg-primary text-primary-foreground" : ""}`}
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${idx === 0 ? "bg-secondary text-secondary-foreground" : "bg-accent text-primary"}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className={`mt-6 font-display font-bold ${idx === 0 ? "text-3xl lg:text-4xl" : "text-xl"}`}>{s.title}</h3>
                <p className={`mt-2 ${idx === 0 ? "opacity-85 text-lg" : "text-muted-foreground"}`}>{s.short}</p>
                <span className={`mt-auto pt-6 inline-flex items-center gap-1 text-sm font-bold ${idx === 0 ? "text-secondary" : "text-primary"}`}>
                  Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowToStart() {
  const { open } = useUnitSelector();
  const steps = [
    { t: "Escolha o serviço", d: "Veja qual opção atende ao seu momento." },
    { t: "Fale com a unidade", d: "Selecione a unidade e chame no WhatsApp." },
    { t: "Faça sua matrícula", d: "Nossa equipe orienta documentos e etapas." },
    { t: "Comece as aulas", d: "Siga o processo até a sua habilitação." },
  ];
  return (
    <section className="container-site py-20">
      <SectionHeading eyebrow="Como começar" title="Quatro passos até a sua habilitação" center />
      <ol className="mt-12 grid gap-5 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.t} className="relative rounded-3xl border bg-card p-7 shadow-card">
            <span className="font-display text-5xl font-extrabold text-secondary">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 text-center">
        <Button variant="brand" size="xl" onClick={() => open()}><MessageCircle /> Começar agora</Button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Sobre a Abdon" title="A mais completa do Maranhão" light />
          <p className="mt-6 opacity-75">
            Presente em três bairros de São Luís, a Autoescola Abdon atende quem quer tirar, mudar ou regularizar a habilitação.
          </p>
          <div className="mt-6"><PendingNote>História, missão e números da Abdon aguardando conteúdo oficial.</PendingNote></div>
          <Button variant="cta" size="lg" className="mt-8" asChild><Link to="/sobre">Conheça a Abdon <ArrowRight /></Link></Button>
        </div>
        <div className="grid aspect-[4/3] place-items-center rounded-3xl border border-dashed border-ink-foreground/25 bg-ink-foreground/5">
          <div className="text-center opacity-60">
            <ImageIcon className="mx-auto h-10 w-10" />
            <p className="mt-2 text-sm">Foto real da Abdon (aguardando envio)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="container-site py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow="Alunos aprovados" title="Conquistas da nossa turma" />
        <Button variant="outline" size="lg" className="rounded-full" asChild><Link to="/alunos-aprovados">Ver galeria</Link></Button>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="grid aspect-square place-items-center rounded-3xl border border-dashed bg-muted text-muted-foreground">
            <ImageIcon className="h-8 w-8" />
          </div>
        ))}
      </div>
      <div className="mt-6"><PendingNote>Fotos de alunos aprovados serão publicadas a partir do painel administrativo.</PendingNote></div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-accent py-20">
      <div className="container-site">
        <SectionHeading eyebrow="Depoimentos" title="Quem estudou na Abdon" center />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-3xl border border-dashed bg-card/60 p-7 text-muted-foreground">
              <Quote className="h-7 w-7 text-primary/40" />
              <div className="mt-4 space-y-2">
                <div className="h-3 rounded bg-muted" /><div className="h-3 w-4/5 rounded bg-muted" /><div className="h-3 w-3/5 rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-6 max-w-4xl"><PendingNote>Espaço reservado para depoimentos reais de alunos. Nenhum depoimento será publicado sem autorização.</PendingNote></div>
      </div>
    </section>
  );
}

function QuickForm() {
  return (
    <section className="container-site py-20">
      <div className="grid gap-10 rounded-[2rem] border bg-card p-6 shadow-card sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contato rápido" title="Quer que a gente fale com você?" intro="Deixe seus dados e a unidade escolhida retorna o contato." />
          <div className="mt-6"><PendingNote>Formulário em construção — o envio será ativado na próxima etapa. Por enquanto, use o WhatsApp.</PendingNote></div>
        </div>
        <form className="grid gap-4 sm:grid-cols-2" aria-disabled onSubmit={(e) => e.preventDefault()}>
          <fieldset disabled className="contents">
            <Input placeholder="Nome" className="h-12 rounded-xl" />
            <Input placeholder="WhatsApp" className="h-12 rounded-xl" />
            <select className="h-12 rounded-xl border border-input bg-background px-3 text-sm text-muted-foreground" defaultValue="">
              <option value="" disabled>Serviço de interesse</option>
              {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
            </select>
            <select className="h-12 rounded-xl border border-input bg-background px-3 text-sm text-muted-foreground" defaultValue="">
              <option value="" disabled>Unidade de preferência</option>
              {UNITS.map((u) => <option key={u.id}>{u.name}</option>)}
            </select>
            <Input placeholder="E-mail (opcional)" className="h-12 rounded-xl sm:col-span-2" />
            <Textarea placeholder="Mensagem (opcional)" className="rounded-xl sm:col-span-2" />
            <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
              <input type="checkbox" className="mt-1" /> Concordo com a Política de Privacidade.
            </label>
            <Button variant="brand" size="xl" className="sm:col-span-2">Envio disponível em breve</Button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

function Units() {
  return (
    <section id="unidades" className="bg-muted py-20">
      <div className="container-site">
        <SectionHeading eyebrow="Nossas unidades" title="Três endereços em São Luís" intro="Escolha a mais perto de você." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {UNITS.map((u) => (
            <article key={u.id} className="flex flex-col overflow-hidden rounded-3xl border bg-card shadow-card">
              <iframe
                title={`Mapa da unidade ${u.name}`}
                src={`https://maps.google.com/maps?q=${mapsQuery(u)}&output=embed`}
                className="h-48 w-full border-0"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold">{u.name}</h3>
                <p className="mt-2 flex gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{unitAddress(u)}</p>
                <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-2">
                  <Button variant="whatsapp" size="lg" asChild>
                    <a href={whatsappUrl(u)} target="_blank" rel="noopener noreferrer"><MessageCircle /> {formatPhone(u.whatsapp)}</a>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full" asChild>
                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery(u)}`} target="_blank" rel="noopener noreferrer"><Navigation /> Como chegar</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="container-site py-20">
      <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas frequentes" center />
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 rounded-2xl border border-dashed bg-card p-5 text-muted-foreground">
            <HelpCircle className="h-5 w-5 shrink-0 text-primary/50" />
            <div className="h-3 flex-1 rounded bg-muted" />
          </div>
        ))}
        <PendingNote>Perguntas e respostas serão cadastradas pela Abdon no painel administrativo.</PendingNote>
      </div>
    </section>
  );
}

function FinalCta() {
  const { open } = useUnitSelector();
  return (
    <section className="container-site pb-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-cta p-10 text-primary-foreground sm:p-14">
        <div className="absolute inset-x-0 top-0 h-2 stripes" />
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-5xl">Pronto para dirigir?</h2>
            <p className="mt-3 text-lg opacity-85">Fale agora com a unidade Abdon mais perto de você.</p>
          </div>
          <Button variant="cta" size="xl" onClick={() => open()}><MessageCircle /> Falar no WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}
