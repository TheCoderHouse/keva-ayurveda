"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/** Fades/slides children in once when scrolled into view. Content is visible without JS-less flash via data attribute. */
export function Reveal({
  children,
  delay = 0,
  slow = false,
  from = "bottom",
  repeat = false,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  /** longer, deeper rise (about 1.6s) for showpiece sections */
  slow?: boolean;
  /** direction the content travels in from */
  from?: "bottom" | "right";
  /** replay every time it scrolls into view (resets once fully out of view) */
  repeat?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.12 && entry.isIntersecting) {
          setShown(true);
          if (!repeat) io.disconnect();
        } else if (repeat && !entry.isIntersecting) {
          setShown(false);
        }
      },
      { threshold: [0, 0.12], rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      data-reveal={shown ? "in" : "out"}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          // slow variant: deeper start, longer ease (set inline so it never depends on stylesheet order)
          ...(slow && { transitionDuration: "1.6s" }),
          ...((slow || from === "right") && {
            transform: shown ? "none" : from === "right" ? "translateX(72px)" : "translateY(64px)",
          }),
        } as React.CSSProperties
      }
      className={cn(className)}
    >
      {children}
    </div>
  );
}
