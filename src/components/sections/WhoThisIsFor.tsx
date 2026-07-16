import { X } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { WHO_FOR } from "@/lib/site-config";

export function WhoThisIsFor() {
  return (
    <section className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <SectionLabel index="03" label={WHO_FOR.eyebrow} />
      </Reveal>

      <div className="mt-14 space-y-14">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">✓ {WHO_FOR.forLabel}</p>
          <p className="mt-4 max-w-3xl font-serif text-2xl leading-snug sm:text-3xl">
            {WHO_FOR.forDescription.split("20k to 100k+ followers").map((part, index, arr) => (
              <span key={index}>
                {part}
                {index < arr.length - 1 && <span className="text-gold">20k to 100k+ followers</span>}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">✕ {WHO_FOR.notForLabel}</p>
          <ul className="mt-4 max-w-2xl divide-y divide-border border-t border-border">
            {WHO_FOR.notFor.map((reason) => (
              <li key={reason} className="flex items-start gap-3 py-4 text-muted-foreground">
                <X className="mt-1 size-4 shrink-0 text-muted-foreground/60" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
