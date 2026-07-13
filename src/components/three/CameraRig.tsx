"use client";

import { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSceneClock } from "./InteractionController";
import { CAMERA, REDUCED_MOTION_SCALE } from "@/lib/three/sceneConfig";

const BASE_POSITION = new THREE.Vector3(...CAMERA.position);
const LOOK_TARGET = new THREE.Vector3(0, 0, 0);

/**
 * Static, product-photography framing (Concept A restraint) with a barely
 * perceptible autonomous micro-orbit (Concept C "alive at rest") and a
 * shallow pointer parallax — the Signet itself leans toward the cursor,
 * the camera only contributes a small complementary offset (Signet spec §Camera).
 */
export function CameraRig() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const clock = useSceneClock();

  useFrame((state) => {
    const camera = cameraRef.current;
    if (!camera) return;

    const motionScale = clock.reducedMotion ? REDUCED_MOTION_SCALE : 1;

    const orbitAngle = (state.clock.elapsedTime / CAMERA.microOrbitPeriodSeconds) * Math.PI * 2;
    const orbitX = Math.cos(orbitAngle) * CAMERA.microOrbitRadius * motionScale;
    const orbitY = Math.sin(orbitAngle) * CAMERA.microOrbitRadius * 0.6 * motionScale;

    const parallaxX = clock.pointer.x * CAMERA.parallaxMaxOffset;
    const parallaxY = clock.pointer.y * CAMERA.parallaxMaxOffset * 0.6;

    const dolly = clock.scrollProgress * 0.6;

    camera.position.set(
      BASE_POSITION.x + orbitX + parallaxX,
      BASE_POSITION.y + orbitY + parallaxY,
      BASE_POSITION.z - dolly,
    );
    camera.lookAt(LOOK_TARGET);
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={CAMERA.position}
      fov={CAMERA.fov}
      near={0.1}
      far={50}
    />
  );
}
