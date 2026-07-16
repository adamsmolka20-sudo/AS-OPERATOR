import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded border border-gold-dim text-xs text-gold">AS</span>
          <div className="text-sm">
            <p className="text-foreground">{SITE.name}</p>
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{SITE.brand}</p>
          </div>
        </div>
        <a href={`mailto:${SITE.email}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          {SITE.email}
        </a>
        <Button
          render={<a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" />}
          nativeButton={false}
          size="sm"
          className="h-10 w-fit rounded-full bg-gold px-5 text-background hover:bg-gold/85"
        >
          Book a Call
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
      <div className="mt-8 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE.name} — {SITE.brand}
        </p>
        <p className="tracking-[0.15em] uppercase">{SITE.tagline}</p>
      </div>
    </footer>
  );
}
