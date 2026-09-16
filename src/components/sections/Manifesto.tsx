import { Container, Grid, Section } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Notation, Rule } from "@/components/ui/Notation";

const pillars = [
  {
    index: "01",
    word: "Aesthetics",
    line: "A physique you build on purpose, not by accident.",
    align: "left" as const,
  },
  {
    index: "02",
    word: "Knowledge",
    line: "Evidence over guesswork — explained, not just prescribed.",
    align: "right" as const,
  },
  {
    index: "03",
    word: "Confidence",
    line: "The by-product of doing the work, and knowing it.",
    align: "left" as const,
  },
];

export function Manifesto() {
  return (
    <Section id="the-pursuit" tone="cream" space="loose">
      <Container>
        <Notation items={["02", "THE MANIFESTO"]} />
        <Rule className="mt-6 mb-16 md:mb-24" />

        <div className="space-y-16 md:space-y-6">
          {pillars.map((pillar) => (
            <Reveal key={pillar.index} from={pillar.align === "left" ? "left" : "right"}>
              <Grid gap="tight" className="items-baseline">
                {pillar.align === "left" ? (
                  <>
                    <div className="col-span-4 md:col-span-8">
                      <span className="caption mr-4 align-top text-near-black/35 md:mr-6">
                        {pillar.index}
                      </span>
                      <h2 className="font-display text-display-2 inline">{pillar.word}</h2>
                    </div>
                    <p className="text-body col-span-4 max-w-[30ch] text-near-black/70 md:col-span-3 md:col-start-9">
                      {pillar.line}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-body order-2 col-span-4 max-w-[30ch] text-near-black/70 md:order-1 md:col-span-3 md:col-start-1 md:self-end">
                      {pillar.line}
                    </p>
                    <div className="order-1 col-span-4 text-right md:order-2 md:col-span-8 md:col-start-5 md:text-right">
                      <h2 className="font-display text-display-2 inline">{pillar.word}</h2>
                      <span className="caption ml-4 align-top text-near-black/35 md:ml-6">
                        {pillar.index}
                      </span>
                    </div>
                  </>
                )}
              </Grid>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="notation mt-20 text-near-black/40 md:mt-28">
            Progress &#8212; Purpose &#8212; Balance &#8212; Consistency &#8212; Self-Respect
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
