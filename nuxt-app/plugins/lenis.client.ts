import { defineNuxtPlugin } from "#app";
import Lenis from "@studio-freight/lenis";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const lenis = new Lenis({
      duration: 1.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: true, // Enable smooth scrolling on touch devices
      touchMultiplier: 2,
    });

    // Request animation frame for smooth scrolling
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Inject Lenis into the Nuxt app context
    nuxtApp.provide("lenis", lenis);
  }
});
