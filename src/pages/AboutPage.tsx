import { Reveal, LineReveal } from "../components/Reveal";
import { About } from "../components/About";

export function AboutPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <h1 className="display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02]">
          <LineReveal immediate lines={[<span>About <span className="text-glint">azilefco.</span></span>]} />
        </h1>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-muted">
            Design, code, AI. One person, zero hand-offs, mildly too online.
          </p>
        </Reveal>
      </div>
      <About />
    </div>
  );
}
