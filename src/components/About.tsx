import { LineReveal } from "./Reveal";
import { Comparison } from "./Comparison";

export function About() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <h2 className="display text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.02]">
          <LineReveal lines={[<span>The brutally <span className="text-glint">honest comparison.</span></span>]} />
        </h2>

        <Comparison />
      </div>
    </section>
  );
}
