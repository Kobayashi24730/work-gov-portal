import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/noticias")({
  component: Noticias,
  head: () => ({ meta: [{ title: "Notícias — Work Gov Portal" }, { name: "description", content: "Notícias e comunicados oficiais do Ministério do Trabalho." }] }),
});

const news = [
  { d: "20 Mai 2026", cat: "Qualificação", t: "Programa Nacional de Qualificação amplia vagas em 12 estados", c: "Iniciativa beneficiará mais de 200 mil trabalhadores em 2026, com foco em tecnologia e indústria verde." },
  { d: "14 Mai 2026", cat: "Tecnologia", t: "Nova versão da Carteira de Trabalho Digital traz biometria", c: "Atualização reforça segurança e simplifica autenticação no aplicativo oficial." },
  { d: "02 Mai 2026", cat: "Gestão", t: "Acordo coletivo reduz tempo de análise de benefícios em 40%", c: "Modernização dos processos internos acelera concessão de seguro-desemprego." },
  { d: "28 Abr 2026", cat: "Direitos", t: "Campanha nacional reforça combate ao trabalho análogo à escravidão", c: "Mais de 300 ações conjuntas com Ministério Público e auditores fiscais." },
  { d: "15 Abr 2026", cat: "Eventos", t: "Conferência Nacional do Trabalho reúne 5 mil delegados em Brasília", c: "Encontro discute o futuro das relações de trabalho e a transição digital." },
];

function Noticias() {
  return (
    <PageShell>
      <PageHero eyebrow="Sala de Imprensa" title="Notícias & Comunicados" description="Acompanhe os principais acontecimentos, ações e decisões do Ministério do Trabalho." />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="divide-y divide-border">
          {news.map((n) => (
            <article key={n.t} className="group grid gap-6 py-10 md:grid-cols-[160px_1fr]">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{n.d}</div>
                <div className="mt-2 inline-block bg-accent px-2 py-1 text-[11px] uppercase tracking-wider text-accent-foreground">{n.cat}</div>
              </div>
              <div>
                <h2 className="font-display text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">{n.t}</h2>
                <p className="mt-3 text-muted-foreground">{n.c}</p>
                <div className="mt-4 text-sm font-medium text-primary">Ler matéria completa →</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
