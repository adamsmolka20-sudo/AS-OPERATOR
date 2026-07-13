"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { damp2 } from "maath/easing";
import { useSceneClock } from "./InteractionController";
import { fresnelGlassFragmentShader, fresnelGlassVertexShader } from "@/lib/three/shaders/fresnelGlass";
import { SCENE_COLORS, BACKGROUND_PANELS } from "@/lib/three/sceneConfig";

interface PanelConfig {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  edgeColor: string;
  /** Larger = closer/more responsive to pointer parallax; smaller = deeper/slower. */
  depthFactor: number;
}

const PANELS: PanelConfig[] = [
  { position: [-1.6, 0.4, -1.8], rotation: [0, 0.35, 0], size: [2.2, 2.8], edgeColor: SCENE_COLORS.accentBlue, depthFactor: 0.5 },
  { position: [1.9, -0.3, -2.6], rotation: [0, -0.28, 0], size: [2.6, 3.2], edgeColor: SCENE_COLORS.accentIndigo, depthFactor: 0.32 },
  { position: [0.4, 1.1, -3.4], rotation: [0, 0.12, 0], size: [3.2, 2.4], edgeColor: SCENE_COLORS.accentViolet, depthFactor: 0.2 },
];

function Panel({ config }: { config: PanelConfig }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const parallax = useRef(new THREE.Vector2(0, 0));
  const clock = useSceneClock();
  const basePosition = useMemo(() => new THREE.Vector3(...config.position), [config.position]);

  const uniforms = useMemo(
    () => ({
      uBaseColor: { value: new THREE.Color(SCENE_COLORS.background) },
      uEdgeColor: { value: new THREE.Color(config.edgeColor) },
      uOpacity: { value: 0.08 },
      uFresnelPower: { value: 2.4 },
    }),
    [config.edgeColor],
  );

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const targetX = clock.pointer.x * BACKGROUND_PANELS.parallaxMultiplier * config.depthFactor;
    const targetY = clock.pointer.y * BACKGROUND_PANELS.parallaxMultiplier * config.depthFactor;
    damp2(parallax.current, [targetX, targetY], BACKGROUND_PANELS.smoothTime, delta);

    mesh.position.set(basePosition.x + parallax.current.x, basePosition.y + parallax.current.y, basePosition.z);
  });

  return (
    <mesh ref={meshRef} position={config.position} rotation={config.rotation}>
      <planeGeometry args={config.size} />
      <shaderMaterial
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
        uniforms={uniforms}
        vertexShader={fresnelGlassVertexShader}
        fragmentShader={fresnelGlassFragmentShader}
      />
    </mesh>
  );
}

/**
 * Two-to-three soft, permanently out-of-focus glass planes behind the
 * Signet (Concept B's layered depth), each parallaxing at a different rate
 * based on depth — kept deliberately secondary to the Signet (Concept A
 * restraint; Design Bible §8 two-visible-glass-layers limit).
 */
export function BackgroundPanels() {
  return (
    <>
      {PANELS.map((config, index) => (
        <Panel key={index} config={config} />
      ))}
    </>
  );
}
