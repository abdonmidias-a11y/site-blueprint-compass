import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./Section";
import { useUnitSelector } from "./UnitSelector";
import { COMPANY, SERVICES, SERVICE_DETAILS, UNITS, unitLabel, formatPhone, mapsQuery, unitAddress, type Service } from "@/lib/site-data";
import { Faq } from "./Faq";
import { LeadForm } from "./LeadForm";
import { APPROVED_PHOTOS, PHOTOS, SERVICE_PHOTOS } from "@/lib/photos";
import logo from "@/assets/logo-abdon.png.asset.json";

export function ContactCta({ service, label = "Falar com a Abdon" }: { service?: string; label?: string }) {
  const { open } = useUnitSelector();
  return <Button variant="cta" size="xl" className="h-auto min-h-14 whitespace-normal text-center" onClick={() => open(service)}><MessageCircle /> {label}</Button>;
}

function PageIntro({ title, intro, eyebrow = "Autoescola Abdon", headline }: { title: string; intro: string; eyebrow?: string; headline?: string }) {
  return <section className="bg-primary text-primary-foreground"><div className="container-site py-14 sm:py-20"><p className="mb-6 text-sm opacity-80"><Link to="/">Início</Link> / {title}</p><SectionHeading eyebrow={eyebrow} title={headline ?? title} intro={intro} light /></div></section>;
}

