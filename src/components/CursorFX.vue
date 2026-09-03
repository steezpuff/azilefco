<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const glowRef = ref<HTMLDivElement | null>(null);
const dotRef = ref<HTMLDivElement | null>(null);

let raf = 0;
let onMove: ((e: PointerEvent) => void) | undefined;
let onOver: ((e: PointerEvent) => void) | undefined;

onMounted(() => {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let gx = 0;
  let gy = 0;
  let visible = false;

  onMove = (e: PointerEvent) => {
    gx = e.clientX;
    gy = e.clientY;
    if (!visible) {
      visible = true;
      glowRef.value?.style.setProperty("opacity", "1");
      dotRef.value?.style.setProperty("opacity", "1");
    }
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const t = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
      if (glowRef.value) glowRef.value.style.transform = t;
      if (dotRef.value) dotRef.value.style.transform = t;
    });
  };

  const interactiveSelector = "a, button, [role='button']";
  onOver = (e: PointerEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive = target.closest(interactiveSelector);
    if (dotRef.value) {
      dotRef.value.style.width = isInteractive ? "26px" : "14px";
      dotRef.value.style.height = isInteractive ? "26px" : "14px";
    }
  };

  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerover", onOver, { passive: true });
});

onUnmounted(() => {
  if (onMove) window.removeEventListener("pointermove", onMove);
  if (onOver) window.removeEventListener("pointerover", onOver);
  cancelAnimationFrame(raf);
});
</script>

<template>
  <div
    ref="glowRef"
    aria-hidden="true"
    class="pointer-events-none fixed top-0 left-0 z-[1] hidden size-[34rem] rounded-full opacity-0 transition-opacity duration-500 md:block"
    :style="{
      background: 'radial-gradient(circle, var(--accent-tint) 0%, transparent 60%)',
      willChange: 'transform',
    }"
  />
  <div
    ref="dotRef"
    aria-hidden="true"
    class="pointer-events-none fixed top-0 left-0 z-[90] hidden rounded-full border border-accent opacity-0 transition-[width,height,opacity] duration-200 md:block"
    :style="{ width: '14px', height: '14px', willChange: 'transform' }"
  />
</template>
