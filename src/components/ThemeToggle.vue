<script setup lang="ts">
import { useTheme } from "../composables/useTheme";

withDefaults(defineProps<{ className?: string }>(), { className: "" });

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="theme === 'dark'"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
    :class="`glass relative flex h-9 w-[60px] shrink-0 cursor-pointer items-center rounded-full px-1 transition-colors duration-300 ${className}`"
  >
    <span class="pointer-events-none absolute left-2 text-faint">
      <svg viewBox="0 0 16 16" fill="none" class="size-3.5" aria-hidden="true">
        <circle cx="8" cy="8" r="3.2" stroke="currentColor" stroke-width="1.4" />
        <path
          d="M8 1.2v1.4M8 13.4v1.4M14.8 8h-1.4M2.6 8H1.2M12.7 3.3l-1 1M4.3 11.7l-1 1M12.7 12.7l-1-1M4.3 4.3l-1-1"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
        />
      </svg>
    </span>
    <span class="pointer-events-none absolute right-2 text-faint">
      <svg viewBox="0 0 16 16" fill="none" class="size-3.5" aria-hidden="true">
        <path
          d="M13.5 9.7A5.8 5.8 0 1 1 6.3 2.5a4.6 4.6 0 0 0 7.2 7.2Z"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span
      class="glass-accent relative z-[1] flex size-7 items-center justify-center rounded-full text-accent-ink transition-[margin] duration-300 ease-[cubic-bezier(0.3,0.7,0.4,1)]"
      :style="{ marginLeft: theme === 'dark' ? 'auto' : 0 }"
    >
      <svg
        v-if="theme === 'dark'"
        viewBox="0 0 16 16"
        fill="none"
        class="size-3.5"
        aria-hidden="true"
      >
        <path
          d="M13.5 9.7A5.8 5.8 0 1 1 6.3 2.5a4.6 4.6 0 0 0 7.2 7.2Z"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linejoin="round"
        />
      </svg>
      <svg v-else viewBox="0 0 16 16" fill="none" class="size-3.5" aria-hidden="true">
        <circle cx="8" cy="8" r="3.2" stroke="currentColor" stroke-width="1.4" />
        <path
          d="M8 1.2v1.4M8 13.4v1.4M14.8 8h-1.4M2.6 8H1.2M12.7 3.3l-1 1M4.3 11.7l-1 1M12.7 12.7l-1-1M4.3 4.3l-1-1"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
        />
      </svg>
    </span>
  </button>
</template>
