/**
 * Shared tunables for the Hero 3D scene, sourced from docs/DESIGN_BIBLE.md
 * (§5 color palette, §9 motion, §11 3D scene, §17 animation timing).
 * Components read from here instead of hardcoding values.
 */

export const SCENE_COLORS = {
  background: "#F7F8FA",
  foreground: "#0B0E14",
  accentBlue: "#2F6FED",
  accentIndigo: "#4F46E5",
  accentViolet: "#7C3AED",
  gray200: "#E2E6EC",
  gray400: "#9AA4B2",
} as const;

/** One shared breathing cycle — every "alive at rest" behavior reads from this. */
export const BREATH = {
  periodSeconds: 7,
  scaleAmplitude: 0.015,
  glowAmplitude: 0.35,
} as const;

export const IDLE_ROTATION = {
  radiansPerSecond: (Math.PI * 2) / 75,
} as const;

export const POINTER_LEAN = {
  maxRadians: 0.18,
  smoothTime: 0.6,
} as const;

export const CAMERA = {
  position: [1.6, 0.9, 4.4] as [number, number, number],
  fov: 38,
  microOrbitRadius: 0.06,
  microOrbitPeriodSeconds: 42,
  parallaxMaxOffset: 0.12,
  parallaxSmoothTime: 0.8,
} as const;

export const SIGNET = {
  coreRadius: 0.72,
  ribbonTubeRadius: 0.045,
  ribbonLoopRadius: 1.05,
} as const;

export const BACKGROUND_PANELS = {
  count: 3,
  parallaxMultiplier: 0.4,
  smoothTime: 0.9,
} as const;

export const PARTICLES = {
  count: 90,
  fieldRadius: 3.4,
} as const;

/** Applied to every continuous-motion amplitude when prefers-reduced-motion is set. */
export const REDUCED_MOTION_SCALE = 0.08;
