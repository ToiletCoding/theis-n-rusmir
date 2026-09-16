import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { SectionBreak } from "@/components/sections/SectionBreak";
import { Founders } from "@/components/sections/Founders";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <SectionBreak />
      <Founders />
    </main>
  );
}
