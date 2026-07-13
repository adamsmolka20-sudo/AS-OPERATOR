# AS Operator — Design Bible

This is the source of truth for how AS Operator looks, feels, and moves.
Anything visual — a component, a color, an animation curve — should be
traceable back to a rule in this document. If it isn't, the rule is missing
and should be added here first, not improvised in code.

## 1. Creative direction

AS Operator is a **personal digital operating system**, not a SaaS landing
page. The reference bar is Apple-level product marketing and premium
hardware/interface design — reinterpreted, never copied.

**Feels like:**
- Apple-level simplicity — nothing crowded, every element earns its place.
- A bright, premium interface: soft whites, glassmorphism, subtle gradients.
- Generous breathing room around every element.
- Premium, editorial typography.
- An interactive 3D hero built with React Three Fiber — a floating,
  transparent, holographic interface with an abstract "AS" monogram
  integrated into the scene.
- Soft orange and gold accent lighting against a light gray / white / warm
  metallic base palette.
- A scene that responds smoothly to mouse movement — cinematic, not gamey.

**Never:**
- Hacker / terminal aesthetics (no green-on-black, no monospace-everywhere).
- Cyberpunk (no neon magenta/cyan, no glitch effects, no scanlines).
- Gamer style (no RGB gradients, no aggressive angular shapes).
- Obvious robots or literal sci-fi tropes.
- Generic SaaS gradients-and-blob illustrations.

**Inspiration lane:** the *interaction quality* and production polish of
sites like 21st.dev's interactive 3D hero sections — not their specific
layouts or component library. AS Operator's scene, palette, and monogram
must be an original composition.

## 2. Color

Base palette is light-dominant, warm-neutral, with light accenting rather
than saturated blocks of color.

| Token | Role | Approx value | Notes |
|---|---|---|---|
| `--background` | Page base | `#FAFAF8` – `#FFFFFF` | Soft white, never stark `#FFF` on its own for large fields |
| `--surface` | Card / panel base | `#F4F3F0` | Warm light gray |
| `--surface-glass` | Glass panel fill | `rgba(255,255,255,0.55–0.7)` | Used with backdrop-blur, always over a background with visual variation |
| `--foreground` | Primary text | `#1C1B19` | Warm near-black, not pure `#000` |
| `--muted-foreground` | Secondary text | `#6B675F` | Warm gray |
| `--accent-gold` | Primary accent | `#D8A657` – `#E8B86D` | Soft gold, used sparingly (highlights, active states, key light) |
| `--accent-orange` | Secondary accent | `#E58A4E` | Warm ember, used only in the 3D scene's lighting/glow, rarely in flat UI |
| `--metallic` | Structural accent | `#B8B2A6` → `#8E877A` gradient | Brushed-metal feel for borders/edges in 3D and glass panels |
| `--border` | Hairline borders | `rgba(28,27,25,0.08)` | Always hairline, never heavy strokes |

Rules:
- Accent colors (gold/orange) are **lighting and focal-point colors**, not
  fill colors. They should appear as glows, gradients, thin highlights, or
  the 3D scene's light sources — rarely as large flat color blocks.
- Dark mode (if/when implemented) inverts to warm charcoal
  (`#16151A`-ish), not pure black, keeping the same gold/orange accent role.
- Contrast must meet WCAG AA for all text regardless of how light the
  palette runs.

## 3. Typography

- One premium sans-serif for UI/body (e.g. a refined grotesque — final
  family TBD during implementation, loaded via `next/font`), used with
  generous line-height and letter-spacing tuned per size.
- Headlines are large, confident, and restrained — weight and size carry
  hierarchy, not color.
- Avoid more than 2 font families total (one primary, optionally one
  monospace strictly for numerals/labels if needed — not for aesthetic
  "tech" flavor).
- Type scale should be defined once in Tailwind theme tokens and reused —
  no one-off font sizes in components.

## 4. Space & layout

- Whitespace is a deliberate material, not leftover space. Sections should
  feel like they could take more content but choose not to.
- Prefer large, single-focus sections over dense multi-column layouts.
- Content max-widths should keep line lengths and compositions comfortable
  on ultra-wide monitors, not just stretch full-bleed.
- Vertical rhythm (section padding, gaps) should come from a small set of
  spacing tokens, not arbitrary values per section.

## 5. Materials: glassmorphism & light

- Glass panels: translucent white fill + `backdrop-blur` + a hairline
  border + a very soft drop shadow. No heavy skeuomorphic bevels.
- Gradients are subtle radial/linear washes (light → slightly lighter, or a
  faint gold glow), never full-saturation SaaS-style hero gradients.
- Light is a design element: soft glows, gentle highlight sweeps, and the
  3D scene's key/rim lighting should all read as coming from a consistent,
  warm light source — reinforcing the gold/orange accent role.

## 6. The 3D hero (React Three Fiber)

- Composition: a floating, semi-transparent holographic interface with an
  abstract "AS" monogram integrated into the geometry — not a literal logo
  pasted onto a plane, but a form the scene is built around.
- Material language: glass/transmissive or thin-film materials, soft
  emissive gold/orange accents, matched to the flat-UI palette so the scene
  feels like part of the interface, not a decoration bolted onto it.
- Motion: the scene reacts smoothly to pointer movement (subtle
  parallax/rotation, not literal drag-follow) and otherwise idles with slow,
  ambient motion. Nothing should snap or feel twitchy.
- Performance budget: the hero must stay smooth on mid-range laptops.
  Prefer fewer, well-lit, well-shaded objects over dense geometry; bake
  what can be baked; lazy-load the `<Canvas>` and provide a static
  gradient/blur fallback while it mounts and for reduced-motion/low-power
  contexts.
- Every `<Canvas>`-touching component is a Client Component
  (`"use client"`) — see [COMPONENT_GUIDELINES.md](./COMPONENT_GUIDELINES.md).

## 7. Motion (Framer Motion)

- Motion clarifies state changes and guides attention — it doesn't
  decorate for its own sake.
- Standard easing/duration should be defined once (in
  `components/motion`) and reused: a soft, slightly-eased-out curve,
  moderate duration (think ~300–600ms for UI, slower for ambient/3D).
- Respect `prefers-reduced-motion` everywhere — provide a reduced/static
  variant, never just disable the feature outright.
- Scroll-triggered reveals should be understated (fade + small
  translate), not bouncy or attention-grabbing.

## 8. Iconography

- Lucide React only, used at consistent stroke width and size per context.
- Icons support text, they don't replace it — avoid icon-only affordances
  without a label or tooltip.

## 9. Accessibility

- Color palette must hold WCAG AA contrast for text at all sizes used.
- All interactive 3D/motion content needs a non-3D, non-motion fallback
  path that conveys the same information.
- Focus states are visible and styled to match the design language
  (soft gold focus ring), never removed.

## 10. Open questions to resolve during implementation

- Final typeface selection and licensing.
- Exact monogram geometry/construction for the 3D "AS" mark.
- Dark mode: whether it ships in v1 or is deferred.

This document should be revised as real design decisions are made during
implementation — treat it as living, not fixed.
