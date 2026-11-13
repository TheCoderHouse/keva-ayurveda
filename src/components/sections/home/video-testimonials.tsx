"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { videoTestimonials } from "@/content/home";

function VideoCard({ id, index }: { id: string; index: number }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-forest-900 shadow-soft">
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={`Patient testimonial ${index + 1}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play patient testimonial ${index + 1}`} className="group absolute inset-0 cursor-pointer">
          <Image src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 80vw" className="object-cover" />
          <span aria-hidden className="absolute inset-0 bg-forest-950/20" />
          <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory text-forest-900 shadow-lift">
            <Play aria-hidden className="ml-0.5 size-5 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}

/** The five "Testimonial Diaries" videos: a still horizontal scroller (swipe, scroll or arrows); YouTube loads only on click. */
export function VideoTestimonials() {
  const track = useRef<HTMLUListElement | null>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

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

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Testimonial videos" className="mt-6">
      <div className="mb-4 flex justify-end gap-2">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => scrollBy(dir)}
            disabled={dir === -1 ? edge.start : edge.end}
            aria-label={dir === -1 ? "Previous videos" : "Next videos"}
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
        aria-label="Videos, scroll horizontally"
        className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:gap-6 lg:px-0"
      >
        {videoTestimonials.map((id, i) => (
          <li key={id} className="w-[80%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
            <VideoCard id={id} index={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}
