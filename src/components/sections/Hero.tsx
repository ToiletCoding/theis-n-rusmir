import { Container } from "@/components/layout/Container";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { EditorialPlaceholder } from "@/components/ui/EditorialPlaceholder";
import { Notation } from "@/components/ui/Notation";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-navy">
      <EditorialPlaceholder
        label="Theis + Rusmir, full-body, editorial lighting, Copenhagen loft or industrial space"
        tone="navy"
        fill
        bare
        className="border-0"
      />

      {/* Scrim: keeps the headline legible over the placeholder without flattening it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-near-black/85 via-near-black/25 to-transparent"
      />

      {/* Oversized outline numeral bleeding off the top edge — controlled chaos beat. */}
      <span
        aria-hidden="true"
        className="ghost-numeral pointer-events-none absolute -top-[6vw] right-[4vw] text-[38vw] text-steel/40 select-none md:-top-[4vw] md:right-[6vw] md:text-[26vw]"
      >
        01
      </span>

      <div className="stamp notation rotate-slight absolute top-6 right-6 z-10 inline-flex origin-top-right scale-75 text-off-white/70 sm:scale-90 md:top-10 md:right-10 md:scale-100">
        Applications open
      </div>

      <Container className="relative z-10 w-full pb-14 md:pb-20">
        <Reveal>
          <Notation
            items={["T&R / 001", "THE PURSUIT", "COPENHAGEN / DENMARK", "EST. 2026"]}
            tone="light"
            className="mb-8 opacity-70 md:mb-10"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="font-display text-display-1 max-w-[16ch] text-off-white">
            The pursuit starts with{" "}
            <span className="relative inline-block">
              you
              <svg
                aria-hidden="true"
                viewBox="0 0 200 20"
                className="absolute -bottom-2 left-0 h-[0.2em] w-full text-steel md:-bottom-3"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 14 C 40 4, 80 18, 100 10 S 160 2, 198 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-lede mt-8 max-w-[42ch] text-steel md:mt-10">
            A physique you&apos;re proud of, built on purpose. The confidence to match it —
            earned, not borrowed.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-14">
            <ButtonLink href="/apply" tone="light">
              Apply for coaching
            </ButtonLink>
            <ArrowLink href="#the-pursuit" tone="light">
              Follow the pursuit
            </ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
