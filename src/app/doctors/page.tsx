import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { DoctorRow } from "@/components/doctors/doctor-row";
import { doctors } from "@/content/home";

export const metadata: Metadata = {
  title: "Our Panel Of Doctors",
  description: "Qualified Ayurveda doctors and consultants at Keva Ayurveda.",
};

export default function DoctorsPage() {
  return (
    <section aria-labelledby="doctors-page-title" className="py-10 lg:py-14">
      <Container>
        <h1 id="doctors-page-title" className="text-balance text-4xl text-forest-900 sm:text-5xl lg:text-6xl">
          Our Panel Of Doctors
        </h1>
        <ul className="mt-44 space-y-44 sm:space-y-40">
          {doctors.map((d, i) => (
            <li key={d.slug}>
              <DoctorRow doctor={d} flip={i % 2 === 1} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
