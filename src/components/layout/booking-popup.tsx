"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { CalendarCheck, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { ctaHref } from "@/content/site";
import { BookForm } from "@/components/sections/home/book-form";

const BookingContext = createContext<{ open: () => void; close: () => void }>({ open: () => {}, close: () => {} });
export const useBooking = () => useContext(BookingContext);

/**
 * Site-wide booking popup. Every "Make / Get an appointment" CTA (any link that points at the WhatsApp booking URL)
 * opens it instead of leaving the page; the floating chat button is marked `data-chat` and keeps going to WhatsApp.
 * It glides up from the bottom-right, just above the chat button. Without JS the links still work as plain WhatsApp links.
 */
export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    trigger.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
    trigger.current?.focus?.({ preventScroll: true });
  }, []);

  // any appointment CTA → popup
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.hasAttribute("data-chat") || a.getAttribute("href") !== ctaHref) return;
      e.preventDefault();
      open();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  // Escape closes; focus the first field once the glide-in is under way
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => panel.current?.querySelector<HTMLElement>("input")?.focus({ preventScroll: true }), 350);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [isOpen, close]);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {/* phones: dim backdrop behind the bottom sheet */}
      <div
        aria-hidden
        onClick={close}
        className={cn(
          "fixed inset-0 z-50 bg-forest-950/45 transition-opacity duration-500 sm:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        ref={panel}
        role="dialog"
        aria-label="Book your consultation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 max-h-[88dvh] w-full origin-bottom-right overflow-y-auto overscroll-contain rounded-t-[1.75rem] border border-white/70 bg-ivory pb-[env(safe-area-inset-bottom)] text-forest-900 shadow-[0_30px_70px_-20px_rgb(13_31_23/0.55)]",
          "sm:inset-x-auto sm:bottom-[7.75rem] sm:right-6 sm:max-h-[calc(100dvh-8rem)] sm:w-[24rem] sm:rounded-[1.75rem] sm:pb-0",
          "transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0",
          isOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible translate-y-full opacity-100 sm:translate-y-6 sm:scale-95 sm:opacity-0",
        )}
      >
        <span aria-hidden className="mx-auto mt-2.5 block h-1 w-10 rounded-full bg-forest-900/20 sm:hidden" />
        <div className="flex items-center gap-3 border-b border-forest-900/10 px-5 py-3 sm:py-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sage text-forest-950">
            <CalendarCheck aria-hidden className="size-5" />
          </span>
          <div className="flex-1 leading-tight">
            <p className="font-sans text-base font-semibold">Book your consultation</p>
            <p className="text-xs text-forest-900/70">Takes less than a minute</p>
          </div>
          <button
            type="button"
            aria-label="Close booking form"
            onClick={close}
            className="grid size-9 cursor-pointer place-items-center rounded-full text-forest-900 transition-colors hover:bg-forest-900/10"
          >
            <X aria-hidden className="size-5" />
          </button>
        </div>
        <BookForm variant="solid" hideTitle onSent={() => setTimeout(close, 1800)} className="rounded-none border-0 bg-transparent shadow-none" />
      </div>
    </BookingContext.Provider>
  );
}
