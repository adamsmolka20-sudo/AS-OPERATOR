"use client";

import dynamic from "next/dynamic";
import { HeroFallback } from "./fallback/HeroFallback";

/**
 * `dynamic(..., { ssr: false })` is only legal from a Client Component, so
 * this thin wrapper exists purely to keep that boundary out of page.tsx —
 * the page itself stays a Server Component (COMPONENT_GUIDELINES.md: client
 * boundaries as low in the tree as possible).
 */
const HeroScene = dynamic(() => import("./HeroScene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export function HeroSceneLoader() {
  return <HeroScene />;
}
