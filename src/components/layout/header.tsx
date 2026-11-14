"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NavIcon } from "@/components/ui/nav-icon";
import { CtaLink } from "@/components/ui/cta-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { ctaHref, mainNav, site, tel } from "@/content/site";
import type { NavGroup, NavLink } from "@/types";

const panelWidth = (n: number) => (n >= 4 ? "w-[66rem]" : n >= 2 ? "w-[34rem]" : "w-64");
const panelCols = (n: number) => (n >= 4 ? "grid-cols-4" : n >= 2 ? "grid-cols-2" : "grid-cols-1");

function NavAnchor({ item, className, onClick, children }: { item: NavLink; className?: string; onClick?: () => void; children: React.ReactNode }) {
  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>{children}</a>
  ) : (
    <Link href={item.href} className={className} onClick={onClick}>{children}</Link>
  );
}

function DesktopItem({ item }: { item: NavGroup }) {
  const n = item.groups?.length ?? 0;
  return (
    <div className="group relative">
      <NavAnchor
        item={item}
        className="flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-forest-900 transition-colors hover:text-gold-700"
      >
        {item.label}
        {n > 0 && <ChevronDown aria-hidden className="size-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />}
      </NavAnchor>
      {n > 0 && (
        <div
          className={cn(
            "invisible absolute top-full z-50 max-w-[calc(100vw-2rem)] translate-y-2 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
            panelWidth(n),
            n >= 4 ? "left-1/2 -translate-x-[38%]" : n >= 2 ? "left-0" : "right-0",
          )}
        >
          <div data-lenis-prevent className={cn("grid max-h-[50dvh] gap-x-6 gap-y-8 overflow-y-auto overscroll-contain rounded-3xl border border-forest-900/10 bg-ivory p-6 shadow-lift [scrollbar-color:var(--color-sage)_transparent] [scrollbar-width:thin]", panelCols(n))}>
            {item.groups!.map((g, gi) => (
              <div key={g.title ?? gi}>
                {g.title && <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-700">{g.title}</p>}
                <ul className="space-y-0.5">
                  {g.items.map((l) => (
                    <li key={l.label}>
                      <NavAnchor
                        item={l}
                        className="group/link flex items-start gap-2.5 rounded-xl px-2.5 py-2 text-[14.5px] leading-snug text-ink-soft transition-colors duration-200 hover:bg-sage-100 hover:text-forest-950 focus-visible:bg-sage-100 focus-visible:text-forest-950"
                      >
                        <NavIcon label={l.label} group={g.title} className="mt-px size-4 shrink-0 text-gold-700 transition-transform duration-200 group-hover/link:scale-110" />
                        <span>{l.label}</span>
                      </NavAnchor>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className={cn("sticky top-0 z-50 transition-all duration-500", scrolled ? "bg-ivory/80 shadow-soft backdrop-blur-xl" : "bg-ivory/70 backdrop-blur-lg")}>
      <div className="hidden border-b border-forest-900/10 bg-sage-100 text-xs text-forest-900 lg:block">
        <Container className="flex h-8 items-center justify-between">
          <p>We are open on {site.hours}</p>
          <div className="flex items-center gap-6">
            <a href={tel(site.phone.consult)} className="flex items-center gap-1.5 hover:text-gold-700">
              <Phone aria-hidden className="size-3" /> Have a question? {site.phone.consult}
            </a>
            <a href={tel(site.phone.treatment)} className="hover:text-gold-700">{site.phone.treatment}</a>
            <a href={`mailto:${site.email}`} className="hover:text-gold-700">{site.email}</a>
          </div>
        </Container>
      </div>

      <Container className={cn("flex items-center justify-between transition-all duration-500", scrolled ? "h-14" : "h-16")}>
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
          {mainNav.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CtaLink href={ctaHref} external className="hidden min-h-11 px-6 sm:inline-flex">Get an appointment</CtaLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-forest-900/15 text-forest-900 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

    </header>
      <div
        id="mobile-menu"
        data-lenis-prevent
        className={cn(
          "fixed inset-x-0 bottom-0 top-0 z-40 pt-20 overflow-y-auto bg-ivory px-5 pb-10 transition-all duration-500 xl:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0",
        )}
      >
        <ul className="divide-y divide-forest-900/10">
          {mainNav.map((item) => (
            <li key={item.label} className="py-4">
              <NavAnchor item={item} onClick={() => setOpen(false)} className="font-display text-2xl text-forest-900">{item.label}</NavAnchor>
              {item.groups && (
                <div className="mt-3 space-y-4">
                  {item.groups.map((g, gi) => (
                    <div key={g.title ?? gi}>
                      {g.title && <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-gold-700">{g.title}</p>}
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {g.items.map((l) => (
                          <li key={l.label}>
                            <NavAnchor item={l} onClick={() => setOpen(false)} className="flex items-start gap-2 rounded-lg px-1.5 py-1 text-sm text-ink-soft active:bg-sage-100">
                              <NavIcon label={l.label} group={g.title} className="mt-0.5 size-3.5 shrink-0 text-gold-700" />
                              <span>{l.label}</span>
                            </NavAnchor>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <CtaLink href={ctaHref} external className="mt-8 w-full">Get an appointment</CtaLink>
      </div>
    </>
  );
}
