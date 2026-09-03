<script setup lang="ts">
type Line = string | [prefix: string, glint: string];

const props = withDefaults(
  defineProps<{
    lines: Line[];
    className?: string;
    lineClassName?: string;
    immediate?: boolean;
  }>(),
  { immediate: false },
);

function variant(i: number) {
  return {
    y: "0%",
    transition: { duration: 0.8, ease: [0.21, 0.7, 0.2, 1] as const, delay: 0.05 * i },
  };
}

const motionProps = (i: number) =>
  props.immediate ? { enter: variant(i) } : { visibleOnce: variant(i) };
</script>

<template>
  <span :class="className">
    <span v-for="(line, i) in lines" :key="i" class="block overflow-hidden pb-[0.08em]">
      <span
        v-motion
        :class="lineClassName ?? 'block'"
        :initial="{ y: '110%' }"
        v-bind="motionProps(i)"
      >
        <template v-if="typeof line === 'string'">{{ line }}</template>
        <template v-else>{{ line[0] }}<span class="text-glint">{{ line[1] }}</span></template>
      </span>
    </span>
  </span>
</template>
