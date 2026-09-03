<script setup lang="ts">
import { ref } from "vue";
import LineReveal from "./LineReveal.vue";
import ArrowIcon from "./ArrowIcon.vue";
import { useTypewriter } from "../composables/useTypewriter";

const BUILDING_WORDS = ["shiny websites", "brand chaos control", "well-behaved AI", "content that slaps"];

const blobA = ref<HTMLDivElement | null>(null);
const blobB = ref<HTMLDivElement | null>(null);
let raf = 0;
const typed = useTypewriter(BUILDING_WORDS);

function onPointerMove(e: PointerEvent) {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  const relX = (e.clientX - rect.left) / rect.width - 0.5;
  const relY = (e.clientY - rect.top) / rect.height - 0.5;
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    if (blobA.value) blobA.value.style.transform = `translate3d(${-380 + relX * 60}px, ${225 + relY * 60}px, 0)`;
    if (blobB.value) blobB.value.style.transform = `translate3d(${-300 + relX * -50}px, ${607 + relY * -50}px, 0)`;
  });
}
</script>

<template>
  <section class="relative flex min-h-svh items-center overflow-hidden" @pointermove="onPointerMove">
    <div class="aurora" aria-hidden="true" />
    <div
      ref="blobA"
      aria-hidden="true"
      class="pointer-events-none absolute top-0 left-0 size-[760px]"
      :style="{
        background:
          'radial-gradient(circle, var(--accent-glow) 0%, color-mix(in oklch, var(--accent-deep) 22%, transparent) 30%, transparent 62%)',
        willChange: 'transform',
        transform: 'translate3d(-380px, 225px, 0)',
      }"
    />
    <div
      ref="blobB"
      aria-hidden="true"
      class="pointer-events-none absolute top-0 left-0 size-[600px]"
      :style="{
        background: 'radial-gradient(circle, oklch(0.45 0.12 320 / 0.3) 0%, transparent 64%)',
        willChange: 'transform',
        transform: 'translate3d(-300px, 607px, 0)',
      }"
    />

    <div class="relative z-[1] mx-auto w-full max-w-container px-5 pt-32 pb-20 sm:px-7">
      <h1 class="display text-[clamp(3rem,8.4vw,7.5rem)] leading-[0.96]">
        <LineReveal immediate :lines="['I make the internet', ['', 'slightly less broken.']]" />
      </h1>

      <p
        v-motion
        class="mt-8 max-w-[44ch] text-[17px] leading-relaxed text-muted sm:text-[18px]"
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }"
      >
        For founders who'd rather not launch something that screams "I typed one prompt and
        called it a day." Handmade for years, AI-boosted now &mdash; best of both brains.
      </p>

      <p
        v-motion
        class="mt-6 font-mono text-[13px] tracking-[0.06em] text-faint"
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.65, duration: 0.6 } }"
      >
        <span class="text-accent">&gt;</span> currently cooking
        <span class="text-fg" aria-live="off">{{ typed }}</span>
        <span
          aria-hidden="true"
          class="ml-1 inline-block h-[1.1em] w-[7px] translate-y-[2px] animate-caret-blink bg-accent"
        />
      </p>

      <div
        v-motion
        class="mt-10 flex flex-wrap items-center gap-4"
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } }"
      >
        <a
          href="mailto:azilefco@gmail.com"
          class="shine glass-accent inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-[15px] font-medium text-fg transition-transform duration-300 hover:-translate-y-0.5"
        >
          Steal 15 minutes of my time
          <span
            class="flex size-9 items-center justify-center rounded-full bg-accent text-accent-ink shadow-[0_4px_14px_var(--accent-glow)]"
            aria-hidden="true"
          >
            <ArrowIcon />
          </span>
        </a>
        <RouterLink
          class="shine glass inline-flex items-center rounded-full px-7 py-3.5 text-[15px] font-medium text-fg transition-transform duration-300 hover:-translate-y-0.5"
          to="/work"
        >
          Judge my work
        </RouterLink>
      </div>

      <div
        v-motion
        class="absolute bottom-0 left-5 hidden items-center gap-3 font-mono text-[10px] tracking-[0.26em] text-faint uppercase sm:flex"
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 1.1 } }"
      >
        Scroll
        <span class="animate-arrow-bob inline-block">&darr;</span>
      </div>
    </div>
  </section>
</template>
