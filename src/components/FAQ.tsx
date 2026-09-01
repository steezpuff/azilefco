import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, LineReveal } from "./Reveal";

const faqs = [
  {
    q: "If it's just AI, why can't I do it myself?",
    a: "You can! And you'll get about 80% of the way there before rage-quitting, because raw AI output is generic by default. You bring the idea, I bring the taste, the judgment, and the stubbornness to actually finish it.",
  },
  {
    q: "Isn't AI-built work just generic?",
    a: "Left completely alone, yes — painfully so. That's the whole job: making sure your thing doesn't look like everyone else's ChatGPT homework. You're not paying for the AI, you're paying for the taste.",
  },
  {
    q: "How fast is fast?",
    a: "A landing page in days. A full site, store, or brand package in a week, tops. AI systems in two weeks, because robots need supervision. You get a real deadline upfront and a live link from day one — no vague “soon.”",
  },
  {
    q: "Who owns the work?",
    a: "You. All of it — the code, the files, the domain, your name on everything. No lock-in, no ransom fees if you ever want to leave.",
  },
  {
    q: "What do you charge?",
    a: "One fixed price, agreed before we start. No hourly billing, no mystery invoices, no agency-sized markup. The real number shows up after a 15-minute call, not a 40-page proposal.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-line bg-bg-deep py-28 sm:py-36">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="display relative mt-5 text-[clamp(2.3rem,5.2vw,4.2rem)] leading-[1.02]">
              <LineReveal
                lines={["Questions you're", <span>too polite <span className="text-glint">to ask.</span></span>]}
              />
            </h2>
          </div>

          <div>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              return (
                <Reveal key={faq.q} delay={i * 0.05}>
                  <div className="border-t border-line last:border-b">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span
                        className={`text-[16.5px] font-medium tracking-[-0.01em] transition-colors ${
                          isOpen ? "text-fg" : "text-fg/80"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <motion.span
                        className="mt-1 shrink-0 font-mono text-[18px] leading-none text-accent"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          className="overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.21, 0.7, 0.2, 1] }}
                        >
                          <p className="max-w-[64ch] pb-7 text-[15px] leading-relaxed text-muted">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
