<script setup lang="ts">
import { ref } from "vue";
import Reveal from "./Reveal.vue";
import LineReveal from "./LineReveal.vue";

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

const openIndex = ref<number | null>(0);

function enter(el: Element) {
  const height = (el as HTMLElement).scrollHeight;
  (el as HTMLElement).style.height = "0px";
  (el as HTMLElement).style.opacity = "0";
  requestAnimationFrame(() => {
    (el as HTMLElement).style.transition = "height 0.35s cubic-bezier(0.21, 0.7, 0.2, 1), opacity 0.35s";
    (el as HTMLElement).style.height = `${height}px`;
    (el as HTMLElement).style.opacity = "1";
  });
}

function afterEnter(el: Element) {
  (el as HTMLElement).style.height = "auto";
}

function leave(el: Element) {
  const height = (el as HTMLElement).scrollHeight;
  (el as HTMLElement).style.height = `${height}px`;
  (el as HTMLElement).style.opacity = "1";
  requestAnimationFrame(() => {
    (el as HTMLElement).style.transition = "height 0.35s cubic-bezier(0.21, 0.7, 0.2, 1), opacity 0.35s";
    (el as HTMLElement).style.height = "0px";
    (el as HTMLElement).style.opacity = "0";
  });
}
</script>

<template>
  <section class="border-t border-line bg-bg-deep py-28 sm:py-36">
    <div class="mx-auto max-w-container px-5 sm:px-7">
      <div class="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 class="display relative mt-5 text-[clamp(2.3rem,5.2vw,4.2rem)] leading-[1.02]">
            <LineReveal :lines="[`Questions you're`, ['too polite ', 'to ask.']]" />
          </h2>
        </div>

        <div>
          <Reveal v-for="(faq, i) in faqs" :key="faq.q" :delay="i * 0.05">
            <div class="border-t border-line last:border-b">
              <button
                type="button"
                :aria-expanded="openIndex === i"
                :aria-controls="`faq-panel-${i}`"
                class="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                @click="openIndex = openIndex === i ? null : i"
              >
                <span
                  :class="`text-[16.5px] font-medium tracking-[-0.01em] transition-colors ${openIndex === i ? 'text-fg' : 'text-fg/80'}`"
                >
                  {{ faq.q }}
                </span>
                <span
                  class="mt-1 shrink-0 font-mono text-[18px] leading-none text-accent transition-transform duration-300"
                  :style="{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }"
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <Transition @enter="enter" @after-enter="afterEnter" @leave="leave">
                <div v-if="openIndex === i" :id="`faq-panel-${i}`" class="overflow-hidden">
                  <p class="max-w-[64ch] pb-7 text-[15px] leading-relaxed text-muted">
                    {{ faq.a }}
                  </p>
                </div>
              </Transition>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>
