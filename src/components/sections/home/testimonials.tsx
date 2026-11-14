import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { Reviews } from "./reviews";
import { VideoTestimonials } from "./video-testimonials";

/** Testimonials — patient reviews by platform, then the "Testimonial Diaries" videos. All from kevaayurveda.com. */
export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-sage/25 py-12 sm:py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle id="testimonials-title">Testimonials</SectionTitle>
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <Reviews />
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-16">
          <Reveal>
            <SectionTitle as="h3">Testimonial Diaries</SectionTitle>
            <VideoTestimonials />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
