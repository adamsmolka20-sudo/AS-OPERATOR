# AS Operator — Design Bible (v2)

> **Version note:** this revision supersedes v1. The creative direction has
> shifted from a warm gold/orange/metallic palette to a cool, precision
> palette — white, frost glass, soft gray, electric blue, indigo, violet.
> Orange, gold, cyberpunk, hacker, and gaming aesthetics are now explicitly
> out of scope. Every rule below reflects this direction; nothing from v1
> should be assumed to still apply.
>
> **Amendment:** added the *living environment / physicality* principle —
> the product must never read as "a beautiful website"; the target
> reaction is "I've never seen anything like this." The 3D scene has
> subtle life at rest, and every interaction should feel physical: weight,
> light bending through glass, natural-feeling light response, inertia,
> and a slow ambient "breathing" quality throughout. See §1, §2, §3, §9,
> §10, §11, and §12 below.

This is the source of truth for how AS Operator looks, feels, and moves.
Every visual decision — a component, a color, an easing curve, a shadow —
must be traceable to a rule in this document. If it isn't, the rule is
missing and should be added here first, not improvised in code. Write this
document as a world-class product design team would: precise enough to
remove ambiguity, opinionated enough to prevent drift.

---

## 1. Design philosophy

AS Operator is not a website, not a dashboard, not a SaaS product. It is a
**premium digital command space** — the personal operating system of one
person, rendered as an interface. Every screen should feel like stepping
into a calm, precise, intelligent environment that is entirely under
control, rather than browsing a page of marketing content.

The design language sits at the intersection of three references, fused
into something original:

- **Apple's calmness** — restraint, clarity, generous space, nothing
  fighting for attention.
- **Linear's precision** — exacting alignment, sharp typographic hierarchy,
  a sense that every pixel was placed on purpose.
- **Arc Browser's elegance** — softness and personality inside a
  disciplined system; light, color, and motion used as craft details, not
  decoration.
- **21st.dev-level interaction quality** — the feel of best-in-class
  interactive 3D/motion components — used as a bar for *polish*, never as a
  source of layouts or assets to copy.

Nothing here is a dashboard metaphor (no dense data grids, no widget
clutter) and nothing here is a marketing-site metaphor (no stacked
testimonial/pricing sections). It is closer to a **console** — spacious,
quiet, responsive to intent.

**The target reaction is not "this is a beautiful website."** It is
"I've never seen anything like this." A beautiful website is admired and
scrolled past; a living environment is noticed, felt, and remembered. The
product should read as a **living digital environment**, not a page —
something with presence that exists whether or not the visitor is
interacting with it, and that responds to them the way a physical,
well-made object would rather than the way a webpage does. This is
achieved through restraint and physical believability, never through
visual complexity — see §3's *physicality* principle below.

## 2. Emotional goals

A visitor should feel, in order:

1. **Calm** — the interface never demands urgency; nothing pulses,
   flashes, or competes for attention uninvited.
2. **Trust** — precision and consistency signal competence before any
   copy is read.
3. **Quiet awe — "I've never seen anything like this."** Not "this is a
   beautiful website," but a genuine moment of unfamiliarity, produced by
   the 3D scene and glass/light system feeling physically real rather than
   merely decorated. It should never feel show-offy — the awe comes from
   believability, not from complexity.
4. **Clarity** — at every point, the visitor should know exactly where
   they are and what they can do next.
5. **Timelessness** — nothing should read as "2026 web design trend."
   The bar is: does this still feel considered in five years.
6. **Calm intelligence over visual complexity.** If a moment could produce
   awe through more visual noise or through more restraint, restraint wins
   — the product should feel like it knows something, not like it's
   performing.

## 3. Core principles

1. **Restraint over spectacle.** If a section works without motion, 3D, or
   glass, ship it without them. Effects are earned, not default.
2. **One accent system, used sparingly.** Electric blue / indigo / violet
   carry all emphasis. When everything is accented, nothing is.
3. **Space is structural.** Whitespace is not empty — it is what makes the
   command space feel uncluttered and confident.
