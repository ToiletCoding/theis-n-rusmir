import { Container, Grid, Section } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { EditorialPlaceholder } from "@/components/ui/EditorialPlaceholder";
import { Notation, Rule } from "@/components/ui/Notation";

export function Founders() {
  return (
    <Section tone="off-white" space="loose">
      <Container>
        <Notation items={["03", "THEIS N' RUSMIR"]} />
        <Rule className="mt-6 mb-16 md:mb-24" />

        <Grid gap="loose">
          {/* Rusmir — taller crop, sits higher */}
          <Reveal from="left" className="relative col-span-4 md:col-span-5 md:col-start-1">
            <div className="relative">
              <EditorialPlaceholder
                label="Rusmir, three-quarter portrait, chest/shoulders emphasis, hard side light"
                tone="cream"
                ratio="aspect-[3/4]"
              />
              <div className="stamp notation rotate-slight-reverse bg-off-white absolute -top-4 -left-4 text-near-black/70 md:-top-5 md:-left-6">
                R / 001
              </div>
            </div>
            <div className="relative z-10 mt-6 md:-mr-10 md:ml-6">
              <h3 className="font-display text-display-4">Rusmir</h3>
              <p className="caption mt-1 text-near-black/40">
                187cm / 85kg &#8212; ~2 years training &#8212; Men&apos;s Physique
              </p>
              <p className="text-body mt-4 max-w-[46ch] text-near-black/75">
                I&apos;m the one who&apos;ll read the study before I&apos;ll take your word for
                it. Chest, shoulders and lats are where I&apos;ve put the work in, but most of
                my time actually goes into the boring stuff — recovery, sleep, the psychology
                of why people quit. I talk too much about all of it. Ask Theis.
              </p>
              <p className="font-display rotate-slight mt-8 inline-block text-2xl italic">
                &ldquo;A man should take care of himself.&rdquo;
              </p>
            </div>
          </Reveal>

          {/* Theis — wider crop, overlaps upward into Rusmir's row for asymmetry */}
          <Reveal
            from="right"
            className="relative col-span-4 md:col-span-5 md:col-start-8 md:-mt-12"
          >
            <div className="relative">
              <EditorialPlaceholder
                label="Theis, relaxed three-quarter portrait, back detail, natural window light"
                tone="charcoal"
                ratio="aspect-[5/6]"
              />
              <div className="stamp notation rotate-slight bg-navy absolute -top-4 -right-4 text-off-white/80 md:-top-5 md:-right-6">
                T / 002
              </div>
            </div>
            <div className="relative z-10 mt-6 md:mr-6 md:-ml-10">
              <h3 className="font-display text-display-4">Theis</h3>
              <p className="caption mt-1 text-near-black/40">
                193cm / 89kg &#8212; ~3 years training &#8212; Men&apos;s Physique
              </p>
              <p className="text-body mt-4 max-w-[46ch] text-near-black/75">
                Back is my thing, everything else I get to eventually. I&apos;m calm about most
                things, funny about the rest, and Rusmir will tell you I&apos;m lazy — he&apos;s
                not entirely wrong, but I show up, and I get it done. Someone has to balance
                him out.
              </p>
              <p className="font-display rotate-slight-reverse mt-8 inline-block text-2xl italic">
                &ldquo;A man should be confident.&rdquo;
              </p>
            </div>
          </Reveal>
        </Grid>

        <Reveal delay={0.15}>
          <p className="caption rotate-slight mt-24 max-w-[52ch] text-near-black/40 md:mt-16">
            Two friends, one competitive streak. Rusmir pushes the pace, Theis pretends not to
            notice and keeps up anyway.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