export function ServiceDetail({ service }: { service: Service }) {
  const details = SERVICE_DETAILS[service.slug];
  if (!details) return null;
  const photos = SERVICE_PHOTOS[service.slug];
  return <>
    <PageIntro title={service.title} headline={details.headline} intro={details.subheadline} eyebrow={service.title} />
    <section className="container-site py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-10">
          {photos && <div className="grid gap-4 sm:grid-cols-2">{photos.map((p) => <img key={p.url} src={p.url} alt={p.alt} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-card" />)}</div>}
          <div><h2 className="text-3xl font-bold">Sobre o serviço</h2><p className="mt-4 whitespace-pre-line text-lg leading-relaxed text-muted-foreground">{details.description}</p></div>
        <aside className="min-w-0 border-l border-border lg:pl-8"><div className="space-y-6 lg:sticky lg:top-28"><h2 className="text-2xl font-bold">Vamos conversar?</h2><p className="text-muted-foreground">Selecione a unidade para consultar {service.title.toLowerCase()}.</p><ContactCta service={service.title} label={details.cta} /><div className="border-t pt-6"><p className="mb-4 font-bold">Outros serviços</p><ul className="space-y-3">{SERVICES.filter((s) => s.slug !== service.slug).map((s) => <li key={s.slug}><Link className="inline-flex items-center gap-2 text-sm text-primary hover:underline" to="/servicos/$slug" params={{ slug: s.slug }}>{s.title}<ArrowRight className="h-4 w-4 shrink-0" /></Link></li>)}</ul></div></div></aside>
      </div>
      <div className="mt-14 max-w-3xl border-t pt-10"><h2 className="mb-6 text-2xl font-bold">Solicitar contato</h2><LeadForm key={service.slug} service={service.title} /></div>
    </section>
    {service.slug === "primeira-habilitacao" && <Faq service={service.title} />}
  </>;
}

export function ServicesDirectory() {
  return <><PageIntro title="Nossos serviços" headline="O próximo passo da sua habilitação começa aqui." intro="Da primeira CNH à evolução profissional, conheça os serviços da Autoescola Abdon." /><section className="container-site py-16"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.map((s) => <Link key={s.slug} to="/servicos/$slug" params={{ slug: s.slug }} className="group flex flex-col rounded-3xl border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"><h2 className="text-2xl font-bold">{s.title}</h2><p className="mt-3 flex-1 text-muted-foreground">{s.short}</p><span className="mt-6 inline-flex items-center gap-2 font-bold text-primary">Saiba mais <ArrowRight className="h-4 w-4" /></span></Link>)}</div></section></>;
}

export function UnitsList() {
  const { open } = useUnitSelector();
  return <div className="grid gap-6 lg:grid-cols-3">{UNITS.map((u) => <article key={u.id} className="flex min-w-0 flex-col overflow-hidden rounded-3xl border bg-card shadow-card"><iframe title={`Mapa da unidade ${u.name}`} src={`https://maps.google.com/maps?q=${mapsQuery(u)}&output=embed`} className="h-52 w-full border-0" loading="lazy" /><div className="flex flex-1 flex-col p-6"><h2 className="text-2xl font-bold">{unitLabel(u)}</h2><p className="mt-4 flex gap-2 text-sm leading-relaxed text-muted-foreground"><MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />{unitAddress(u)}</p><p className="mt-3 text-sm font-semibold">WhatsApp: {formatPhone(u.whatsapp)}</p><div className="mt-auto grid gap-3 pt-6"><Button variant="whatsapp" size="xl" onClick={() => open()}><MessageCircle /> Falar com esta unidade</Button><Button variant="outline" size="lg" className="rounded-full" asChild><a href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery(u)}`} target="_blank" rel="noopener noreferrer"><Navigation /> Como chegar</a></Button></div></div></article>)}</div>;
}

export function UnitsPage() {
  return <><PageIntro title="Nossas unidades" headline="Três unidades. Uma história de compromisso com você." intro="Escolha a unidade da Autoescola Abdon mais conveniente para você. Estamos presentes no São Francisco, Vila Palmeira e Renascença, com equipes disponíveis para orientar sobre nossos serviços." /><section className="container-site py-16"><UnitsList /></section></>;
}

export function AboutPage() {
  return <><PageIntro title="Sobre a Abdon" headline="29 anos de história. Uma missão que vai além de aprovar." intro="A Autoescola Abdon construiu sua trajetória participando da formação de condutores no Maranhão." /><section className="container-site py-16"><div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_280px]"><div><h2 className="text-3xl font-bold">Autoescola Abdon em São Luís</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">São 29 anos de experiência, dedicação e compromisso com quem busca conquistar sua habilitação e desenvolver uma relação mais consciente com o trânsito.</p><div className="mt-7"><Button variant="cta" size="xl" asChild><Link to="/unidades">Conheça nossas unidades <ArrowRight /></Link></Button></div></div><img className="w-full rounded-3xl" src={logo.url} alt="Autoescola Abdon — A mais completa do Maranhão" /></div>
  <div className="mt-14 max-w-3xl space-y-10">
    <div><h2 className="text-2xl font-bold">Nossa estrutura</h2><p className="mt-4 text-muted-foreground">Contamos com três unidades em São Luís: São Francisco, Vila Palmeira e Renascença.</p><p className="mt-4 text-muted-foreground">Nossa frota reúne carros automáticos e manuais, veículo adaptado para PCD, carro elétrico, motos, ônibus e carretas. São diferentes opções de veículos para atender às necessidades dos serviços oferecidos.</p><p className="mt-4 text-muted-foreground">Espaço próprio para realização de prova teórica, sujeito às condições de utilização e agendamento da empresa.</p><div className="mt-6 grid gap-4 sm:grid-cols-2"><img src={PHOTOS.fachada.url} alt={PHOTOS.fachada.alt} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-card" /><img src={PHOTOS.recepcao.url} alt={PHOTOS.recepcao.alt} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-card" /></div></div>
    <div><h2 className="text-2xl font-bold">Nossa frota</h2><div className="mt-5 grid gap-6 sm:grid-cols-3">{[{ title: "Automáticos", items: COMPANY.automatic }, { title: "Manuais", items: COMPANY.manual }, { title: "Outros veículos", items: COMPANY.otherVehicles }].map((group) => <div key={group.title}><h3 className="font-bold">{group.title}</h3><ul className="mt-3 space-y-2 text-muted-foreground">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></div>
    <div><h2 className="text-2xl font-bold">Nossa equipe</h2><p className="mt-4 text-muted-foreground">Por trás de cada etapa da formação, existe uma equipe preparada para orientar nossos alunos.</p><p className="mt-4 text-muted-foreground">A Abdon conta com oito instrutores e dez profissionais na recepção, contribuindo para um atendimento próximo e organizado.</p><img src={PHOTOS.equipe.url} alt={PHOTOS.equipe.alt} loading="lazy" className="mt-6 aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-card sm:aspect-[4/3]" /></div>
    <div><h2 className="text-2xl font-bold">Nossa missão</h2><p className="mt-4 font-semibold">{COMPANY.mission}</p><p className="mt-4 text-muted-foreground">Acreditamos que aprender a dirigir também envolve desenvolver responsabilidade, confiança, atenção e respeito pela vida. É por isso que valorizamos a preparação de cada aluno e a construção de um trânsito mais seguro.</p></div>
    <div><h2 className="text-2xl font-bold">Nossa presença</h2><p className="mt-4 text-muted-foreground">Além do trabalho de formação, a Abdon participa de ações e datas comemorativas relacionadas à vida em comunidade e à conscientização no trânsito.</p></div>
  </div><div className="mt-14"><SectionHeading eyebrow="Perto de você" title="Conheça nossas unidades" /><div className="mt-8"><UnitsList /></div></div></section></>;
}

export function ApprovedGallery({ photos = APPROVED_PHOTOS }: { photos?: typeof APPROVED_PHOTOS }) {
  return <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">{photos.map((p, i) => <img key={p.url} src={p.url} alt={p.alt} loading="lazy" className={`aspect-[3/4] w-full rounded-3xl object-cover object-top shadow-card ${i === 0 ? "col-span-2 lg:col-span-1" : ""}`} />)}</div>;
}

export function ApprovedPage() {
  return <><PageIntro title="Alunos aprovados" headline="A conquista é deles. A alegria é de todos nós." intro="Cada aluno aprovado representa uma jornada de dedicação, aprendizado e superação." /><section className="container-site py-16"><p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">É uma satisfação fazer parte desses momentos e celebrar novas histórias que começam ao volante.</p><div className="mt-10"><ApprovedGallery /></div><div className="mt-10"><ContactCta label="Quero começar minha história" /></div></section></>;
}

export function ContactPage() {
  return <><PageIntro title="Contato" headline="Estamos prontos para ajudar você a dar o próximo passo." intro="Quer começar sua primeira habilitação, mudar de categoria ou conhecer nossos serviços? Preencha o formulário e nossa equipe entrará em contato para orientar você." /><section className="container-site py-16"><p className="mb-5 text-muted-foreground">Prefere conversar diretamente? Escolha uma de nossas três unidades e fale pelo WhatsApp.</p><ContactCta /><div className="mt-8"><div className="max-w-3xl"><LeadForm /></div></div><div className="mt-12"><UnitsList /></div><div className="mt-10"><Button variant="link" asChild><Link to="/politica-de-privacidade">Consultar Política de Privacidade</Link></Button></div></section></>;
}

export function PrivacyPage() {
  const { open } = useUnitSelector();
  return <><PageIntro title="Política de Privacidade" intro="Informações sobre dados e canais de atendimento." /><section className="container-site py-16"><div className="max-w-3xl space-y-8"><div><h2 className="text-2xl font-bold">1. Informações e atendimento</h2><p className="mt-3 leading-relaxed text-muted-foreground">O site apresenta informações sobre a Autoescola Abdon e permite acessar o WhatsApp das unidades. Ao iniciar atendimento pelo WhatsApp, você decide quais informações compartilhar com a equipe.</p></div><div><h2 className="text-2xl font-bold">2. Formulário de contato</h2><p className="mt-3 leading-relaxed text-muted-foreground">Com sua autorização, o formulário coleta nome, WhatsApp, serviço, unidade, e-mail e mensagem opcionais para atender sua solicitação. Também registra data, página de origem e parâmetros de campanha disponíveis. Os contatos são armazenados no Lovable Cloud, sem acesso público de leitura, alteração ou exclusão.</p></div><div><h2 className="text-2xl font-bold">3. Serviços externos</h2><p className="mt-3 leading-relaxed text-muted-foreground">Os mapas são fornecidos pelo Google e os links de atendimento abrem o WhatsApp. Esses serviços podem tratar dados conforme suas próprias políticas de privacidade. Fontes e imagens também podem ser carregadas de serviços externos.</p></div><div><h2 className="text-2xl font-bold">4. Seus direitos</h2><p className="mt-3 leading-relaxed text-muted-foreground">A legislação brasileira de proteção de dados prevê direitos relativos ao tratamento de informações pessoais, como acesso, correção e eliminação nas hipóteses aplicáveis. Para encaminhar uma solicitação à Abdon, entre em contato com uma unidade.</p></div><Button variant="brand" size="xl" onClick={() => open()}>Contato sobre privacidade</Button></div></section></>;
}