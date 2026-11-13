import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { doctors } from "@/content/home";
import { ctaHref } from "@/content/site";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/doctors/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = doctors.find((x) => x.slug === slug);
  return d ? { title: d.name, description: `${d.name} — ${d.role} at Keva Ayurveda.` } : {};
}

export default async function DoctorPage({ params }: PageProps<"/doctors/[slug]">) {
  const { slug } = await params;
  const d = doctors.find((x) => x.slug === slug);
  if (!d) notFound();

  return (
    <section className="py-8 lg:py-12">
      <Container>
        <Link href="/doctors" className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-forest-900 hover:text-gold-700">
          <ArrowLeft aria-hidden className="size-4" /> All doctors
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[22rem_1fr] lg:gap-12">
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-sand shadow-soft lg:max-w-none">
            <Image src={d.photo} alt={`Portrait of ${d.name}`} fill priority sizes="(min-width:1024px) 22rem, 90vw" className="object-cover object-top" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">{d.role}</p>
            <h1 className="mt-1 font-display text-4xl leading-tight text-forest-900 sm:text-5xl">{d.name}</h1>

            {(d.credentials || d.experience) && (
              <dl className="mt-4 flex flex-wrap gap-2 text-sm">
                {d.credentials && (
                  <div className="rounded-full bg-sage/50 px-4 py-1.5"><dt className="sr-only">Qualifications</dt><dd>{d.credentials}</dd></div>
                )}
                {d.experience && (
                  <div className="rounded-full bg-sage/50 px-4 py-1.5"><dt className="sr-only">Experience</dt><dd>Experience: {d.experience}</dd></div>
                )}
              </dl>
            )}

            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft">
              {d.about.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>

            {d.areas && (
              <>
                <h2 className="mt-8 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-forest-900">Specialties</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {d.areas.map((a) => (
                    <li key={a} className="rounded-full border border-forest-900/15 bg-white/70 px-4 py-1.5 text-sm text-forest-900">{a}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-8">
              <CtaLink href={ctaHref} external>Make an appointment</CtaLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
