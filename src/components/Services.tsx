import type { PointerEvent } from "react";
import { Link } from "react-router-dom";
import { Reveal, LineReveal } from "./Reveal";
import { ArrowIcon } from "./ArrowIcon";

const services = [
  {
    num: "01",
    duration: "1 week max",
    title: "Websites and stores",
    desc: "Landing page, full site, or a store that actually sells. Live in a week, not a quarter.",
    items: [
      "A whole website, or just a killer landing page",
      "Shopify or headless — your call",
      "Web app, dashboard, or whatever you're building",
    ],
    goodFor: "Businesses that need to launch, yesterday",
  },
  {
    num: "02",
    duration: "1 week max",
    title: "Brand and content",
    desc: "The face of your business — built to actually convert, not just look nice.",
    items: ["A logo and a whole brand system", "Social posts and emails people open", "Ad creative, on tap"],
    goodFor: "Teams that need to look bigger than they are",
  },
  {
    num: "03",
    duration: "2 weeks max",
    title: "AI systems",
    desc: "Software that does the boring parts so you don't have to.",
    items: ["Custom agents that actually help", "Content on autopilot", "Approval flows that don't need babysitting"],
    goodFor: "Teams drowning in repetitive busywork",
  },
];

function handleSpotMove(e: PointerEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
  e.currentTarget.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
}

export function Services() {
  return (
    <section className="border-t border-line bg-bg-deep py-28 sm:py-36">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <h2 className="display relative mt-5 text-[clamp(2.3rem,5.2vw,4.2rem)] leading-[1.02]">
          <LineReveal lines={["Three ways", <span>to <span className="text-glint">put me to work.</span></span>]} />
        </h2>
        <Reveal delay={0.15}>
          <p className="relative mt-5 max-w-[56ch] text-[17px] leading-relaxed text-muted">
            One person, zero hand-offs. Pick a lane, or don't &mdash; mix and match.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.1} className="h-full">
              <div
                onPointerMove={handleSpotMove}
                className="spot group glass flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="outline-num text-[clamp(2.6rem,4vw,3.4rem)] leading-none">
                    {service.num}
                  </span>
                  <span className="glass rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                    {service.duration}
                  </span>
                </div>
                <h3 className="display mt-6 text-[clamp(1.5rem,2.4vw,1.9rem)] leading-tight">
                  {service.title}
                </h3>
                <p className="mt-3.5 text-[14.5px] leading-relaxed text-muted">{service.desc}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {service.items.map((item) => (
                    <li className="flex items-start gap-3 text-[14px] text-fg/90" key={item}>
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent/80" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <p className="font-mono text-[10.5px] tracking-[0.14em] text-faint uppercase">Good for</p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{service.goodFor}</p>
                  <Link
                    className="mt-4 inline-flex items-center gap-2 py-2 font-mono text-[12px] tracking-[0.16em] text-accent uppercase transition-colors hover:text-accent-bright"
                    to="/contact"
                  >
                    Let's go
                    <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
