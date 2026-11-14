import { Award, Building2, Package, Stethoscope, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { trustStats } from "@/content/home";
import { BookSheet } from "./book-sheet";
import { HeroCarousel } from "./hero-carousel";

const icons = { users: Users, stethoscope: Stethoscope, award: Award, building: Building2, package: Package } as const;

export function Hero() {
  return (
    <section aria-label="Welcome" className="relative flex flex-col">
      {/* lg:-mt-16: on desktop the banner starts behind the translucent navbar; on mobile the photo sits fully below it */}
      <div className="relative order-1 lg:-mt-16">
        <HeroCarousel />
      </div>
      {/* Desktop: the trust stats sit inside the bottom of the banner, so no page background shows beneath the hero. Mobile / tablet: compact action row. On desktop there is no inline form: every appointment CTA opens the booking popup. */}
      <Container className="load-rise load-d5 order-2 pt-3 lg:hidden">
        <BookSheet />
      </Container>
      <Container className="load-rise load-d6 relative z-30 order-3 pb-4 pt-3 lg:absolute lg:inset-x-0 lg:bottom-0 lg:translate-y-1/2 lg:p-0 lg:px-10">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-forest-900/10 bg-sage-100 text-forest-950 shadow-soft sm:rounded-3xl lg:grid-cols-5">
          {trustStats.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <div
                key={s.label}
                className={`flex items-center gap-3 border-forest-900/10 px-3.5 py-3 sm:p-4 lg:gap-3 lg:px-4 ${i === 4 ? "col-span-2 border-t lg:col-span-1 lg:border-t-0" : ""} ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
              >
                <span className="hidden size-11 shrink-0 place-items-center rounded-full bg-sage text-forest-950 sm:grid">
                  <Icon aria-hidden className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <dd className="font-sans text-2xl font-semibold leading-none tracking-tight text-forest-950 tabular-nums sm:text-4xl lg:text-[1.7rem] xl:text-3xl">
                    <CountUp value={s.value} suffix={s.suffix} duration={1400} />
                  </dd>
                  <dt className="mt-0.5 text-[11px] font-medium text-ink-soft sm:text-sm">{s.label}</dt>
                </div>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
