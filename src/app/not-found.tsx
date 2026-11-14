import type { Metadata } from "next";
import { Leaf, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { site, tel } from "@/content/site";

export const metadata: Metadata = { title: "Coming soon" };

/** Shown for any route that does not exist yet (the site is still being built out page by page). Keeps the 404 status. */
export default function NotFound() {
  return (
    <section aria-labelledby="soon-title" className="relative isolate overflow-clip py-20 sm:py-28 lg:py-36">
      <div aria-hidden className="bg-mesh absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(147_218_151/0.45),transparent)] blur-2xl"
      />
      <Container className="text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-sage text-forest-950 shadow-soft">
          <Leaf aria-hidden className="size-7" strokeWidth={1.5} />
        </span>
        <p className="mt-6 inline-block rounded-full bg-sage-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-900">
          Coming soon
        </p>
        <h1 id="soon-title" className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl lg:text-6xl">
          This page is still being prepared
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          We are growing {site.name} one page at a time, and this one isn&rsquo;t ready yet. In the meantime, our care team is happy to help you directly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink href="/">Back to home</CtaLink>
          <CtaLink href={tel(site.phone.consult)} variant="outline" arrow={false}>
            <Phone aria-hidden className="size-4" /> Call {site.phone.consult}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