4. **Precision is visible.** Alignment, spacing, and proportion should be
   exact enough that a design-literate visitor can feel the grid even
   though they can't see it.
5. **Depth through light and blur, not skeuomorphism.** Hierarchy comes
   from elevation, blur, and glow — never bevels, gradients-as-decoration,
   or literal materials.
6. **Motion has meaning.** Every animation communicates a state change,
   a relationship, or a physical property of the interface — never
   ornament.
7. **Consistency compounds.** A rule applied once must be applied
   everywhere it recurs. Local exceptions erode the whole system.
8. **Physicality over flatness.** The environment behaves as if it obeys
   real physical law, not screen logic:
   - **Objects have weight** — they accelerate and settle, they don't
     simply appear/move at constant speed.
   - **Glass bends light** — refraction/dispersion at edges, not a flat
     blur-and-tint effect pretending to be glass.
   - **Lighting reacts naturally** — highlights and glows shift
     believably with viewing angle and pointer position, as they would on
     a real translucent object.
   - **Motion carries inertia** — things overshoot slightly and settle
     rather than stopping the instant input stops.
   - **Everything breathes** — a slow, low-amplitude ambient oscillation
     (scale, opacity, or light intensity) keeps the environment feeling
     alive even when the visitor does nothing.
9. **Elegance over spectacle, always.** When a choice exists between a
   more impressive effect and a more restrained one that still reads as
   physically real, choose restraint. Spectacle is the failure mode this
   entire system is designed to avoid.

## 4. Visual identity

- **Character:** cool, precise, quietly futuristic — a command interface,
  not a storefront.
- **Never:** cyberpunk (no neon magenta/cyan, glitch, scanlines), hacker
  aesthetics (no terminal-green, no monospace-as-decoration), gaming design
  (no RGB gradients, aggressive angular shapes, badges/achievements
  styling), generic SaaS (no purple-to-pink hero gradients, no blob
  illustrations, no stock 3D "isometric people" art).
- **Signature elements:** frosted glass panels catching cool light;
  an interactive 3D hero built around an abstract "AS" monogram rendered as
  a holographic, transmissive form; light that shifts gently across the
  blue → indigo → violet range as if the interface itself is alive but
  composed.
- **Orange is banned.** No warm hues anywhere in the system — not in
  accents, not in gradients, not in the 3D scene's lighting.

## 5. Color palette

Cool, light-dominant base with a controlled accent spectrum. All accent
color is spent on the blue → indigo → violet range; nothing else carries
saturation.

### Base (neutral)

| Token | Role | Value | Notes |
|---|---|---|---|
| `--white` | Page base | `#FFFFFF` | Pure white, used in small doses (cards, focal panels) |
| `--background` | App background | `#F7F8FA` | Cool-tinted off-white, never warm |
| `--surface` | Panel base | `#FFFFFF` | Solid panel fill under glass layers |
| `--surface-muted` | Secondary panel | `#EEF1F5` | Cool soft gray |
| `--foreground` | Primary text | `#0B0E14` | Near-black with a cool undertone, never pure `#000` |
| `--muted-foreground` | Secondary text | `#5B6472` | Cool slate gray |
| `--border` | Hairline borders | `rgba(11,14,20,0.08)` | Always hairline (1px), never heavy strokes |

### Soft gray scale

| Token | Value |
|---|---|
| `--gray-50` | `#F7F8FA` |
| `--gray-100` | `#EEF1F5` |
| `--gray-200` | `#E2E6EC` |
| `--gray-300` | `#CBD2DC` |
| `--gray-400` | `#9AA4B2` |
| `--gray-500` | `#5B6472` |
| `--gray-600` | `#3C4552` |

### Accent spectrum — Electric Blue → Indigo → Violet

| Token | Role | Value | Notes |
|---|---|---|---|
| `--accent-blue` | Primary accent | `#2F6FED` | Primary interactive color: links, primary actions, focus rings, key light |
| `--accent-indigo` | Secondary accent | `#4F46E5` | Depth/mid-tone accent; gradient midpoint; secondary emphasis |
| `--accent-violet` | Tertiary accent | `#7C3AED` | Rim light, glow accents, highest-emphasis rare moments |
| `--accent-gradient` | System gradient | linear/radial blend of the three above | The *only* gradient family used across the product |

