# AS Operator — Component Guidelines

Conventions for writing components in this codebase. The goal is a small,
consistent vocabulary that stays maintainable as the project grows over
years, maintained mostly by one person working intermittently.

## Folder placement

| Folder | Contents |
|---|---|
| `components/ui` | shadcn/ui primitives (generated via the shadcn CLI). Edit these files directly when a primitive needs restyling — they're vendored source, not a library dependency. |
| `components/layout` | Structural shell: header, footer, nav, page containers. |
| `components/sections` | Composed, page-level sections built from `ui` + `motion`. |
| `components/motion` | Reusable Framer Motion wrappers/variants (including AmbientBackground). |
| `hooks` | Cross-component custom hooks. |
| `lib` | Framework-agnostic helpers/utilities (`cn`, formatting, etc.). |
| `types` | Types shared across more than one module. |
| `config` | Static config objects (nav structure, site metadata, feature flags). |

If a type, hook, or helper is only used by one component, keep it colocated
in that component's file instead of promoting it to a shared folder.

## Component structure

- Functional components only, `PascalCase` filenames matching the exported
  component name (`SiteHeader.tsx` → `SiteHeader`).
- Server Components by default. Add `"use client"` only when a component
  needs interactivity, browser APIs, or client-only hooks — and put that
  boundary as low in the tree as possible rather than marking whole pages
  client-side.
- Props are typed with an explicit `interface ComponentNameProps`, not
  inline object types, once there's more than one prop.
- No default exports for components other than Next.js route files
  (`page.tsx`, `layout.tsx`) which require them — everything else uses
  named exports for easier refactors and search.

## Styling

- Tailwind utility classes are the default. Use `cn()` from `lib/utils` to
  merge conditional classes — never string-concatenate class names.
- Any value that recurs (a spacing amount, a color, an easing curve) belongs
  in the Tailwind theme/tokens, not repeated as a magic value in components.
- Component variants (size, tone, etc.) use `class-variance-authority`
  (already a shadcn/ui dependency) rather than ad hoc conditional classNames.
- No inline `style={{}}` except for values that are genuinely dynamic/computed
  at runtime (e.g. a pointer-driven transform) and can't be expressed as a class.

## Motion

- Use the shared primitives in `components/motion` instead of writing raw
  `motion.div` variants inline in feature components.
- Every animated component needs a `prefers-reduced-motion`-respecting path;
  bake that into the shared primitives rather than handling it ad hoc per use.

## Accessibility

- Every interactive element is reachable and operable by keyboard.
- Decorative motion content (e.g. AmbientBackground) is marked
  `aria-hidden`; any information it conveys must also exist in an
  accessible, non-visual/non-motion form.
- Images/icons that carry meaning get real `alt`/labels; purely decorative
  ones are hidden from assistive tech.

## What to avoid

- No component abstractions built ahead of a second real use case —
  duplicate two or three times before extracting a shared component.
- No commented-out code, no speculative "just in case" props or config
  options that nothing currently uses.
- No default export barrels (`index.ts` re-exporting everything) unless a
  folder's public surface genuinely needs one — prefer direct imports.
