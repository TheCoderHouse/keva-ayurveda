import { Hero } from "@/components/sections/home/hero";
import { Conditions } from "@/components/sections/home/conditions";
import { WhyChoose } from "@/components/sections/home/why-choose";
import { Essentials } from "@/components/sections/home/essentials";
import { StoreTeaser } from "@/components/sections/home/store-teaser";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Associations } from "@/components/sections/home/associations";
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
      <StoreTeaser />
      <Testimonials />
      <Associations />
      <Faq />
    </>
  );
}
