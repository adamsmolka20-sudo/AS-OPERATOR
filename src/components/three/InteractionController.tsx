"use client";

import { createContext, useContext, useRef, type ReactNode, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { damp, damp2 } from "maath/easing";
import * as THREE from "three";
import { BREATH, IDLE_ROTATION, POINTER_LEAN, REDUCED_MOTION_SCALE } from "@/lib/three/sceneConfig";

export interface SceneClock {
  /** -1..1 sine, one shared breathing signal for every "alive at rest" behavior. */
  breathPhase: number;
  /** Monotonically increasing radians driving the slow idle rotation. */
  idleRotation: number;
  /** Damped, normalized (-1..1) pointer position. */
  pointer: THREE.Vector2;
  /** Damped 0..1 scroll progress through the hero section. */
  scrollProgress: number;
  reducedMotion: boolean;
}

const SceneClockContext = createContext<SceneClock | null>(null);

export function useSceneClock(): SceneClock {
  const clock = useContext(SceneClockContext);
  if (!clock) {
    throw new Error("useSceneClock must be used within an InteractionController");
  }
  return clock;
}

interface InteractionControllerProps {
  scrollProgressRef: RefObject<number>;
  reducedMotion: boolean;
  children: ReactNode;
}

/**
 * Owns the single shared animation clock for the whole Hero scene (Design
 * Bible §9: "one shared timing signal"). Every breathing/idle/pointer/scroll
 * value is computed once per frame here and read by children inside their
 * own useFrame callbacks — nothing downstream re-derives it independently,
 * which is what keeps the breathing, rotation, and glow in phase.
 */
export function InteractionController({ scrollProgressRef, reducedMotion, children }: InteractionControllerProps) {
  const clockRef = useRef<SceneClock>({
    breathPhase: 0,
    idleRotation: 0,
    pointer: new THREE.Vector2(0, 0),
    scrollProgress: 0,
    reducedMotion,
  });

  clockRef.current.reducedMotion = reducedMotion;

  useFrame((state, delta) => {
    const clock = clockRef.current;
    const motionScale = clock.reducedMotion ? REDUCED_MOTION_SCALE : 1;

    clock.breathPhase = Math.sin((state.clock.elapsedTime / BREATH.periodSeconds) * Math.PI * 2);
    clock.idleRotation += delta * IDLE_ROTATION.radiansPerSecond * motionScale;

    damp2(clock.pointer, state.pointer, POINTER_LEAN.smoothTime, delta);
    damp(clock, "scrollProgress", scrollProgressRef.current, 0.5, delta);
  });

  return <SceneClockContext.Provider value={clockRef.current}>{children}</SceneClockContext.Provider>;
}
