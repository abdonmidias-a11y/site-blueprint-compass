import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ImageIcon, MapPin, MessageCircle, Navigation } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PendingNote, SectionHeading } from "./Section";
import { useUnitSelector } from "./UnitSelector";
import { SERVICES, SERVICE_DETAILS, UNITS, formatPhone, mapsQuery, unitAddress, type Service } from "@/lib/site-data";
import { LeadForm } from "./LeadForm";
import logo from "@/assets/logo-abdon.png.asset.json";

export function ContactCta({ service }: { service?: string }) {
  const { open } = useUnitSelector();
  return <Button variant="cta" size="xl" onClick={() => open(service)}><MessageCircle /> Falar com uma unidade</Button>;
}

function PageIntro({ title, intro, eyebrow = "Autoescola Abdon" }: { title: string; intro: string; eyebrow?: string }) {
  return <section className="bg-primary text-primary-foreground"><div className="container-site py-14 sm:py-20"><p className="mb-6 text-sm opacity-80"><Link to="/">Início</Link> / {title}</p><SectionHeading eyebrow={eyebrow} title={title} intro={intro} light /></div></section>;
}

export function ServiceDetail({ service }: { service: Service }) {
  const details = SERVICE_DETAILS[service.slug];
  if (!details) return null;
  return <>
    <PageIntro title={service.title} intro={service.short} eyebrow="Nossos serviços" />
    <section className="container-site py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-10">
          <div><h2 className="text-3xl font-bold">Sobre o serviço</h2><p className="mt-4 text-lg leading-relaxed text-muted-foreground">{details.description}</p></div>
          <div><h2 className="text-2xl font-bold">Para quem é</h2><p className="mt-3 text-muted-foreground">{details.audience}</p></div>
          <div><h2 className="text-2xl font-bold">O que você pode esclarecer</h2><ul className="mt-4 space-y-3">{details.benefits.map((b) => <li key={b} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{b}</li>)}</ul></div>
          <div><h2 className="text-2xl font-bold">Como iniciar</h2><ol className="mt-5 space-y-5">{["Escolha uma unidade da Abdon.", "Informe seu interesse e tire suas dúvidas com a equipe.", "Confirme requisitos, documentos, disponibilidade e condições antes de contratar."].map((s, i) => <li key={s} className="flex items-start gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary font-bold text-secondary-foreground">{i + 1}</span><p className="pt-1">{s}</p></li>)}</ol></div>
          <PendingNote>Conteúdo informativo provisório. Modalidades, preços, prazos e documentos específicos dependem de confirmação da Abdon e das regras vigentes.</PendingNote>
        </div>
        <aside className="min-w-0 border-l border-border lg:pl-8"><div className="space-y-6 lg:sticky lg:top-28"><h2 className="text-2xl font-bold">Vamos conversar?</h2><p className="text-muted-foreground">Selecione a unidade para consultar {service.title.toLowerCase()}.</p><ContactCta service={service.title} /><div className="border-t pt-6"><p className="mb-4 font-bold">Outros serviços</p><ul className="space-y-3">{SERVICES.filter((s) => s.slug !== service.slug).map((s) => <li key={s.slug}><Link className="inline-flex items-center gap-2 text-sm text-primary hover:underline" to="/servicos/$slug" params={{ slug: s.slug }}>{s.title}<ArrowRight className="h-4 w-4 shrink-0" /></Link></li>)}</ul></div></div></aside>
      </div>
      <div className="mt-14 max-w-3xl border-t pt-10"><h2 className="mb-6 text-2xl font-bold">Solicitar contato</h2><LeadForm key={service.slug} service={service.title} /></div>
    </section>
  </>;
}

export function ServicesDirectory() {
  return <><PageIntro title="Nossos serviços" intro="Encontre o serviço de interesse e consulte uma das três unidades." /><section className="container-site py-16"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.map((s) => <Link key={s.slug} to="/servicos/$slug" params={{ slug: s.slug }} className="group flex flex-col rounded-3xl border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"><h2 className="text-2xl font-bold">{s.title}</h2><p className="mt-3 flex-1 text-muted-foreground">{s.short}</p><span className="mt-6 inline-flex items-center gap-2 font-bold text-primary">Conhecer serviço <ArrowRight className="h-4 w-4" /></span></Link>)}</div></section></>;
}

