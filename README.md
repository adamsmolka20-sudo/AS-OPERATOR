# AS Operator

Adam Smolka's single-page site for his creator-monetization service. See
[docs/VISION.md](./docs/VISION.md) for the full rationale.

## Stack

- [Next.js 15](https://nextjs.org) — App Router, TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://motion.dev)
- [Lucide React](https://lucide.dev)
- Package manager: [pnpm](https://pnpm.io)

`three` / `@react-three/*` remain installed from an earlier direction but
are currently unused — see VISION.md's version note.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project docs

| Doc | Purpose |
|---|---|
| [docs/VISION.md](./docs/VISION.md) | Why this project exists and what it's for |
| [docs/DESIGN_BIBLE.md](./docs/DESIGN_BIBLE.md) | Visual identity and interaction language |
| [docs/PROJECT_ROADMAP.md](./docs/PROJECT_ROADMAP.md) | Phased build plan |
| [docs/COMPONENT_GUIDELINES.md](./docs/COMPONENT_GUIDELINES.md) | Code/component conventions |
| [docs/PROMPT_RULES.md](./docs/PROMPT_RULES.md) | Rules for AI-assisted work on this repo |

## Folder structure

```
src/
  app/                # routes (App Router)
  components/
    ui/                # shadcn/ui primitives
    layout/            # footer, sticky CTA, page shell
    sections/          # composed page sections (Hero, FAQ, Contact, ...)
    motion/            # Framer Motion primitives, AmbientBackground
  hooks/               # shared React hooks
  lib/                 # framework-agnostic helpers, site-config.ts
  types/               # shared TypeScript types
docs/                  # project documentation (see table above)
```
