import Link from "next/link";
import { ArrowUpRight, CalendarClock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/components/ui/social-icons";
import { Logo } from "@/components/ui/logo";
import { clinics, ctaHref, footerNav, site, tel } from "@/content/site";

const socials = [
  { name: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { name: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { name: "X (Twitter)", href: site.social.twitter, Icon: XIcon },
  { name: "YouTube", href: site.social.youtube, Icon: YoutubeIcon },
];

const label = "font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-forest-900/60";
const link = "text-[15px] lg:text-sm text-forest-900/80 transition-colors hover:text-gold-700";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ivory text-forest-900">
      {/* light green gradient (site palette) with soft glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(42rem_24rem_at_0%_0%,rgb(147_218_151/0.35),transparent_70%),radial-gradient(40rem_24rem_at_100%_100%,rgb(171_231_178/0.7),transparent_70%),linear-gradient(180deg,#ecf4e8_0%,#cbf3bb_55%,#abe7b2_100%)]"
      />

      <Container className="pb-10 pt-16 sm:pt-20 lg:pb-5 lg:pt-8">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
        <h2 className="max-w-5xl text-balance font-display text-3xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:max-w-none lg:text-[1.7rem] lg:whitespace-nowrap xl:text-[2.1rem] 2xl:text-[2.5rem]">
          Authentic, Affordable &amp; Accessible Ayurveda <span className="font-bold text-gold-500">for all.</span>
        </h2>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex min-h-14 lg:mt-0 lg:min-h-12 lg:shrink-0 cursor-pointer items-center gap-2 rounded-full bg-sage px-8 text-base font-medium text-forest-950 shadow-[0_18px_40px_-14px_rgb(60_140_70/0.45)] transition-[translate,background-color] duration-300 hover:-translate-y-0.5 hover:bg-mint"
        >
          Make an appointment
          <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        </div>

        {/* contact strip */}
        <div className="mt-10 grid gap-x-8 gap-y-6 border-b border-forest-900/10 pb-10 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:pb-5">
          <div className="flex gap-3">
            <Phone aria-hidden className="mt-1 size-6 shrink-0 text-gold-700" strokeWidth={1.4} />
            <div>
              <p className="text-sm text-gold-700">Have a question? call us now</p>
              <p className="mt-1 text-base text-forest-950">
                <a href={tel(site.phone.consult)} className="hover:text-gold-700">{site.phone.consult}</a><br />
                <a href={tel(site.phone.treatment)} className="hover:text-gold-700">{site.phone.treatment}</a>
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail aria-hidden className="mt-1 size-6 shrink-0 text-gold-700" strokeWidth={1.4} />
            <div>
              <p className="text-sm text-gold-700">Need support? Drop us an email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block break-all text-base text-forest-950 hover:text-gold-700">{site.email}</a>
            </div>
          </div>
          <div className="flex gap-3">
            <CalendarClock aria-hidden className="mt-1 size-6 shrink-0 text-gold-700" strokeWidth={1.4} />
            <div>
              <p className="text-sm text-gold-700">We are open on</p>
              <p className="mt-1 text-base text-forest-950">{site.hours}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gold-700">Follow us</p>
            <ul className="mt-2 flex gap-2">
              {socials.filter((x) => x.href).map(({ name, href, Icon }) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Keva Ayurveda on ${name}`} className="grid size-10 cursor-pointer place-items-center rounded-full border border-forest-900/20 text-forest-900 transition-colors hover:bg-sage">
                    <Icon aria-hidden className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-10 sm:gap-x-10 lg:gap-y-6 lg:pt-5 lg:grid-cols-[2.1fr_1fr_1fr_1.2fr]">
          {/* phones: About and Head Office span the full width, the link columns sit side by side */}
          <div className="col-span-2 sm:col-span-1">
            <p className={label}>About Keva Ayurveda</p>
            <p className="mt-6 text-[15px] leading-relaxed text-forest-900/80 lg:mt-2.5 lg:text-[13px] lg:leading-[1.5]">{site.about}</p>
          </div>
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className={label}>{col.title}</p>
              <ul className="mt-6 space-y-3 lg:mt-2.5 lg:space-y-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={link}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="col-span-2 sm:col-span-1">
            <p className={label}>Head Office</p>
            <p className="mt-6 flex gap-3 text-[15px] lg:mt-3 leading-relaxed text-forest-900/80">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-gold-700" />
              <span>{site.address}</span>
            </p>
            <p className={`${label} mt-10 lg:mt-5`}>Download App</p>
            <p className="mt-4 text-[15px] text-forest-900/80 lg:mt-2">Coming soon…</p>
          </div>
        </div>

        <div className="mt-10 border-t border-forest-900/10 pt-6 lg:mt-4 lg:flex lg:items-baseline lg:gap-6 lg:pt-3">
          <p className={label}>Centres</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm lg:mt-0 lg:gap-y-0.5 text-forest-900/70">
            {clinics.map((c) => (<li key={c.name}>{c.name}</li>))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-forest-900/10 pt-6 lg:mt-3 lg:pt-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Logo />
            <p className="text-xs text-forest-900/60">Copyright © 2018-25 Keva Ayurveda. All Rights Reserved.</p>
          </div>
          <div className="flex flex-col gap-1 sm:items-end">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-forest-900/55">Serving since 2011</p>
            <p className="text-xs text-forest-900/60">
              Designed &amp; developed by{" "}
              <a href="https://thecoderhouse.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-forest-900 underline-offset-4 transition-colors hover:text-gold-700 hover:underline">
                thecoderhouse.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
