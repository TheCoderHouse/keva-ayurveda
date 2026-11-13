import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { DoctorsCarousel } from "@/components/doctors/doctors-carousel";
import { featuredDoctors } from "@/content/home";

/** "Our Panel Of Doctors" — a still carousel of featured doctors; the full panel is on /doctors. Content rises in slowly on scroll. */
export function Doctors() {
  return (
    <section aria-labelledby="doctors-title" className="bg-sage/25 py-10 lg:py-14">
      <Container>
        <Reveal slow>
          <SectionTitle id="doctors-title">Our Panel Of Doctors</SectionTitle>
        </Reveal>
        {/* cards and the button share one reveal, so they rise together */}
        <Reveal slow delay={250} className="mt-2">
          <DoctorsCarousel doctors={featuredDoctors} />
          <div className="mt-4 text-center">
            <Link
              href="/doctors"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-forest-900/25 px-7 text-sm font-medium tracking-wide text-forest-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-900"
            >
              View all doctors
              <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
