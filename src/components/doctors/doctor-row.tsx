import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { cn } from "@/lib/cn";
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
export function DoctorRow({ doctor: d, flip = false }: { doctor: Doctor; flip?: boolean }) {
  const chips = d.areas?.slice(0, MAX_CHIPS) ?? [];
  const more = (d.areas?.length ?? 0) - chips.length;
  return (
    <article className={cn("relative grid rounded-3xl border border-forest-900/10 shadow-soft", flip ? "bg-gradient-to-l from-sage-100/60 via-ivory to-ivory sm:grid-cols-[1fr_13rem] sm:[&>*:first-child]:order-2" : "bg-gradient-to-r from-sage-100/60 via-ivory to-ivory sm:grid-cols-[13rem_1fr]")}>
      {/* the doctor stands on the card's bottom edge and rises out of its top */}
      <div className="relative h-48 w-full sm:h-auto sm:min-h-full">
        {d.cutout ? (
          <>
            <div aria-hidden className="absolute bottom-0 left-1/2 size-44 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(147_218_151/0.4),transparent)] blur-md" />
            <Image
              src={d.cutout}
              alt={`Portrait of ${d.name}`}
              width={1122}
              height={1402}
              sizes="(min-width:640px) 14rem, 60vw"
              className={cn("absolute bottom-0 left-1/2 h-[calc(100%+9rem)] w-auto max-w-none -translate-x-1/2 [filter:drop-shadow(0_12px_14px_rgb(13_31_23/0.2))]", flip ? "lg:-translate-x-[38%]" : "lg:-translate-x-[62%]")}
            />
          </>
        ) : (
          <div className="relative h-full w-full overflow-hidden rounded-l-3xl bg-sand">
            <Image src={d.photo} alt={`Portrait of ${d.name}`} fill sizes="(min-width:640px) 13rem, 100vw" className="object-cover object-top" />
          </div>
        )}
      </div>

      <div className="flex flex-col p-5 sm:p-6">
        <h2 className="font-display text-3xl font-medium leading-tight text-forest-900">{d.name}</h2>
        <p className="mt-1 font-sans text-base font-medium text-gold-700">{d.role}</p>

        <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 font-sans text-sm font-light text-ink-soft">
          {d.experience && (
            <li className="flex items-center gap-1.5">
              <Briefcase aria-hidden className="size-4 text-gold-700" strokeWidth={1.6} />
              {d.experience} experience
            </li>
          )}
          {d.credentials && (
            <li className="flex items-center gap-1.5">
              <GraduationCap aria-hidden className="size-4 text-gold-700" strokeWidth={1.6} />
              {d.credentials}
            </li>
          )}
          <li className="flex items-center gap-1.5">
            <Users aria-hidden className="size-4 text-gold-700" strokeWidth={1.6} />
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

        <div className="mt-5 flex flex-nowrap gap-2 sm:mt-auto sm:gap-3 sm:pt-5">
          <Link
            href={`/doctors/${d.slug}`}
            className="inline-block shrink-0 cursor-pointer whitespace-nowrap rounded-full border border-forest-900/30 px-4 py-2.5 text-sm sm:px-6 font-medium text-forest-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-900"
          >
            View Profile<span className="sr-only"> of {d.name}</span>
          </Link>
          <CtaLink href={ctaHref} external className="min-h-0 whitespace-nowrap px-4 py-2.5 text-sm sm:px-6">Make an appointment</CtaLink>
        </div>
      </div>
    </article>
  );
}
