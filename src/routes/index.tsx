import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, Bus, Car, CircleDot, IdCard, MapPin, MessageCircle, Navigation,
  Plus, RefreshCw, ArrowRight, Building2, Layers, Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/site/LeadForm";
import { track, trackWhatsApp } from "@/lib/tracking";
import { Faq } from "@/components/site/Faq";
import logo from "@/assets/logo-abdon.png.asset.json";
import { SectionHeading } from "@/components/site/Section";
import { useUnitSelector } from "@/components/site/UnitSelector";
import { COMPANY, SERVICES, UNITS, unitLabel, formatPhone, mapsQuery, unitAddress, whatsappUrl } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autoescola Abdon — A mais completa do Maranhão | São Luís" },
      { name: "description", content: "Autoescola em São Luís/MA com 29 anos de história, categorias A, B, D e E, frota diversificada e três unidades. Conheça a Autoescola Abdon." },
      { property: "og:title", content: "Autoescola Abdon — A mais completa do Maranhão" },
      { property: "og:description", content: "Há 29 anos formando condutores no Maranhão. Categorias A, B, D e E e três unidades em São Luís/MA." },
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
            <span className="h-2 w-2 rounded-full bg-secondary" /> Autoescola Abdon
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-7xl">
            Há 29 anos, preparando você para <span className="text-secondary">ir mais longe.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-85 sm:text-xl">
            Sua jornada ao volante merece experiência, estrutura e confiança. Na Autoescola Abdon, você encontra uma equipe preparada e diferentes opções de veículos para conquistar sua habilitação.
          </p>
          <p className="mt-5 text-sm font-semibold text-secondary">29 anos de história | 3 unidades em São Luís | Categorias A, B, D e E</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="xl" onClick={() => open()}>
              <MessageCircle /> Quero começar minha CNH
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="#servicos">Conheça nossos serviços <ArrowRight /></a>
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
    { icon: Award, title: "29 anos de experiência", text: "Uma história construída ao lado de quem busca conquistar sua habilitação e dirigir com mais segurança." },
    { icon: Car, title: "Frota diversificada", text: "Carros automáticos, manuais, veículo adaptado para PCD, carro elétrico, motos, ônibus e carretas para diferentes necessidades." },
    { icon: Building2, title: "3 unidades em São Luís", text: "Estamos no São Francisco, Vila Palmeira e Renascença para facilitar seu acesso ao atendimento." },
    { icon: Headphones, title: "Equipe preparada", text: "Contamos com 8 instrutores e 10 profissionais na recepção para orientar e acompanhar nossos alunos." },
    { icon: IdCard, title: "Estrutura para prova teórica", text: "A Abdon conta com espaço próprio para realização de prova teórica, conforme disponibilidade e procedimentos aplicáveis." },
    { icon: Layers, title: "Compromisso com a formação", text: "Nosso trabalho vai além da aprovação: queremos contribuir para a formação de condutores conscientes e responsáveis." },
  ];
  return (
    <section className="container-site -mt-0 py-20">
      <SectionHeading eyebrow="Diferenciais" title="Por que escolher a Autoescola Abdon?" intro="Uma trajetória de experiência, estrutura e dedicação à formação de novos condutores." />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-3xl border bg-card p-7 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground"><i.icon className="h-6 w-6" /></span>
            <h3 className="mt-5 font-display text-xl font-bold">{i.title}</h3>
            <p className="mt-2 text-muted-foreground">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-muted py-20">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Nossos serviços" title="O próximo passo da sua habilitação começa aqui." intro="Da primeira CNH à evolução profissional, conheça os serviços da Autoescola Abdon." />
          <Button variant="brand" size="lg" asChild><Link to="/servicos">Todos os serviços <ArrowRight /></Link></Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, idx) => {
            const Icon = ICONS[s.icon] ?? Car;
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
    { t: "Escolha seu objetivo", d: "Primeira habilitação, mudança de categoria, aulas para habilitados ou outro serviço." },
    { t: "Escolha sua unidade", d: "Selecione São Francisco, Vila Palmeira ou Renascença." },
    { t: "Converse com nossa equipe", d: "Receba orientações sobre documentação, etapas e condições do serviço desejado." },
    { t: "Comece sua preparação", d: "Com as etapas necessárias definidas, dê início à sua jornada de aprendizagem." },
  ];
  return (
    <section className="container-site py-20">
      <SectionHeading eyebrow="Como começar" title="Sua conquista começa com o primeiro passo." intro="Veja como é simples iniciar seu atendimento na Abdon." center />
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
        <Button variant="brand" size="xl" onClick={() => open()}><MessageCircle /> Quero começar agora</Button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Sobre a Abdon" title="Nossa missão vai além de aprovar." light />
          <p className="mt-6 opacity-75">
            Há 29 anos, a Autoescola Abdon faz parte da história de quem deseja conquistar a liberdade e a responsabilidade de dirigir.
          </p>
          <p className="mt-4 opacity-75">Com três unidades em São Luís, uma frota diversificada e uma equipe dedicada ao atendimento e à formação de condutores, construímos nossa trajetória valorizando cada etapa do aprendizado.</p><p className="mt-4 opacity-75">Para nós, a conquista da CNH é apenas o começo. Nosso compromisso é contribuir para que cada aluno desenvolva conhecimento, confiança e responsabilidade no trânsito.</p>
          <Button variant="cta" size="lg" className="mt-8" asChild><Link to="/sobre">Conheça nossa história <ArrowRight /></Link></Button>
        </div>
        <img src={logo.url} alt="Autoescola Abdon — A mais completa do Maranhão" className="mx-auto w-full max-w-md rounded-3xl" />
      </div>
    </section>
  );
}

