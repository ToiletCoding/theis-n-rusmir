import { Container, Grid, Section } from "@/components/layout/Container";
import { ArrowLink, Button, ButtonLink } from "@/components/ui/Button";
import { EditorialPlaceholder } from "@/components/ui/EditorialPlaceholder";
import { Notation, Rule } from "@/components/ui/Notation";
import { Reveal, RevealItem, Stagger } from "@/components/motion/Reveal";

export default function Home() {
  return (
    <main>
      <Section space="normal" tone="off-white">
        <Container>
          <Notation
            items={["T&R / 001", "THE PURSUIT", "COPENHAGEN / DENMARK", "EST. 2026"]}
          />
          <Rule className="mt-6 mb-16" />
          <Grid>
            <div className="col-span-4 md:col-span-7">
              <h1 className="font-display text-display-1">Design system</h1>
            </div>
            <div className="col-span-4 self-end md:col-span-4 md:col-start-9">
              <p className="text-lede max-w-[38ch]">
                Foundation only — type scale, palette, placeholder, buttons, notation and
                motion. No page content yet.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section space="normal" tone="cream">
        <Container>
          <Notation items={["01", "TYPE SCALE"]} />
          <Rule className="mt-6 mb-14" />
          <Stagger className="space-y-10">
            <RevealItem>
              <p className="caption mb-3 text-near-black/40">display-1 / Fraunces</p>
              <p className="font-display text-display-1">The pursuit</p>
            </RevealItem>
            <RevealItem>
              <p className="caption mb-3 text-near-black/40">display-2 / Fraunces</p>
              <p className="font-display text-display-2">Aesthetics, knowledge</p>
            </RevealItem>
            <RevealItem>
              <p className="caption mb-3 text-near-black/40">display-3 / Fraunces</p>
              <p className="font-display text-display-3">Your pursuit. Our attention.</p>
            </RevealItem>
            <RevealItem>
              <p className="caption mb-3 text-near-black/40">
                display-4 / General Sans medium
              </p>
              <p className="text-display-4 font-medium">Founding clients / 001</p>
            </RevealItem>
            <RevealItem>
              <p className="caption mb-3 text-near-black/40">lede / General Sans</p>
              <p className="text-lede max-w-[46ch]">
                Build a physique you are proud of, and the confidence that comes with it.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="caption mb-3 text-near-black/40">body / General Sans</p>
              <p className="text-body max-w-[62ch] text-near-black/75">
                Personalised programming, regular check-ins, honest adjustments. Two friends
                learning in public and taking a small number of people with them.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="caption mb-3 text-near-black/40">notation / caption</p>
              <div className="flex flex-wrap items-baseline gap-6">
                <Notation tone="dark">T&amp;R / 001 — COPENHAGEN</Notation>
                <span className="caption text-near-black/45">
                  Photo: Theis + Rusmir, editorial lighting
                </span>
              </div>
            </RevealItem>
          </Stagger>
        </Container>
      </Section>

      <Section space="normal" tone="off-white">
        <Container>
          <Notation items={["02", "PALETTE"]} />
          <Rule className="mt-6 mb-14" />
          <Grid gap="tight">
            {[
              { name: "off-white", hex: "#F2EFEA", className: "bg-off-white" },
              { name: "cream", hex: "#EAE4D9", className: "bg-cream" },
              { name: "steel", hex: "#B8BCC0", className: "bg-steel" },
              { name: "charcoal", hex: "#2B2B2B", className: "bg-charcoal" },
              { name: "navy", hex: "#10151F", className: "bg-navy" },
              { name: "near-black", hex: "#121212", className: "bg-near-black" },
            ].map((swatch) => (
              <div key={swatch.name} className="col-span-2">
                <div
                  className={`grain h-28 border border-near-black/12 ${swatch.className}`}
                />
                <p className="caption mt-3 text-near-black/60">{swatch.name}</p>
                <p className="caption text-near-black/35">{swatch.hex}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section space="normal" tone="cream">
        <Container>
          <Notation items={["03", "EDITORIAL PLACEHOLDER"]} />
          <Rule className="mt-6 mb-14" />
          <Grid gap="tight">
            <Reveal className="col-span-4 md:col-span-5">
              <EditorialPlaceholder
                label="Theis + Rusmir, full-body, editorial lighting, Copenhagen loft"
                index="001"
                tone="off-white"
                ratio="aspect-[4/5]"
              />
            </Reveal>
            <Reveal
              delay={0.08}
              className="col-span-4 md:col-span-4 md:col-start-7 md:mt-20"
            >
              <EditorialPlaceholder
                label="Back detail, low side light, bare concrete wall"
                index="002"
                tone="navy"
                ratio="aspect-[3/4]"
              />
            </Reveal>
            <Reveal delay={0.16} className="col-span-4 md:col-span-11 md:col-start-2">
              <EditorialPlaceholder
                label="Wide studio shot, old wooden floor, steel rail"
                index="003"
                tone="charcoal"
                ratio="aspect-[16/9]"
              />
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Section space="normal" tone="off-white">
        <Container>
          <Notation items={["04", "ACTIONS"]} />
          <Rule className="mt-6 mb-14" />
          <div className="flex flex-wrap items-center gap-x-10 gap-y-8">
            <ButtonLink href="#">Apply for coaching</ButtonLink>
            <Button variant="outline">Secondary action</Button>
            <ArrowLink href="#">Follow the pursuit</ArrowLink>
          </div>
        </Container>
      </Section>

      <Section space="normal" tone="navy">
        <Container>
          <Notation items={["05", "ACTIONS ON DARK"]} tone="light" className="opacity-60" />
          <Rule tone="light" className="mt-6 mb-14" />
          <div className="flex flex-wrap items-center gap-x-10 gap-y-8">
            <ButtonLink href="#" tone="light">
              Apply for coaching
            </ButtonLink>
            <Button variant="outline" tone="light">
              Secondary action
            </Button>
            <ArrowLink href="#" tone="light">
              Follow the pursuit
            </ArrowLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
