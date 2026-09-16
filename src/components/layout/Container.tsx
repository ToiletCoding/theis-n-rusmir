import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** `bleed` removes the max-width cap so content can run to the viewport edges. */
  bleed?: boolean;
  as?: "div" | "section" | "header" | "footer" | "article";
};

export function Container({
  children,
  className,
  bleed = false,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "px-6 md:px-10 lg:px-14 xl:px-20",
        !bleed && "mx-auto w-full max-w-[1680px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type GridProps = {
  children: React.ReactNode;
  className?: string;
  /** Vertical gap between rows; horizontal gutter stays constant. */
  gap?: "tight" | "normal" | "loose";
};

const gapMap = {
  tight: "gap-x-6 gap-y-6 md:gap-x-8",
  normal: "gap-x-6 gap-y-12 md:gap-x-8 lg:gap-x-10",
  loose: "gap-x-6 gap-y-20 md:gap-x-8 lg:gap-x-10",
} as const;

/**
 * 12-column editorial grid. Children position themselves with `col-start-*` /
 * `col-span-*` so layouts can sit off-axis instead of centered.
 */
export function Grid({ children, className, gap = "normal" }: GridProps) {
  return (
    <div className={cn("grid grid-cols-4 md:grid-cols-12", gapMap[gap], className)}>
      {children}
    </div>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Vertical breathing room. `full` is for viewport-height beats like the hero. */
  space?: "none" | "normal" | "loose" | "full";
  tone?: "off-white" | "cream" | "navy" | "near-black";
};

const spaceMap = {
  none: "",
  normal: "py-(--spacing-section)",
  loose: "py-[calc(var(--spacing-section)*1.35)]",
  full: "min-h-[100svh] flex flex-col justify-end py-16",
} as const;

const toneMap = {
  "off-white": "bg-off-white text-near-black",
  cream: "bg-cream text-near-black",
  navy: "bg-navy text-off-white",
  "near-black": "bg-near-black text-off-white",
} as const;

export function Section({
  children,
  className,
  id,
  space = "normal",
  tone = "off-white",
}: SectionProps) {
  const isDark = tone === "navy" || tone === "near-black";
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden",
        "grain-ambient",
        !isDark && "grain-ambient-light",
        toneMap[tone],
        spaceMap[space],
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
}
