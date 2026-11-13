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
    <section aria-labelledby="conditions-title" className="relative isolate overflow-clip py-16 lg:py-24">
      {/* pinned photo (parallax): the page scrolls over it on desktop; plain background on touch / reduced motion */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center motion-reduce:bg-scroll lg:bg-fixed"
        style={{ backgroundImage: "url('/images/end-to-end.png')" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ivory/80" />
      <Container>
        <SectionTitle id="conditions-title">Explore Ayurvedic Treatments by Health Category</SectionTitle>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {conditionCategories.map((c) => (
            <li key={c.id}>
              <Link
                href={`/conditions/category/${c.id}`}
                className="group relative flex h-full min-h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-forest-900/15 bg-white/70 px-5 py-6 backdrop-blur-sm text-center text-base font-medium leading-snug text-forest-900 shadow-[0_0_0_0_var(--color-sage)] transition-[translate,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-forest-900 hover:bg-white hover:shadow-[5px_5px_0_0_var(--color-sage)] focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 focus-visible:border-forest-900 focus-visible:bg-white focus-visible:shadow-[5px_5px_0_0_var(--color-sage)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_0_var(--color-sage)] active:duration-150 sm:text-lg"
              >
                <span className="grid size-12 place-items-center rounded-full bg-sage/60 text-forest-900 transition-[background-color,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:bg-sage group-focus-visible:scale-110 group-focus-visible:bg-sage">
                  <Icon name={c.icon} className="size-6" />
                </span>
                <span className="text-balance">{c.label}</span>
                <ArrowUpRight
                  aria-hidden
                  className="absolute right-3 top-3 size-4 text-forest-900 opacity-0 transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70 group-focus-visible:opacity-70"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <CtaLink href="/diseases">Find your condition</CtaLink>
        </div>
      </Container>
    </section>
  );
}
