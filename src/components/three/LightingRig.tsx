"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { createProceduralEnvironmentTexture } from "@/lib/three/environment";
import { SCENE_COLORS } from "@/lib/three/sceneConfig";

/**
 * Three-point cool light rig (Design Bible §12) plus a procedurally
 * generated environment map. The Signet's facets read their reflections
 * from this environment far more than from the direct lights below, so it's
 * generated on mount rather than sourced from a stock/photographic HDRI —
 * the fastest way to accidentally reintroduce off-brand warm tones.
 */
export function LightingRig() {
  const { gl, scene } = useThree();

  useEffect(() => {
    const texture = createProceduralEnvironmentTexture();
    const pmremGenerator = new THREE.PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();
    const envRenderTarget = pmremGenerator.fromEquirectangular(texture);

    scene.environment = envRenderTarget.texture;

    return () => {
      texture.dispose();
      pmremGenerator.dispose();
      envRenderTarget.texture.dispose();
      scene.environment = null;
    };
  }, [gl, scene]);

  return (
    <>
      {/* Key light — electric blue, primary specular source */}
      <directionalLight position={[-2.4, 2.6, 2.2]} intensity={1.4} color={SCENE_COLORS.accentBlue} />
      {/* Fill light — indigo, prevents a dead-black shadow side */}
      <directionalLight position={[2.2, -1.2, -1.6]} intensity={0.5} color={SCENE_COLORS.accentIndigo} />
      {/* Rim light — violet, defines the silhouette edge */}
      <directionalLight position={[-1.4, 0.4, -2.8]} intensity={0.9} color={SCENE_COLORS.accentViolet} />
      <ambientLight intensity={0.18} color={SCENE_COLORS.gray200} />
    </>
  );
}
