import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { clinics, ctaHref, footerNav, site, tel } from "@/content/site";

const label = "font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-forest-900/60";
const link = "text-[15px] text-forest-900/80 transition-colors hover:text-gold-700";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ivory text-forest-900">
      {/* light green gradient (site palette) with soft glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(42rem_24rem_at_0%_0%,rgb(147_218_151/0.35),transparent_70%),radial-gradient(40rem_24rem_at_100%_100%,rgb(171_231_178/0.7),transparent_70%),linear-gradient(180deg,#ecf4e8_0%,#cbf3bb_55%,#abe7b2_100%)]"
      />

      <Container className="pb-10 pt-16 sm:pt-20 lg:pt-24">
        <h2 className="max-w-5xl text-balance font-display text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Authentic, Affordable &amp; Accessible Ayurveda <span className="font-bold text-gold-500">for all.</span>
        </h2>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex min-h-14 cursor-pointer items-center gap-2 rounded-full bg-sage px-8 text-base font-medium text-forest-950 shadow-[0_18px_40px_-14px_rgb(60_140_70/0.45)] transition-[translate,background-color] duration-300 hover:-translate-y-0.5 hover:bg-mint"
        >
          Make an appointment
          <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className={label}>{col.title}</p>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={link}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className={label}>Contact</p>
            <ul className="mt-6 space-y-3.5 text-[15px] text-forest-900/80">
              <li className="flex gap-3"><Phone aria-hidden className="mt-1 size-4 shrink-0 text-gold-700" />
                <span>
                  <a href={tel(site.phone.consult)} className="transition-colors hover:text-gold-700">{site.phone.consult}</a>
                  <br />
                  <a href={tel(site.phone.treatment)} className="transition-colors hover:text-gold-700">{site.phone.treatment}</a>
                </span></li>
              <li className="flex gap-3"><Mail aria-hidden className="mt-1 size-4 shrink-0 text-gold-700" />
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold-700">{site.email}</a></li>
              <li className="flex gap-3"><MapPin aria-hidden className="mt-1 size-4 shrink-0 text-gold-700" />
                <span>{site.address}</span></li>
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-forest-900/60">Open {site.hours}</p>
          </div>

          <div>
            <p className={label}>Connect</p>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-3 text-[15px] text-forest-900/80 transition-colors hover:text-gold-700"
            >
              <Play aria-hidden className="size-4 text-gold-700" strokeWidth={1.6} /> Keva Ayurveda on YouTube
            </a>
            <p className="mt-5 text-sm leading-relaxed text-forest-900/60">Patient stories and treatment walkthroughs, most weeks.</p>
            <p className={`${label} mt-8`}>Download app</p>
            <p className="mt-3 text-[15px] text-forest-900/80">Coming soon…</p>
          </div>
        </div>

        <div className="mt-14 border-t border-forest-900/10 pt-6">
          <p className={label}>Centres</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest-900/70">
            {clinics.map((c) => (<li key={c.name}>{c.name}</li>))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-forest-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Logo />
            <p className="text-xs text-forest-900/60">Copyright © 2018-25 Keva Ayurveda. All Rights Reserved.</p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-forest-900/55">Serving since 2011</p>
        </div>
      </Container>
    </footer>
  );
}
