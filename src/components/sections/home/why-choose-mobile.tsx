"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Award, BadgeCheck, Headset, IndianRupee, Layers, ShieldCheck } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { cn } from "@/lib/cn";
import { whyChoose } from "@/content/home";
import { ctaHref } from "@/content/site";

const ICONS = [Layers, IndianRupee, ShieldCheck, Headset, BadgeCheck, Award];
const R = 18; // marker radius (px)
const XS = [R, R + 8]; // markers wobble a little left / right so the line curves

/**
 * Phones / tablets: the photo stays pinned under the navbar and cross-fades to the next one as each text block
 * scrolls up past the middle of the screen. The text scrolls normally. Desktop keeps the alternating rows.
 */
export function WhyChooseMobile() {
  const [active, setActive] = useState(0);
  const blocks = useRef<(HTMLLIElement | null)[]>([]);
  const list = useRef<HTMLOListElement>(null);
  const [pts, setPts] = useState<{ x: number; y: number }[]>([]);
  const [height, setHeight] = useState(0);

  // marker positions follow the text blocks, so the rail always lines up
  useEffect(() => {
    const ol = list.current;
    if (!ol) return;
    const measure = () => {
      setPts(blocks.current.map((li, i) => ({ x: XS[i % 2], y: (li?.offsetTop ?? 0) + 32 })));
      setHeight(ol.offsetHeight);
    };
    const raf = requestAnimationFrame(measure);
    const ro = new ResizeObserver(() => requestAnimationFrame(measure));
    ro.observe(ol);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const segs = pts.slice(1).map((q, i) => {
    const a = pts[i];
    const my = (a.y + q.y) / 2;
    return `M ${a.x} ${a.y} C ${a.x} ${my}, ${q.x} ${my}, ${q.x} ${q.y}`;
  });

  useEffect(() => {
    // the "reading line" sits a little below the pinned photo; whichever block crosses it is the active one
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
      },
      { rootMargin: "-50% 0px -48% 0px" },
    );
    blocks.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="lg:hidden">
      <div className="sticky top-[4.25rem] z-10 -mx-4 bg-ivory px-4 pb-3 pt-2 sm:-mx-6 sm:px-6">
        <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-[1.5rem] bg-sand shadow-lift">
          {whyChoose.map((w, i) => (
            <Image
              key={w.image}
              src={w.image}
              alt={i === active ? w.alt : ""}
              fill
              sizes="(min-width:640px) 36rem, 100vw"
              priority={i === 0}
              className={cn("object-cover transition-opacity duration-[900ms] ease-in-out motion-reduce:duration-0", i === active ? "opacity-100" : "opacity-0")}
            />
          ))}
        </div>
      </div>

      <ol ref={list} className="relative mx-auto max-w-xl pl-14">
        {/* winding rail on the left: grey dashes ahead, solid line and sage markers for the steps reached */}
        <svg aria-hidden className="pointer-events-none absolute left-0 top-0 overflow-visible" width={44} height={height}>
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
                strokeDashoffset={i < active ? 0 : 1}
                className="text-forest-900 transition-[stroke-dashoffset] duration-700 ease-in-out motion-reduce:duration-0"
              />
            </g>
          ))}
        </svg>
        {pts.map((q, i) => {
          const MarkIcon = ICONS[i] ?? Award;
          return (
            <span
              key={i}
              aria-hidden
              className={cn(
                "absolute grid size-9 place-items-center rounded-full border-2 transition-colors duration-500",
                i <= active ? "border-sage bg-sage text-forest-950" : "border-forest-900/25 bg-ivory text-forest-900",
                i === active && "ring-4 ring-sage/60",
              )}
              style={{ left: q.x - R, top: q.y - R }}
            >
              <MarkIcon className="size-4" strokeWidth={1.7} />
            </span>
          );
        })}
        {whyChoose.map((w, i) => {
          const external = w.cta.href === "appointment" || w.cta.href.startsWith("tel:");
          const href = w.cta.href === "appointment" ? ctaHref : w.cta.href;
          return (
            <li
              key={w.title}
              ref={(el) => {
                blocks.current[i] = el;
              }}
              data-i={i}
              className={cn("min-h-[42svh] pt-4 transition-opacity duration-700", i === active ? "opacity-100" : "opacity-40")}
            >
              <h3 className="text-balance text-3xl leading-[1.08] text-forest-900 sm:text-4xl">{w.title}</h3>
              <p className="mt-3 font-sans text-base font-light leading-relaxed text-ink-soft">{w.text}</p>
              <div className="mt-5">
                <CtaLink href={href} external={external}>{w.cta.label}</CtaLink>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
