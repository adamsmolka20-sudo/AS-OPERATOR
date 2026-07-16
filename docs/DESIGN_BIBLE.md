# AS Operator — Design Bible (v3)

> **Version note:** this revision supersedes v2 entirely. AS Operator is now
> a real single-page business site (see VISION.md), not the abstract
> "premium digital command space" v1/v2 described. The cool blue/indigo/
> violet palette, the 3D hero, and the glassmorphism system are all retired.
> The new direction: deep charcoal/near-black with a single sharp gold/amber
> accent, editorial typography, and a slowly moving ambient background. Every
> rule below reflects this direction; nothing from v1/v2 should be assumed
> to still apply.

This is the source of truth for how the AS Operator site looks, feels, and
moves. Every visual decision must be traceable to a rule here. Write this
document as a world-class product design team would: precise enough to
remove ambiguity, opinionated enough to prevent drift.

---

## 1. Design philosophy

AS Operator is a single-page pitch for a real service, not a portfolio
piece. It should read like a high-end creative/growth agency's site: dark,
editorial, minimal, confident — built from strong typography and negative
space rather than stock photography, icon grids, or dashboard mockups.

The bar is **serious and quietly confident, never hype-y or "guru"-styled.**
No countdown timers, no fake scarcity, no oversized emoji, no stock photos
of people pointing at growth charts. Confidence is communicated through
specificity (real steps, real numbers, real disqualifiers) and restraint
(one accent color, used sparingly), not through adjectives or decoration.

The site has one job: get the right creators to book a call. Every section
should either build the case for that or get out of the way.

## 2. Emotional goals

A visitor should feel, in order:

1. **Taken seriously.** The tone is direct and specific, never salesy.
2. **Clarity on the offer.** By the end of the hero, they know exactly what
   this is and what it isn't.
3. **Self-qualification.** "Who this is for" / "who this is not for" should
   make the right visitor feel seen and the wrong visitor self-select out —
   both are wins.
4. **Quiet premium-ness.** The dark field, the restrained gold accent, and
   the slow ambient motion should read as expensive without ever feeling
   loud.
5. **No friction to the next step.** Booking a call should always feel one
   click away, never buried.

## 3. Core principles

1. **One accent, used sparingly.** Gold/amber carries every highlight, every
   CTA, every divider. If everything is gold, nothing is — it should read as
   a precise mark, not a wash of color.
2. **Specificity over hype.** Prefer concrete claims ("20k–100k+ followers,"
   "a few weeks to launch") over vague superlatives.
3. **Typography is the interface.** No stock icons, no illustration, no
   dashboard screenshots. Hierarchy comes from type scale, weight, and
   spacing — serif for editorial emphasis, clean sans for structure and body
   copy.
4. **Space is structural.** Generous whitespace between sections is what
   makes the page feel high-end rather than crowded — a cheap site fills
   every pixel; an expensive one doesn't need to.
5. **The background is alive, the foreground is still.** Motion lives in the
   ambient background (slow drifting glow, faint particles) so the page
   never feels static — but body copy, headlines, and CTAs themselves stay
   calm and legible; motion must never compete with reading.
6. **Every section serves the call.** If a section doesn't build trust or
   move the visitor toward booking, it doesn't belong on the page.
7. **No navigation, one scroll.** No top nav bar. The page is a single,
   linear argument — hero, proof, process, qualification, objections
   (FAQ), contact.

## 4. Visual identity

- **Character:** dark editorial agency site — serious, minimal, high
  contrast, quietly premium.
- **Never:** stock icon grids, gradient-heavy SaaS hero art, illustrated
  mascots, countdown/urgency widgets, generic testimonial carousels, top
  navigation bars, light backgrounds.
- **Signature elements:** a single sharp gold accent against near-black;
  a slow-moving ambient background (soft drifting glow + faint particles)
  behind an otherwise still, editorial layout; thin gold hairline dividers
  under section labels.

## 5. Color palette

Deep near-black base, one accent, no gradients as decoration (only the
ambient background glow, which is treated as atmosphere, not UI chrome).

