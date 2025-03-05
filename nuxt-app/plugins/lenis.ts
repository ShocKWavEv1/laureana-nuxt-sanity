import { defineNuxtPlugin } from "#app";
import { onUnmounted } from "vue";
import Lenis from "@studio-freight/lenis";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const lenis = new Lenis({
      duration: 1.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 1,
      touchInertiaMultiplier: 35,
      touchMultiplier: 2,
    });

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Provide Lenis globally in Nuxt
    nuxtApp.provide("lenis", lenis);

    // Cleanup on unmount using Vue's `onUnmounted`
    onUnmounted(() => {
      lenis.destroy();
    });
  }
});
