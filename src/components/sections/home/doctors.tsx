import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { DoctorsRow } from "@/components/doctors/doctors-row";
import { ctaHref } from "@/content/site";
import { founderDoctor as f, teamDoctors } from "@/content/home";

/** "Our Panel Of Doctors": the founder gets a section of his own, then the rest of the team as cards (full panel on /doctors). */
export function Doctors() {
  return (
    <section aria-labelledby="doctors-title" className="relative isolate overflow-clip bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <Reveal slow>
          <SectionTitle id="doctors-title">Our Panel Of Doctors</SectionTitle>
        </Reveal>

        {/* ───────── founder ───────── */}
        <Reveal slow delay={150} className="mt-8 sm:mt-12">
          <article aria-label={`${f.name}, ${f.role}`} className="relative overflow-hidden rounded-[2rem] border border-forest-900/10 bg-gradient-to-br from-ivory via-sage-100/60 to-sage-100 shadow-lift">
            <div className="grid items-end gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative flex min-h-[12.5rem] items-end justify-center px-6 pt-4 sm:min-h-[26rem] sm:pt-8 lg:min-h-[30rem]">
                <div aria-hidden className="absolute bottom-0 left-1/2 size-[28rem] -translate-x-1/2 translate-y-1/4 rounded-full bg-[radial-gradient(closest-side,rgb(147_218_151/0.4),transparent)] blur-xl" />
                <Image
                  src={f.cutout!}
                  alt={`${f.name}, ${f.role}`}
                  width={1122}
                  height={1402}
                  sizes="(min-width:1024px) 30rem, 80vw"
                  className="relative h-52 w-auto object-contain object-bottom [filter:drop-shadow(0_16px_18px_rgb(13_31_23/0.22))] sm:h-[25rem] lg:h-[29rem]"
                />
              </div>

              <div className="p-4 sm:p-9 lg:py-12 lg:pl-4 lg:pr-12">
                <p className="inline-block rounded-full bg-white/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-forest-900">Founder &amp; Medical Director</p>
                <h3 className="mt-3 text-balance font-display text-3xl sm:mt-4 sm:text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">{f.name}</h3>

                <dl className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-4">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-3 sm:p-4">
                    <span className="hidden size-11 shrink-0 place-items-center rounded-full bg-sage text-forest-950 sm:grid"><Award aria-hidden className="size-5" strokeWidth={1.6} /></span>
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-forest-900/60">Experience</dt>
                      <dd className="font-display text-xl font-semibold leading-tight text-forest-900 sm:text-2xl">{f.experience}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-3 sm:p-4">
                    <span className="hidden size-11 shrink-0 place-items-center rounded-full bg-sage text-forest-950 sm:grid"><GraduationCap aria-hidden className="size-5" strokeWidth={1.6} /></span>
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-forest-900/60">Qualifications</dt>
                      <dd className="text-[13px] font-medium leading-snug text-forest-900 sm:text-[15px]">{f.credentials}</dd>
                    </div>
                  </div>
                </dl>

                {f.about[0] && <p className="mt-3 line-clamp-3 text-sm sm:mt-5 sm:line-clamp-4 sm:text-[15px] leading-relaxed text-ink-soft">{f.about[0]}</p>}

                {f.areas && (
                  <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2" aria-label="Areas of expertise">
                    {f.areas.slice(0, 6).map((a, i) => (
                      <li key={a} className={`${i >= 3 ? "max-sm:hidden " : ""}rounded-full border border-forest-900/15 bg-white/60 px-3 py-1 text-xs text-forest-900`}>{a}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-nowrap gap-2 sm:mt-7 sm:gap-3">
                  <CtaLink href={ctaHref} external className="whitespace-nowrap px-3 text-xs sm:px-8 sm:text-base">Book appointment</CtaLink>
                  <CtaLink href={`/doctors/${f.slug}`} variant="outline" className="whitespace-nowrap px-3 text-xs sm:px-8 sm:text-base">View profile</CtaLink>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ───────── the team ───────── */}
        <Reveal slow className="mt-10 sm:mt-12">
          <h3 className="text-center font-display text-2xl font-semibold text-forest-900 sm:text-3xl">Meet the team</h3>
          <div className="-mb-8 mt-1">
            <DoctorsRow doctors={teamDoctors} />
          </div>
        </Reveal>

        <div className="mt-8 text-center sm:mt-4">
          <Link
            href="/doctors"
            className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-forest-900/25 px-7 text-sm font-medium tracking-wide text-forest-900 transition-colors hover:bg-sage hover:text-forest-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-900"
          >
            View all doctors
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
