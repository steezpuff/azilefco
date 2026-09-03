<script setup lang="ts">
withDefaults(defineProps<{ className?: string }>(), { className: "size-3.5" });
</script>

<template>
  <svg viewBox="0 0 16 16" fill="none" :class="className" aria-hidden="true">
    <path
      d="M4 12 12 4M5.5 4H12v6.5"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
