import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { FAQ } from "@/lib/site-config";

export function Faq() {
  return (
    <section id="faq" className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <SectionLabel index="04" label={FAQ.eyebrow} />
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif text-3xl sm:text-5xl">
          Common <em className="text-gold">questions.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <Accordion className="mt-14 max-w-3xl border-t border-border">
          {FAQ.items.map((item, index) => (
            <AccordionItem key={item.question} value={item.question} className="border-border">
              <AccordionTrigger className="py-6 text-base sm:text-lg">
                <span className="mr-4 text-gold">{String(index + 1).padStart(2, "0")}</span>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
