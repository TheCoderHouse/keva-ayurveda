"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative footer background: a muted, looping video played slowly under a light dark wash.
 * Not shown to visitors who prefer reduced motion (the dark footer colour remains).
 * Expects /public/videos/footer-bg.mp4.
 */
export function FooterVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }
    v.playbackRate = 0.4; // slow
    void v.play().catch(() => {});
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-reduce:hidden">
      <video
        ref={ref}
        className="absolute inset-0 size-full object-cover"
        src="/videos/footer-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
      />
      {/* light wash in the palette's dark colour keeps text legible while the video stays clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/45 to-forest-950/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/55 via-transparent to-transparent" />
    </div>
  );
}
