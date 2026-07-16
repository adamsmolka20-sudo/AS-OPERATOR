import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { WHAT_I_DO } from "@/lib/site-config";

export function WhatIDo() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <SectionLabel index="01" label={WHAT_I_DO.eyebrow} />
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-snug sm:text-5xl">
          Four levers. One outcome — <em className="text-gold">real revenue</em> from the audience you
          already have.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-x-12 gap-y-14 border-t border-border pt-14 sm:grid-cols-2">
        {WHAT_I_DO.items.map((item, index) => (
          <Reveal key={item.title} delay={0.05 * index}>
            <p className="text-sm font-medium tracking-[0.2em] text-gold">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
            <p className="mt-3 max-w-md text-muted-foreground">{item.description}</p>
            <span className="mt-6 block h-px w-10 bg-gold-dim" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
