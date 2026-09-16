import { cn } from "@/lib/cn";

type NotationProps = {
  /** Segments joined by an em dash separator, e.g. ["T&R / 001", "THE PURSUIT"]. */
  items?: string[];
  children?: React.ReactNode;
  className?: string;
  tone?: "dark" | "light" | "muted";
};

const tones = {
  dark: "text-near-black",
  light: "text-off-white",
  muted: "text-near-black/45",
} as const;

export function Notation({ items, children, className, tone = "muted" }: NotationProps) {
  return (
    <p className={cn("notation", tones[tone], className)}>
      {items
        ? items.map((item, i) => (
            <span key={item}>
              {i > 0 && <span className="mx-2 opacity-50">&#8212;</span>}
              {item}
            </span>
          ))
        : children}
    </p>
  );
}

type RuleProps = {
  className?: string;
  tone?: "dark" | "light";
};

/** Hairline divider, used as an editorial beat between blocks. */
export function Rule({ className, tone = "dark" }: RuleProps) {
  return (
    <hr
      className={cn(
        "w-full border-t",
        tone === "dark" ? "border-near-black/15" : "border-off-white/20",
        className,
      )}
    />
  );
}
