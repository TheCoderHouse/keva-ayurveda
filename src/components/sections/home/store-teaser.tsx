import { ArrowRight, ArrowUpRight, Droplets, Gift, Leaf, Pill, ShieldCheck, Sparkles, Truck, BadgeCheck, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { site } from "@/content/site";

const categories: { title: string; line: string; icon: LucideIcon }[] = [
  { title: "Ayurvedic Medicines", line: "Classical formulations, prepared with care", icon: Pill },
  { title: "Herbal Oils & Taila", line: "For massage, joints and everyday balance", icon: Droplets },
  { title: "Skin & Hair Care", line: "Gentle, plant-based daily rituals", icon: Sparkles },
  { title: "Immunity & Wellness", line: "Rasayana essentials for lasting strength", icon: ShieldCheck },
  { title: "Home Remedies", line: "Kitchen wisdom, ready to use", icon: Leaf },
  { title: "Wellness Kits", line: "Curated care for every season of life", icon: Gift },
];

const promises = [
  { icon: BadgeCheck, text: "Authentic, doctor-curated" },
  { icon: Truck, text: "Delivered across India" },
];

/**
 * "Keva Store": promotes the online store with a few featured categories; every card and the main button go to the store (site.store).
 */
export function StoreTeaser() {
  return (
    <section aria-labelledby="store-title" className="relative isolate overflow-clip py-12 sm:py-16 lg:py-24">
      <Container>
        <Reveal slow>
          {/* gradient hairline border around the whole announcement */}
          <div className="rounded-[2.25rem] bg-gradient-to-br from-white via-sage/70 to-gold-500/50 p-px shadow-lift">
            <div className="relative isolate overflow-hidden rounded-[calc(2.25rem-1px)] bg-gradient-to-br from-ivory via-sage-100 to-mint/70 px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              {/* ambient glows + faint leaf ring */}
              <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 -z-10 size-96 rounded-full bg-white/70 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 -z-10 size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(147_218_151/0.55),transparent)] blur-2xl" />
              <Leaf aria-hidden className="pointer-events-none absolute -right-10 -top-10 -z-10 size-72 rotate-12 text-forest-900/[0.04]" strokeWidth={0.6} />

              <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
                {/* announcement */}
                <div>
                  <p className="inline-flex items-center gap-2.5 rounded-full border border-forest-900/10 bg-white/70 py-1.5 pl-3 pr-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest-900 backdrop-blur">
                    <span className="relative grid size-2.5 place-items-center">
                      <span aria-hidden className="absolute inline-flex size-full animate-ping rounded-full bg-gold-500/60 motion-reduce:animate-none" />
                      <span aria-hidden className="relative size-2 rounded-full bg-gold-500" />
                    </span>
                    Keva Store &middot; Shop online
                  </p>

                  <h2 id="store-title" className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-forest-900 sm:text-5xl lg:text-[3.4rem]">
                    Authentic Ayurveda, <span className="bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 bg-clip-text text-transparent">delivered to your doorstep.</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
                    Shop medicines, oils and wellness essentials chosen by our doctors on the Keva Store, with the same Authentic, Affordable &amp; Accessible promise you know from our clinics.
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-medium text-forest-900">
                    {promises.map((p) => (
                      <li key={p.text} className="flex items-center gap-2">
                        <span className="grid size-7 place-items-center rounded-full bg-sage text-forest-950"><p.icon aria-hidden className="size-4" strokeWidth={1.8} /></span>
                        {p.text}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <a
                      href={site.store}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-13 cursor-pointer items-center gap-2 rounded-full bg-sage px-7 text-sm font-semibold text-forest-950 shadow-[0_14px_30px_-12px_rgb(60_140_70/0.6)] transition-[translate,background-color] duration-300 hover:-translate-y-0.5 hover:bg-mint"
                    >
                      Visit our store
                      <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <span className="text-sm text-forest-900/65">Need help choosing? Call {site.phone.consult}</span>
                  </div>
                </div>

                {/* category preview */}
                <Stagger as="ul" gap={0.08} delay={0.2} className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4" aria-label="Featured Keva Store categories">
                  {categories.map((c) => (
                    <StaggerItem as="li" key={c.title}>
                      <a
                        href={site.store}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white/90 via-white/60 to-sage-100/70 p-4 shadow-soft backdrop-blur-sm transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-900 sm:p-5"
                      >
                        <span aria-hidden className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
                        <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-sage to-mint text-forest-950 shadow-[inset_0_1px_0_rgb(255_255_255/0.6)] transition-transform duration-500 group-hover:scale-110">
                          <c.icon aria-hidden className="size-5" strokeWidth={1.5} />
                        </span>
                        <h3 className="mt-3 font-display text-base font-semibold leading-tight text-forest-900 sm:text-lg">{c.title}</h3>
                        <p className="mt-1 text-xs leading-snug text-forest-900/65 sm:min-h-[2.2rem] sm:text-[13px]">{c.line}</p>
                        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-700">
                          Shop now
                          <ArrowRight aria-hidden className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </a>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