| Token | Role | Value | Notes |
|---|---|---|---|
| `--background` | Page base | `#0B0B0C` | Deep charcoal / near-black, not pure `#000` |
| `--surface` | Slightly raised panels (cards, form fields) | `#141416` | Barely lighter than background |
| `--foreground` | Primary text | `#F2F1EC` | Off-white, not pure white — warmer, easier to read at length |
| `--muted-foreground` | Secondary text | `#9C9A92` | Warm gray, for subheads/labels |
| `--accent-gold` | The one accent | `#D4A03C` | CTAs, highlights, dividers, section numerals — used sparingly |
| `--accent-gold-dim` | Low-emphasis gold | `rgba(212,160,60,0.35)` | Hairline dividers, disabled/secondary states |
| `--border` | Hairline borders | `rgba(242,241,236,0.08)` | Always hairline, never heavy strokes |

Rules:

- Gold never fills large areas — it marks CTAs, small numerals/labels,
  dividers, and glow accents. Body copy stays off-white/muted-gray.
- No second accent color. If a moment needs more emphasis, use size/weight/
  space, not a new color.
- Contrast must hold WCAG AA for all text against the near-black background.

## 6. Typography system

- **Two families:** a serif for editorial emphasis (large headline phrases,
  especially italicized emphasis like *"real revenue"* or *"Let's talk."*)
  paired with a clean geometric sans for structure — section labels, body
  copy, UI text, numerals.
- **Section labels** are small, uppercase, wide-tracked sans, prefixed with
  a two-digit numeral (`01`, `02`...) in gold — this numbering is the site's
  quiet wayfinding system since there's no nav bar.
- **Headlines** are large and serif, mixing roman and italic for emphasis
  within a single phrase (the italic word is where the gold-adjacent
  emotional weight lives).
- **Body copy** stays sans, off-white/muted-gray, generous line-height for
  long-form reading (this page has real paragraphs, not just fragments).
- Never more than two families. No monospace anywhere — this isn't a
  technical/command aesthetic.

## 7. Spacing system

- **Base unit: 4px**, rhythm expressed in multiples of 8px, same discipline
  as the rest of this project.
- **Section rhythm:** large vertical padding between sections (96–192px
  band) — the page should feel unhurried scrolling through it.
- **Content max-width:** body copy and headlines stay within a comfortable
  reading measure even on wide desktop viewports; full-bleed is reserved for
  the ambient background only.

## 8. Ambient background principles

The moving background is the site's signature texture — it's what makes an
otherwise still, editorial layout feel alive.

- **Composition:** a handful of large, soft, blurred gold-toned glow shapes
  drifting slowly (position and opacity, not fast motion) behind the
  content, plus a sparse field of small, faint particles for texture.
- **Persistence:** the background runs behind the entire scroll, not just
  the hero — it's a fixed atmosphere the content scrolls over, not a
  per-section decoration.
- **Restraint:** the glow must stay dim and diffuse enough that body copy
  never loses contrast. If a glow shape drifts under a text block, contrast
  is checked at that point specifically.
- **Never a distraction:** slow tempo only (tens of seconds per cycle).
  Nothing pulses fast, nothing tracks the cursor aggressively — this is
  atmosphere, not an interactive toy.
- Implemented with CSS/Framer Motion (blurred gradient shapes + lightweight
  particles), not a persistent WebGL canvas — appropriate weight for a
  content-and-conversion page that needs to load fast and run well on any
  device, versus the heavier real-time 3D techniques used elsewhere in this
  project's earlier phases.

## 9. Motion principles

- Motion exists to make the page feel alive (ambient background) and to
  guide attention during scroll (section reveals) — never to decorate
  static content.
- Section reveals are understated: fade + small upward translate as a
  section enters view, triggered once.
- FAQ accordions expand/collapse with a quick, direct motion — utility
  motion, not ambient motion; it should feel immediate, not floaty.
- Respect `prefers-reduced-motion`: ambient background motion and scroll
  reveals both collapse to a static/minimal state.

## 10. Interaction principles

- **CTAs are unmistakable.** Every "Book a Call" button uses the gold
  accent, consistent size and shape, and behaves identically wherever it
  appears (same link, same hover behavior).
- **Hover states are subtle** — a slight brightness/scale shift on buttons,
  never a color swap to a second hue.
- **Focus states use the gold accent** as a visible ring — never suppressed,
  since the contact form and FAQ accordion both need real keyboard
  operability.
- **The floating "Book a Call" button** stays fixed on screen through the
  entire scroll, always one click from booking, but small/quiet enough not
  to block reading.

## 11. Section composition principles

No 3D centerpiece in this version of the site — composition discipline
replaces it:

