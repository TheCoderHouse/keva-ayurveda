import type { Clinic, NavGroup, NavLink } from "@/types";
import { conditionCategories } from "@/content/home";

const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const site = {
  name: "Keva Ayurveda",
  tagline: "Authentic, Affordable, Accessible Ayurveda for All",
  url: "https://www.kevaayurveda.com",
  description:
    "India's first NABH-accredited Ayurveda company. Consultations, Panchakarma, women's care, pharmacy and insurance-supported treatment across Bengaluru and Mysore.",
  hours: "8:00 AM – 8:00 PM · All days",
  address: "#28, 5th Cross, 35th Main, BTM 2nd Stage, Bengaluru – 560068",
  email: "info@kevaayurveda.com",
  phone: { consult: "+91 8050080058", treatment: "+91 8050056033" },
  whatsapp: { delivery: "+91 9071208079", deliveryLink: "https://wa.me/919071208079" },
  youtube: "https://www.youtube.com/channel/UCBdIflvPYc4fmk7wXO6X6rA",
  youtubeVideos: "https://www.youtube.com/@kevaayurveda6054/videos",
  yoga: "https://aurevayoga.com/kevaayurveda",
  about:
    "Keva Ayurveda began its operation in 2011 with a vision to provide Authentic, Affordable & Accessible Ayurveda for all. Keva Ayurveda has been rated as The Best Ayurveda Clinic & Hospital in Bangalore and also considered as the most reliable on the basis of reviews and recommendations on Practo, Lybrate, Google, and other online health portals. Patients across India, Malaysia, Dubai, Singapore, Sri Lanka, USA, UK, Europe, visit Keva Ayurveda, Bangalore to avail best in class Ayurveda treatments.",
} as const;

export const tel = (n: string) => `tel:${n.replace(/[^+\d]/g, "")}`;

/** Same WhatsApp appointment link the original site uses. */
export const ctaHref = "https://api.whatsapp.com/send?phone=918050080058&text=Hello";

const L = (label: string, base: string): NavLink => ({ label, href: `${base}/${slug(label)}` });

export const specialityLinks: NavLink[] = [
  { label: "Weight Management", href: "/weight-management" },
  { label: "Spine & Joint Care", href: "/spine-joint-care" },
  { label: "Panchakarma Treatment", href: "/panchakarma-treatment" },
  { label: "Skin Care", href: "/skin-care" },
  { label: "Insomnia & Stress Management", href: "/insomnia-stress-management" },
  { label: "Cholesterol Management", href: "/cholesterol-management" },
  { label: "Infertility Management", href: "/infertility-management" },
  { label: "Hair Care", href: "/hair-care" },
  { label: "Paralysis Management", href: "/paralysis-management" },
  { label: "Parkinson Management", href: "/parkinson-management" },
  { label: "Women Care", href: "/women-care" },
  { label: "Piles Treatment", href: "/piles-ayurveda-treatment" },
];

/** Same groups as the homepage "Ayurveda Can Treat" section. */
const conditionLinks: NavLink[] = conditionCategories.map((c) => ({
  label: c.label,
  href: `/conditions/category/${c.id}`,
}));

const treatmentLinks: NavLink[] = [
  "Akshi Sekam", "Abhyangam and Swedam", "Basthi (Colon Therapy)", "Choorna Swedam", "Greeva Basthi (For neck pain)",
  "Janu Vasthi", "Kati Basti", "Ksheeradhara", "Nasyam", "Netra Tarpanam", "Njavarakizhi / Navaralepam",
  "Paadabhyagam", "Patrapotala Swedam", "Pichu (for pain relief)", "Pizhichil", "Shiroabhyangam", "Shirolepam", "Shirodhara",
  "Takradhara", "Thalapothichil", "Udwartana (for weight loss)",
].map((l) => L(l, "/ayurveda-treatments"));

const specialTreatmentLinks: NavLink[] = [
  "Tejomayi Therapy", "Ayurvardhini Therapy", "Sandhirujahara Therapy", "Pre & Post Natal Care",
  "Corporate Wellness Programme", "Traveller's Detoxification Programme", "Nirvana Therapy", "De-stress Package",
  "One Day Post-Delivery Package", "Geriatric Care Package",
].map((l) => L(l, "/special-ayurveda-treatments"));

export const mainNav: NavGroup[] = [
  {
    label: "Ayurveda",
    href: "/ayurveda-treatments",
    groups: [
      { title: "Specialities", items: specialityLinks },
      { title: "Ayurveda Can Treat", items: conditionLinks },
      { title: "Ayurveda Treatments", items: treatmentLinks },
      {
        title: "Special Treatments",
        items: [...specialTreatmentLinks, { label: "Integrated Care", href: "/integrated-care" }],
      },
    ],
  },
  {
    label: "Testimonials",
    href: "/testimonials",
    groups: [
      {
        items: [
          { label: "Video Testimonials", href: "/video-testimonials" },
          { label: "Practo and Google Testimonials", href: "/testimonials" },
        ],
      },
    ],
  },
  { label: "Insurance", href: "/medical-insurance" },
  { label: "Blogs", href: "/blogs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Yoga", href: site.yoga, external: true },
  {
    label: "About Us",
    href: "/about-us",
    groups: [
      {
        items: [
          { label: "About Keva Ayurveda", href: "/about-us" },
          { label: "Contact Us", href: "/contact-us" },
          { label: "FAQs", href: "/faqs" },
        ],
      },
    ],
  },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Covid 19", href: "/covid-19" },
      { label: "Insurance", href: "/medical-insurance" },
      { label: "Franchise", href: "/best-franchisee-in-india" },
      { label: "About Us", href: "/about-us" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blogs", href: "/blogs" },
      { label: "Home Care", href: "/home-care-services" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Terms & Privacy Policy", href: "/terms-privacy-policy" },
    ],
  },
  {
    title: "Specialities",
    links: [
      { label: "Specialities", href: "/best-ayurveda-hospital-in-india" },
      { label: "Additional Specialties", href: "/additional-specialties" },
      { label: "Ayurveda Beauty Treatments", href: "/ayurveda-facials-details" },
      { label: "Rejuvenative Treatments", href: "/rejuvenative-treatments-details" },
      { label: "Special Treatments", href: "/special-ayurveda-treatments" },
    ],
  },
];

export const clinics: Clinic[] = [
  { name: "Bangalore - BTM Layout", area: "Head Office" },
  { name: "Bangalore - HSR Layout", area: "Bengaluru" },
  { name: "Bangalore - Indiranagar", area: "Bengaluru" },
  { name: "Bangalore - Marathahalli", area: "Bengaluru" },
  { name: "Bangalore - Whitefield / ITPL", area: "Bengaluru" },
  { name: "Bangalore - JP Nagar", area: "Bengaluru" },
  { name: "Bangalore - Nagarbhavi", area: "Bengaluru" },
  { name: "Mysore", area: "Karnataka" },
  { name: "Online Consultation", area: "Anywhere in India" },
];
