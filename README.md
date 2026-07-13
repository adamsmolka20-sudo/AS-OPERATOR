# AS Operator

A personal, long-term flagship project — a premium digital operating system,
not a template or client site. See [docs/VISION.md](./docs/VISION.md) for
the full rationale.

## Stack

- [Next.js 15](https://nextjs.org) — App Router, TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://motion.dev)
- [React Three Fiber](https://r3f.docs.pmnd.rs) + [drei](https://github.com/pmndrs/drei)
- [Lucide React](https://lucide.dev)
- Package manager: [pnpm](https://pnpm.io)

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
    layout/            # header, footer, page shell
    sections/          # composed page sections
    three/              # React Three Fiber scenes
    motion/            # Framer Motion primitives
  hooks/               # shared React hooks
  lib/                 # framework-agnostic helpers
  types/               # shared TypeScript types
  config/              # site/nav/metadata config
public/
  models/              # 3D assets (.glb/.gltf)
  textures/            # texture maps / HDRIs
docs/                  # project documentation (see table above)
```
