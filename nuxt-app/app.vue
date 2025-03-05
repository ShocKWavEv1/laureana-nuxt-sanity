<script setup>
import { useNuxtApp } from "#app";
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  if (process.client) {
    const { $lenis } = useNuxtApp();

    if ($lenis) {
      // Start animation loop
      function raf(time) {
        $lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    const { $lenis } = useNuxtApp();
    if ($lenis) $lenis.destroy();
  }
});
</script>

<template>
  <div>
    <NuxtPage />
    <NuxtRouteAnnouncer />
  </div>
</template>
