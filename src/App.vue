<script setup lang="ts">
import Preloader from "./components/Preloader.vue";
import CursorFX from "./components/CursorFX.vue";
</script>

<template>
  <Preloader />
  <CursorFX />
  <RouterView />
</template>
