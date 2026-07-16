import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { HERO, HOW_IT_WORKS, SITE } from "@/lib/site-config";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <SectionLabel index="02" label={HOW_IT_WORKS.eyebrow} />
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-snug sm:text-5xl">
          {HOW_IT_WORKS.headline.map((line, index) => (
            <span key={line} className={index === HOW_IT_WORKS.headlineEmphasisIndex ? "italic text-gold" : undefined}>
              {line}
              {index < HOW_IT_WORKS.headline.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
      </Reveal>

      <div className="mt-16 space-y-16 border-t border-border pt-14">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.25em] text-gold uppercase">{HOW_IT_WORKS.you.label}</p>
          <p className="mt-4 max-w-xl text-xl text-foreground">{HOW_IT_WORKS.you.description}</p>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-medium tracking-[0.25em] text-gold uppercase">{HOW_IT_WORKS.me.label}</p>
          </Reveal>
          <div className="mt-8 space-y-10 border-l border-gold-dim pl-8">
            {HOW_IT_WORKS.me.steps.map((step, index) => (
              <Reveal key={step.title} delay={0.05 * index}>
                <div className="relative">
                  <span className="absolute top-1.5 -left-[calc(2rem+3px)] size-1.5 rounded-full bg-gold" />
                  <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{step.step}</p>
                  <h3 className="mt-2 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="text-xs font-medium tracking-[0.25em] text-gold uppercase">{HOW_IT_WORKS.together.label}</p>
          <p className="mt-4 max-w-xl text-xl text-foreground">{HOW_IT_WORKS.together.description}</p>
          <Button
            render={<a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="mt-8 h-12 rounded-full bg-gold px-7 text-base text-background hover:bg-gold/85"
          >
            {HERO.primaryCta}
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
