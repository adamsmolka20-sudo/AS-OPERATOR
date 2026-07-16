interface SectionLabelProps {
  index: string;
  label: string;
}

/**
 * Numbered wayfinding used across sections in place of a nav bar
 * (Design Bible v3 §11) — a two-digit gold numeral, a tracked uppercase
 * label, and a thin gold divider.
 */
export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 text-xs font-medium tracking-[0.25em] text-gold uppercase">
      <span>{index}</span>
      <span className="h-px w-8 bg-gold-dim" />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}
