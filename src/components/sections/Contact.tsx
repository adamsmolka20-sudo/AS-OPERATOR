"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { CONTACT, SITE } from "@/lib/site-config";

interface ContactFormState {
  name: string;
  email: string;
  handle: string;
  followers: string;
}

const EMPTY_FORM: ContactFormState = { name: "", email: "", handle: "", followers: "" };

/**
 * No backend is wired up yet (Phase 2 gap, tracked in PROJECT_ROADMAP.md) —
 * `mailto:` is a real, honest, dependency-free submission path rather than
 * a form that looks functional but silently does nothing.
 */
function buildMailtoUrl(form: ContactFormState): string {
  const subject = encodeURIComponent(`AS Operator inquiry from ${form.name || "a creator"}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nInstagram/TikTok: ${form.handle}\nFollowers: ${form.followers}`,
  );
  return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}

export function Contact() {
  const [form, setForm] = useState<ContactFormState>(EMPTY_FORM);

  function handleChange(field: keyof ContactFormState) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildMailtoUrl(form);
  }

  return (
    <section id="contact" className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <SectionLabel index="05" label={CONTACT.eyebrow} />
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif text-3xl leading-snug sm:text-5xl">
          {CONTACT.headline} <br className="hidden sm:block" />
          <em className="text-gold">{CONTACT.headlineEmphasis}</em>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <form onSubmit={handleSubmit} className="mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
              Name
            </Label>
            <Input id="contact-name" required value={form.name} onChange={handleChange("name")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email" className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
              Email
            </Label>
            <Input id="contact-email" type="email" required value={form.email} onChange={handleChange("email")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-handle" className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
              Instagram / TikTok handle
            </Label>
            <Input id="contact-handle" value={form.handle} onChange={handleChange("handle")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-followers" className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
              Current follower count
            </Label>
            <Input id="contact-followers" value={form.followers} onChange={handleChange("followers")} />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 sm:col-span-2">
            <Button type="submit" size="lg" className="h-12 rounded-full bg-gold px-7 text-base text-background hover:bg-gold/85">
              {CONTACT.submitLabel}
              <ArrowRight className="size-4" />
            </Button>
            <span className="text-sm text-muted-foreground">or</span>
            <Button
              type="button"
              variant="outline"
              size="lg"
              render={<a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              className="h-12 rounded-full border-gold-dim px-7 text-base text-gold hover:bg-gold/10"
            >
              {CONTACT.ctaLabel}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
