import { Reveal, LineReveal } from "../components/Reveal";
import { Work } from "../components/Work";

export function WorkPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <h1 className="display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02]">
          <LineReveal immediate lines={[<span>Proof, not <span className="text-glint">promises.</span></span>]} />
        </h1>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-muted">
            Every project below started as a boring brief and ended as a live link nobody's
            embarrassed by.
          </p>
        </Reveal>
      </div>
      <Work />
    </div>
  );
}
