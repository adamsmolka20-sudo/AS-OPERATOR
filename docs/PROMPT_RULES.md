# AS Operator — Prompt Rules

Standing rules for any AI assistant (Claude Code or otherwise) working in
this repository. These persist across sessions — treat them as binding
unless the project owner explicitly overrides one in a given conversation.

## Non-negotiables

1. **Never recreate, reinitialize, or force-overwrite the Git repository.**
   No `git init`, no `git push --force` to `main`, no destructive history
   rewrites, without explicit, in-the-moment approval.
2. **Never push to the remote without being asked.** Commits are fine to
   propose/create; pushing to GitHub is a separate, explicit decision.
3. **Explain architectural decisions before executing them.** Before
   introducing a new dependency, restructuring folders, changing a build
   tool, or picking between competing approaches, state the options and the
   reasoning — then execute (or ask first if the choice is consequential
   and not obviously reversible).
4. **No UI/visual implementation without design approval.** Scaffolding,
   config, and folder structure can proceed autonomously; actual component
   UI, page layouts, and the 3D hero must be explained (concept first,
   grounded in [DESIGN_BIBLE.md](./DESIGN_BIBLE.md)) and approved before
   code is written.
5. **When in doubt about a consequential or hard-to-reverse choice, ask.**
   Package manager, major library swaps, deleting tracked files, and similar
   forks in the road warrant a quick check-in rather than a silent default.

## Design fidelity

- Every visual decision should be traceable to [DESIGN_BIBLE.md](./DESIGN_BIBLE.md).
  If a request conflicts with it (e.g. asks for a neon/cyberpunk effect),
  flag the conflict rather than silently complying or silently ignoring the
  request.
- The reference bar is "Apple-level premium," not "generic modern SaaS."
  When unsure whether an effect fits, prefer the more restrained option and
  say why.
- Original composition only — inspirations (like 21st.dev's interaction
  quality) inform *quality bar*, not layouts or assets to copy.

## Engineering standards

- Follow [COMPONENT_GUIDELINES.md](./COMPONENT_GUIDELINES.md) for structure,
  styling, motion, and R3F conventions.
- Don't add abstractions, config options, or "just in case" flexibility
  beyond what the current task needs. Three similar lines beat a premature
  abstraction; extract shared components only on a genuine second use case.
- Default to no code comments; add one only when it captures a non-obvious
  *why* (a constraint, a workaround, an invariant) that the code itself
  can't express.
- Keep changes scoped to what was asked — a bug fix doesn't need
  surrounding refactors, a scaffolding task doesn't need speculative
  features.
- TypeScript strictness stays on; avoid `any` — if a type is genuinely
  unknown, narrow it rather than escaping the type system.

## Process

- Track multi-step work with a visible task list so progress is legible.
- Prefer editing existing files over creating new ones; never create
  documentation files beyond what's requested.
- Before running anything that could discard uncommitted work
  (`git checkout`/`restore`/`reset`/`clean`, deleting files), check working
  tree status first and preserve/stash anything not obviously disposable.
- Verify non-trivial changes actually work (dev server boots, build
  succeeds, the relevant page renders) before reporting a task complete —
  don't rely on "the code looks right."

## How to use this document

This file governs *process*. [VISION.md](./VISION.md) governs *why*,
[DESIGN_BIBLE.md](./DESIGN_BIBLE.md) governs *how it looks*,
[PROJECT_ROADMAP.md](./PROJECT_ROADMAP.md) governs *what's next*, and
[COMPONENT_GUIDELINES.md](./COMPONENT_GUIDELINES.md) governs *how code is
written*. When they conflict, ask the project owner rather than guessing
which wins.
