import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { Work } from "../components/Work";
import { Philosophy } from "../components/Philosophy";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";

export function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Work />
      <Philosophy />
      <About />
      <Services />
      <FAQ />
      <FinalCTA />
    </>
  );
}
