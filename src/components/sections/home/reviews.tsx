"use client";

import { useState } from "react";
import { BadgeCheck, Star } from "lucide-react";
import { cn } from "@/lib/cn";
import { reviewPlatforms } from "@/content/home";

/** Patient reviews, verbatim from the original, grouped by platform (Practo / Lybrate / Google). */
export function Reviews() {
  const [active, setActive] = useState(0);
  const p = reviewPlatforms[active];

  return (
    <div>
      <div role="tablist" aria-label="Review platform" className="flex flex-wrap justify-center gap-3">
        {reviewPlatforms.map((r, i) => (
          <button
            key={r.platform}
            role="tab"
            id={`rev-tab-${i}`}
            aria-selected={i === active}
            aria-controls="rev-panel"
            onClick={() => setActive(i)}
            className={cn(
              "flex min-h-12 cursor-pointer items-center gap-3 rounded-full border px-6 text-sm font-medium transition-colors duration-300",
              i === active ? "border-forest-900 bg-forest-900 text-ivory" : "border-forest-900/25 bg-white/50 text-forest-900 hover:border-forest-900",
            )}
          >
            {r.platform}
            <span className="flex items-center gap-1 tabular-nums">
              <Star aria-hidden className="size-3.5 fill-current" />
              {r.rating.toFixed(1)}
            </span>
          </button>
        ))}
      </div>

      <ul id="rev-panel" role="tabpanel" aria-labelledby={`rev-tab-${active}`} className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-6">
        {p.reviews.map((r) => (
          <li key={r.name} className="flex flex-col rounded-3xl border border-forest-900/10 bg-ivory p-6 shadow-soft">
            <div className="flex text-gold-500" role="img" aria-label={`${p.rating} out of ${p.scale} on ${p.platform}`}>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} aria-hidden className={cn("size-4", s < Math.round(p.rating) ? "fill-current" : "opacity-30")} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 font-sans text-[15px] font-light leading-relaxed text-ink-soft">“{r.text}”</blockquote>
            <p className="mt-5 flex items-center gap-2 border-t border-forest-900/10 pt-4 font-display text-2xl text-forest-900">
              {r.name}
              {r.verified && (
                <span className="flex items-center gap-1 font-sans text-xs font-medium text-gold-700">
                  <BadgeCheck aria-hidden className="size-4" /> Verified
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
