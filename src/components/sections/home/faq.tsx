"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import type { Faq as FaqItem } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { faqs } from "@/content/home";

/**
 * Shutter animation for the answers: ::details-content grows from 0 height (interpolate-size).
 * Kept inline because the site's CSS build strips this newer syntax. Older browsers simply open instantly.
 */
const SHUTTER_CSS = `
:root { interpolate-size: allow-keywords; }
.faq-item::details-content {
  block-size: 0;
  overflow: clip;
  transition-property: block-size, content-visibility;
  transition-duration: 0.75s;
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  transition-behavior: allow-discrete;
}
.faq-item[open]::details-content { block-size: auto; }
@media (prefers-reduced-motion: reduce) {
  .faq-item::details-content { transition-duration: 0.01ms; }
}
`;

/** Turns any http(s) URL in an answer into a link (opens in a new tab). */
function linkify(text: string) {
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer break-all font-normal text-gold-700 underline underline-offset-4 hover:text-forest-900"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

/** One answer: two lines by default; "Read more" opens the full answer (lists and links included). */
function FaqAnswer({ blocks }: { blocks: FaqItem["a"] }) {
  const [full, setFull] = useState(false);
  const plain = blocks.map((b) => (Array.isArray(b) ? b.join("; ") : b)).join(" ");
  return (
    <div className="mt-4 font-sans text-[15px] font-normal leading-relaxed text-forest-900/90">
      {full ? (
        <div className="space-y-3">
          {blocks.map((block, i) =>
            Array.isArray(block) ? (
              <ul key={i} className="list-disc space-y-1.5 pl-5 marker:text-gold-500">
                {block.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            ) : (
              <p key={i}>{linkify(block)}</p>
            ),
          )}
        </div>
      ) : (
        <p className="line-clamp-2">{plain}</p>
      )}
      <button
        type="button"
        aria-expanded={full}
        onClick={() => setFull((v) => !v)}
        className="mt-2 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-gold-700 hover:text-forest-900"
      >
        {full ? "Show less" : "Read more"}
        <ChevronDown aria-hidden className={`size-4 transition-transform duration-300 ${full ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}

/** FAQ's — all 16 questions and answers as published on kevaayurveda.com. One answer open at a time (native <details>). */
export function Faq() {
  const [all, setAll] = useState(false);
  const shown = all ? faqs : faqs.slice(0, 6);
  return (
    <section aria-labelledby="faq-title" className="relative isolate overflow-clip py-12 sm:py-16 lg:py-24">
      <style>{SHUTTER_CSS}</style>
      {/* same treatment as the category and essentials sections (own photo); questions sit directly on the photo, no panel: pinned (parallax) light photo under a pale wash */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-cover bg-center motion-reduce:bg-scroll lg:bg-fixed" style={{ backgroundImage: "url('/images/support.webp')" }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ivory/85" />
      <Container>
        <Reveal>
          <SectionTitle id="faq-title">FAQ&apos;s</SectionTitle>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-6xl">
          <Stagger gap={0.05} className="grid items-start gap-x-12 lg:grid-cols-2">
            {shown.map((f) => (
              <StaggerItem key={f.q} y={16}><details name="faq" className="faq-item group border-b border-forest-900/20 py-5">
                <summary className="flex cursor-pointer select-none list-none items-center justify-between gap-6 font-display text-[15px] font-medium leading-snug text-forest-900 sm:text-lg lg:text-xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus aria-hidden className="size-5 shrink-0 text-gold-700 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <FaqAnswer blocks={f.a} />
              </details></StaggerItem>
            ))}
          </Stagger>
          <div className="mt-8 text-center">
            <button
              type="button"
              aria-expanded={all}
              onClick={() => setAll((v) => !v)}
              className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-forest-900/25 bg-white/60 px-7 text-sm font-semibold text-forest-900 backdrop-blur-md transition-[background-color,color,border-color] duration-300 hover:border-forest-900 hover:bg-forest-900 hover:text-ivory"
            >
              {all ? "Show fewer questions" : `Show all ${faqs.length} questions`}
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
