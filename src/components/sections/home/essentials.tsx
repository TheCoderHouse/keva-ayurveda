"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Baby, ChefHat, ChevronLeft, ChevronRight, HandHeart, Home, Pill, Stethoscope, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/cn";
import { essentials } from "@/content/home";

const ICONS: Record<string, LucideIcon> = {
  "Swarna Bindu": Baby,
  "Home Remedies": Home,
  "Ayurveda Recipes": ChefHat,
  Medicines: Pill,
  Treatments: HandHeart,
  Diseases: Stethoscope,
};

/**
 * Ayurveda Essentials — the original's six topics on a pinned (parallax) light photo under a pale wash. The cards sit on a circular loop: one holds the spotlight for 5s, then the ring turns and the next takes its place (the last wraps round to the first)
 * (loops; pauses on hover/focus; off for reduced motion) and also scroll by swipe, wheel or arrows.
 * The only link in each card is "Read more".
 */
export function Essentials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const n = essentials.length;

  useEffect(() => setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches), []);

  const go = (to: number) => setActive(((to % n) + n) % n);

  // each card holds the spotlight for 5 s, then the ring turns one place (loops forever); hover / focus pauses
  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % n), 5000);
    return () => clearTimeout(t);
  }, [active, paused, reduced, n]);

  return (
    <section aria-labelledby="essentials-title" className="relative isolate overflow-clip py-12 sm:py-16 lg:py-24">
      {/* same treatment as the category section: light photo under a pale wash, pinned (parallax) on desktop */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-cover bg-center motion-reduce:bg-scroll lg:bg-fixed" style={{ backgroundImage: "url('/images/quality.webp')" }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ivory/80" />
      <Container>
        <Reveal>
          <SectionTitle id="essentials-title">Ayurveda Essentials</SectionTitle>
          <p className="mx-auto mt-3 max-w-xl text-center font-sans text-lg font-light text-ink-soft">Authentic, Affordable, Accessible Ayurveda For All!</p>
        </Reveal>
      </Container>

      <Reveal delay={150} className="mt-6 sm:mt-8">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Ayurveda essentials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(active + 1);
            if (e.key === "ArrowLeft") go(active - 1);
          }}
        >
          {/* the ring: every card is placed by its distance from the active one, measured the short way round */}
          <ul
            className="relative mx-auto h-[24.5rem] max-w-[90rem] touch-pan-y select-none [--step:10.5rem] sm:h-[26rem] sm:[--step:21rem]"
            onPointerDown={(e) => (drag.current = { x: e.clientX, moved: false })}
            onPointerMove={(e) => {
              if (drag.current && Math.abs(e.clientX - drag.current.x) > 8) drag.current.moved = true;
            }}
            onPointerUp={(e) => {
              const d = drag.current;
              drag.current = null;
              if (!d) return;
              const dx = e.clientX - d.x;
              if (Math.abs(dx) > 45) go(active + (dx < 0 ? 1 : -1));
            }}
            onPointerLeave={() => (drag.current = null)}
          >
            {essentials.map((e, i) => {
              const Icon = ICONS[e.title] ?? Home;
              let o = i - active;
              if (o > n / 2) o -= n;
              if (o < -n / 2) o += n;
              const d = Math.abs(o);
              const on = d === 0;
              const scale = on ? 1 : d === 1 ? 0.86 : d === 2 ? 0.72 : 0.6;
              const opacity = on ? 1 : d === 1 ? 0.7 : d === 2 ? 0.35 : 0;
              return (
                <li
                  key={e.title}
                  aria-current={on}
                  className={cn("absolute left-1/2 top-1/2 -ml-[8.5rem] h-[22rem] w-[17rem] transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:-ml-[11rem] sm:w-[22rem]", d >= 2 && "max-sm:!opacity-0", d > 2 && "pointer-events-none")}
                  style={{ transform: `translate(calc(var(--step) * ${o}), -50%) scale(${scale})`, opacity, zIndex: 30 - d * 10 }}
                >
                  <article
                    onClick={() => !on && !drag.current?.moved && go(i)}
                    className={cn(
                      "relative flex h-full flex-col items-center overflow-hidden rounded-[2rem] border px-6 py-7 text-center transition-[box-shadow,border-color] duration-700 sm:px-8 sm:py-9",
                      on ? "border-white/80 shadow-[0_30px_60px_-24px_rgb(40_110_60/0.55)]" : "cursor-pointer border-forest-900/10 shadow-soft",
                    )}
                  >
                    {/* premium gradient: a soft one always, a richer one fades in when the card takes the spotlight */}
                    <span aria-hidden className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-sage-100/80 to-mint/60" />
                    <span aria-hidden className={cn("absolute inset-0 -z-10 bg-gradient-to-br from-sage-100 via-mint to-sage transition-opacity duration-700", on ? "opacity-100" : "opacity-0")} />
                    <span aria-hidden className="absolute -right-10 -top-10 -z-10 size-40 rounded-full bg-white/50 blur-2xl" />
                    <span aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                    <span className={cn("grid size-16 shrink-0 place-items-center rounded-full text-forest-900 transition-colors duration-700 sm:size-[4.5rem]", on ? "bg-white shadow-soft" : "bg-sage/60")}>
                      <Icon aria-hidden className="size-7 sm:size-8" strokeWidth={1.4} />
                    </span>
                    <h3 className="mt-4 font-display text-2xl text-forest-900 sm:text-3xl">{e.title}</h3>
                    <p className="mt-3 line-clamp-4 flex-1 font-sans text-[15px] leading-relaxed text-forest-900/75">{e.text}</p>
                    <Link
                      href={e.href}
                      tabIndex={on ? 0 : -1}
                      draggable={false}
                      className="mt-5 cursor-pointer rounded-full bg-forest-900/90 px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-forest-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-900"
                    >
                      Read more<span className="sr-only"> about {e.title}</span>
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>

          {/* arrows + progress dots (the active dot fills over the 5 s) */}
          <div className="mt-1 flex items-center justify-center gap-4">
            <button type="button" onClick={() => go(active - 1)} aria-label="Previous topic" className="grid size-11 cursor-pointer place-items-center rounded-full border border-forest-900/25 bg-white/60 text-forest-900 transition-colors duration-300 hover:bg-sage hover:text-forest-950">
              <ChevronLeft aria-hidden className="size-5" />
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose topic">
              {essentials.map((e, i) => (
                <button key={e.title} role="tab" aria-selected={i === active} aria-label={e.title} onClick={() => go(i)} className="grid h-8 cursor-pointer place-items-center px-0.5">
                  <span className={cn("relative block h-1.5 overflow-hidden rounded-full bg-forest-900/20 transition-all duration-500", i === active ? "w-12" : "w-4")}>
                    {i === active && (
                      <span
                        key={`${active}-${reduced}`}
                        className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gold-500 [animation:essentials-fill_5s_linear_forwards] motion-reduce:animate-none"
                        style={{ animationPlayState: paused ? "paused" : "running" }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <button type="button" onClick={() => go(active + 1)} aria-label="Next topic" className="grid size-11 cursor-pointer place-items-center rounded-full border border-forest-900/25 bg-white/60 text-forest-900 transition-colors duration-300 hover:bg-sage hover:text-forest-950">
              <ChevronRight aria-hidden className="size-5" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