function Testimonials() {
  return <section className="bg-accent py-20"><div className="container-site text-center">
    <SectionHeading eyebrow="Avaliações do Google" title="Histórias reais de quem confia na Abdon." intro="A experiência dos nossos alunos é parte importante da nossa história. Conheça as avaliações de quem passou pela Autoescola Abdon e compartilhou sua experiência no Google." center />
    <Button variant="brand" size="xl" className="mt-8" asChild><a href={COMPANY.reviewsUrl} target="_blank" rel="noopener noreferrer">Ver avaliações no Google <ArrowRight /></a></Button>
  </div></section>;
}

function QuickForm() {
  return (
    <section className="container-site py-20">
      <div className="grid gap-10 rounded-[2rem] border bg-card p-6 shadow-card sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contato rápido" title="Vamos dar o próximo passo juntos?" intro="Preencha seus dados, escolha o serviço desejado e a unidade de sua preferência." />
          <p className="mt-4 text-muted-foreground">Nossa equipe entrará em contato para orientar você sobre as próximas etapas da sua habilitação.</p>
        </div>
        <LeadForm submitLabel="Quero receber atendimento" />
      </div>
    </section>
  );
}

function Units() {
  return (
    <section id="unidades" className="bg-muted py-20">
      <div className="container-site">
        <SectionHeading eyebrow="Nossas unidades" title="A Abdon está mais perto de você." intro="São três pontos de atendimento em São Luís para você escolher a unidade mais conveniente e começar sua jornada." />
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
                <h3 className="font-display text-2xl font-bold">{unitLabel(u)}</h3>
                <p className="mt-2 flex gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{unitAddress(u)}</p>
                <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-2">
                  <Button variant="whatsapp" size="lg" asChild>
                    <a onClick={() => { track("select_unit", { unidade: u.name, origem: "/", canal: "whatsapp" }); trackWhatsApp(u.name, undefined, "/"); }} href={whatsappUrl(u)} target="_blank" rel="noopener noreferrer"><MessageCircle /> {formatPhone(u.whatsapp)}</a>
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

function FinalCta() {
  const { open } = useUnitSelector();
  return (
    <section className="container-site pb-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-cta p-10 text-primary-foreground sm:p-14">
        <div className="absolute inset-x-0 top-0 h-2 stripes" />
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-5xl">Seu próximo destino começa com uma decisão.</h2>
            <p className="mt-3 text-lg opacity-85">Conte com os 29 anos de experiência da Autoescola Abdon para começar sua habilitação ou dar um novo passo como condutor. Escolha sua unidade e converse com nossa equipe.</p>
          </div>
          <Button variant="cta" size="xl" onClick={() => open()}><MessageCircle /> Falar com a Abdon</Button>
        </div>
      </div>
    </section>
  );
}
