<script setup lang="ts">
import Reveal from "./Reveal.vue";

function handleSpotMove(e: PointerEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
  target.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
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
</script>

<template>
  <div class="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
    <Reveal
      v-for="(col, ci) in columns"
      :key="col.title"
      :delay="ci * 0.08"
      :class-name="`h-full ${col.variant === 'highlight' ? 'order-first md:order-none' : ''}`"
    >
      <div
        @pointermove="handleSpotMove"
        :class="`spot flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
          col.variant === 'highlight' ? 'glass-accent shadow-2xl shadow-black/40' : 'glass'
        }`"
      >
        <div class="flex items-center justify-between">
          <span
            :class="`font-mono text-[10.5px] tracking-[0.18em] uppercase ${
              col.variant === 'highlight' ? 'text-accent-bright' : 'text-muted'
            }`"
          >
            {{ col.eyebrow }}
          </span>
          <span
            v-if="col.badge"
            class="rounded-full bg-accent px-2.5 py-1 font-mono text-[9.5px] tracking-[0.14em] text-accent-ink uppercase"
          >
            {{ col.badge }}
          </span>
        </div>
        <h3 class="display mt-3 text-[clamp(1.6rem,2.4vw,2rem)] leading-none">{{ col.title }}</h3>
        <ul class="mt-6 flex grow flex-col gap-3.5 border-t border-line pt-5">
          <li v-for="(row, ri) in rows" :key="row">
            <p class="font-mono text-[9.5px] tracking-[0.16em] text-faint uppercase">{{ row }}</p>
            <p
              :class="`mt-0.5 text-[13.5px] leading-snug ${col.variant === 'highlight' ? 'text-fg' : 'text-muted'}`"
            >
              {{ col.values[ri] }}
            </p>
          </li>
        </ul>
      </div>
    </Reveal>
  </div>
</template>
