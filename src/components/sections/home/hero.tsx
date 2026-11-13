import { Award, Building2, Package, Stethoscope, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { trustStats } from "@/content/home";
import { BookForm } from "./book-form";
import { HeroCarousel } from "./hero-carousel";

const icons = { users: Users, stethoscope: Stethoscope, award: Award, building: Building2, package: Package } as const;

export function Hero() {
  return (
    <section aria-label="Welcome">
      {/* -mt-16: the banner starts behind the (translucent) navbar */}
      <div className="relative -mt-16">
        <HeroCarousel />
        {/* Desktop: card floats over the right of the banner (Jiva-style). */}
        <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
          <Container className="flex h-full items-center justify-end pb-10 pt-16">
            <BookForm variant="glass" className="pointer-events-auto w-[23rem]" />
          </Container>
        </div>
      </div>
      {/* Mobile / tablet: card sits directly below the banner. */}
      <Container className="pt-4 lg:hidden">
        <BookForm variant="solid" />
      </Container>
      <Container className="relative z-30 py-4 lg:-mt-5 lg:pb-5 lg:pt-0">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-forest-900/10 bg-cream shadow-lift lg:grid-cols-5">
          {trustStats.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <div
                key={s.label}
                className={`flex items-center gap-3 border-forest-900/10 p-3 sm:p-4 lg:gap-3 lg:px-4 ${i === 4 ? "col-span-2 border-t lg:col-span-1 lg:border-t-0" : ""} ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
              >
                <span className="hidden size-11 shrink-0 place-items-center rounded-full bg-sage text-forest-900 sm:grid">
                  <Icon aria-hidden className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <dd className="font-sans text-3xl font-semibold leading-none tracking-tight text-forest-900 tabular-nums sm:text-4xl lg:text-[1.7rem] xl:text-3xl">
                    <CountUp value={s.value} suffix={s.suffix} duration={1400} />
                  </dd>
                  <dt className="mt-0.5 text-xs font-medium text-forest-900 sm:text-sm">{s.label}</dt>
                </div>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
