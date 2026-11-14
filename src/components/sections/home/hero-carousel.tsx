"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { ctaHref } from "@/content/site";
import { heroSlides } from "@/content/home";

const INTERVAL = 6000;

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = heroSlides.length;

  const go = useCallback((to: number) => setI((to + n) % n), [n]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), INTERVAL);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured care"
      className="relative h-[calc(100vw*859/1832)] overflow-hidden bg-ivory lg:h-[80dvh] lg:min-h-[32rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {heroSlides.map((s, idx) => {
        const active = idx === i;
        const external = s.href === "appointment";
        return (
          <div
            key={s.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${n}`}
            aria-hidden={!active}
            className={cn("absolute inset-0 transition-opacity duration-1000 ease-in-out", active ? "opacity-100" : "pointer-events-none opacity-0")}
          >
            {/* below lg the photo sits at its natural 1832:859 ratio (no crop/zoom) with the copy underneath; lg+ goes full-bleed */}
            <div className="load-zoom absolute inset-x-0 top-0 aspect-[1832/859] lg:inset-0 lg:aspect-auto">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={s.fit === "contain" ? "object-contain object-right [mask-image:linear-gradient(to_right,transparent,#000_35%)] lg:pb-0" : "object-cover object-[85%_50%] lg:object-[right_6%]"}
              />
            </div>

            {/* palette-toned scrim so the headline stays legible; one continuous layer, so there is no visible seam where the sharp photo begins */}
            <div aria-hidden className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-ivory/95 via-ivory/70 via-45% to-ivory/0 lg:inset-0 lg:w-auto lg:via-ivory/45 lg:via-30% lg:to-60%" />

            <div className={cn("relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 pb-5 pt-0 transition-opacity sm:pb-10 lg:justify-center lg:pt-16 sm:px-6 lg:px-10 lg:pb-24", active ? "opacity-100 delay-500 duration-500" : "opacity-0 duration-300")}>
              <p className="load-rise load-d2 mb-1.5 inline-flex w-fit items-center gap-1.5 rounded-full border border-forest-900/15 bg-white/60 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-[0.14em] sm:mb-4 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-[11px] sm:tracking-[0.2em] text-forest-900 backdrop-blur-md">
                <span aria-hidden className="size-1.5 rounded-full bg-gold-500" />
                {s.kicker}
              </p>
              {/* one <h1> per page: only the visible slide is the heading */}
              {active ? (
                <h1 className="load-rise load-d3 max-w-[46%] text-balance font-display text-[0.8rem] font-semibold leading-[1.15] tracking-tight text-forest-950 sm:max-w-[46%] sm:text-3xl lg:max-w-[24rem] lg:text-[2.7rem]">{s.title}</h1>
              ) : (
                <p className="max-w-[46%] text-balance font-display text-[0.8rem] font-semibold leading-[1.15] tracking-tight text-forest-950 sm:max-w-[46%] sm:text-3xl lg:max-w-[24rem] lg:text-[2.7rem]">{s.title}</p>
              )}
              <div className="load-rise load-d4 mt-2 sm:mt-5">
                {external ? (
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={active ? 0 : -1}
                    className="group inline-flex min-h-7 cursor-pointer items-center gap-1 rounded-full bg-sage px-2.5 text-[7.5px] tracking-[0.06em] sm:min-h-12 sm:gap-2 sm:px-7 sm:text-sm font-semibold uppercase sm:tracking-[0.12em] text-forest-950 shadow-[0_14px_34px_-10px_rgb(147_218_151/0.75)] transition-[translate,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-mint"
                  >
                    {s.cta}
                    <ArrowUpRight aria-hidden className="size-2.5 transition-transform sm:size-4 duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <a
                    href={s.href}
                    tabIndex={active ? 0 : -1}
                    className="group inline-flex min-h-7 cursor-pointer items-center gap-1 rounded-full bg-sage px-2.5 text-[7.5px] tracking-[0.06em] sm:min-h-12 sm:gap-2 sm:px-7 sm:text-sm font-semibold uppercase sm:tracking-[0.12em] text-forest-950 shadow-[0_14px_34px_-10px_rgb(147_218_151/0.75)] transition-[translate,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-mint"
                  >
                    {s.cta}
                    <ArrowUpRight aria-hidden className="size-2.5 transition-transform sm:size-4 duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div className="load-rise load-d5 absolute inset-x-0 bottom-0 z-10 lg:bottom-24">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {heroSlides.map((s, idx) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => go(idx)}
                className="grid h-8 cursor-pointer place-items-center px-1"
              >
                <span className={cn("block h-1 rounded-full transition-all duration-500", idx === i ? "w-10 bg-gold-500" : "w-4 bg-forest-900/25 hover:bg-forest-900/50")} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <p aria-live="polite" className="sr-only">Slide {i + 1} of {n}</p>
    </div>
  );
}
