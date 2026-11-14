"use client";

import { CalendarCheck, ChevronRight } from "lucide-react";
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
      </div>

    </>
  );
}
