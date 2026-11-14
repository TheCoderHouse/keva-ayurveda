"use client";

import { CalendarCheck, ChevronRight, Phone } from "lucide-react";
import { site, tel } from "@/content/site";
import { useBooking } from "@/components/layout/booking-popup";

/**
 * Mobile / tablet booking: a compact action row under the hero. The form opens in the site-wide booking popup (bottom-right, above the chat button).
 */
export function BookSheet() {
  const { open } = useBooking();

  return (
    <>
      <div className="flex gap-2.5">
        <button
          type="button"
          onClick={open}
          className="group flex min-h-12 flex-1 cursor-pointer items-center gap-3 rounded-2xl bg-sage px-4 text-left text-forest-950 shadow-soft transition-colors hover:bg-mint"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ivory text-forest-900">
            <CalendarCheck aria-hidden className="size-4" />
          </span>
          <span className="flex-1 text-sm font-semibold leading-tight">
            Book your consultation
            <span className="block text-[11px] font-normal text-forest-900/70">Takes less than a minute</span>
          </span>
          <ChevronRight aria-hidden className="size-4 text-forest-900/70 transition-transform group-hover:translate-x-0.5" />
        </button>
        <a
          href={tel(site.phone.consult)}
          aria-label="Call us"
          className="grid size-12 shrink-0 cursor-pointer place-items-center rounded-2xl border border-forest-900/20 bg-ivory text-forest-900 transition-colors hover:bg-sage/40"
        >
          <Phone aria-hidden className="size-5" />
        </a>
      </div>

    </>
  );
}
