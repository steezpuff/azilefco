import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Reveal } from "./Reveal";

function WipeLine({ text, progress, range }: { text: string; progress: MotionValue<number>; range: [number, number] }) {
  const clip = useTransform(progress, range, ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  return (
    <span className="relative block">
      <span className="block text-fg/[0.12]">{text}</span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 block text-transparent"
        style={{ clipPath: clip }}
      >
        <span
          className="bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(90deg, var(--accent), var(--fg))",
            WebkitBackgroundClip: "text",
          }}
        >
          {text}
        </span>
      </motion.span>
    </span>
  );
}

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.25"] });

  return (
    <section className="relative overflow-hidden border-y border-line bg-bg-deep py-32 sm:py-44" ref={ref}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(ellipse, var(--accent-tint) 0%, transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-container px-5 text-center sm:px-7">
        <h2 className="display text-[clamp(2.4rem,7.5vw,6.5rem)] leading-[1.04]">
          <WipeLine text="Anyone can prompt." progress={scrollYProgress} range={[0, 0.55]} />
          <WipeLine text="Most of it looks the same." progress={scrollYProgress} range={[0.2, 0.85]} />
        </h2>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-[44ch] text-[18px] leading-relaxed text-muted sm:text-[20px]">
            The robots can finish a sentence. They can't finish a brand. That part's still on
            me.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
