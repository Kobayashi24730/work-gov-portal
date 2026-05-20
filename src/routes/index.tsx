import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Work Gov Portal — Ministério do Trabalho" },
      { name: "description", content: "Portal institucional do Ministério do Trabalho. Serviços, notícias e atendimento ao cidadão." },
    ],
  }),
});

const services = [
  { title: "Carteira de Trabalho Digital", desc: "Emita e consulte sua CTPS digital com poucos cliques.", tag: "Documentos" },
  { title: "Seguro-Desemprego", desc: "Solicite o benefício e acompanhe o andamento do processo.", tag: "Benefícios" },
  { title: "FGTS", desc: "Consulte saldo, extrato e modalidades de saque disponíveis.", tag: "Financeiro" },
  { title: "Intermediação de Emprego", desc: "Vagas, qualificação profissional e oportunidades regionais.", tag: "Emprego" },
];

const stats = [
  { v: "12,4M", l: "Trabalhadores atendidos em 2025" },
  { v: "1.872", l: "Postos de atendimento no país" },
  { v: "98%", l: "Satisfação no atendimento digital" },
  { v: "24/7", l: "Serviços online disponíveis" },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-primary md:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-28">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Portal Oficial · Gov.BR</div>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
              Trabalho digno, <span className="italic">direitos garantidos</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              O Work Gov Portal reúne os principais serviços, notícias e canais de atendimento do
              Ministério do Trabalho em um só lugar, com transparência e acessibilidade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/servicos" className="inline-flex items-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Acessar Serviços
              </Link>
              <Link to="/sobre" className="inline-flex items-center rounded-sm border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Sobre o Ministério
              </Link>
            </div>
          </div>
          <div className="relative md:pl-10">
            <div className="relative rounded-sm border border-white/10 bg-primary/95 p-8 text-primary-foreground shadow-2xl md:translate-y-4">
              <div className="text-xs uppercase tracking-[0.2em] opacity-70">Atendimento prioritário</div>
              <div className="mt-4 font-display text-3xl">Fale com o cidadão</div>
              <p className="mt-3 text-sm opacity-80">
                Suporte humano e digital para resolver suas dúvidas sobre trabalho, benefícios e direitos.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 text-sm">
                <div>
                  <div className="opacity-60 text-xs uppercase tracking-wider">Central</div>
                  <div className="mt-1 font-display text-lg">0800 000 0000</div>
                </div>
                <div>
                  <div className="opacity-60 text-xs uppercase tracking-wider">E-mail</div>
                  <div className="mt-1">contato@workgov.br</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8">
              <div className="font-display text-4xl text-foreground">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Serviços em destaque</div>
            <h2 className="mt-3 font-display text-4xl text-foreground">O que você precisa, hoje.</h2>
          </div>
          <Link to="/servicos" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">
            Ver todos →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="group flex h-full flex-col justify-between border border-border bg-card p-6 transition-colors hover:border-gold">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-gold">{s.tag}</div>
                <h3 className="mt-3 font-display text-xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <div className="mt-8 text-sm font-medium text-primary group-hover:underline">Acessar →</div>
            </article>
          ))}
        </div>
      </section>

      {/* News teaser */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Comunicação</div>
          <h2 className="mt-3 font-display text-4xl text-foreground">Últimas notícias</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { d: "20 Mai 2026", t: "Programa Nacional de Qualificação amplia vagas em 12 estados", c: "Iniciativa beneficiará mais de 200 mil trabalhadores em 2026." },
              { d: "14 Mai 2026", t: "Nova versão da Carteira de Trabalho Digital traz biometria", c: "Atualização reforça segurança e simplifica autenticação." },
              { d: "02 Mai 2026", t: "Acordo coletivo reduz tempo de análise de benefícios em 40%", c: "Resultado da modernização dos processos internos do Ministério." },
            ].map((n) => (
              <article key={n.t} className="border-t border-foreground/20 pt-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{n.d}</div>
                <h3 className="mt-3 font-display text-xl text-foreground">{n.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
