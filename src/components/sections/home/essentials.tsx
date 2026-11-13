"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Baby, ChefHat, ChevronLeft, ChevronRight, HandHeart, Home, Pill, Stethoscope, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
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
 * Ayurveda Essentials — the original's six topics on a pinned (parallax) light photo under a pale wash. Cards advance by themselves every 6s
 * (loops; pauses on hover/focus; off for reduced motion) and also scroll by swipe, wheel or arrows.
 * The only link in each card is "Read more".
 */
export function Essentials() {
  const track = useRef<HTMLUListElement | null>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [paused, setPaused] = useState(false);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);
  const trackRef = useCallback(
    (el: HTMLUListElement | null) => {
      track.current = el;
      if (el) new ResizeObserver(measure).observe(el);
    },
    [measure],
  );
  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (first.offsetWidth + gap), behavior: "smooth" });
  };

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      const el = track.current;
      const first = el?.children[0] as HTMLElement | undefined;
      if (!el || !first) return;
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + first.offsetWidth + gap, behavior: "smooth" });
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section aria-labelledby="essentials-title" className="relative isolate overflow-clip py-16 lg:py-24">
      {/* same treatment as the category section: light photo under a pale wash, pinned (parallax) on desktop */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-cover bg-center motion-reduce:bg-scroll lg:bg-fixed" style={{ backgroundImage: "url('/images/quality.png')" }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ivory/80" />
      <Container>
        <Reveal>
          <SectionTitle id="essentials-title">Ayurveda Essentials</SectionTitle>
          <p className="mx-auto mt-3 max-w-xl text-center font-sans text-lg font-light text-ink-soft">Authentic, Affordable, Accessible Ayurveda For All!</p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Ayurveda essentials"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="mb-4 flex justify-end gap-2">
              {([-1, 1] as const).map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => scrollBy(dir)}
                  disabled={dir === -1 ? edge.start : edge.end}
                  aria-label={dir === -1 ? "Previous topics" : "Next topics"}
                  className="grid size-11 cursor-pointer place-items-center rounded-full border border-forest-900/25 bg-white/60 text-forest-900 transition-colors duration-300 hover:bg-forest-900 hover:text-ivory disabled:cursor-default disabled:opacity-35 disabled:hover:bg-white/60 disabled:hover:text-forest-900"
                >
                  {dir === -1 ? <ChevronLeft aria-hidden className="size-5" /> : <ChevronRight aria-hidden className="size-5" />}
                </button>
              ))}
            </div>
            <ul
              ref={trackRef}
              onScroll={measure}
              tabIndex={0}
              aria-label="Topics, scroll horizontally"
              className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:gap-6 lg:px-0"
            >
              {essentials.map((e) => {
                const Icon = ICONS[e.title] ?? Home;
                return (
                  <li key={e.title} className="w-[80%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
                    <article className="flex h-full flex-col items-center rounded-3xl border border-forest-900/15 bg-white/70 px-6 py-8 text-center backdrop-blur-sm">
                      <span className="grid size-16 place-items-center rounded-full bg-sage/60 text-forest-900">
                        <Icon aria-hidden className="size-7" strokeWidth={1.4} />
                      </span>
                      <h3 className="mt-5 font-display text-3xl text-forest-900">{e.title}</h3>
                      <p className="mt-3 flex-1 font-sans text-[15px] font-light leading-relaxed text-ink-soft">{e.text}</p>
                      <Link
                        href={e.href}
                        className="mt-6 cursor-pointer font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-900"
                      >
                        Read more<span className="sr-only"> about {e.title}</span>
                      </Link>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
