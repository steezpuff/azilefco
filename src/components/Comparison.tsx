import type { PointerEvent } from "react";
import { Reveal } from "./Reveal";

function handleSpotMove(e: PointerEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
  e.currentTarget.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
}

const rows = ["Who builds it", "The design", "The AI", "Security & compliance", "The cost", "The result"];

const columns = [
  {
    eyebrow: "You, a template, and a prayer",
    title: "Do it yourself",
    values: [
      "You. At 1am. Fueled by YouTube tutorials.",
      "Looks exactly like the template it is",
      "You vs. the AI tool. The tool wins.",
      "A problem for future you",
      "Free-ish, except for your sanity",
      "Screams “I made this in a weekend”",
    ],
    variant: "plain" as const,
  },
  {
    eyebrow: "A team, an office, and a 40% markup",
    title: "A typical agency",
    values: [
      "An intern you'll never meet",
      "Designed by committee, feels like it",
      "“AI-powered” on the deck, same slow process",
      "A line item nobody reads",
      "You're paying for their office plants too",
      "Fine. Forgettable. Over budget.",
    ],
    variant: "plain" as const,
  },
  {
    eyebrow: "One weirdo, start to finish",
    badge: "Obviously",
    title: "Me",
    values: [
      "Me. Start to finish. You text the person actually doing the work.",
      "Sharp enough to convert, pretty enough to screenshot",
      "I boss the AI around, not the other way around",
      "Paranoid in a good way — ex-cybersecurity",
      "One price. No surprise invoices.",
      "Premium. Working. On time. Shocking, I know.",
    ],
    variant: "highlight" as const,
  },
];

export function Comparison() {
  return (
    <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
      {columns.map((col, ci) => (
            <Reveal
              key={col.title}
              delay={ci * 0.08}
              className={`h-full ${col.variant === "highlight" ? "order-first md:order-none" : ""}`}
            >
              <div
                onPointerMove={handleSpotMove}
                className={`spot flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  col.variant === "highlight" ? "glass-accent shadow-2xl shadow-black/40" : "glass"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10.5px] tracking-[0.18em] uppercase ${
                      col.variant === "highlight" ? "text-accent-bright" : "text-muted"
                    }`}
                  >
                    {col.eyebrow}
                  </span>
                  {col.badge && (
                    <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[9.5px] tracking-[0.14em] text-accent-ink uppercase">
                      {col.badge}
                    </span>
                  )}
                </div>
                <h3 className="display mt-3 text-[clamp(1.6rem,2.4vw,2rem)] leading-none">{col.title}</h3>
                <ul className="mt-6 flex grow flex-col gap-3.5 border-t border-line pt-5">
                  {rows.map((row, ri) => (
                    <li key={row}>
                      <p className="font-mono text-[9.5px] tracking-[0.16em] text-faint uppercase">{row}</p>
                      <p
                        className={`mt-0.5 text-[13.5px] leading-snug ${
                          col.variant === "highlight" ? "text-fg" : "text-muted"
                        }`}
                      >
                        {col.values[ri]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
        </Reveal>
      ))}
    </div>
  );
}
