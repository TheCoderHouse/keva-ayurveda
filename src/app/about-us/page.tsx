import type { Metadata } from "next";
import { About } from "@/components/sections/home/about";

export const metadata: Metadata = {
  title: "About Us",
  description: "India's first NABH-accredited Ayurveda company. Our journey, awards and recognition.",
};

export default function AboutUsPage() {
  return <About />;
}
