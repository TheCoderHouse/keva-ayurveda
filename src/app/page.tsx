import { Hero } from "@/components/sections/home/hero";
import { Conditions } from "@/components/sections/home/conditions";
import { WhyChoose } from "@/components/sections/home/why-choose";
import { Essentials } from "@/components/sections/home/essentials";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Faq } from "@/components/sections/home/faq";
import { Doctors } from "@/components/sections/home/doctors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Conditions />
      <WhyChoose />
      <Doctors />
      <Essentials />
      <Testimonials />
      <Faq />
    </>
  );
}