export function UnitsList() {
  const { open } = useUnitSelector();
  return <div className="grid gap-6 lg:grid-cols-3">{UNITS.map((u) => <article key={u.id} className="flex min-w-0 flex-col overflow-hidden rounded-3xl border bg-card shadow-card"><iframe title={`Mapa da unidade ${u.name}`} src={`https://maps.google.com/maps?q=${mapsQuery(u)}&output=embed`} className="h-52 w-full border-0" loading="lazy" /><div className="flex flex-1 flex-col p-6"><h2 className="text-2xl font-bold">{u.name}</h2><p className="mt-4 flex gap-2 text-sm leading-relaxed text-muted-foreground"><MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />{unitAddress(u)}</p><p className="mt-3 text-sm font-semibold">WhatsApp: {formatPhone(u.whatsapp)}</p><div className="mt-auto grid gap-3 pt-6"><Button variant="whatsapp" size="xl" onClick={() => open()}><MessageCircle /> Atendimento no WhatsApp</Button><Button variant="outline" size="lg" className="rounded-full" asChild><a href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery(u)}`} target="_blank" rel="noopener noreferrer"><Navigation /> Como chegar</a></Button></div></div></article>)}</div>;
}

export function UnitsPage() {
  return <><PageIntro title="Nossas unidades" intro="São Francisco, Vila Palmeira e Renascença. Escolha onde deseja ser atendido em São Luís/MA." /><section className="container-site py-16"><UnitsList /></section></>;
}

export function AboutPage() {
  return <><PageIntro title="Sobre a Abdon" intro="A mais completa do Maranhão." /><section className="container-site py-16"><div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_280px]"><div><h2 className="text-3xl font-bold">Autoescola Abdon em São Luís</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">A Autoescola Abdon possui três unidades em São Luís/MA: São Francisco, Vila Palmeira e Renascença. Este site reúne os serviços e os canais de atendimento para ajudar você a encontrar a unidade de sua preferência.</p><p className="mt-4 text-muted-foreground">Para informações sobre habilitação, disponibilidade ou condições de atendimento, converse diretamente com a equipe.</p><div className="mt-7"><ContactCta /></div></div><img className="w-full rounded-3xl" src={logo.url} alt="Autoescola Abdon — A mais completa do Maranhão" /></div><div className="mt-14"><PendingNote>Texto institucional provisório. História, equipe, estrutura e fotos oficiais aguardam informações da Autoescola Abdon.</PendingNote></div><div className="mt-14"><SectionHeading eyebrow="Perto de você" title="Conheça nossas unidades" /><div className="mt-8"><UnitsList /></div></div></section></>;
}

export function ApprovedPage() {
  const [unit, setUnit] = useState("Todas");
  return <><PageIntro title="Alunos aprovados" intro="Um espaço para as conquistas dos alunos da Autoescola Abdon." /><section className="container-site py-16"><div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por unidade">{["Todas", ...UNITS.map((u) => u.name)].map((name) => <Button key={name} variant={unit === name ? "brand" : "outline"} className="rounded-full" aria-pressed={unit === name} onClick={() => setUnit(name)}>{name}</Button>)}</div><div className="py-16 text-center"><ImageIcon className="mx-auto h-12 w-12 text-primary" /><h2 className="mt-5 text-2xl font-bold">Ainda não há fotos publicadas{unit === "Todas" ? "" : ` de ${unit}`}.</h2><p className="mx-auto mt-4 max-w-xl text-muted-foreground">A galeria receberá fotografias reais dos alunos, com autorização de publicação. Não utilizamos imagens fictícias para representar aprovados.</p></div><div className="border-t pt-10"><ContactCta /></div></section></>;
}

export function ContactPage() {
  return <><PageIntro title="Contato" intro="Escolha uma unidade para conversar com a equipe da Autoescola Abdon." /><section className="container-site py-16"><ContactCta /><div className="mt-8"><div className="max-w-3xl"><LeadForm /></div></div><div className="mt-12"><UnitsList /></div><div className="mt-10"><Button variant="link" asChild><Link to="/politica-de-privacidade">Consultar Política de Privacidade</Link></Button></div></section></>;
}

export function PrivacyPage() {
  const { open } = useUnitSelector();
  return <><PageIntro title="Política de Privacidade" intro="Informações sobre dados e canais de atendimento." /><section className="container-site py-16"><div className="max-w-3xl space-y-8"><PendingNote>Texto provisório para revisão e aprovação da Autoescola Abdon. Dados do responsável, contato de privacidade e critérios de retenção ainda precisam de confirmação.</PendingNote><div><h2 className="text-2xl font-bold">1. Informações e atendimento</h2><p className="mt-3 leading-relaxed text-muted-foreground">O site apresenta informações sobre a Autoescola Abdon e permite acessar o WhatsApp das unidades. Ao iniciar atendimento pelo WhatsApp, você decide quais informações compartilhar com a equipe.</p></div><div><h2 className="text-2xl font-bold">2. Formulário de contato</h2><p className="mt-3 leading-relaxed text-muted-foreground">Com sua autorização, o formulário coleta nome, WhatsApp, serviço, unidade, e-mail e mensagem opcionais para atender sua solicitação. Também registra data, página de origem e parâmetros de campanha disponíveis. Os contatos são armazenados no Lovable Cloud, sem acesso público de leitura, alteração ou exclusão. Os critérios de retenção e o responsável pelo tratamento aguardam confirmação da Abdon.</p></div><div><h2 className="text-2xl font-bold">3. Serviços externos</h2><p className="mt-3 leading-relaxed text-muted-foreground">Os mapas são fornecidos pelo Google e os links de atendimento abrem o WhatsApp. Esses serviços podem tratar dados conforme suas próprias políticas de privacidade. Fontes e imagens também podem ser carregadas de serviços externos.</p></div><div><h2 className="text-2xl font-bold">4. Seus direitos</h2><p className="mt-3 leading-relaxed text-muted-foreground">A legislação brasileira de proteção de dados prevê direitos relativos ao tratamento de informações pessoais, como acesso, correção e eliminação nas hipóteses aplicáveis. Para encaminhar uma solicitação à Abdon, entre em contato com uma unidade.</p></div><Button variant="brand" size="xl" onClick={() => open()}>Contato sobre privacidade</Button></div></section></>;
}