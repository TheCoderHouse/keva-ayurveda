"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { conditionCategories } from "@/content/home";

/**
 * The category cards plus the "Find your condition" link. On phones only the first four cards show, with a
 * "Show more" button; once expanded, the button is replaced by "Find your condition". From `sm` up everything is always shown.
 */
export function ConditionGrid() {
  const [all, setAll] = useState(false);
  return (
    <>
      <Stagger as="ul" gap={0.07} className="mt-6 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-4 lg:gap-6">
        {conditionCategories.map((c, i) => (
          <StaggerItem as="li" key={c.id} className={cn(i >= 4 && !all && "max-sm:hidden")}>
            <Link
              href={`/conditions/category/${c.id}`}
              className="group relative isolate block aspect-square cursor-pointer overflow-hidden rounded-2xl bg-forest-900 shadow-soft transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lift focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-900 sm:aspect-[5/4]"
            >
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(min-width:768px) 25vw, 50vw"
                className="-z-20 object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/95 via-forest-950/60 via-40% to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-end p-3.5 text-white sm:p-5">
                <span className="text-balance text-[15px] font-semibold leading-tight text-white [text-shadow:0_1px_6px_rgb(0_0_0/0.5)] sm:text-lg">{c.label}</span>
              </span>
              <span aria-hidden className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/85 text-forest-900 opacity-0 transition-[opacity,translate] duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      {/* phones: "Show more" first; the link replaces it once everything is showing */}
      {!all && (
        <div className="mt-4 text-center sm:hidden">
          <button
            type="button"
            onClick={() => setAll(true)}
            aria-expanded={false}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-forest-900/25 bg-white/60 px-6 text-sm font-medium text-forest-900 transition-colors hover:bg-sage"
          >
            Show more
            <ChevronDown aria-hidden className="size-4" />
          </button>
        </div>
      )}
      <Reveal className={cn("mt-8 text-center sm:mt-12", !all && "max-sm:hidden")}>
        <CtaLink href="/diseases">Find your condition</CtaLink>
      </Reveal>
    </>
  );
}
