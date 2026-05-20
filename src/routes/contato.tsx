import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({ meta: [{ title: "Contato — Work Gov Portal" }, { name: "description", content: "Canais de atendimento e contato do Ministério do Trabalho." }] }),
});

function Contato() {
  return (
    <PageShell>
      <PageHero eyebrow="Fale Conosco" title="Estamos prontos para atender." description="Escolha o canal mais conveniente ou envie sua mensagem pelo formulário oficial." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          {[
            { t: "Central Telefônica", v: "0800 000 0000", s: "Seg. à Sex. — 8h às 20h" },
            { t: "E-mail Institucional", v: "contato@workgov.br", s: "Resposta em até 48h úteis" },
            { t: "Ouvidoria", v: "ouvidoria@workgov.br", s: "Sigilo garantido por lei" },
            { t: "Sede", v: "Esplanada dos Ministérios, Bloco T", s: "Brasília — DF · CEP 70000-000" },
          ].map((c) => (
            <div key={c.t} className="border-l-2 border-gold pl-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.t}</div>
              <div className="mt-1 font-display text-2xl text-foreground">{c.v}</div>
              <div className="text-sm text-muted-foreground">{c.s}</div>
            </div>
          ))}
        </div>

        <form className="border border-border bg-card p-8">
          <div className="font-display text-2xl text-foreground">Envie uma mensagem</div>
          <p className="mt-1 text-sm text-muted-foreground">Os campos com * são obrigatórios.</p>
          <div className="mt-6 grid gap-5">
            <Field label="Nome completo *"><input className="input" /></Field>
            <Field label="E-mail *"><input type="email" className="input" /></Field>
            <Field label="Assunto"><input className="input" /></Field>
            <Field label="Mensagem *"><textarea rows={5} className="input resize-none" /></Field>
            <button type="button" className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Enviar mensagem
            </button>
          </div>
        </form>
      </section>
      <style>{`.input{width:100%;border:1px solid var(--border);background:var(--background);padding:.7rem .85rem;font-size:.9rem;color:var(--foreground);border-radius:2px;outline:none;transition:border-color .15s}.input:focus{border-color:var(--gold)}`}</style>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