Rules:

- Accent color is a **spectrum, not three interchangeable colors** — blue
  reads as "primary/active," indigo as "depth/secondary," violet as
  "rare/highlight." Don't reach for violet as a default action color.
- Accent color always appears against the neutral base — never accent on
  accent (e.g. no violet text on an indigo panel).
- Frost Glass (below) is treated as a color in its own right, not just an
  effect — it is the primary "material" of the system.

### Frost Glass

| Token | Value | Notes |
|---|---|---|
| `--glass-fill` | `rgba(255,255,255,0.6)` | Standard glass panel fill |
| `--glass-fill-strong` | `rgba(255,255,255,0.78)` | Elevated/modal glass |
| `--glass-border` | `rgba(255,255,255,0.4)` inner + `rgba(11,14,20,0.06)` outer | Dual-edge border (see §8) |
| `--glass-tint-accent` | `rgba(47,111,237,0.06)` | Faint blue tint mixed into glass over accent-adjacent content |

### Dark mode (deferred, planned-for)

Dark surfaces should be cool charcoal (`#0B0E14`–`#141822`), never pure
black, keeping the same blue/indigo/violet accent role and increasing glow
intensity slightly to compensate for reduced ambient light.

### Contrast

All text/background pairings must meet WCAG AA at minimum; body text
should target AAA where the palette allows without compromising the cool,
light aesthetic.

## 6. Typography system

