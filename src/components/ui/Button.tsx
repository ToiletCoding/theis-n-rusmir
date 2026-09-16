import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline";
type Tone = "dark" | "light";

// Hard sticker shadow — no blur, and it collapses on press instead of
// hovering, like a paper cutout getting pushed flat against the page.
const base =
  "notation group inline-flex items-center justify-center gap-3 border-2 px-8 py-4 shadow-[4px_4px_0_0_var(--btn-ink)] transition-[background-color,color,box-shadow,transform] duration-150 ease-out cursor-pointer active:translate-x-[4px] active:translate-y-[4px] active:shadow-none motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0";

const variants: Record<Tone, Record<Variant, string>> = {
  dark: {
    solid:
      "[--btn-ink:var(--color-near-black)] border-near-black bg-near-black text-off-white hover:bg-transparent hover:text-near-black",
    outline:
      "[--btn-ink:var(--color-near-black)] border-near-black text-near-black hover:bg-near-black hover:text-off-white",
  },
  light: {
    solid:
      "[--btn-ink:var(--color-off-white)] border-off-white bg-off-white text-near-black hover:bg-transparent hover:text-off-white",
    outline:
      "[--btn-ink:var(--color-off-white)] border-off-white text-off-white hover:bg-off-white hover:text-near-black",
  },
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  tone?: Tone;
  className?: string;
};

export function Button({
  children,
  variant = "solid",
  tone = "dark",
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[tone][variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "solid",
  tone = "dark",
  className,
  ...props
}: CommonProps &
  { href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={cn(base, variants[tone][variant], className)} {...props}>
      {children}
    </Link>
  );
}

type ArrowLinkProps = {
  children: React.ReactNode;
  href?: string;
  tone?: Tone;
  className?: string;
  onClick?: () => void;
};

const arrowBase =
  "notation group inline-flex items-center gap-3 border-b pb-1 transition-colors duration-300 cursor-pointer";

const arrowTones: Record<Tone, string> = {
  dark: "border-near-black/25 text-near-black hover:border-near-black",
  light: "border-off-white/30 text-off-white hover:border-off-white",
};

function ArrowGlyph() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
    >
      &#8594;
    </span>
  );
}

/** Secondary action: text with a hairline underline and a nudging arrow. */
export function ArrowLink({
  children,
  href,
  tone = "dark",
  className,
  onClick,
}: ArrowLinkProps) {
  const classes = cn(arrowBase, arrowTones[tone], className);

  if (!href) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
        <ArrowGlyph />
      </button>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {children}
      <ArrowGlyph />
    </Link>
  );
}
