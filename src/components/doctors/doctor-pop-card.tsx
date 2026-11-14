import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap } from "lucide-react";
import type { Doctor } from "@/types";

/**
 * Team card: the doctor's cut-out rises out of the top of the card (head and shoulders above the edge, the rest
 * fading into it), with experience, qualifications and specialities underneath. The whole card links to the profile.
 */
export function DoctorPopCard({ doctor: d }: { doctor: Doctor }) {
  return (
    <Link
      href={`/doctors/${d.slug}`}
      aria-label={`${d.name} — view profile`}
      className="group relative flex h-full cursor-pointer flex-col rounded-3xl border border-forest-900/10 bg-gradient-to-b from-sage-100/50 via-ivory to-ivory px-4 pb-4 pt-[7.4rem] shadow-soft transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-900"
    >
      {/* the doctor, standing up out of the card */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 -top-16 flex h-44 justify-center">
        <span className="absolute bottom-0 left-1/2 size-36 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(147_218_151/0.35),transparent)] blur-md" />
        <Image
          src={d.cutout!}
          alt=""
          width={1122}
          height={1402}
          sizes="160px"
          className="relative h-full w-auto origin-bottom object-contain object-bottom transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [filter:drop-shadow(0_12px_12px_rgb(13_31_23/0.2))] [mask-image:linear-gradient(to_bottom,#000_82%,transparent)] group-hover:scale-[1.07]"
        />
      </span>

      <span className="font-display text-lg font-semibold leading-tight text-forest-900">{d.name}</span>
      <span className="mt-0.5 text-xs font-medium leading-snug text-gold-700">{d.role}</span>

      <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-sage px-2.5 py-0.5 text-[11px] font-semibold text-forest-950">
        <Award aria-hidden className="size-3.5" strokeWidth={1.8} />
        {d.experience ?? "—"} experience
      </span>

      {d.credentials && (
        <span className="mt-2.5 flex items-start gap-1.5 text-xs leading-snug text-forest-900">
          <GraduationCap aria-hidden className="mt-px size-4 shrink-0 text-gold-700" strokeWidth={1.6} />
          <span className="line-clamp-2">{d.credentials}</span>
        </span>
      )}

      {d.specialties && d.specialties.length > 0 && (
        <span className="mt-3 block">
          <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-forest-900/55">Speciality</span>
          <span className="mt-1 flex flex-wrap gap-1">
            {d.specialties.slice(0, 3).map((t) => (
              <span key={t} className="rounded-full border border-forest-900/15 bg-white/60 px-2 py-px text-[11px] text-forest-900">{t}</span>
            ))}
          </span>
        </span>
      )}

      <span className="mt-auto flex items-center gap-1 pt-4 text-[13px] font-semibold text-forest-900">
        View profile
        <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
