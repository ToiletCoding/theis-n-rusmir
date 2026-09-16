import { cn } from "@/lib/cn";

type Tone = "cream" | "off-white" | "navy" | "charcoal";

type EditorialPlaceholderProps = {
  /** What the real photograph should show. Rendered as "PHOTO: {label}". */
  label: string;
  /** Small index mark, e.g. "001" — sits opposite the caption. */
  index?: string;
  tone?: Tone;
  /** Tailwind aspect utility, e.g. "aspect-[3/4]". Ignored when `fill` is set. */
  ratio?: string;
  className?: string;
  /** Hide crop marks for tighter, quieter placements. */
  bare?: boolean;
  /** Absolutely fill the parent instead of sizing by aspect ratio (full-bleed hero use). */
  fill?: boolean;
};

const toneStyles: Record<Tone, { surface: string; ink: string; light: string }> = {
  cream: {
    surface: "bg-cream border-near-black/15",
    ink: "text-near-black/55",
    light: "warm-light",
  },
  "off-white": {
    surface: "bg-off-white border-near-black/12",
    ink: "text-near-black/50",
    light: "warm-light",
  },
  navy: {
    surface: "bg-navy border-off-white/15",
    ink: "text-steel/70",
    light: "warm-light-dark",
  },
  charcoal: {
    surface: "bg-charcoal border-off-white/12",
    ink: "text-steel/65",
    light: "warm-light-dark",
  },
};

export function EditorialPlaceholder({
  label,
  index,
  tone = "cream",
  ratio = "aspect-[4/5]",
  className,
  bare = false,
  fill = false,
}: EditorialPlaceholderProps) {
  const styles = toneStyles[tone];
  const isDark = tone === "navy" || tone === "charcoal";

  return (
    <figure
      className={cn(
        "grain relative isolate overflow-hidden border",
        !isDark && "grain-light",
        styles.surface,
        fill ? "absolute inset-0 h-full w-full" : ratio,
        className,
      )}
      role="img"
      aria-label={`Placeholder for photography: ${label}`}
    >
      <div className={cn("absolute inset-0", styles.light)} aria-hidden="true" />

      {!bare && (
        <div aria-hidden="true" className="absolute inset-4 md:inset-6">
          <span
            className={cn(
              "absolute top-0 left-0 h-3 w-px",
              isDark ? "bg-off-white/25" : "bg-near-black/20",
            )}
          />
          <span
            className={cn(
              "absolute top-0 left-0 h-px w-3",
              isDark ? "bg-off-white/25" : "bg-near-black/20",
            )}
          />
          <span
            className={cn(
              "absolute right-0 bottom-0 h-3 w-px",
              isDark ? "bg-off-white/25" : "bg-near-black/20",
            )}
          />
          <span
            className={cn(
              "absolute right-0 bottom-0 h-px w-3",
              isDark ? "bg-off-white/25" : "bg-near-black/20",
            )}
          />
        </div>
      )}

      {index && (
        <span
          aria-hidden="true"
          className={cn("caption absolute top-5 right-5 md:top-7 md:right-7", styles.ink)}
        >
          {index}
        </span>
      )}

      <figcaption
        className={cn(
          "caption absolute bottom-5 left-5 max-w-[80%] md:bottom-7 md:left-7",
          styles.ink,
        )}
      >
        Photo: {label}
      </figcaption>
    </figure>
  );
}
