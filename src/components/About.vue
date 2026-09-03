<script setup lang="ts">
import LineReveal from "./LineReveal.vue";
import Comparison from "./Comparison.vue";
</script>

<template>
  <section class="relative overflow-hidden border-t border-line py-24 sm:py-32">
    <div class="mx-auto max-w-container px-5 sm:px-7">
      <h2 class="display text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.02]">
        <LineReveal :lines="[['The brutally ', 'honest comparison.']]" />
      </h2>

      <Comparison />
    </div>
  </section>
</template>
