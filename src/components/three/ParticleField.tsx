"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useSceneClock } from "./InteractionController";
import { particleFieldFragmentShader, particleFieldVertexShader } from "@/lib/three/shaders/particleField";
import { PARTICLES, SCENE_COLORS } from "@/lib/three/sceneConfig";

const ACCENT_COLORS = [SCENE_COLORS.accentBlue, SCENE_COLORS.accentIndigo, SCENE_COLORS.accentViolet];

function buildGeometry(): THREE.BufferGeometry {
  const { count, fieldRadius } = PARTICLES;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const sizes = new Float32Array(count);

  const color = new THREE.Color();

  for (let i = 0; i < count; i += 1) {
    // Uniform-volume distribution within a sphere, biased away from the exact center.
    const radius = fieldRadius * Math.cbrt(0.35 + 0.65 * Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi) - 1.5;

    color.set(ACCENT_COLORS[i % ACCENT_COLORS.length]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    phases[i] = Math.random() * Math.PI * 2;
    sizes[i] = 1 + Math.random() * 2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  return geometry;
}

/**
 * Faint, GPU-instanced light motes drifting at multiple depths around the
 * Signet — deliberately sparse and low-contrast (Concept C ambient life),
 * never competing with the Signet as the focal point.
 */
export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const clock = useSceneClock();
  const { viewport } = useThree();

  const geometry = useMemo(() => buildGeometry(), []);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: viewport.dpr },
    }),
    [viewport.dpr],
  );

  useFrame((state) => {
    const motionScale = clock.reducedMotion ? 0.15 : 1;
    uniforms.uTime.value = state.clock.elapsedTime * motionScale;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.idleRotation * 0.15;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={particleFieldVertexShader}
        fragmentShader={particleFieldFragmentShader}
      />
    </points>
  );
}
