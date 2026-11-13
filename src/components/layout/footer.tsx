import Link from "next/link";
import { Mail, MapPin, Phone, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { FooterVideo } from "./footer-video";
import { clinics, footerNav, site, tel } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-forest-950 text-ivory/90 [text-shadow:0_1px_8px_rgb(20_20_17/0.55)]">
      <FooterVideo />
      <Container className="grid gap-10 py-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">About Keva Ayurveda</p>
          <p className="mt-3 text-[15px] leading-relaxed text-ivory/90">{site.about}</p>
          <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">Follow us</p>
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Keva Ayurveda on YouTube"
            className="mt-3 inline-grid size-11 cursor-pointer place-items-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold-300 hover:text-gold-300"
          >
            <Play aria-hidden className="size-4.5" strokeWidth={1.5} />
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4">
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[15px] transition-colors hover:text-gold-300">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="space-y-6 lg:col-span-4">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">Contact</p>
            <ul className="space-y-3 text-[15px]">
              <li className="flex gap-3"><Phone aria-hidden className="mt-1 size-4 shrink-0 text-gold-300" />
                <span>Have a question? call us now<br />
                  <a href={tel(site.phone.consult)} className="hover:text-gold-300">{site.phone.consult}</a>{" · "}
                  <a href={tel(site.phone.treatment)} className="hover:text-gold-300">{site.phone.treatment}</a></span></li>
              <li className="flex gap-3"><Mail aria-hidden className="mt-1 size-4 shrink-0 text-gold-300" />
                <span>Need support? Drop us an email<br /><a href={`mailto:${site.email}`} className="hover:text-gold-300">{site.email}</a></span></li>
              <li className="flex gap-3"><MapPin aria-hidden className="mt-1 size-4 shrink-0 text-gold-300" />
                <span>Head Office<br />{site.address}</span></li>
              <li className="text-ivory/90">We are open on {site.hours}</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">Download app</p>
            <p className="text-[15px] text-ivory/90">Coming soon…</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="py-4">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-ivory/75">Centres</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ivory/85">
            {clinics.map((c) => (<li key={c.name}>{c.name}</li>))}
          </ul>
          <p className="mt-4 text-sm text-ivory/80">Copyright © 2018-25 Keva Ayurveda. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
