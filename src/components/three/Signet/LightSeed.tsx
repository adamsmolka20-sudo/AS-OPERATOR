"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSceneClock } from "../InteractionController";
import { BREATH, SCENE_COLORS } from "@/lib/three/sceneConfig";

const BASE_INTENSITY = 1.1;

/**
 * The single seed of light the Signet's internal glow emanates from — every
 * other glow (the ribbon's traveling bloom) reads as originating here, per
 * the Signet spec's "internal glow" section.
 */
export function LightSeed() {
  const lightRef = useRef<THREE.PointLight>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const clock = useSceneClock();

  const dimColor = useMemo(() => new THREE.Color(SCENE_COLORS.accentBlue), []);
  const hotColor = useMemo(() => new THREE.Color("#FFFFFF"), []);

  useFrame(() => {
    const breathUnit = clock.breathPhase * 0.5 + 0.5;

    if (lightRef.current) {
      lightRef.current.intensity = BASE_INTENSITY + clock.breathPhase * BREATH.glowAmplitude;
    }
    if (materialRef.current) {
      materialRef.current.color.copy(dimColor).lerp(hotColor, breathUnit * 0.5);
    }
  });

  return (
    <group>
      <pointLight ref={lightRef} color={SCENE_COLORS.accentBlue} intensity={BASE_INTENSITY} distance={4} decay={2} />
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial ref={materialRef} color={SCENE_COLORS.accentBlue} toneMapped={false} />
      </mesh>
    </group>
  );
}
