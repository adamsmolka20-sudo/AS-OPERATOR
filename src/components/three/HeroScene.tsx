"use client";

import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { SCENE_COLORS } from "@/lib/three/sceneConfig";
import { InteractionController } from "./InteractionController";
import { CameraRig } from "./CameraRig";
import { LightingRig } from "./LightingRig";
import { BackgroundPanels } from "./BackgroundPanels";
import { ParticleField } from "./ParticleField";
import { Signet } from "./Signet/Signet";

/**
 * Root of the Hero 3D layer. Dynamically imported with `ssr: false` from
 * the page (see COMPONENT_GUIDELINES.md) — nothing here ever needs to run
 * on the server. Entirely `aria-hidden`; the page provides the equivalent
 * accessible heading/description alongside it.
 */
export function HeroScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const scrollProgressRef = useScrollProgress(sectionRef);

  return (
    <div ref={sectionRef} aria-hidden className="absolute inset-0">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: "high-performance" }}>
        {/* MeshTransmissionMaterial captures whatever is behind it, so the
            scene needs an explicit light background rather than R3F's
            default black clear color leaking into the Signet's facets. */}
        <color attach="background" args={[SCENE_COLORS.background]} />
        <Suspense fallback={null}>
          <InteractionController scrollProgressRef={scrollProgressRef} reducedMotion={reducedMotion}>
            <CameraRig />
            <LightingRig />
            <Signet />
            <BackgroundPanels />
            <ParticleField />
          </InteractionController>
        </Suspense>
      </Canvas>
    </div>
  );
}
