import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
  head: () => ({ meta: [{ title: "Serviços — Work Gov Portal" }, { name: "description", content: "Carta de serviços do Ministério do Trabalho." }] }),
});

const groups = [
  {
    cat: "Documentos",
    items: ["Carteira de Trabalho Digital", "Certidão de Regularidade", "PIS/Pasep"],
  },
  {
    cat: "Benefícios",
    items: ["Seguro-Desemprego", "Abono Salarial", "Auxílio Inclusão"],
  },
  {
    cat: "Empregabilidade",
    items: ["Intermediação de Mão de Obra", "Qualificação Profissional", "Empreender+"],
  },
  {
    cat: "Fiscalização",
    items: ["Denúncia Trabalhista", "Auditoria do Trabalho", "Segurança no Trabalho"],
  },
];

function Servicos() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Carta de Serviços"
        title="Todos os serviços, organizados para você."
        description="Acesse rapidamente os serviços do Ministério do Trabalho por categoria. Atendimento 100% digital, com suporte humano disponível."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.cat} className="border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-gold">{g.cat}</div>
              <ul className="mt-5 divide-y divide-border">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center justify-between py-4">
                    <span className="font-display text-lg text-foreground">{i}</span>
                    <span className="text-sm text-primary">Acessar →</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
