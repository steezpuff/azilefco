<script setup lang="ts">
import Reveal from "./Reveal.vue";

const rings = [1050, 819, 588, 378, 210];

const stats = [
  { value: "5 yrs", label: "Funded teams survived", size: 150, delay: "0s", duration: "6s", variant: "glass" },
  { value: "40+", label: "Projects, delivered", size: 175, delay: "0.4s", duration: "6.4s", variant: "glass" },
  {
    value: "2,000+",
    label: "Designs, unleashed",
    size: 235,
    delay: "0.8s",
    duration: "6.8s",
    variant: "glass-accent",
  },
  {
    value: "5",
    label: "AI products that behave",
    size: 185,
    delay: "1.2s",
    duration: "7.2s",
    variant: "glass",
  },
] as const;
</script>

<template>
  <section class="relative overflow-hidden py-28 sm:py-36">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 grid place-items-center opacity-[0.36]">
      <div
        v-for="size in rings"
        :key="size"
        class="absolute aspect-square rounded-full border border-accent/15"
        :style="{ width: `min(115vw, ${size}px)` }"
      />
    </div>

    <div class="relative mx-auto max-w-container px-5 text-center sm:px-7">
      <Reveal>
        <h2 class="display text-[clamp(2.4rem,5.6vw,4.5rem)] leading-[1.02]">
          Receipts. <span class="text-glint">No cap.</span>
        </h2>
      </Reveal>

      <Reveal :delay="0.1">
        <p class="glass mx-auto mt-7 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-mono text-[10.5px] tracking-[0.18em] text-muted uppercase">
          <span class="size-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
          Vouched for by <span class="text-fg">TEDx speakers</span> &amp;
          <span class="text-fg">founders Forbes actually wrote about</span>
        </p>
      </Reveal>

      <div class="mt-16 flex flex-wrap items-center justify-center gap-[clamp(16px,4vw,52px)]">
        <Reveal v-for="(stat, i) in stats" :key="stat.label" :delay="0.15 + i * 0.08">
          <div
            :class="`flex shrink-0 animate-bob flex-col items-center justify-center rounded-full text-center select-none cursor-default ${stat.variant} transition-transform hover:scale-105`"
            :style="{
              width: `${stat.size}px`,
              height: `${stat.size}px`,
              animationDelay: stat.delay,
              animationDuration: stat.duration,
            }"
          >
            <span
              :class="`display leading-none ${
                stat.value === '2,000+' ? 'text-[clamp(2.4rem,4.5vw,3.5rem)]' : 'text-[clamp(1.5rem,2.6vw,2.1rem)]'
              }`"
            >
              {{ stat.value }}
            </span>
            <span
              :class="`mt-2 max-w-[85%] font-mono text-[10px] tracking-[0.14em] uppercase ${
                stat.variant === 'glass-accent' ? 'text-fg/90' : 'text-muted'
              }`"
            >
              {{ stat.label }}
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal :delay="0.5">
        <p class="mt-10 hidden font-mono text-[10px] tracking-[0.24em] text-faint uppercase sm:block">
          Go on, poke one
        </p>
      </Reveal>
    </div>
  </section>
</template>
