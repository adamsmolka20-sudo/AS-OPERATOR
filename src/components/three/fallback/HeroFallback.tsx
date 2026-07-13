/**
 * Static, CSS-only placeholder shown while the Hero's JS chunk (three/R3F/
 * drei) loads — used as the `loading` state of the dynamic import, never a
 * blank flash or a generic spinner (Design Bible §11/§20 loading strategy).
 * Breathes gently via CSS alone so the "alive" quality holds even pre-JS,
 * and respects prefers-reduced-motion through Tailwind's motion-reduce variant.
 */
export function HeroFallback() {
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center overflow-hidden bg-background">
      <div
        className="h-56 w-56 rounded-full blur-3xl animate-signet-breathe motion-reduce:animate-none motion-reduce:opacity-60"
        style={{
          background: "radial-gradient(circle, var(--accent-blue) 0%, var(--accent-indigo) 55%, transparent 75%)",
        }}
      />
    </div>
  );
}
