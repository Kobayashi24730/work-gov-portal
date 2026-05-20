import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="border-b border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <span className="opacity-80">Portal Oficial · Governo do Trabalho</span>
          <span className="hidden sm:inline opacity-70">Atendimento: 0800 000 0000</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-sm bg-primary text-primary-foreground font-display text-lg">
            W
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg text-foreground">Work Gov Portal</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Ministério do Trabalho
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground border-b-2 border-gold" }}
              className="pb-1 text-muted-foreground transition-colors hover:text-foreground"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contato"
          className="hidden md:inline-flex items-center rounded-sm bg-gold px-4 py-2 text-sm font-medium text-gold-foreground transition-opacity hover:opacity-90"
        >
          Acesso do Cidadão
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="font-display text-xl">Work Gov Portal</div>
          <p className="mt-3 text-sm opacity-75">
            Portal institucional dedicado à promoção do trabalho digno, segurança e oportunidades para todos os cidadãos.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] opacity-60">Institucional</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link to="/sobre">Sobre o Ministério</Link></li>
            <li><Link to="/noticias">Notícias</Link></li>
            <li><Link to="/servicos">Carta de Serviços</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] opacity-60">Atendimento</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>Central: 0800 000 0000</li>
            <li>contato@workgov.br</li>
            <li>Seg. à Sex. — 8h às 18h</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] opacity-60">Endereço</div>
          <p className="mt-3 text-sm opacity-90">
            Esplanada dos Ministérios<br />Bloco T, Brasília — DF<br />CEP 70000-000
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-xs opacity-70">
          <span>© {new Date().getFullYear()} Work Gov Portal. Todos os direitos reservados.</span>
          <span>Acessibilidade · Privacidade · Mapa do site</span>
        </div>
      </div>
    </footer>
  );
}
