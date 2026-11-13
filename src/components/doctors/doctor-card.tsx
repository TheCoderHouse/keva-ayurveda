import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import type { Doctor } from "@/types";

/**
 * Home-carousel card. The whole card is one link to the doctor's profile page.
 * Full-bleed photo (no inner frame), no hover motion; keyboard focus gets a visible ring.
 */
export function DoctorCard({ doctor: d }: { doctor: Doctor }) {
  return (
    <Link
      href={`/doctors/${d.slug}`}
      aria-label={`${d.name} — view profile`}
      className="flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-forest-900/10 bg-ivory shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-900"
    >
      <span className="relative block aspect-[4/3.7] w-full bg-sand">
        <Image
          src={d.photo}
          alt=""
          fill
          sizes="(min-width:1024px) 230px, (min-width:640px) 40vw, 75vw"
          className="object-cover object-top"
        />
        {d.experience && (
          <span className="absolute bottom-2.5 left-2.5 rounded-full bg-ivory px-2.5 py-0.5 text-[11px] font-semibold text-forest-900 shadow-soft">
            {d.experience}
          </span>
        )}
      </span>
      <span className="flex flex-1 flex-col p-4">
        <span className="font-display text-xl font-medium leading-tight text-forest-900">{d.name}</span>
        <span className="mt-1 font-sans text-[13px] font-medium leading-snug text-gold-700">{d.role}</span>
        {d.credentials && (
          <span className="mt-2 flex items-start gap-1.5 font-sans text-[12px] font-light leading-snug text-ink-soft">
            <GraduationCap aria-hidden className="mt-px size-3.5 shrink-0 text-sage" strokeWidth={1.6} />
            <span className="line-clamp-2">{d.credentials}</span>
          </span>
        )}
        <span className="mt-auto pt-3">
          <span className="block rounded-full border border-forest-900/25 py-2 text-center text-[13px] font-medium text-forest-900">
            View Profile
          </span>
        </span>
      </span>
    </Link>
  );
}
