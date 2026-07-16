"use client";

import { motion } from "framer-motion";

interface Blob {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

const BLOBS: Blob[] = [
  { top: "8%", left: "62%", size: 560, duration: 34, delay: 0 },
  { top: "58%", left: "8%", size: 480, duration: 40, delay: 4 },
  { top: "72%", left: "70%", size: 420, duration: 30, delay: 8 },
];

const PARTICLE_COUNT = 36;

/** Deterministic pseudo-random so server and client render identical output. */
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  top: `${(seededRandom(i * 2 + 1) * 100).toFixed(2)}%`,
  left: `${(seededRandom(i * 2 + 2) * 100).toFixed(2)}%`,
  size: 1 + seededRandom(i * 3.7) * 2,
  duration: 8 + seededRandom(i * 5.3) * 10,
  delay: seededRandom(i * 7.1) * 6,
}));

/**
 * The site's signature moving texture (Design Bible v3 §8): a few large,
 * soft, blurred gold glow shapes drifting slowly, plus a sparse field of
 * faint particles. Fixed behind the entire scroll, not per-section —
 * atmosphere, not an interactive toy. Respects prefers-reduced-motion via
 * Framer Motion's automatic reduced-motion handling.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {BLOBS.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            background: "radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            opacity: [0.12, 0.22, 0.14, 0.12],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {PARTICLES.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gold"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
