"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSceneClock } from "../InteractionController";
import { BREATH, POINTER_LEAN, REDUCED_MOTION_SCALE } from "@/lib/three/sceneConfig";
import { CrystalCore } from "./CrystalCore";
import { GlassRibbon } from "./GlassRibbon";
import { LightSeed } from "./LightSeed";

/**
 * The Signet — composes CrystalCore + GlassRibbon + LightSeed and owns the
 * group-level breathing scale, idle rotation, pointer lean, and scroll
 * recession described in the approved Signet spec. Nothing here is ever
 * perfectly still (Design Bible §9).
 */
export function Signet() {
  const groupRef = useRef<THREE.Group>(null);
  const clock = useSceneClock();

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;

    const motionScale = clock.reducedMotion ? REDUCED_MOTION_SCALE : 1;

    const breathScale = 1 + clock.breathPhase * BREATH.scaleAmplitude * motionScale;
    const recessionScale = 1 - clock.scrollProgress * 0.35;
    group.scale.setScalar(breathScale * recessionScale);

    const leanX = clock.pointer.y * POINTER_LEAN.maxRadians;
    const leanY = clock.pointer.x * POINTER_LEAN.maxRadians;
    group.rotation.set(leanX, leanY + clock.idleRotation, 0);

    group.position.z = -clock.scrollProgress * 1.6;
  });

  return (
    <group ref={groupRef}>
      <CrystalCore />
      <GlassRibbon />
      <LightSeed />
    </group>
  );
}
