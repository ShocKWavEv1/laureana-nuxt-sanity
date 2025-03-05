import Lenis from "@studio-freight/lenis";

export const useLenisSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.75,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  });

  // Request animation frame for smooth scrolling
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
