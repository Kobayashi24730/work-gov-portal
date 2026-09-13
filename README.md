# Work Gov Portal

Portal institucional **fictício** do Ministério do Trabalho, construído como uma aplicação web moderna com **TanStack Start**, **React 19**, **TypeScript** e **Tailwind CSS v4**, e implantado em **Cloudflare Workers**.

> **Aviso:** este projeto é uma demonstração / referência de UI e arquitetura. Ele **não é** um site oficial do governo, e nenhum dado exibido (estatísticas, telefones, e-mails) representa informação real de qualquer órgão público. O visual segue o padrão "Gov.BR" apenas como inspiração de estilo.

---

## Sumário

- [Visão geral](#visão-geral)
- [Stack](#stack)
- [Rotas](#rotas)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts](#scripts)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Deploy no Cloudflare Workers](#deploy-no-cloudflare-workers)
- [Padrões de código](#padrões-de-código)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## Visão geral

O Work Gov Portal simula um portal público de serviços ao trabalhador, com:

- **Hero institucional** com chamada para serviços e canal de atendimento.
- **Carta de Serviços** agrupada em Documentos, Benefícios, Empregabilidade e Fiscalização (Carteira de Trabalho Digital, Seguro-Desemprego, FGTS, PIS/Pasep, Denúncia Trabalhista, etc.).
- **Notícias**, **Sobre o Ministério** e **Contato**.
- Layout responsivo, tipografia serifada de display e paleta institucional (azul + dourado).
- Renderização com SSR/edge via **TanStack Start** rodando em **Cloudflare Workers**.

---

## Stack

| Camada             | Tecnologia                                                   |
|--------------------|--------------------------------------------------------------|
| Framework          | TanStack Start (SSR/edge)                                    |
| Roteamento         | TanStack Router (file-based, `src/routes`)                   |
| Data fetching      | TanStack Query                                               |
| UI                 | React 19, TypeScript 5.8                                     |
| Bundler / Dev      | Vite 7                                                       |
| Estilo             | Tailwind CSS v4 (`@tailwindcss/vite`), `tw-animate-css`      |
| Componentes        | shadcn/ui sobre Radix UI, `class-variance-authority`, `clsx` |
| Ícones             | lucide-react                                                 |
| Formulários        | react-hook-form + zod (`@hookform/resolvers`)                |
| Datas              | date-fns, react-day-picker                                   |
| Gráficos           | recharts                                                     |
| Extras             | embla-carousel, cmdk, sonner, vaul, input-otp                |
| Runtime / Deploy   | Cloudflare Workers (via `@cloudflare/vite-plugin` + Wrangler)|
| Package manager    | Bun (`bun.lock`, `bunfig.toml`) — npm/pnpm também funcionam  |
| Qualidade          | ESLint 9, Prettier 3, typescript-eslint                      |

---

## Rotas

Definidas em `src/routes/` (file-based routing do TanStack Router):

| Arquivo                | Path         | Descrição                                       |
|------------------------|--------------|-------------------------------------------------|
| `__root.tsx`           | —            | Layout raiz (header, footer, providers)         |
| `index.tsx`            | `/`          | Home institucional com hero e destaques         |
| `servicos.tsx`         | `/servicos`  | Carta de serviços organizada em categorias      |
| `noticias.tsx`         | `/noticias`  | Listagem de notícias                            |
| `sobre.tsx`            | `/sobre`     | Sobre o Ministério                              |
| `contato.tsx`          | `/contato`   | Canais de atendimento                           |
| `routeTree.gen.ts`     | —            | Arquivo **gerado** pelo plugin — não editar     |

---

## Pré-requisitos

- **Node.js 20+** ou **Bun 1.1+** (recomendado — o repositório já traz `bun.lock`).
- Conta na **Cloudflare** e **Wrangler CLI** apenas se for publicar em produção.

---

## Como rodar localmente

```bash
git clone https://github.com/Kobayashi24730/work-gov-portal.git
cd work-gov-portal

# Com Bun (recomendado)
bun install
bun run dev

# ou com npm
npm install
npm run dev
```

O Vite sobe em [http://localhost:5173](http://localhost:5173) por padrão. O `routeTree.gen.ts` é regenerado automaticamente pelo `@tanstack/router-plugin` sempre que arquivos em `src/routes/` mudam.

---

## Scripts

Definidos em `package.json`:

| Comando              | O que faz                                              |
|----------------------|--------------------------------------------------------|
| `bun run dev`        | Servidor de desenvolvimento com HMR                    |
| `bun run build`      | Build de produção                                      |
| `bun run build:dev`  | Build no modo `development` (fontes não minificadas)   |
| `bun run preview`    | Serve o build local para inspeção                      |
| `bun run lint`       | ESLint em todo o projeto                               |
| `bun run format`     | Prettier em todo o projeto                             |

> Substitua `bun` por `npm` ou `pnpm` se preferir — os scripts são os mesmos.

---

## Estrutura do projeto

```
.
├── src/
│   ├── components/          # UI reutilizável (PageShell, PageHero, shadcn/ui)
│   ├── hooks/               # Hooks React customizados
│   ├── lib/                 # Utilitários (cn, formatters, etc.)
│   ├── routes/              # Rotas file-based do TanStack Router
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── servicos.tsx
│   │   ├── noticias.tsx
│   │   ├── sobre.tsx
│   │   └── contato.tsx
│   ├── routeTree.gen.ts     # Gerado — NÃO editar manualmente
│   ├── router.tsx           # Instanciação do router
│   ├── server.ts            # Entry do Cloudflare Worker (main do Wrangler)
│   ├── start.ts             # Entry do TanStack Start
│   └── styles.css           # Tailwind base + tokens
├── components.json          # Config do shadcn/ui
├── vite.config.ts
├── tsconfig.json
├── wrangler.jsonc           # Config do Cloudflare Workers
├── bunfig.toml
├── .prettierrc / .prettierignore
├── eslint.config.js
├── package.json
└── README.md
```

---

## Deploy no Cloudflare Workers

O `wrangler.jsonc` já vem configurado apontando `main` para `src/server.ts`:

```jsonc
{
  "name": "tanstack-start-app",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "src/server.ts"
}
```

Passos:

```bash
# 1. Autentique-se (uma vez)
npx wrangler login

# 2. Gere o bundle de produção
bun run build

# 3. Publique
npx wrangler deploy
```

Após o primeiro deploy, o Worker fica acessível em `https://<name>.<seu-subdomínio>.workers.dev`. Ajuste `name` no `wrangler.jsonc` para algo mais amigável antes de publicar.

---

## Padrões de código

- **Formatação:** Prettier (`.prettierrc`) — rode `bun run format` antes de commitar.
- **Lint:** ESLint 9 flat config com regras do `typescript-eslint`, `react-hooks` e `react-refresh`, integradas ao Prettier via `eslint-config-prettier`.
- **Path aliases:** configurados via `vite-tsconfig-paths` — use `@/components/...`, `@/lib/...`, etc.
- **Componentes shadcn/ui:** adicione novos via `npx shadcn@latest add <componente>`; o `components.json` já está configurado.

---

## Contribuindo

1. Faça um fork do repositório.
2. Crie uma branch: `git checkout -b feat/minha-feature`.
3. Commit seguindo Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`…).
4. Rode `bun run lint && bun run format` antes do push.
5. Abra um Pull Request descrevendo o que muda e por quê.

Bugs e sugestões: use a aba **[Issues](https://github.com/Kobayashi24730/work-gov-portal/issues)**.

---

## Licença

Distribuído sob a licença MIT. Veja o arquivo LICENSE para o texto completo.