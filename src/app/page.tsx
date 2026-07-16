import { AmbientBackground } from "@/components/motion/AmbientBackground";
import { Hero } from "@/components/sections/Hero";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { StickyBookCall } from "@/components/layout/StickyBookCall";

export default function Home() {
  return (
    <main className="relative">
      <AmbientBackground />
      <Hero />
      <WhatIDo />
      <HowItWorks />
      <WhoThisIsFor />
      <Faq />
      <Contact />
      <Footer />
      <StickyBookCall />
    </main>
  );
}