- **Typeface qualities required:** geometric-humanist sans, neutral
  personality (no warmth, no quirk), high x-height, excellent hinting at
  small sizes, a true variable weight axis. Think the family of qualities
  shared by SF Pro, Inter, and Linear's own typeface — exact family is
  still an open decision (see §20 of v1's open-questions carried forward),
  to be finalized in Phase 1 and loaded via `next/font` with a system-font
  fallback stack in the meantime.
- **One family for everything.** No separate "display" font — hierarchy
  comes from size/weight/spacing, not from mixing typefaces. A monospace
  is permitted only for literal numeric/technical readouts (e.g. a
  coordinate or version string), never as an aesthetic flourish.
- **Scale:** a modular scale with clear, generous jumps — headlines are
  large and confident (48–96px+ at desktop hero scale), body text settles
  at 16–18px with 1.5–1.6 line-height for readability inside glass panels.
- **Tracking:** large display text uses slightly negative letter-spacing
  (tightened), body text uses default-to-slightly-open spacing for
  legibility on light backgrounds.
- **Weight usage:** primarily Regular/Medium for body, Medium/Semibold for
  headings — avoid Bold/Black except for rare, single-word emphasis. Never
  use color alone to create hierarchy where weight can do it.
- **Numerals:** tabular figures for anything resembling data or aligned
  values, to reinforce the "precision instrument" feeling.

## 7. Spacing system

- **Base unit: 4px**, primary rhythm expressed in multiples of 8px.
- **Scale tokens:** `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192` — no
  arbitrary spacing values outside this scale in component code.
- **Section rhythm:** large sections use the 96/128/192 band for vertical
  padding; internal component spacing stays in the 4–32 band.
- **Density:** default to the more generous end of a plausible range. If
  torn between two spacing values, choose the larger one — density is
  never the goal.
- **Grid:** a 12-column responsive grid with generous gutters (≥24px at
  desktop); content max-width is constrained even on ultra-wide viewports
  so compositions stay intentional rather than stretched.

## 8. Glassmorphism rules

Frost Glass is the system's signature material — used precisely, not
everywhere.

- **Composition of a glass panel:** translucent fill (`--glass-fill`) +
  `backdrop-filter: blur(20–32px)` + a **dual-edge border** (a near-white
  1px inner highlight simulating light catching an edge, plus a very
  faint dark 1px outer hairline for definition against light backgrounds)
  + a soft, large-radius, low-opacity shadow (§16).
- **Blur budget:** two blur intensities only — `blur(24px)` for standard
  panels, `blur(40px)` for large overlays/modals. No ad hoc blur values.
- **Stacking limit:** never more than **two** glass layers visibly
  overlapping at once (e.g. a glass card on a glass page background is
  the maximum). Glass-on-glass beyond that reads as murky, not premium.
- **Contrast requirement:** a glass panel must always sit over content
  with enough visual variation (a gradient, the 3D scene, an image) to be
  legible as glass — over a flat single color it should look like a
  regular panel, not fake-glass.
- **Never:** colored glass tinted with anything other than the accent
  spectrum at very low opacity; heavy drop shadows that fight the blur;
  glass used for body-text-heavy content blocks (reserve it for chrome,
  cards, and focal panels).

## 9. Motion principles

- Motion exists to **explain a change of state** (something appeared,
  reordered, became active) — never to decorate an otherwise static
  moment.
- Every motion should feel like it obeys physical logic: things
  **accelerate and decelerate as if they have mass**, nothing teleports,
  and nothing moves at constant velocity. A soft overshoot-and-settle
  (light spring physics, not a bounce) is the default for anything that
  should feel like a real, weighted object coming to rest — not just an
  occasional exception.
- Motion is **quiet by default** — subtle opacity/position changes are
  preferred over large-scale transforms; save larger motion for genuinely
  significant transitions (route changes, hero entrance).
- **Nothing is ever perfectly still.** Continuous/ambient motion (the 3D
  scene idling, a subtle gradient drift, a faint breathing scale/opacity
  pulse on focal elements) must always be present at low amplitude and
  slow tempo — present in peripheral vision, never demanding attention.
  A static frame is a bug, not a calm state.
- Inertia and breathing are achieved through restraint (small amplitude,
  slow tempo), never through added visual complexity — see §3, principle 9.

## 10. Interaction principles

- **Every interactive element responds within ~100ms** of input,
  perceptually instant, even if a fuller animation continues after.
- **Hover states are subtle** — a slight lift, glow, or brightness shift;
  never a jarring color swap.
- **Active/pressed states compress** slightly (scale ~0.97–0.98) and
  **release with a soft overshoot-settle**, as if displacing real mass,
  rather than snapping back linearly.
- **Focus states use the primary accent** (`--accent-blue`) as a soft
  ring/glow — always visible, never suppressed, styled to match the
  system rather than left as a default browser outline.
- **Cursor as a design surface:** where it strengthens the "command
  space" feeling (e.g. hovering the 3D hero), consider a custom, minimal
  cursor treatment — never gimmicky, always dismissable/accessible.
- **Pointer-reactive elements move with restraint and lag** — parallax/tilt
  responds to the pointer through a damped, spring-like follow (never a
  literal 1:1 tracking), so elements feel like they have inertia and are
  catching up to the cursor rather than being glued to it.

## 11. 3D scene principles

- **Subject:** a floating, semi-transparent holographic interface built
  around an abstract "AS" monogram — the monogram is structural to the
  geometry, not a logo decal applied to a surface.
- **Material language:** true glass/transmissive materials that visibly
  **bend and refract** the light and geometry behind them — not a flat
  blur-and-tint standing in for glass — with internal light that shifts
  across the blue → indigo → violet spectrum, and edges that catch thin,
  precise, angle-dependent highlights rather than broad flat reflections.
- **Composition:** one clear focal form, generously surrounded by empty
  space — the scene should feel like a single instrument floating in a
  clean environment, not a cluttered assembly of shapes.
- **Behavior — alive at rest:** the scene is never a static render. Even
  with zero user input it exhibits subtle, continuous life — slow
  "breathing" scale/opacity on the monogram, a gently drifting internal
  light, near-imperceptible micro-rotation. This ambient behavior must
  never stop, only recede in amplitude.
- **Behavior — responding to the visitor:** pointer-reactive
  parallax/rotation follows the cursor through a damped, spring-based
  motion (small amplitude, a believable sense of mass and inertia) —
  never a literal, instant 1:1 follow, which reads as a UI gimmick rather
  than a physical object.
- **Fallback path:** a static, on-brand gradient/blur placeholder while the
  canvas mounts, and for reduced-motion, low-power, or WebGL-unavailable
  contexts — never a blank space or a generic spinner.
- **Boundary:** every component touching the R3F `<Canvas>` tree is a
  Client Component; the scene is isolated behind that boundary per
  [COMPONENT_GUIDELINES.md](./COMPONENT_GUIDELINES.md).

## 12. Lighting principles

Lighting is treated as a first-class design tool, in the flat UI and the
3D scene alike.

- **Key light:** electric blue, cool and precise — the primary light
  source direction should be consistent across the whole product (e.g.
  upper-left), reinforcing a single coherent "world."
- **Fill/depth light:** indigo — used for shadowed/receding areas and
  gradient midpoints, never as the dominant color.
- **Rim/accent light:** violet — reserved for edges, highlights, and rare
  focal glows; the smallest proportion of the three.
- **Flat-UI light:** glows and gradients in 2D UI should read as if lit by
  the same source as the 3D scene — a soft radial blue-white glow behind
  focal panels, a faint indigo-violet wash at section edges, never a full
  saturated gradient fill.
- **Light must react, not just exist.** Highlights, glows, and the light
  passing through glass surfaces should shift believably with viewing
  angle and pointer position — a static, fixed-looking highlight on a
  "glass" surface breaks the illusion of a physical material.
- **No warm light anywhere** — this is the primary rule that
  differentiates this system from the v1 direction; if a highlight or glow
  ever trends toward amber/orange, it is wrong.

## 13. Component philosophy

- Components are built from shadcn/ui primitives (Vega preset, neutral
  base) and restyled to this system — see
  [COMPONENT_GUIDELINES.md](./COMPONENT_GUIDELINES.md) for code-level
  conventions.
- **Hierarchy comes from elevation and blur, not from color intensity or
  size alone.** A primary action is elevated/glassy and accent-colored; a
  secondary action is flat and neutral.
- **Every component has a calm default state.** Emphasis is added only
  where a real action or piece of information warrants it — a screen full
  of accent-colored elements has no hierarchy at all.
- **Reuse over reinvention.** A new component pattern is only introduced
  after the same need appears at least twice; otherwise extend an existing
  primitive.
- **States are complete:** every interactive component needs default,
  hover, focus, active, and disabled states designed together, not
  patched in later.

## 14. Icon style

- **Lucide React exclusively**, consistent stroke width (2px at default
  UI scale) and consistent corner rounding across the entire product.
- **Monochrome by default** — icons use `--foreground` or
  `--muted-foreground`; accent color on an icon is reserved for an
  active/selected state or a primary call-to-action, never decoration.
- **Outline over filled.** Filled icon variants are reserved for a small,
  deliberate set of "active state" indicators, not general use.
- Icons always support a text label in navigational contexts; icon-only
  controls require an accessible label/tooltip.

## 15. Border radius system

A single, restrained radius scale — precise (Linear-like) rather than
maximally soft (avoid the "everything is a pill" look):

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Small controls: chips, inline buttons |
| `--radius-md` | 10px | Default: buttons, inputs, small cards |
| `--radius-lg` | 16px | Panels, standard cards |
| `--radius-xl` | 24px | Large glass panels, modals |
| `--radius-full` | 9999px | Avatars, pills, icon-only circular buttons only |

Rule: radius increases with size/prominence, but nothing above `--radius-xl`
except explicit circular elements (`--radius-full`). No mixing of unrelated
radius values within a single component.

## 16. Shadow system

Shadows are soft, diffused, and cool-toned — never pure black, never
sharp-edged.

| Token | Definition | Use |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(11,14,20,0.04)` | Hairline elevation (inputs, chips) |
| `--shadow-sm` | `0 4px 12px rgba(11,14,20,0.06)` | Default cards |
| `--shadow-md` | `0 12px 32px rgba(11,14,20,0.08)` | Glass panels, dropdowns |
| `--shadow-lg` | `0 24px 64px rgba(11,14,20,0.10)` | Modals, elevated overlays |
| `--shadow-glow-blue` | `0 0 40px rgba(47,111,237,0.25)` | Primary accent focal glow (sparingly) |
| `--shadow-glow-violet` | `0 0 48px rgba(124,58,237,0.20)` | Rare highlight glow (3D scene, standout moments) |

Rule: at most one glow shadow active per viewport at a time — glows mark
the single most important focal point, not a general decoration.

## 17. Animation timing

| Token | Duration | Easing | Use |
|---|---|---|---|
| `--duration-instant` | 100ms | linear | Micro feedback (press states) |
| `--duration-fast` | 180ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Hover/focus transitions |
| `--duration-base` | 280ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Standard UI transitions (menus, toggles) |
| `--duration-slow` | 480ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Section reveals, larger layout changes |
| `--duration-ambient` | 4000–8000ms | `ease-in-out` (looping) | 3D idle motion, gradient drift |

- The `(0.16, 1, 0.3, 1)` "ease-out-expo"-family curve is the system's
  signature easing — fast start, long soft settle. It should be the default
  everywhere unless a specific interaction needs a different feel.
- Stagger increments for lists/grids: 40–60ms between items, capped so a
  long list doesn't take longer than ~`--duration-slow` to fully reveal.
- All durations/easings are defined once in `components/motion` and
  reused — no bespoke durations inline in feature components.

## 18. Scroll behaviour

- **Native scroll, never hijacked.** No scroll-jacking, no forced full-page
  snap sections that fight the user's own scroll input.
- **Reveals are scroll-triggered but understated** — fade + small
  translate (≤24px), triggered once per element (no re-triggering on
  scroll-up unless deliberately designed as a two-way effect).
- **Parallax is minimal** — a subtle depth cue (background moving slower
  than foreground), never large-amplitude or disorienting.
- **Momentum/inertia is native OS behavior** — never overridden or
  artificially damped.
- **Snap points** are permitted only where they clarify a single-purpose
  transition (e.g. settling on a full hero section) and must remain
  interruptible by the user at any time.

## 19. Accessibility principles

- **Contrast:** WCAG AA minimum everywhere, AAA target for primary body
  text, verified against the actual cool-gray/white backgrounds in use
  (not assumed from the palette alone).
- **Motion:** every animated/3D experience has a `prefers-reduced-motion`
  path that preserves information and function while removing continuous
  or large-amplitude motion.
- **Keyboard:** full keyboard operability for every interactive element;
  focus order follows visual/logical order; the accent-blue focus ring is
  never suppressed.
- **3D content:** the hero's information (what it represents) must also
  exist in a non-visual form (accessible heading/description) — decorative
  3D elements are `aria-hidden`.
- **Glass legibility:** text on glass panels is checked against the actual
  busiest background it can appear over, not just the average case.

## 20. Performance rules

- **60fps target** for all motion and the 3D scene on mid-range hardware;
  anything that can't hold 60fps gets simplified rather than shipped
  janky.
- **3D budget:** favor few, well-lit, well-shaded forms over dense
  geometry; bake lighting where possible; lazy-load the `<Canvas>` and
  its assets, never block first paint on WebGL.
- **Progressive enhancement:** the product must degrade gracefully with
  WebGL unavailable, JS disabled for critical content, or reduced-motion
  set — always to a static, on-brand fallback, never a broken layout.
- **No cumulative layout shift** from glass/blur/3D elements mounting —
  reserve space up front.
- **Bundle discipline:** heavy libraries (three.js, drei, R3F) stay behind
  client boundaries and route-level code-splitting so they never inflate
  pages that don't use them.
- **Perceived performance over raw metrics where they conflict slightly**
  — a slightly slower load that feels calm and intentional beats a faster
  one that flashes/jumps into place.

---

## Open questions carried into implementation

- Final typeface family (§6) — to be selected and loaded in Phase 1.
- Exact "AS" monogram geometry/construction for the 3D scene (§11).
- Dark mode ship timing — palette is defined (§5) but not yet scheduled.

This document is living — update it the moment a real design decision is
made during implementation, rather than letting practice drift away from
what's written here.
