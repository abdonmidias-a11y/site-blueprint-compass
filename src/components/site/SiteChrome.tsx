import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-abdon.png.asset.json";
import { SERVICES, UNITS, formatPhone, unitAddress, whatsappUrl } from "@/lib/site-data";
import { useUnitSelector } from "./UnitSelector";

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/unidades", label: "Unidades" },
  { to: "/alunos-aprovados", label: "Aprovados" },
  { to: "/contato", label: "Contato" },
] as const;

export function TopBar() {
  return (
    <div className="bg-ink text-ink-foreground">
      <div className="container-site flex h-10 items-center gap-6 overflow-x-auto text-xs whitespace-nowrap">
        <span className="hidden font-semibold text-secondary md:inline">3 unidades em São Luís:</span>
        {UNITS.map((u) => (
          <a
            key={u.id}
            href={whatsappUrl(u)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 opacity-85 transition-opacity hover:opacity-100"
          >
            <MapPin className="h-3.5 w-3.5 text-secondary" />
            <span className="font-semibold">{u.name}</span>
            <span className="hidden lg:inline opacity-70">{formatPhone(u.whatsapp)}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const { open } = useUnitSelector();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-primary text-primary-foreground transition-shadow ${scrolled ? "shadow-lift" : ""}`}>
      <div className="container-site grid h-20 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Autoescola Abdon — início">
          <img src={logo.url} alt="Autoescola Abdon" className="h-16 w-16 rounded-lg object-contain" />
        </Link>
        <nav className="hidden justify-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm font-semibold opacity-85 transition hover:bg-primary-foreground/10 hover:opacity-100 data-[status=active]:bg-primary-foreground/15 data-[status=active]:opacity-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="col-start-3 flex items-center gap-2">
          <Button variant="cta" size="lg" className="hidden sm:inline-flex" onClick={() => open()}>
            <MessageCircle /> Fale conosco
          </Button>
          <button
            className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 lg:hidden"
            onClick={() => setMenu((m) => !m)}
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
          >
            {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menu && (
        <nav className="border-t border-primary-foreground/15 bg-primary-deep lg:hidden" aria-label="Menu móvel">
          <div className="container-site flex flex-col py-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setMenu(false)} className="rounded-xl px-3 py-3 font-semibold hover:bg-primary-foreground/10">
                {n.label}
              </Link>
            ))}
            <Button variant="cta" size="xl" className="mt-3" onClick={() => { setMenu(false); open(); }}>
              <MessageCircle /> Fale conosco
            </Button>
          </div>
        </nav>
      )}
      <div className="h-1.5 stripes" />
    </header>
  );
}

export function FloatingWhatsApp() {
  const { open } = useUnitSelector();
  return (
    <button
      onClick={() => open()}
      className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-4 font-bold text-whatsapp-foreground shadow-lift animate-pulse-ring transition-transform hover:scale-105 sm:px-5"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">Posso ajudar?</span>
    </button>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="h-2 stripes" />
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo.url} alt="Autoescola Abdon" className="h-24 w-24 rounded-xl" />
          <p className="mt-4 font-display text-lg font-bold text-secondary">A mais completa do Maranhão</p>
          <p className="mt-3 text-sm opacity-60">Redes sociais: aguardando links oficiais.</p>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-secondary uppercase">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="opacity-75 hover:opacity-100">{n.label}</Link></li>
            ))}
            <li><Link to="/politica-de-privacidade" className="opacity-75 hover:opacity-100">Política de Privacidade</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-secondary uppercase">Serviços</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/servicos/$slug" params={{ slug: s.slug }} className="opacity-75 hover:opacity-100">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-secondary uppercase">Unidades</h3>
          <ul className="mt-4 space-y-4 text-sm">
            {UNITS.map((u) => (
              <li key={u.id}>
                <p className="font-semibold">{u.name}</p>
                <p className="opacity-60">{unitAddress(u)}</p>
                <a href={whatsappUrl(u)} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  WhatsApp {formatPhone(u.whatsapp)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-site py-5 text-xs opacity-50">
          © {new Date().getFullYear()} Autoescola Abdon. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
