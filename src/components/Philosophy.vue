<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import Reveal from "./Reveal.vue";

const sectionRef = ref<HTMLElement | null>(null);
const progress = ref(0);

function updateProgress() {
  const el = sectionRef.value;
  if (!el) return;
  const vh = window.innerHeight;
  const top = el.getBoundingClientRect().top;
  const start = vh * 0.9;
  const end = vh * 0.25;
  const raw = (start - top) / (start - end);
  progress.value = Math.min(1, Math.max(0, raw));
}

onMounted(() => {
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
  window.removeEventListener("resize", updateProgress);
});

function clipFor(range: [number, number]) {
  const [start, end] = range;
  const t = Math.min(1, Math.max(0, (progress.value - start) / (end - start)));
  return `inset(0 ${100 - t * 100}% 0 0)`;
}

const clip1 = computed(() => clipFor([0, 0.55]));
const clip2 = computed(() => clipFor([0.2, 0.85]));
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden border-y border-line bg-bg-deep py-32 sm:py-44"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
      :style="{ background: 'radial-gradient(ellipse, var(--accent-tint) 0%, transparent 65%)' }"
    />
    <div class="relative mx-auto max-w-container px-5 text-center sm:px-7">
      <h2 class="display text-[clamp(2.4rem,7.5vw,6.5rem)] leading-[1.04]">
        <span class="relative block">
          <span class="block text-fg/[0.12]">Anyone can prompt.</span>
          <span aria-hidden="true" class="absolute inset-0 block text-transparent" :style="{ clipPath: clip1 }">
            <span
              class="bg-clip-text"
              :style="{
                backgroundImage: 'linear-gradient(90deg, var(--accent), var(--fg))',
                WebkitBackgroundClip: 'text',
              }"
            >
              Anyone can prompt.
            </span>
          </span>
        </span>
        <span class="relative block">
          <span class="block text-fg/[0.12]">Most of it looks the same.</span>
          <span aria-hidden="true" class="absolute inset-0 block text-transparent" :style="{ clipPath: clip2 }">
            <span
              class="bg-clip-text"
              :style="{
                backgroundImage: 'linear-gradient(90deg, var(--accent), var(--fg))',
                WebkitBackgroundClip: 'text',
              }"
            >
              Most of it looks the same.
            </span>
          </span>
        </span>
      </h2>
      <Reveal :delay="0.1">
        <p class="mx-auto mt-10 max-w-[44ch] text-[18px] leading-relaxed text-muted sm:text-[20px]">
          The robots can finish a sentence. They can't finish a brand. That part's still on
          me.
        </p>
      </Reveal>
    </div>
  </section>
</template>
