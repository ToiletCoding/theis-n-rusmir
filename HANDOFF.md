# Theis n' Rusmir — Project Handoff

Paste this whole message into your Claude session after cloning the repo.

## What this is
A Next.js marketing site for "Theis n' Rusmir" — two friends (bodybuilders,
Copenhagen) starting an online 1:1 coaching business and building it in
public. Repo: https://github.com/ToiletCoding/theis-n-rusmir (private).

## Visual direction
Brief: "Scandinavian restraint × controlled chaos." Premium Copenhagen
fashion-studio aesthetic meets bodybuilding meets editorial magazine meets
industrial architecture, with a lowkey nod to hardcore-streetwear branding
(Stay Cold Apparel-style bold uppercase impact type). Explicitly avoid:
neon green, generic dumbbell icons, stock PT photos, "UNLEASH YOUR BEAST"
energy, gradients, corporate wellness look, generic SaaS cards.

Concretely, that means:
- Editorial serif (Fraunces) for big display headlines, clean sans
  (General Sans) for everything else, and a bold condensed impact face
  (Anton) used ONLY as an accent on stamps/badges and giant background
  "ghost numerals" — never for body copy or main headlines.
- Palette tokens: off-white `#F2EFEA`, cream `#EAE4D9`, near-black
  `#121212`, charcoal `#2B2B2B`, navy `#10151F`, steel `#B8BCC0`. No other
  colors — vary mood with tone, not hue.
- "Controlled chaos" = hard-edged sticker shadows (no blur, `4px 4px 0 0`
  offsets), steep rotation (±5-6deg) on stamps/pull-quotes, giant outline
  numerals bleeding behind headlines, a halftone dot texture on dark
  section breaks, images overlapping their text columns instead of tidy
  grid lanes. Restraint = generous whitespace, hairline rules, no rounded
  corners anywhere, no drop shadows other than the hard sticker kind.
- Grain texture (SVG feTurbulence, layered via `.grain` / `.grain-ambient`
  utility classes in `globals.css`) runs through every section, not just
  photos — keeps it from feeling flat/digital.

## Stack
Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 (CSS-first config
via `@theme` in `src/app/globals.css`, no `tailwind.config.js`) + Framer
Motion.

## Running it
```bash
npm install
npm run dev   # hardcoded to port 3100 in package.json — port 3000 may be
              # taken by other local projects on this machine
```

## What's built
- **Design system** (`src/app/style-guide/page.tsx`): type scale, palette,
  buttons, notation, EditorialPlaceholder demo. Not linked from nav, just
  a reference page.
- **Homepage** (`src/app/page.tsx`): Hero (real photos of both founders,
  split left/right), Manifesto (3 pillars, asymmetric editorial layout),
  SectionBreak (dark halftone interstitial), Founders (bios + real
  photos + quotes).
- **Coaching application** (`src/app/apply/page.tsx` →
  `src/components/apply/ApplyFlow.tsx`): a 10-question one-at-a-time
  wizard (typeform-style), frontend-only — `console.log`s the payload and
  shows a styled confirmation screen. Every "Apply for coaching" CTA
  should link to `/apply`.
- Real founder photos live in `public/founders/` (`theis.jpg`,
  `rusmir.jpg`, `rusmir-full.jpg`). `EditorialPlaceholder` (in
  `src/components/ui/EditorialPlaceholder.tsx`) can render either a
  gradient placeholder (pass `label`) or a real photo (pass `src` too) —
  real photos get grayscale + a tone-matched duotone multiply overlay so
  candid phone photos still sit in the site's palette.

## What's NOT built yet (per the original brief, skipped so far)
- Coaching philosophy section, Founding Clients offer section, "The
  Pursuit" story section (YouTube/Instagram/TikTok placeholder links),
  Pursuit 001 teaser (apparel mood beat), Final CTA section.
- Full mobile/a11y/perf polish pass.
- Deployment. A Vercel project (`tn-r/theis-n-rusmir`) exists but is
  **not connected** to the GitHub repo — the CLI's auto-connect failed
  (needs the Vercel GitHub App authorized in the browser) and the user
  chose to hold off on deploying for now, working from localhost only.

## Key reusable components (reuse these, don't reinvent)
- `src/components/layout/Container.tsx` — `Container`, `Grid` (12-col,
  asymmetric via `col-span-*`/`col-start-*`), `Section` (handles
  tone/background + ambient grain automatically).
- `src/components/ui/EditorialPlaceholder.tsx` — see above.
- `src/components/ui/Button.tsx` — `Button`, `ButtonLink` (hard sticker
  shadow, press-to-collapse interaction), `ArrowLink` (secondary,
  underline + nudging arrow).
- `src/components/ui/Notation.tsx` — `Notation` (small-caps letterspaced
  editorial tag like "T&R / 001 — COPENHAGEN"), `Rule` (hairline divider).
- `src/components/motion/Reveal.tsx` — `Reveal`, `Stagger`/`RevealItem`
  scroll-triggered fade/slide utilities, respect `prefers-reduced-motion`
  automatically.
- CSS utilities worth knowing (`src/app/globals.css`): `.stamp` /
  `.stamp-badge` (sticker tags), `.ghost-numeral` (giant outline numeral
  background type), `.halftone` (dot-screen texture), `.rotate-slight` /
  `.rotate-slight-reverse`, `.impact-text` (forces the Anton face on an
  element that already sets its own font via another class like
  `.notation`).

## Fonts
- General Sans: self-hosted (`src/fonts/GeneralSans-Variable*.woff2`) —
  downloaded from Fontshare, free commercial license included at
  `public/fonts-license/GeneralSans-LICENSE.txt`. Not on Google Fonts.
- Fraunces: `next/font/google`, variable weight, axes SOFT/WONK/opsz.
- Anton: `next/font/google`, single weight 400, accent-only.
All wired in `src/fonts/fonts.ts` and `src/app/layout.tsx`.

## Gotchas
- Tailwind v4: no config file, tokens are CSS custom properties in
  `@theme` — extend the palette/type-scale there, not in a JS config.
- `!important` on Tailwind utilities uses trailing syntax in v4:
  `class!`, not `!class`.
- Custom CSS classes in `@layer utilities` in `globals.css` can win
  cascade fights against Tailwind's own utilities for the same property
  if you're not careful about property overlap (e.g. don't put
  `font-family` in a class also meant to be layered with `.notation`,
  which also sets `font-family` — see `.impact-text` for the workaround
  pattern).
- Real photos are cropped from source images with Pillow (installed via
  pip3 --user) — `sips`'s `--cropOffset` semantics are confusing/
  unreliable, Pillow was more predictable for pixel-exact crops.
