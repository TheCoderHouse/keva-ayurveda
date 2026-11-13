import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { trustStats } from "@/content/home";
import { ctaHref } from "@/content/site";
import type { Doctor } from "@/types";

const MAX_CHIPS = 3;
const clinicPatients = `${trustStats[0].value.toLocaleString("en-IN")}+`;

/**
 * List-view row for /doctors. Each kind of text has its own font and shade:
 * name (serif, darkest) → role (sans, medium, green) → facts (sans, light grey, soft icons) → specialties (small, lightest).
 * Only the two buttons are links ("View Profile", "Make an appointment"); the rest of the row is not clickable.
 */
export function DoctorRow({ doctor: d }: { doctor: Doctor }) {
  const chips = d.areas?.slice(0, MAX_CHIPS) ?? [];
  const more = (d.areas?.length ?? 0) - chips.length;
  return (
    <article className="relative grid overflow-hidden rounded-3xl border border-forest-900/10 bg-ivory shadow-soft sm:grid-cols-[13rem_1fr]">
      <div className="relative aspect-[4/3] w-full bg-sand sm:aspect-auto sm:min-h-full">
        <Image src={d.photo} alt={`Portrait of ${d.name}`} fill sizes="(min-width:640px) 13rem, 100vw" className="object-cover object-top" />
      </div>

      <div className="flex flex-col p-5 sm:p-6">
        <h2 className="font-display text-3xl font-medium leading-tight text-forest-900">{d.name}</h2>
        <p className="mt-1 font-sans text-base font-medium text-gold-700">{d.role}</p>

        <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 font-sans text-sm font-light text-ink-soft">
          {d.experience && (
            <li className="flex items-center gap-1.5">
              <Briefcase aria-hidden className="size-4 text-sage" strokeWidth={1.6} />
              {d.experience} experience
            </li>
          )}
          {d.credentials && (
            <li className="flex items-center gap-1.5">
              <GraduationCap aria-hidden className="size-4 text-sage" strokeWidth={1.6} />
              {d.credentials}
            </li>
          )}
          <li className="flex items-center gap-1.5">
            <Users aria-hidden className="size-4 text-sage" strokeWidth={1.6} />
            {d.patients ? `${d.patients} patients served` : `Part of Keva’s ${clinicPatients} patients served`}
          </li>
        </ul>

        {chips.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="mr-1 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-forest-900/45">Specialties</span>
            {chips.map((a) => (
              <span key={a} className="rounded-full bg-sage/25 px-2.5 py-0.5 font-sans text-xs font-light text-forest-800">{a}</span>
            ))}
            {more > 0 && <span className="font-sans text-xs font-light text-forest-900/50">+{more} more</span>}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-3 sm:mt-auto sm:pt-5">
          <Link
            href={`/doctors/${d.slug}`}
            className="inline-block cursor-pointer rounded-full border border-forest-900/30 px-6 py-2.5 text-sm font-medium text-forest-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-900"
          >
            View Profile<span className="sr-only"> of {d.name}</span>
          </Link>
          <CtaLink href={ctaHref} external className="min-h-0 px-6 py-2.5">Make an appointment</CtaLink>
        </div>
      </div>
    </article>
  );
}
