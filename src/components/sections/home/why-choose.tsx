import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/cn";
import { whyChoose } from "@/content/home";
import { ctaHref } from "@/content/site";

/** Soft colour glow behind each row; alternates so rows feel distinct (palette tints only). */
const GLOWS = [
  "bg-[radial-gradient(closest-side,rgb(169_184_135/0.55),transparent)]",
  "bg-[radial-gradient(closest-side,rgb(205_207_218/0.9),transparent)]",
] as const;

/**
 * "Why Choose Keva Ayurveda" — six alternating rows: big heading, short text, button, and a rounded photo
 * over a soft glow. Layout after the "Even" reference; content from kevaayurveda.com.
 */
export function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="relative isolate overflow-hidden py-12 lg:py-16">
      <Container>
        <Reveal slow repeat>
          <SectionTitle id="why-title">Why Choose Keva Ayurveda</SectionTitle>
        </Reveal>

        <ol className="mt-6 space-y-6 lg:space-y-2">
          {whyChoose.map((w, i) => {
            const flip = i % 2 === 1;
            const external = w.cta.href === "appointment" || w.cta.href.startsWith("tel:");
            const href = w.cta.href === "appointment" ? ctaHref : w.cta.href;
            return (
              <li key={w.title} className="relative">
                <div aria-hidden className={cn("pointer-events-none absolute -z-10 aspect-square w-[60%] -translate-y-1/2 blur-2xl", GLOWS[i % 2], flip ? "right-[22%] top-1/2" : "left-[22%] top-1/2")} />
                <div className={cn("grid items-center gap-6 lg:grid-cols-2 lg:gap-14 lg:py-8", flip && "lg:[&>*:first-child]:order-2")}>
                  <Reveal slow repeat>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] bg-sand shadow-lift">
                      <Image src={w.image} alt={w.alt} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                    </div>
                  </Reveal>
                  <Reveal slow repeat delay={250}>
                    <div className={cn("max-w-md", flip && "lg:ml-auto")}>
                      <h3 className="text-balance text-4xl leading-[1.05] text-forest-900 sm:text-5xl">{w.title}</h3>
                      <p className="mt-4 font-sans text-base font-light leading-relaxed text-ink-soft">{w.text}</p>
                      <div className="mt-6">
                        <CtaLink href={href} external={external}>{w.cta.label}</CtaLink>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
