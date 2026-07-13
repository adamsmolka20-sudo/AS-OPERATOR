# AS Operator — Project Roadmap

This is a personal, long-term project with no external deadline. Phases are
sequenced by dependency, not by date. Each phase should end with something
reviewable, and no UI/visual work begins until the phase before it is
explicitly approved.

## Phase 0 — Foundation (current)

- [x] Convert the repository into a Next.js 15 + TypeScript + App Router project.
- [x] Install and configure Tailwind CSS, shadcn/ui, Framer Motion,
      React Three Fiber, @react-three/drei, Lucide React.
- [x] Establish scalable folder architecture (`components/{ui,layout,sections,three,motion}`,
      `hooks`, `lib`, `types`, `config`).
- [x] Write foundational docs (this set).
- [ ] Confirm typeface choice and load it via `next/font`.

**Exit criteria:** `pnpm dev` runs a clean, unstyled scaffold with no leftover
template boilerplate; all docs reviewed and approved.

## Phase 1 — Design system foundation

- Define Tailwind theme tokens (color, spacing, radius, shadow, type scale)
  matching [DESIGN_BIBLE.md](./DESIGN_BIBLE.md).
- Establish the glass-panel primitive (backdrop-blur surface + hairline
  border + soft shadow) as a reusable pattern.
- Build the small set of shared motion primitives in `components/motion`
  (reveal, stagger, reduced-motion variants).
- Pull in and restyle the first handful of shadcn/ui primitives actually
  needed (button, sheet/dialog, etc.) — only as real usage demands them.

**Exit criteria:** a token/style reference (Storybook, a `/design-system`
route, or similar) that can be visually reviewed before it's used in real
sections.

## Phase 2 — 3D hero

- Prototype the R3F scene: lighting rig, glass/holographic materials, the
  abstract "AS" monogram geometry.
- Implement pointer-reactive camera/scene movement.
- Build the loading/fallback path (static gradient placeholder,
  reduced-motion path, low-power fallback).
- Performance-tune against the budget in the Design Bible.

**Exit criteria:** the hero runs smoothly standalone, reviewed against the
creative direction before being wired into the homepage layout.

## Phase 3 — Core content sections

- Compose the homepage from `components/sections` using the design system
  and 3D hero from Phases 1–2.
- Build out any additional routes needed (about/work/contact — scope to be
  defined when this phase starts).

**Exit criteria:** a reviewable, navigable site on real content (even if
placeholder copy).

## Phase 4 — Polish & hardening

- Accessibility pass (contrast, keyboard nav, reduced-motion, screen reader
  labeling for the 3D hero's fallback).
- Performance pass (Core Web Vitals, bundle size, 3D asset budget).
- Cross-browser/device QA, including low-power devices for the hero fallback.
- SEO/metadata, OpenGraph, favicon/app icons.

**Exit criteria:** production-ready build with no known regressions.

## Phase 5 — Launch & iterate

- Deploy (target platform TBD — likely Vercel given Next.js).
- Set up basic analytics/monitoring appropriate for a personal site.
- Ongoing: revisit sections, swap content, extend the 3D scene as the
  project evolves. This phase never formally "ends."

## Working agreements

- No phase's UI work starts without explicit approval of the phase before it.
- Architectural or dependency changes (new major library, restructuring
  folders, etc.) get called out and explained before being executed, per
  [PROMPT_RULES.md](./PROMPT_RULES.md).
- This roadmap is expected to change — update it when scope or sequencing
  changes rather than letting it go stale.
