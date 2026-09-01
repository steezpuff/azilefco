import { Reveal, LineReveal } from "../components/Reveal";
import { FinalCTA } from "../components/FinalCTA";

export function ContactPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <h1 className="display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02]">
          <LineReveal immediate lines={[<span>Let's <span className="text-glint">talk.</span></span>]} />
        </h1>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-muted">
            Email me your idea, chaotic or not. Real replies within 24 hours &mdash; no contact
            form black hole.
          </p>
        </Reveal>
      </div>
      <FinalCTA />
    </div>
  );
}
