import { useRef, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LineReveal } from "./Reveal";
import { ArrowIcon } from "./ArrowIcon";
import { useTypewriter } from "../hooks/useTypewriter";

const BUILDING_WORDS = ["shiny websites", "brand chaos control", "well-behaved AI", "content that slaps"];

export function Hero() {
  const blobA = useRef<HTMLDivElement>(null);
  const blobB = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const typed = useTypewriter(BUILDING_WORDS);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      if (blobA.current) blobA.current.style.transform = `translate3d(${-380 + relX * 60}px, ${225 + relY * 60}px, 0)`;
      if (blobB.current) blobB.current.style.transform = `translate3d(${-300 + relX * -50}px, ${607 + relY * -50}px, 0)`;
    });
  };

  return (
    <section
      className="relative flex min-h-svh items-center overflow-hidden"
      onPointerMove={onPointerMove}
    >
      <div className="aurora" aria-hidden="true" />
      <div
        ref={blobA}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 size-[760px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, color-mix(in oklch, var(--accent-deep) 22%, transparent) 30%, transparent 62%)",
          willChange: "transform",
          transform: "translate3d(-380px, 225px, 0)",
        }}
      />
      <div
        ref={blobB}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 size-[600px]"
        style={{
          background: "radial-gradient(circle, oklch(0.45 0.12 320 / 0.3) 0%, transparent 64%)",
          willChange: "transform",
          transform: "translate3d(-300px, 607px, 0)",
        }}
      />

      <div className="relative z-[1] mx-auto w-full max-w-container px-5 pt-32 pb-20 sm:px-7">
        <h1 className="display text-[clamp(3rem,8.4vw,7.5rem)] leading-[0.96]">
          <LineReveal
            immediate
            lines={["I make the internet", <span className="text-glint">slightly less broken.</span>]}
          />
        </h1>

        <motion.p
          className="mt-8 max-w-[44ch] text-[17px] leading-relaxed text-muted sm:text-[18px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          For founders who'd rather not launch something that screams "I typed one prompt and
          called it a day." Handmade for years, AI-boosted now &mdash; best of both brains.
        </motion.p>

        <motion.p
          className="mt-6 font-mono text-[13px] tracking-[0.06em] text-faint"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <span className="text-accent">&gt;</span> currently cooking{" "}
          <span className="text-fg" aria-live="off">
            {typed}
          </span>
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[1.1em] w-[7px] translate-y-[2px] animate-caret-blink bg-accent"
          />
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="mailto:azilefco@gmail.com"
            className="shine glass-accent inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-[15px] font-medium text-fg transition-transform duration-300 hover:-translate-y-0.5"
          >
            Steal 15 minutes of my time
            <span
              className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-ink shadow-[0_4px_14px_var(--accent-glow)]"
              aria-hidden="true"
            >
              <ArrowIcon />
            </span>
          </a>
          <Link
            className="shine glass inline-flex items-center rounded-full px-7 py-3.5 text-[15px] font-medium text-fg transition-transform duration-300 hover:-translate-y-0.5"
            to="/work"
          >
            Judge my work
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-5 hidden items-center gap-3 font-mono text-[10px] tracking-[0.26em] text-faint uppercase sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Scroll
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            &darr;
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
