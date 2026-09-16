import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function SectionBreak() {
  return (
    <section className="bg-near-black relative isolate overflow-hidden py-24 md:py-32">
      <span
        aria-hidden="true"
        className="ghost-numeral pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[55vw] text-off-white/[0.05] select-none"
      >
        02
      </span>

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
