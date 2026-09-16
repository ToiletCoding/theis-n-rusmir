import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function SectionBreak() {
  return (
    <section className="bg-near-black halftone relative isolate overflow-hidden py-24 text-off-white md:py-32">
      <span
        aria-hidden="true"
        className="ghost-numeral pointer-events-none absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rotate-6 text-[55vw] text-off-white/10 select-none"
      >
        02
      </span>

      <div className="stamp notation absolute top-8 left-6 z-10 -rotate-6 text-off-white md:top-10 md:left-10">
        T&amp;R
      </div>

      <Container className="relative z-10">
        <Reveal>
          <p className="font-display rotate-slight-reverse mx-auto max-w-[18ch] text-center text-3xl text-off-white italic md:text-5xl">
            Two friends, one camera, no shortcuts.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
