"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Doctor } from "@/types";
import { DoctorCard } from "./doctor-card";

/** Still carousel (arrows / swipe, no autoplay). */
export function DoctorsCarousel({ doctors }: { doctors: Doctor[] }) {
  const track = useRef<HTMLUListElement | null>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);

  // observe size so the arrows are right on first paint and after resize
  const trackRef = useCallback(
    (el: HTMLUListElement | null) => {
      track.current = el;
      if (!el) return;
      new ResizeObserver(measure).observe(el);
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

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Featured doctors">
      <div className="mb-4 flex justify-end gap-2">
        {([-1, 1] as const).map((dir) => {
          const disabled = dir === -1 ? edge.start : edge.end;
          return (
            <button
              key={dir}
              type="button"
              onClick={() => scrollBy(dir)}
              disabled={disabled}
              aria-label={dir === -1 ? "Previous doctors" : "Next doctors"}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-forest-900/25 bg-white/60 text-forest-900 transition-colors duration-300 hover:bg-sage hover:text-forest-950 disabled:cursor-default disabled:opacity-35 disabled:hover:bg-white/60 disabled:hover:text-forest-900"
            >
              {dir === -1 ? <ChevronLeft aria-hidden className="size-5" /> : <ChevronRight aria-hidden className="size-5" />}
            </button>
          );
        })}
      </div>
      <ul
        ref={trackRef}
        onScroll={measure}
        tabIndex={0}
        aria-label="Doctors, scroll horizontally"
        className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-6 pt-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-1"
      >
        {doctors.map((d) => (
          <li key={d.slug} className="w-[72%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]">
            <DoctorCard doctor={d} />
          </li>
        ))}
      </ul>
    </div>
  );
}
