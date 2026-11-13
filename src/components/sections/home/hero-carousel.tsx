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
      className="relative h-[29rem] overflow-hidden bg-forest-900 sm:h-[31rem] lg:h-[37rem]"
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
            {/* Desktop only: blurred copy of the photo fills the whole banner, so the glass form and the margins beside the sharp photo share its colours */}
            <div aria-hidden className="absolute inset-0 hidden lg:block">
              <Image src={s.image} alt="" fill sizes="40vw" quality={30} className="scale-125 object-cover object-right blur-2xl" />
              <div className="absolute inset-0 bg-forest-950/35" />
            </div>

            {/* Focal photo: on desktop it spans from the container’s left edge to just before the form, so text and subject keep the spacing the photos were designed with and the subject is never covered */}
            <div className="hero-focal absolute inset-0 lg:[mask-image:linear-gradient(to_right,transparent,#000_7%,#000_86%,transparent)]">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={idx === 0}
                sizes="(min-width:1024px) 70vw, 100vw"
                className="object-cover object-right"
              />
            </div>

            {/* palette-toned scrim so the headline stays legible; one continuous layer, so there is no visible seam where the sharp photo begins */}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/55 to-forest-950/0 lg:via-forest-950/50 lg:via-35% lg:to-70%" />

            <div className={cn("relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 pb-14 pt-16 transition-opacity sm:px-6 lg:px-10 lg:pb-20", active ? "opacity-100 delay-500 duration-500" : "opacity-0 duration-300")}>
              <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold-300">
                <span aria-hidden className="h-px w-8 bg-current" />
                {s.kicker}
              </p>
              {/* one <h1> per page: only the visible slide is the heading */}
              {active ? (
                <h1 className="max-w-2xl text-balance font-display text-3xl font-medium leading-[1.05] text-ivory sm:text-4xl lg:max-w-[28rem] lg:text-4xl">{s.title}</h1>
              ) : (
                <p className="max-w-2xl text-balance font-display text-3xl font-medium leading-[1.05] text-ivory sm:text-4xl lg:max-w-[28rem] lg:text-4xl">{s.title}</p>
              )}
              <div className="mt-5">
                {external ? (
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={active ? 0 : -1}
                    className="group inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-sage px-7 text-sm font-medium uppercase tracking-[0.14em] text-forest-950 transition-colors duration-300 hover:bg-ivory"
                  >
                    {s.cta}
                    <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <a
                    href={s.href}
                    tabIndex={active ? 0 : -1}
                    className="group inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-sage px-7 text-sm font-medium uppercase tracking-[0.14em] text-forest-950 transition-colors duration-300 hover:bg-ivory"
                  >
                    {s.cta}
                    <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-4 z-10 lg:bottom-9">
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
                <span className={cn("block h-1 rounded-full transition-all duration-500", idx === i ? "w-10 bg-sage" : "w-4 bg-ivory/50 hover:bg-ivory")} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <p aria-live="polite" className="sr-only">Slide {i + 1} of {n}</p>
    </div>
  );
}
