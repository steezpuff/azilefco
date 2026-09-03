<script setup lang="ts">
import { ref } from "vue";
import { accentPalettes, applyAccentPalette } from "../lib/accentPalettes";
import ThemeToggle from "./ThemeToggle.vue";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const menuOpen = ref(false);
const paletteIndex = ref(0);

function cycleAccent() {
  const next = (paletteIndex.value + 1) % accentPalettes.length;
  paletteIndex.value = next;
  applyAccentPalette(accentPalettes[next]);
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-[60]">
    <div class="mx-auto flex h-[76px] max-w-container items-center justify-between px-5 sm:px-7">
      <span class="display inline-flex items-baseline text-[26px]">
        <RouterLink aria-label="azilefco, home" class="text-fg" to="/" @click="menuOpen = false">
          azilefco
        </RouterLink>
        <button
          type="button"
          aria-label="Change the accent color"
          title="psst, click me"
          class="-mx-2 -my-2 cursor-pointer px-2 py-2 text-accent transition-transform duration-200 hover:scale-150"
          @click="cycleAccent"
        >
          .
        </button>
      </span>

      <nav class="hidden items-center gap-2.5 md:flex" aria-label="Primary">
        <div class="flex items-center gap-1 rounded-full border border-line-strong bg-bg/72 p-1.5 shadow-xl shadow-black/30 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300">
          <RouterLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="rounded-full px-4 py-2 text-[13.5px] text-muted transition-colors duration-200 hover:bg-fg/5 hover:text-fg"
          >
            {{ link.label }}
          </RouterLink>
        </div>
        <ThemeToggle />
      </nav>

      <div class="flex items-center gap-2.5 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          :aria-expanded="menuOpen"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          class="glass-dark relative z-[70] flex size-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full"
          @click="menuOpen = !menuOpen"
        >
          <span
            class="h-px w-5 bg-on-dark transition-transform duration-300"
            :style="menuOpen ? { transform: 'translateY(3.5px) rotate(45deg)' } : undefined"
          />
          <span
            class="h-px w-5 bg-on-dark transition-transform duration-300"
            :style="menuOpen ? { transform: 'translateY(-3.5px) rotate(-45deg)' } : undefined"
          />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-300"
      leave-to-class="opacity-0"
    >
      <nav
        v-if="menuOpen"
        aria-label="Mobile"
        class="fixed inset-0 z-[60] flex h-dvh flex-col justify-between bg-bg-deep/97 px-6 pt-28 pb-10 backdrop-blur-md md:hidden"
      >
        <div class="flex flex-col gap-2">
          <div
            v-for="(link, i) in mobileLinks"
            :key="link.href"
            v-motion
            :initial="{ opacity: 0, y: 18 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.4 } }"
          >
            <RouterLink class="display block py-2 text-5xl text-fg" :to="link.href" @click="menuOpen = false">
              {{ link.label }}
            </RouterLink>
          </div>
        </div>
        <div
          class="flex flex-col gap-4"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 0.3 } }"
        >
          <a href="mailto:azilefco@gmail.com" class="link text-[15px]">azilefco@gmail.com</a>
          <p class="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            <span class="mr-2 inline-block size-1.5 animate-pulse-dot rounded-full bg-accent align-middle" />
            Taking on new chaos &middot; Philippines &middot; GMT+8
          </p>
        </div>
      </nav>
    </Transition>
  </header>
</template>
