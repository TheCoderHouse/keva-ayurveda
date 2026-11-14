"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Buttery inertial scrolling (Lenis). Skipped for reduced-motion users; native scroll stays untouched there. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, smoothWheel: true, anchors: { offset: -80 } });
    let raf = requestAnimationFrame(function tick(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
