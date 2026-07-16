"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

/**
 * Appears once the hero has scrolled past (Design Bible v3 §18) so it never
 * duplicates the hero's own CTA in the same viewport, then stays visible
 * for the rest of the scroll.
 */
export function StickyBookCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed right-6 bottom-6 z-50 sm:right-10 sm:bottom-10"
        >
          <Button
            render={<a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="h-12 rounded-full bg-gold px-6 text-base text-background shadow-[var(--shadow-float)] hover:bg-gold/85"
          >
            Book a Call
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
