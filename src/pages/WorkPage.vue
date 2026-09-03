<script setup lang="ts">
import Reveal from "../components/Reveal.vue";
import LineReveal from "../components/LineReveal.vue";
import Work from "../components/Work.vue";
</script>

<template>
  <div class="pt-32">
    <div class="mx-auto max-w-container px-5 sm:px-7">
      <h1 class="display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02]">
        <LineReveal immediate :lines="[['Proof, not ', 'promises.']]" />
      </h1>
      <Reveal :delay="0.2">
        <p class="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-muted">
          Every project below started as a boring brief and ended as a live link nobody's
          embarrassed by.
        </p>
      </Reveal>
    </div>
    <Work />
  </div>
</template>
