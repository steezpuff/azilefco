<script setup lang="ts">
import Reveal from "./Reveal.vue";
import LineReveal from "./LineReveal.vue";
import ArrowIcon from "./ArrowIcon.vue";
import ExternalArrowIcon from "./ExternalArrowIcon.vue";

const projects = [
  {
    image: "/images/work-luxera-paris.webp",
    alt: "A black-and-gold fashion storefront that makes a $890 wool coat look like a steal for your dignity.",
    category: "Website",
    result: "$890 coat, sold as inevitable",
    title: "LUXÉRA PARIS",
    brief: "make luxury feel like the obvious choice",
  },
  {
    image: "/images/work-wanderlust-travel.webp",
    alt: "A beach-hero travel site so dreamy it makes \"2 Travelers, dates TBD\" feel like the start of a great decision.",
    category: "Website",
    result: "Dream trips, one click closer",
    title: "Wanderlust Travel",
    brief: "make people book before they overthink it",
  },
  {
    image: "/images/work-flowai.webp",
    alt: "A workflow dashboard promising 42.7 hours saved, which conveniently is also how long it'll take you to configure it.",
    category: "AI product",
    result: "42.7 hours saved, allegedly",
    title: "FlowAI",
    brief: "make busywork disappear",
  },
  {
    image: "/images/work-prestige-real-estates.webp",
    alt: "Moody, gold-accented listings for houses you can't afford but will absolutely screenshot anyway.",
    category: "Website",
    result: "$4.9M listings, zero hesitation",
    title: "Prestige Real Estates",
    brief: "make $5M homes feel attainable",
  },
  {
    image: "/images/work-learnova.webp",
    alt: "A cheerful purple course platform for the 250,000 people who bought \"Python Programming Bootcamp\" and never opened lesson two.",
    category: "Website",
    result: "250,000 learners enrolled",
    title: "Learnova",
    brief: "get people past lesson one",
  },
  {
    image: "/images/work-terracina-kitchen-table.webp",
    alt: "A farm-to-table restaurant site so warm and earthy you can practically smell the burrata through the screen.",
    category: "Website",
    result: "Reservations, fully booked",
    title: "Terracina Kitchen & Table",
    brief: "make people taste it through the screen",
  },
];
</script>

<template>
  <section class="py-28 sm:py-36">
    <div class="mx-auto max-w-container px-5 sm:px-7">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <h2 class="display relative mt-5 text-[clamp(2.3rem,5.2vw,4.2rem)] leading-[1.02]">
          <LineReveal :lines="['Real builds,', ['zero ', 'fluff.']]" />
        </h2>
        <Reveal>
          <RouterLink
            class="group mb-2 hidden items-center gap-2 py-2 font-mono text-[12px] tracking-[0.16em] text-muted uppercase transition-colors hover:text-fg sm:inline-flex"
            to="/work"
          >
            See it all
            <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
          </RouterLink>
        </Reveal>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal
          v-for="(project, i) in projects"
          :key="project.title"
          :delay="(i % 2) * 0.08"
          class-name="h-full"
        >
          <div class="group h-full">
            <RouterLink
              class="shine flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-black/30 transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-2xl hover:shadow-black/50"
              to="/work"
            >
              <span class="relative block overflow-hidden border-b border-line">
                <img
                  :alt="project.alt"
                  width="1348"
                  height="840"
                  :loading="i < 2 ? 'eager' : 'lazy'"
                  class="aspect-[8/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  :src="project.image"
                />
                <span class="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/55 via-transparent to-transparent" />
                <span class="absolute top-4 left-4 rounded-full border border-line-strong bg-bg-deep/85 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.16em] text-fg uppercase backdrop-blur">
                  {{ project.category }}
                </span>
                <span class="glass-dark absolute bottom-4 left-4 rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-on-dark uppercase">
                  {{ project.result }}
                </span>
              </span>
              <span class="flex grow items-start justify-between gap-4 p-6">
                <span>
                  <span class="display block text-[clamp(1.25rem,2vw,1.55rem)] leading-tight">
                    {{ project.title }}
                  </span>
                  <span class="mt-2 block font-mono text-[12px] leading-relaxed tracking-[0.03em] text-faint">
                    <span class="text-accent/80">the ask:</span> &quot;{{ project.brief }}&quot;
                  </span>
                </span>
                <span class="glass mt-1 flex size-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors duration-300 group-hover:text-accent">
                  <ExternalArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </span>
            </RouterLink>
          </div>
        </Reveal>
      </div>

      <Reveal class-name="mt-10 sm:hidden">
        <RouterLink
          class="inline-flex items-center gap-2 py-2 font-mono text-[12px] tracking-[0.16em] text-muted uppercase"
          to="/work"
        >
          See it all <ArrowIcon className="size-3.5" />
        </RouterLink>
      </Reveal>
    </div>
  </section>
</template>
