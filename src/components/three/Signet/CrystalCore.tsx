"use client";

import { useMemo } from "react";
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { SIGNET } from "@/lib/three/sceneConfig";

/**
 * Precision-faceted "cut gem" volume — the abstraction of the Signet's "A"
 * (structure, discipline). Hand-authoring this in a DCC tool per the Signet
 * spec isn't possible from this environment, so it's built as a tuned
 * low-subdivision polyhedron instead. `IcosahedronGeometry` at detail 0
 * already generates non-shared, per-face vertices, so `computeVertexNormals()`
 * produces flat, hard-edged facets rather than a smoothed sphere — the same
 * visual read as an authored hard-surface mesh. Swappable for a real glTF
 * later without touching the surrounding architecture.
 */
export function CrystalCore() {
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(SIGNET.coreRadius, 0);
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh geometry={geometry}>
      <MeshTransmissionMaterial
        transmission={1}
        roughness={0.06}
        thickness={0.9}
        ior={1.5}
        chromaticAberration={0.035}
        anisotropy={0.1}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        envMapIntensity={1.4}
        color="#EEF2FF"
        backside={false}
        resolution={512}
        samples={6}
      />
    </mesh>
  );
}
