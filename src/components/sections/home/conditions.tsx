import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ConditionGrid } from "./condition-grid";

/**
 * "Explore Ayurvedic Treatments by Health Category" — the overall condition groups as link cards (8 groups = 2 full rows of 4).
 * Same groups feed the navbar menu (see content/site.ts). Individual conditions live under each group's page.
 * Phones show four cards at first (see ConditionGrid).
 */
export function Conditions() {
  return (
    <section aria-labelledby="conditions-title" className="relative isolate overflow-clip pb-10 pt-10 sm:py-16 lg:pb-24 lg:pt-32">
      {/* pinned photo (parallax): the page scrolls over it on desktop; plain background on touch / reduced motion */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center motion-reduce:bg-scroll lg:bg-fixed"
        style={{ backgroundImage: "url('/images/end-to-end.webp')" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ivory/80" />
      <Container>
        <Reveal><SectionTitle id="conditions-title">Explore Ayurvedic Treatments by Health Category</SectionTitle></Reveal>
        <ConditionGrid />
      </Container>
    </section>
  );
}
