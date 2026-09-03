<script setup lang="ts">
import Reveal from "../components/Reveal.vue";
import LineReveal from "../components/LineReveal.vue";
import FinalCTA from "../components/FinalCTA.vue";
</script>

<template>
  <div class="pt-32">
    <div class="mx-auto max-w-container px-5 sm:px-7">
      <h1 class="display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02]">
        <LineReveal immediate :lines="[[`Let's `, 'talk.']]" />
      </h1>
      <Reveal :delay="0.2">
        <p class="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-muted">
          Email me your idea, chaotic or not. Real replies within 24 hours &mdash; no contact
          form black hole.
        </p>
      </Reveal>
    </div>
    <FinalCTA />
  </div>
</template>
