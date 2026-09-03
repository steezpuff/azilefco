<script setup lang="ts">
withDefaults(defineProps<{ className?: string }>(), { className: "size-3.5" });
</script>

<template>
  <svg viewBox="0 0 16 16" fill="none" :class="className" aria-hidden="true">
    <path
      d="M2 8h11M9 3.5 13.5 8 9 12.5"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
