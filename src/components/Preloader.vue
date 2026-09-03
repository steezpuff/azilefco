<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const visible = ref(true);
let timer: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
  timer = setTimeout(() => {
    visible.value = false;
  }, 1100);
});

onUnmounted(() => clearTimeout(timer));
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-400"
    enter-from-class="opacity-0 -translate-y-2"
    leave-active-class="transition-opacity duration-500 ease-in-out"
    leave-to-class="opacity-0"
  >
    <div
      v-if="visible"
      class="fixed inset-0 z-[110] flex items-center justify-center bg-bg-deep"
    >
      <span class="display inline-flex items-baseline text-[26px]">
        <span class="text-fg">azilefco</span>
        <span class="text-accent">.</span>
      </span>
    </div>
  </Transition>
</template>
