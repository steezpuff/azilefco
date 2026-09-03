<script setup lang="ts">
withDefaults(
  defineProps<{
    className?: string;
    delay?: number;
    as?: "div" | "span";
  }>(),
  { delay: 0, as: "div" },
);
</script>

<template>
  <component
    :is="as"
    v-motion
    :class="className"
    :initial="{ opacity: 0, y: 26 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.7, 0.2, 1], delay },
    }"
  >
    <slot />
  </component>
</template>
