"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Leaf, Play } from "lucide-react";
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
          {/* brand grade: forest tint over the busy backdrop, dark foot for the caption, sage glow behind the play button */}
          <span aria-hidden className="absolute inset-0 bg-forest-900/25 mix-blend-multiply" />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 via-45% to-forest-950/30" />
          <span aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgb(181_217_138/0.35),transparent_55%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ivory/90 py-1 pl-1 pr-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-900 backdrop-blur">
            <span className="grid size-5 place-items-center rounded-full bg-sage text-forest-950"><Leaf aria-hidden className="size-3" strokeWidth={1.8} /></span>
            Keva Ayurveda
          </span>

          <span className="absolute left-1/2 top-[44%] grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sage text-forest-950 shadow-[0_0_0_8px_rgb(245_242_234/0.25)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
            <Play aria-hidden className="ml-0.5 size-5 fill-current" />
          </span>

          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3 text-left text-white sm:p-4">
            <span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">Patient story</span>
              <span className="block font-display text-base font-semibold leading-tight sm:text-lg">Real people, real recovery</span>
            </span>
            <span className="shrink-0 rounded-full border border-white/40 px-2.5 py-1 text-[11px] font-medium tabular-nums">{String(index + 1).padStart(2, "0")}</span>
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
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-forest-900/25 bg-white/60 text-forest-900 transition-colors duration-300 hover:bg-sage hover:text-forest-950 disabled:cursor-default disabled:opacity-35 disabled:hover:bg-white/60 disabled:hover:text-forest-900"
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