- **One idea per section**, stated as a short headline before supporting
  detail — a visitor skimming just the headlines should understand the
  whole pitch.
- **Numbered wayfinding** (`01 STRATEGY`, `02 BUILD`...) substitutes for a
  navigation bar, giving the single scroll a sense of structure and
  progress.
- **Alternating density:** the Hero and section headlines are spacious;
  "How It Works" and "FAQ" are allowed to be denser (they're doing
  informational work), then space opens back up before Contact.
- **The You / Me / Together structure in "How It Works"** is a deliberate
  narrative device — it should read almost like a short story of the
  working relationship, not a feature list.

## 12. Lighting / glow principles

Since there's no 3D scene, "lighting" here means the ambient background glow
and gold highlight treatment:

- The gold glow is the site's only light source, conceptually — it should
  feel like it's emanating from behind/beneath the content, not painted on
  top of it.
- Section dividers and numerals catch a faint gold glow rather than being
  flat-colored, reinforcing that single light source.
- No warm/orange bleed beyond the defined gold accent — keep the hue tight
  to `--accent-gold`, not a wider amber-to-orange range.

## 13. Component philosophy

- Built from shadcn/ui primitives (button, input, label, textarea,
  accordion), restyled to this system — see
  [COMPONENT_GUIDELINES.md](./COMPONENT_GUIDELINES.md).
- Every section is its own component in `components/sections`, composed in
  `page.tsx` in a fixed order — no dynamic section ordering/CMS needed for
  a single-owner site.
- Copy lives in one config file (`lib/site-config.ts`), not hardcoded
  per-component, so Adam can edit the pitch without touching layout code.

## 14. Icon style

- **Avoid icons almost entirely.** This brief explicitly calls for
  typography over iconography — numerals, dividers, and arrows (→) do the
  work icons would normally do.
- Where an icon is genuinely useful (e.g., a chevron on the FAQ accordion,
  an arrow on a CTA), use Lucide React, thin stroke, off-white or gold,
  never decorative.

## 15. Border radius system

Smaller and sharper than the earlier command-space system — this is an
editorial, not soft-glass, aesthetic:

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Chips, small controls |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards, form panels |
| `--radius-full` | 9999px | Pill buttons (CTAs), avatar |

## 16. Shadow system

Shadows are rare in a near-black UI — used only for the floating CTA and
the gold glow itself, never for generic card elevation:

| Token | Definition | Use |
|---|---|---|
| `--shadow-float` | `0 8px 24px rgba(0,0,0,0.4)` | Floating "Book a Call" button |
| `--shadow-glow-gold` | `0 0 48px rgba(212,160,60,0.25)` | Ambient background glow shapes only |

## 17. Animation timing

| Token | Duration | Easing | Use |
|---|---|---|---|
| `--duration-fast` | 180ms | `ease-out` | Button hover, focus |
| `--duration-base` | 300ms | `ease-out` | FAQ accordion expand/collapse |
| `--duration-slow` | 600ms | `ease-out` | Section scroll reveals |
| `--duration-ambient` | 20000–40000ms | `ease-in-out` (looping) | Background glow drift |

## 18. Scroll behaviour

- Native scroll only — no scroll-jacking, no forced snap sections.
- Section reveals are scroll-triggered, understated, and trigger once.
- The floating CTA button appears after the hero has scrolled past (so it
  doesn't duplicate the hero's own CTA in the same viewport) and stays
  visible for the rest of the scroll.

## 19. Accessibility principles

- WCAG AA contrast minimum for all text against `--background`, verified
  specifically where the ambient glow can drift behind text.
- The contact form is fully keyboard-operable with visible gold focus
  rings and proper label associations.
- The FAQ accordion uses proper disclosure semantics (button + aria-expanded)
  so it works with screen readers, not just visually.
- `prefers-reduced-motion` collapses ambient background drift and scroll
  reveals to a static/minimal state; nothing required for comprehension
  depends on motion.

## 20. Performance rules

- The ambient background is CSS/Framer-Motion based specifically to keep
  this page light and fast on any device — no persistent WebGL canvas.
- Images (if any are added later) are lazy-loaded and sized appropriately;
  the current build uses no photography at all, which keeps load fast by
  default.
- Target: fast first paint and no layout shift from the ambient background
  mounting — it's positioned `fixed`/absolute from the start, never inserted
  after layout.

---

This document is living — update it the moment a real design decision is
made during implementation, rather than letting practice drift away from
what's written here.
