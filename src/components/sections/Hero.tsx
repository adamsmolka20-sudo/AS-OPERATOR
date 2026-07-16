import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { HERO, SITE } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-dvh flex-col justify-between px-6 pt-8 pb-16 sm:px-10 sm:pt-10">
      <Reveal>
        <div className="flex items-center justify-between text-xs tracking-[0.2em] text-muted-foreground uppercase">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded border border-gold-dim text-gold">AS</span>
            <span>{SITE.brand}</span>
          </div>
          <span className="hidden sm:inline">{HERO.eyebrow}</span>
        </div>
      </Reveal>

      <div className="flex flex-1 flex-col justify-center py-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-medium tracking-[0.25em] text-gold uppercase">{SITE.tagline}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.1] sm:text-6xl">
            {HERO.headline.map((line, index) => (
              <span
                key={line}
                className={index === HERO.headlineEmphasisIndex ? "italic text-gold" : undefined}
              >
                {line}
                {index < HERO.headline.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">{HERO.subtext}</p>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button
              render={<a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="h-12 rounded-full bg-gold px-7 text-base text-background hover:bg-gold/85"
            >
              {HERO.primaryCta}
              <ArrowRight className="size-4" />
            </Button>
            <a href="#how-it-works" className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
              {HERO.secondaryCta} ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
