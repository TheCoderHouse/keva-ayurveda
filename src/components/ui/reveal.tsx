"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Scroll-triggered entrance (Motion): children fade and rise (or slide in from the right) once they enter the viewport. Honors reduced motion. */
export function Reveal({
  children,
  delay = 0,
  slow = false,
  from = "bottom",
  repeat = false,
  className,
}: {
  children: React.ReactNode;
  /** ms */
  delay?: number;
  /** longer, deeper rise for showpiece sections */
  slow?: boolean;
  from?: "bottom" | "right";
  /** replay every time it scrolls into view */
  repeat?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const hidden = from === "right" ? { opacity: 0, x: 72 } : { opacity: 0, y: slow ? 40 : 28 };
  return (
    <motion.div
      initial={reduce ? false : hidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: !repeat, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: slow ? 1.1 : 0.8, delay: delay / 1000, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its <StaggerItem/> children as it scrolls into view. */
export function Stagger({
  children,
  className,
  gap = 0.09,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** seconds between children */
  gap?: number;
  delay?: number;
  as?: "div" | "ul" | "ol";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -6% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </M>
  );
}

export function StaggerItem({ children, className, as = "div", y = 28 }: { children: React.ReactNode; className?: string; as?: "div" | "li"; y?: number }) {
  const M = motion[as];
  return (
    <M
      variants={{ hidden: { opacity: 0, y, scale: 0.97 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE } } }}
      className={className}
    >
      {children}
    </M>
  );
}
