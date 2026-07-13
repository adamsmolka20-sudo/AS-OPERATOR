"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Tracks scroll progress (0 = section top at viewport top, 1 = scrolled a
 * full section height past it) as a mutable ref rather than React state —
 * the 3D scene reads this once per frame inside useFrame, so re-rendering
 * the component tree on every scroll pixel would be wasted work.
 */
export function useScrollProgress(sectionRef: RefObject<HTMLElement | null>) {
  const progressRef = useRef(0);
  const frameRequested = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      frameRequested.current = false;
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      progressRef.current = clamp(-top / height, 0, 1);
    };

    const handleScroll = () => {
      if (frameRequested.current) return;
      frameRequested.current = true;
      requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionRef]);

  return progressRef;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
