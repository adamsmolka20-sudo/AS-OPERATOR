# AS Operator — Project Roadmap

> **Version note:** rewritten to match the pivot documented in VISION.md
> (v3) — AS Operator is now a real single-page business site, not the
> earlier abstract/3D-hero showcase. Phases below reflect that.

Phases are sequenced by dependency, not by date. Each phase should end with
something reviewable.

## Phase 0 — Foundation

- [x] Convert the repository into a Next.js 15 + TypeScript + App Router project.
- [x] Install and configure Tailwind CSS, shadcn/ui, Framer Motion, Lucide React.
- [x] Establish scalable folder architecture.
- [x] Write foundational docs.

## Phase 1 — Design system + content pivot (current)

- [x] Rewrite VISION.md and DESIGN_BIBLE.md for the real business-site direction.
- [ ] Wire the charcoal/gold token system into `globals.css`.
- [ ] Add the shadcn primitives the site actually needs (button, input,
      label, textarea, accordion).
- [ ] Centralize site copy/links in `lib/site-config.ts`.

**Exit criteria:** design tokens and shared primitives in place, ready for
real sections to be built on top of them.

## Phase 2 — Build the single-page site

Build every section in order, per [DESIGN_BIBLE.md](./DESIGN_BIBLE.md) and
the approved content brief:

- [ ] AmbientBackground (drifting gold glow + particles, behind the whole scroll)
- [ ] Hero (headline, subtext, primary CTA, "See How It Works" anchor link)
- [ ] What I Do (four service offerings)
- [ ] How It Works (You / Me / Together narrative, with a CTA)
- [ ] Who This Is For / Who This Is Not For
- [ ] FAQ (accordion)
- [ ] Contact (form + Calendly CTA)
- [ ] Footer + floating "Book a Call" button

**Exit criteria:** a complete, reviewable single-page site on real content
(no placeholder copy — this brief already specifies the actual copy),
responsive on mobile, every CTA linking to the real Calendly URL.

## Phase 3 — Polish & hardening

- Accessibility pass (contrast against the ambient background, keyboard nav
  through the form and FAQ accordion, reduced-motion path).
- Performance pass (Core Web Vitals, ambient background cost).
- Cross-browser/device QA.
- SEO/metadata, OpenGraph, favicon.

**Exit criteria:** production-ready build with no known regressions.

## Phase 4 — Launch & iterate

- Deploy (Vercel).
- Wire the contact form to a real destination beyond `mailto:` if needed
  (e.g. a form service or serverless function) — flagged as a known gap
  from Phase 2's initial implementation.
- Ongoing: revisit copy and sections as the offer evolves.

## Working agreements

- Architectural or dependency changes get called out and explained before
  being executed, per [PROMPT_RULES.md](./PROMPT_RULES.md).
- This roadmap is expected to change — update it when scope or sequencing
  changes rather than letting it go stale.
