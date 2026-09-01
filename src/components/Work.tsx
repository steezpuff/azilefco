import { Link } from "react-router-dom";
import { Reveal, LineReveal } from "./Reveal";
import { ArrowIcon, ExternalArrowIcon } from "./ArrowIcon";

const projects = [
  {
    image: "/images/work-adreil.webp",
    alt: "The Adreil & Co. homepage: a cinematic golden-hour hero for a destination wedding photographer",
    category: "Website",
    result: "Every inquiry lands, none dropped",
    title: "Adreil & Co.",
    brief: "look as good as my photos",
  },
  {
    image: "/images/work-rotypeaks.webp",
    alt: "The RotyPeaks homepage: a scenic mountain view hero over a sea of clouds in Bukidnon",
    category: "Website",
    result: "6.7s to 0.9s load, 7x faster",
    title: "RotyPeaks Ridge Camp",
    brief: "sell the day tours, load fast",
  },
  {
    image: "/images/demo-queue.webp",
    alt: "The Social Agent queue: drafted posts awaiting approval, with retry, reschedule, and regenerate controls",
    category: "AI product",
    result: "10x output, same headcount",
    title: "Social Agent",
    brief: "content at scale without hiring",
  },
  {
    image: "/images/work-email-campaigns.webp",
    alt: "Holiday campaign email designs in a layered grid",
    category: "Brand + AI",
    result: "3.4x ROAS vs the year before",
    title: "E-Commerce Campaign",
    brief: "a Black Friday campaign in 5 days",
  },
  {
    image: "/images/work-social-posts.webp",
    alt: "Grid of social media posts across multiple brands and platforms",
    category: "Brand",
    result: "2,000+ designs shipped to date",
    title: "Social Content at Scale",
    brief: "daily content that stays on brand",
  },
  {
    image: "/images/work-email-campaign.webp",
    alt: "Five email campaign designs side by side",
    category: "Brand",
    result: "Designed like posters, shipped as HTML",
    title: "Email Campaigns",
    brief: "emails people actually open",
  },
];

export function Work() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-container px-5 sm:px-7">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display relative mt-5 text-[clamp(2.3rem,5.2vw,4.2rem)] leading-[1.02]">
            <LineReveal
              lines={["Real builds,", <span>zero <span className="text-glint">fluff.</span></span>]}
            />
          </h2>
          <Reveal>
            <Link
              className="group mb-2 hidden items-center gap-2 py-2 font-mono text-[12px] tracking-[0.16em] text-muted uppercase transition-colors hover:text-fg sm:inline-flex"
              to="/work"
            >
              See it all
              <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.08} className="h-full">
              <div className="group h-full">
                <Link
                  className="shine flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-black/30 transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-2xl hover:shadow-black/50"
                  to="/work"
                >
                  <span className="relative block overflow-hidden border-b border-line">
                    <img
                      alt={project.alt}
                      width={1348}
                      height={840}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="aspect-[8/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      src={project.image}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/55 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full border border-line-strong bg-bg-deep/85 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.16em] text-fg uppercase backdrop-blur">
                      {project.category}
                    </span>
                    <span className="glass-dark absolute bottom-4 left-4 rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-on-dark uppercase">
                      {project.result}
                    </span>
                  </span>
                  <span className="flex grow items-start justify-between gap-4 p-6">
                    <span>
                      <span className="display block text-[clamp(1.25rem,2vw,1.55rem)] leading-tight">
                        {project.title}
                      </span>
                      <span className="mt-2 block font-mono text-[12px] leading-relaxed tracking-[0.03em] text-faint">
                        <span className="text-accent/80">the ask:</span> &quot;{project.brief}&quot;
                      </span>
                    </span>
                    <span className="glass mt-1 flex size-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors duration-300 group-hover:text-accent">
                      <ExternalArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 sm:hidden">
          <Link
            className="inline-flex items-center gap-2 py-2 font-mono text-[12px] tracking-[0.16em] text-muted uppercase"
            to="/work"
          >
            See it all <ArrowIcon className="size-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
