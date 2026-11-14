import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { aboutPage } from "@/content/home";
import { AboutJourney } from "./about-journey";

/**
 * About Us page, built from kevaayurveda.com/about-us:
 * intro → story + registration → journey (scroll-driven) → why choose → explore lists.
 * overflow-clip (not hidden) keeps the journey's sticky rail working.
 */
export function About() {
  return (
    <>
      {/* Intro on a pinned (parallax) photo */}
      <section aria-labelledby="about-title" className="relative isolate overflow-clip py-12 lg:py-16">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-cover bg-center motion-reduce:bg-scroll lg:bg-fixed"
          style={{ backgroundImage: "url('/hero/banner-4.webp')" }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-ivory/90" />
        <Container>
          <Reveal>
            <h1 id="about-title" className="max-w-3xl text-balance text-3xl text-forest-900 sm:text-5xl lg:text-6xl">{aboutPage.title}</h1>
            <span aria-hidden className="mt-4 block h-0.5 w-20 bg-sage" />
            <p className="mt-5 max-w-4xl text-base sm:text-lg leading-relaxed text-ink-soft">{aboutPage.lead}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="What Keva Ayurveda is">
              {aboutPage.services.map((s) => (
                <li key={s} className="rounded-full bg-sage px-4 py-1.5 text-sm font-medium text-forest-950">{s}</li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-3xl bg-ivory/90 p-6 shadow-soft sm:p-8">
                <h2 className="font-display text-2xl text-forest-900 sm:text-3xl">About Keva Ayurveda</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{aboutPage.story}</p>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="flex h-full gap-4 rounded-3xl bg-sage/50 p-6 sm:p-8">
                <ShieldCheck aria-hidden className="mt-1 size-8 shrink-0 text-forest-900" strokeWidth={1.4} />
                <p className="leading-relaxed text-forest-900">{aboutPage.registration}</p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Journey */}
      <section aria-label="Our journey" className="relative overflow-clip py-10 lg:py-14">
        <Container>
          <AboutJourney />
        </Container>
      </section>

      {/* Why choose */}
      <section aria-labelledby="why-title" className="bg-sage/25 py-12 lg:py-16">
        <Container>
          <h2 id="why-title" className="text-balance text-center text-[1.65rem] leading-tight text-forest-900 sm:text-4xl lg:text-5xl">Why Choose Keva Ayurveda</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
            {aboutPage.why.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={(i % 3) * 90} className="h-full">
                  <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-forest-900/10 bg-ivory px-3 py-5 text-center shadow-soft sm:px-4 sm:py-6">
                    <span className="grid size-12 place-items-center rounded-full bg-sage/60 text-forest-900">
                      <Icon name={w.icon} className="size-6" />
                    </span>
                    <span className="text-sm font-medium leading-snug sm:text-base text-forest-900">{w.title}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Explore */}
      <section aria-labelledby="explore-title" className="py-12 lg:py-16">
        <Container>
          <h2 id="explore-title" className="text-balance text-center text-[1.65rem] leading-tight text-forest-900 sm:text-4xl lg:text-5xl">Explore Keva Ayurveda</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aboutPage.explore.map((g, i) => (
              <Reveal key={g.title} delay={i * 100} className="h-full">
                <article className="h-full rounded-3xl border border-forest-900/10 bg-ivory/80 p-6 shadow-soft">
                  <h3 className="font-display text-2xl text-forest-900">{g.title}</h3>
                  <ul className="mt-4 divide-y divide-forest-900/10">
                    {g.items.map((it) => (
                      <li key={it} className="py-2.5 text-[15px] text-ink-soft">{it}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
