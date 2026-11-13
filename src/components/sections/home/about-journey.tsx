"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Award, BadgeCheck, Building2, FileCheck, HandHeart, Smartphone, Star, Trophy } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { journey } from "@/content/home";

const n = journey.length;
const GUTTER = 64; // width of the winding-line gutter (px)
const PAD = 80; // left padding of each row (lg:pl-20) — the labels start here
const X_LEFT = 22;
const X_RIGHT = GUTTER - 22;

/** One icon per stop, in journey order: founding, then each award. */
const STOP_ICONS = [Building2, Award, Smartphone, Trophy, Star, BadgeCheck, FileCheck, HandHeart];

/**
 * Scroll-driven journey. Each milestone is one row: rail marker on the left, card on the right
 * (slides in from the right). The winding line runs the full height of the list and fills as you scroll.
 * Mobile: a slim sticky progress bar with the current step.
 */
export function AboutJourney() {
  const list = useRef<HTMLOListElement>(null);
  const [pts, setPts] = useState<{ x: number; y: number }[]>([]);
  const [height, setHeight] = useState(0);
  const [state, setState] = useState({ active: 0, progress: 0 });

  // each marker sits at the top of its own row, so the line spans the full list height
  const measure = useCallback(() => {
    const ol = list.current;
    if (!ol) return;
    setPts([...ol.children].map((li, i) => ({ x: i % 2 === 0 ? X_LEFT : X_RIGHT, y: (li as HTMLElement).offsetTop + 30 })));
    setHeight(ol.offsetHeight);
  }, []);

  useEffect(() => {
    const ol = list.current;
    if (!ol) return;
    const raf = requestAnimationFrame(measure);
    const ro = new ResizeObserver(() => requestAnimationFrame(measure));
    ro.observe(ol);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [measure]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const items = list.current?.children;
      if (!items) return;
      const line = window.innerHeight * 0.5;
      let active = 0;
      let frac = 0;
      for (let i = 0; i < items.length; i++) {
        const top = (items[i] as HTMLElement).getBoundingClientRect().top;
        if (top <= line) {
          active = i;
          const next = items[i + 1] as HTMLElement | undefined;
          const span = next ? next.getBoundingClientRect().top - top : (items[i] as HTMLElement).offsetHeight;
          frac = Math.min(Math.max((line - top) / span, 0), 1);
        }
      }
      const progress = Math.min((active + frac) / (items.length - 1), 1);
      setState((s) => (s.active === active && Math.abs(s.progress - progress) < 0.004 ? s : { active, progress }));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    raf = requestAnimationFrame(update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const { active, progress } = state;

  // one smooth S-curve per step, so each can fill on its own
  const segs = pts.slice(1).map((p, i) => {
    const a = pts[i];
    const my = (a.y + p.y) / 2;
    return `M ${a.x} ${a.y} C ${a.x} ${my}, ${p.x} ${my}, ${p.x} ${p.y}`;
  });

  return (
    <div>
      {/* Mobile / tablet: sticky progress bar */}
      <div className="sticky top-14 z-10 -mx-4 mb-4 bg-ivory/90 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 lg:hidden" aria-hidden>
        <div className="flex items-center justify-between text-xs font-medium text-forest-900">
          <span className="truncate pr-3">{journey[active].title}</span>
          <span className="shrink-0 tabular-nums text-ink-soft">{active + 1} / {n}</span>
        </div>
        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-forest-900/15">
          <div className="h-full origin-left rounded-full bg-forest-900" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>

      <div className="relative">
        {/* Desktop: winding line across the full list height */}
        <svg aria-hidden className="pointer-events-none absolute left-0 top-0 hidden overflow-visible lg:block" width={GUTTER} height={height}>
          {segs.map((d, i) => (
            <g key={i}>
              <path d={d} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" className="text-forest-900/25" />
              <path
                d={d}
                pathLength={1}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="1"
                strokeDashoffset={1 - Math.min(Math.max(progress * (n - 1) - i, 0), 1)}
                className="text-forest-900"
              />
            </g>
          ))}
        </svg>

        <ol ref={list} className="relative space-y-4 lg:space-y-6">
          {journey.map((s, i) => {
            const on = i === active;
            const done = i <= active;
            const pt = pts[i];
            return (
              <li key={s.title} id={`journey-${i}`} className="relative scroll-mt-32 lg:grid lg:grid-cols-[18rem_1fr] lg:gap-8 lg:pl-20">
                {/* rail marker + label (desktop) */}
                <div className="relative hidden lg:block">
                  {pt && (
                    <span
                      aria-hidden
                      className={cn(
                        "absolute grid size-11 place-items-center rounded-full border-2 shadow-soft transition-colors duration-500",
                        done ? "border-forest-900 bg-forest-900 text-ivory" : "border-forest-900/25 bg-ivory text-forest-900",
                        on && "ring-4 ring-sage",
                      )}
                      style={{ left: pt.x - 22 - PAD, top: 8 }}
                    >
                      {(() => {
                        const StopIcon = STOP_ICONS[i];
                        return <StopIcon className="size-5" strokeWidth={1.6} />;
                      })()}
                    </span>
                  )}
                  <a
                    href={`#journey-${i}`}
                    aria-current={on ? "step" : undefined}
                    className={cn(
                      "block cursor-pointer pt-3 transition-opacity duration-500",
                      on ? "opacity-100" : "opacity-55 hover:opacity-90",
                    )}
                  >
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">{s.meta}</span>
                    <span className="mt-0.5 block text-[15px] font-medium leading-snug text-forest-900">{s.title}</span>
                  </a>
                </div>

                <Reveal from="right">
                  <article className={cn("grid overflow-hidden rounded-3xl bg-ivory/90 shadow-soft", s.image && "sm:grid-cols-[14rem_1fr]")}>
                    {s.image && (
                      <div className="relative aspect-[500/550] w-full overflow-hidden bg-sand sm:aspect-auto sm:min-h-full">
                        <Image
                          src={s.image}
                          alt={s.alt ?? s.title}
                          fill
                          sizes="(min-width:640px) 14rem, 100vw"
                          className="origin-bottom-right scale-[1.1] object-cover"
                        />
                      </div>
                    )}
                    <div className={cn("flex flex-col justify-center gap-2 p-5 sm:p-7", !s.image && "bg-sage/40")}>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">{s.meta}</p>
                      <h3 className={cn("font-display leading-tight text-forest-900", s.image ? "text-2xl sm:text-3xl" : "text-5xl sm:text-6xl")}>{s.title}</h3>
                      {s.paragraphs.map((p) => (
                        <p key={p.slice(0, 30)} className="text-sm leading-relaxed text-ink-soft">{p}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
