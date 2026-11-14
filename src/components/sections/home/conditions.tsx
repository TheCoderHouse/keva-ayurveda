import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { CtaLink } from "@/components/ui/cta-link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { conditionCategories } from "@/content/home";

/**
 * "Explore Ayurvedic Treatments by Health Category" — the overall condition groups as link cards (8 groups = 2 full rows of 4).
 * Same groups feed the navbar menu (see content/site.ts). Individual conditions live under each group's page.
 * Target pages (/conditions/category/<id>) are not built yet.
 */
export function Conditions() {
  return (
    <section aria-labelledby="conditions-title" className="relative isolate overflow-clip pb-12 pt-12 sm:py-16 lg:pb-24 lg:pt-32">
      {/* pinned photo (parallax): the page scrolls over it on desktop; plain background on touch / reduced motion */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center motion-reduce:bg-scroll lg:bg-fixed"
        style={{ backgroundImage: "url('/images/end-to-end.webp')" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ivory/80" />
      <Container>
        <SectionTitle id="conditions-title">Explore Ayurvedic Treatments by Health Category</SectionTitle>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-4 lg:gap-6">
          {conditionCategories.map((c) => (
            <li key={c.id}>
              <Link
                href={`/conditions/category/${c.id}`}
                className="group relative isolate block aspect-square cursor-pointer overflow-hidden rounded-2xl bg-forest-900 shadow-soft transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lift focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-900 sm:aspect-[5/4]"
              >
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width:768px) 25vw, 50vw"
                  className="-z-20 object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/90 via-forest-950/35 via-50% to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end gap-2.5 p-3 text-white sm:p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sage text-forest-950 sm:size-10">
                    <Icon name={c.icon} className="size-5" />
                  </span>
                  <span className="text-balance text-[15px] font-medium leading-tight sm:text-lg">{c.label}</span>
                </span>
                <span aria-hidden className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/85 text-forest-900 opacity-0 transition-[opacity,translate] duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center sm:mt-12">
          <CtaLink href="/diseases">Find your condition</CtaLink>
        </div>
      </Container>
    </section>
  );
}
