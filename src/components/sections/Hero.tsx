import { Container } from "@/components/layout/Container";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { EditorialPlaceholder } from "@/components/ui/EditorialPlaceholder";
import { Notation } from "@/components/ui/Notation";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-navy">
      {/* Split duo shot: Rusmir left, Theis right — two solo photos standing
          in for a together shot until we get one from an actual shoot. */}
      <div className="absolute inset-0 flex">
        <EditorialPlaceholder
          label="Rusmir"
          src="/founders/rusmir-full.jpg"
          focalPoint="center 15%"
          tone="navy"
          fill
          bare
          className="relative! inset-auto! h-full! w-1/2! border-0"
        />
        <EditorialPlaceholder
          label="Theis"
          src="/founders/theis.jpg"
          focalPoint="center 20%"
          tone="charcoal"
          fill
          bare
          className="relative! inset-auto! h-full! w-1/2! border-0"
        />
      </div>

      {/* Scrim: keeps the headline legible over the placeholder without flattening it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-near-black/85 via-near-black/25 to-transparent"
      />

      {/* Oversized outline numeral bleeding off the top edge — controlled chaos beat. */}
      <span
        aria-hidden="true"
        className="ghost-numeral pointer-events-none absolute -top-[6vw] right-[4vw] text-[38vw] text-steel/55 select-none md:-top-[4vw] md:right-[6vw] md:text-[26vw]"
      >
        01
      </span>

      <div className="stamp-badge rotate-slight absolute top-6 right-6 z-10 flex origin-top-right flex-col items-start gap-1 bg-near-black/50 px-4 py-3 text-off-white sm:px-5 sm:py-3.5 md:top-10 md:right-10 md:px-6 md:py-4">
        <span className="notation impact-text text-sm sm:text-base md:text-lg">
          Applications open
        </span>
        <span className="notation impact-text text-[0.65rem] tracking-wide text-off-white/75 sm:text-xs">
          (50% off for new clients)
        </span>
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
                viewBox="0 0 200 24"
                className="absolute -bottom-3 left-0 h-[0.3em] w-full text-steel md:-bottom-4"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 16 C 36 4, 78 22, 102 8 S 158 20, 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M4 10 C 44 20, 84 4, 108 16 S 162 6, 196 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
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
