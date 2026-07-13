"use client";

import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useSceneClock } from "../InteractionController";
import { ribbonGlowFragmentShader, ribbonGlowVertexShader } from "@/lib/three/shaders/ribbonGlow";
import { SCENE_COLORS, SIGNET } from "@/lib/three/sceneConfig";

function buildRibbonCurve(): THREE.CatmullRomCurve3 {
  const segments = 12;
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2;
    const radius = SIGNET.ribbonLoopRadius;
    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * radius * 0.32,
        Math.sin(angle) * radius * 0.55,
      ),
    );
  }
  return new THREE.CatmullRomCurve3(points, true, "catmullrom", 0.5);
}

/**
 * Continuous glass loop winding around/through the CrystalCore — the
 * abstraction of the Signet's "S" (flow, continuity). Frosted, softer
 * material than the core by design (Design Bible: material contrast sells
 * "structure vs. flow" at a glance). A thinner additive mesh along the same
 * path carries the traveling internal glow.
 */
export function GlassRibbon() {
  const clock = useSceneClock();

  const curve = useMemo(() => buildRibbonCurve(), []);
  const tubeGeometry = useMemo(() => new THREE.TubeGeometry(curve, 128, SIGNET.ribbonTubeRadius, 12, true), [curve]);
  const glowGeometry = useMemo(
    () => new THREE.TubeGeometry(curve, 128, SIGNET.ribbonTubeRadius * 0.55, 8, true),
    [curve],
  );

  const glowUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBreath: { value: 0 },
      uColorA: { value: new THREE.Color(SCENE_COLORS.accentBlue) },
      uColorB: { value: new THREE.Color(SCENE_COLORS.accentViolet) },
    }),
    [],
  );

  useFrame((state) => {
    const motionScale = clock.reducedMotion ? 0.15 : 1;
    glowUniforms.uTime.value = state.clock.elapsedTime * motionScale;
    glowUniforms.uBreath.value = clock.breathPhase;
  });

  return (
    <group>
      <mesh geometry={tubeGeometry}>
        <MeshTransmissionMaterial
          transmission={0.75}
          roughness={0.42}
          thickness={0.6}
          ior={1.3}
          chromaticAberration={0}
          anisotropy={0}
          envMapIntensity={0.9}
          color="#B9C6F5"
          attenuationColor="#7C8FEA"
          attenuationDistance={0.8}
          backside={false}
          resolution={256}
          samples={4}
        />
      </mesh>
      <mesh geometry={glowGeometry}>
        <shaderMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={glowUniforms}
          vertexShader={ribbonGlowVertexShader}
          fragmentShader={ribbonGlowFragmentShader}
        />
      </mesh>
    </group>
  );
}
