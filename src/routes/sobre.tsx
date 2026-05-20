import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({ meta: [{ title: "Sobre — Work Gov Portal" }, { name: "description", content: "Conheça a missão, valores e estrutura do Ministério do Trabalho." }] }),
});

function Sobre() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Institucional"
        title="Servir o trabalhador é a nossa missão."
        description="Há mais de 90 anos, o Ministério do Trabalho atua na promoção de oportunidades, proteção de direitos e desenvolvimento da força produtiva do país."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { t: "Missão", c: "Promover o trabalho digno, gerar oportunidades e proteger direitos dos trabalhadores brasileiros." },
            { t: "Visão", c: "Ser referência em políticas públicas de trabalho, emprego e renda na América Latina até 2030." },
            { t: "Valores", c: "Ética, transparência, eficiência, respeito à diversidade e compromisso com o cidadão." },
          ].map((b) => (
            <div key={b.t} className="border-t-2 border-gold pt-6">
              <div className="font-display text-2xl text-foreground">{b.t}</div>
              <p className="mt-3 text-muted-foreground">{b.c}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 border-t border-border pt-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-foreground">Estrutura organizacional</h2>
            <p className="mt-4 text-muted-foreground">
              A pasta é composta por secretarias temáticas, autarquias vinculadas e mais de 1.800 postos
              de atendimento distribuídos por todo o território nacional, garantindo capilaridade e
              proximidade com o cidadão.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Secretaria de Trabalho e Emprego",
              "Secretaria de Previdência Complementar",
              "Secretaria de Inspeção do Trabalho",
              "Conselho Nacional do Trabalho",
            ].map((s) => (
              <li key={s} className="flex items-center justify-between border-b border-border pb-3 font-display text-lg text-foreground">
                {s}
                <span className="text-xs uppercase tracking-wider text-gold">Órgão</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
