import type { Doctor, Faq, PlatformReviews, Speciality } from "@/types";
import { slugify } from "@/lib/slug";

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Hero carousel — the 5 slides, headlines, buttons and images from kevaayurveda.com.
 * (Slide order follows the original; GIC is slide 2.)
 */
export type HeroSlide = {
  kicker: string;
  title: string;
  cta: string;
  href: string;
  external?: boolean;
  image: string;
  alt: string;
  /** "contain" keeps a non-wide artwork whole instead of cropping it full-bleed */
  fit?: "contain";
};

export const heroSlides: HeroSlide[] = [
  {
    kicker: "We offer you the best!",
    title: "Ayurveda treatments to Strengthen Your Spine and Joints",
    cta: "Make an appointment",
    href: "appointment",
    image: "/hero/slide-spine.webp",
    alt: "Therapist treating an older man's spine",
  },
  {
    kicker: "GIC Empanelled",
    title: "Keva Ayurveda is proud to be empanelled with the GIC Network.",
    cta: "Avail Insurance!",
    href: "/medical-insurance",
    image: "/hero/slide-gic.webp",
    alt: "General Insurance Council empanelled hospital award",
  },
  {
    kicker: "We offer you the best!",
    title: "Ayurveda Panchakarma to Boost Your Immune System",
    cta: "Make an appointment",
    href: "appointment",
    image: "/hero/slide-shirodhara.webp",
    alt: "Shirodhara oil therapy",
  },
  {
    kicker: "We offer you the best!",
    title: "Ayurveda Remedies to Strengthen Your Skin's Immune System",
    cta: "Make an appointment",
    href: "appointment",
    image: "/hero/slide-skin.webp",
    alt: "Doctor examining a skin condition on a woman's forearm",
  },
  {
    kicker: "We offer you the best!",
    title: "Ayurveda treatments for Infertility",
    cta: "Make an appointment",
    href: "appointment",
    image: "/hero/slide-fertility.webp",
    alt: "Couple consulting an Ayurveda doctor about fertility",
  },
];

/**
 * Hero trust metrics — every figure is from Keva's own material:
 * - 1,00,000+ patients, 9+ branches, 12+ recognitions, 13 years: the "Excellence in Panchakarma" award graphic
 *   (public/awards/bestpanchakarnma.webp)
 * - 48 conditions: the "Ayurveda Can Treat" list on kevaayurveda.com
 * - 5000+ products: supplied by the client (not stated on the original site)
 * NOTE: the site states no count of doctors, so none is shown.
 */
export const trustStats = [
  { icon: "users", value: 100000, suffix: "+", label: "Patients served" },
  { icon: "stethoscope", value: 48, suffix: "+", label: "Conditions treated" },
  { icon: "award", value: 12, suffix: "+", label: "Awards & recognitions" },
  { icon: "building", value: 9, suffix: "+", label: "Branches" },
  { icon: "package", value: 5000, suffix: "+", label: "Products" },
] as const;

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  Awards & recognition (full original text)                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  About Keva Ayurveda — text and award slides as on kevaayurveda.com        */
/* -------------------------------------------------------------------------- */

export const aboutIntro =
  "Keva Ayurveda is India’s first NABH Accredited Ayurveda Company offering one-stop Ayurveda Solution starting from In clinic Consultation, Online Consultation, Ayurveda Treatments in OP (Outpatient) & IP (In-Patient), Ayurveda Pharmacy, Online Delivery of medicines across India, Homecare Services for elderly. Corporate Wellness Programmes, Complete women care. Yoga & more. All the consultations and treatments are performed under the guidance of qualified & experienced Ayurveda Doctors & Panchakarma Therapists.";

export type AwardSlide = { title: string; meta: string; image?: string; alt?: string; paragraphs: string[] };

export const awardSlides: AwardSlide[] = [
  {
    title: "The Best Ayurveda Infertility Treatment Centre in Karnataka",
    meta: "India Achiever’s Award · Nov 2023",
    image: "/awards/ab7.webp",
    alt: "Kannada Prabha newspaper report on the India Achiever’s Award",
    paragraphs: [
      "Keva Ayurveda wins “The Best Ayurveda Infertility Treatment Centre in Karnataka” at the India Achiever’s Award held at Taj Hotels, Bangalore | Nov 2023. Dr Krishna Kumar, Founder and CEO & Dr Deepika Chief Medical Officer of Keva Ayurveda received this award.",
    ],
  },
  {
    title: "The Digital Transformer",
    meta: "International MSME Day · 22 June 2022",
    image: "/awards/ab1.webp",
    alt: "Receiving The Digital Transformer award at International MSME Day",
    paragraphs: [
      "Keva Ayurveda has won “The Digital Transformer” award at the International MSME Day organized by Tally at the Radisson Blu Hotel on 22nd June 2022. The award was received by Dr Krishna Kumar S, Founder & CEO of Keva Ayurveda & Dr Deepika, Chief Medical Officer of Keva Ayurveda.",
      "Digital Transformer Award – Recognizes businesses that are agile with modern technology adoption yielding better results and feedbacks.",
    ],
  },
  {
    title: "The Best Ayurveda Clinic in Bangalore",
    meta: "5th time in a row",
    image: "/awards/ab3.webp",
    alt: "Best Ayurvedic Clinic in Bangalore for the 5th consecutive year",
    paragraphs: [
      "Keva Ayurveda has been rated as “The Best Ayurveda Clinic in Bangalore” for 5th time in a row. We thank all our patrons for believing and trusting us. We are committed to continue in bringing the Ayurveda treatments and patient care of highest standards.",
    ],
  },
  {
    title: "NABH Accreditation",
    meta: "2nd time in 6 years",
    image: "/awards/ab6.webp",
    alt: "Keva Ayurveda is now NABH accredited",
    paragraphs: [
      "Keva Ayurveda has received the prestigious NABH – National Accreditation Board for Hospitals for the 2nd time in 6 years, the first Ayurveda Company to get PANCHAKARMA accreditation. This accreditation has increased the confidence and trust among our patrons and Keva Ayurveda is committed in bringing Ayurveda treatments and patient care of the highest standards.",
    ],
  },
  {
    title: "GIC Empanelled",
    meta: "Empanelment ID: 1005793",
    image: "/awards/award26.webp",
    alt: "General Insurance Council empanelled hospital award",
    paragraphs: [
      "Keva Ayurveda is proud to be empanelled with the General Insurance Council (GIC) Common Empanelment Network. This recognition strengthens our commitment to making Authentic, Affordable & Accessible Ayurveda available to more patients through insurance-supported healthcare.",
      "Empanelment ID: 1005793",
    ],
  },
  {
    title: "Excellence in Panchakarma Award",
    meta: "AYUSH National Health Awards",
    image: "/awards/bestpanchakarnma.webp",
    alt: "Excellence in Panchakarma Award at the AYUSH National Health Awards",
    paragraphs: [
      "Keva Ayurveda has been honoured with the Excellence in Panchakarma Award at the AYUSH National Health Awards! Keva Ayurveda, Founder, Dr. Krishna Kumar & Chief Medical Officer, Dr. Deepika M accepted this award from Mr Srinivasulu, AYUSH Commissioner, Govt of Karnataka on behalf of the entire team of Keva Ayurveda, symbolizing our relentless dedication towards Ayurveda and holistic healing.",
    ],
  },
  {
    title: "The Best Ayurveda Hospital & Clinic",
    meta: "Karnataka Business Awards 2022",
    image: "/awards/ab2.webp",
    alt: "Receiving the Best Ayurveda Hospital & Clinic award at Karnataka Business Awards 2022",
    paragraphs: [
      "Keva Ayurveda has won “The Best Ayurveda Hospital & Clinic” award at the prestigious Karnataka Business Awards 2022. The award was presented by Mr. Pruthvi Reddy, State Convener & President Aam Aadmi Party, Karnataka to Dr Krishna Kumar S, Founder & CEO of Keva Ayurveda.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Specialities (the 12 on the original nav)                                 */
/* -------------------------------------------------------------------------- */

export const specialities: Speciality[] = [
  { title: "Weight Management", blurb: "Constitution-led, sustainable metabolic care.", href: "/weight-management", icon: "scale" },
  { title: "Spine & Joint Care", blurb: "Spondylosis, slip disc, sciatica and arthritis.", href: "/spine-joint-care", icon: "bone" },
  { title: "Panchakarma Treatment", blurb: "Doctor-supervised detox and rejuvenation.", href: "/panchakarma-treatment", icon: "waves" },
  { title: "Skin Care", blurb: "Psoriasis, acne, allergies and dermatitis.", href: "/skin-care", icon: "sparkles" },
  { title: "Insomnia & Stress Management", blurb: "Restorative sleep and a calmer nervous system.", href: "/insomnia-stress-management", icon: "moon" },
  { title: "Cholesterol Management", blurb: "Lipid and blood-pressure care.", href: "/cholesterol-management", icon: "activity" },
  { title: "Infertility Management", blurb: "Male and female fertility care.", href: "/infertility-management", icon: "heart" },
  { title: "Hair Care", blurb: "Hairfall, dandruff and early graying.", href: "/hair-care", icon: "leaf" },
  { title: "Paralysis Management", blurb: "Supervised recovery and rehabilitation.", href: "/paralysis-management", icon: "brain" },
  { title: "Parkinson Management", blurb: "Supportive Ayurvedic care for Parkinson’s.", href: "/parkinson-management", icon: "zap" },
  { title: "Women Care", blurb: "PCOD, pre & post natal and complete women’s care.", href: "/women-care", icon: "flower" },
  { title: "Piles Treatment", blurb: "Piles, fissure and fistula care.", href: "/piles-ayurveda-treatment", icon: "flame" },
];

/* -------------------------------------------------------------------------- */
/*  Treatments                                                                */
/* -------------------------------------------------------------------------- */

// The original site lists "Njavarakizhi/Navaralepam" as one entry; split here to match its stated count of 22.
export const allTreatments = [
  "Akshi Sekam", "Abhyangam & Swedam", "Basthi (Colon Therapy)", "Choorna Swedam", "Greeva Basthi (For neck pain)", "Janu Vasthi",
  "Kati Basti", "Ksheeradhara", "Nasyam", "Netra Tarpanam", "Njavarakizhi", "Navaralepam", "Paadabhyagam",
  "Patrapotala Swedam", "Pichu (for pain relief)", "Pizhichil", "Shiroabhyangam", "Shirolepam", "Shirodhara", "Takradhara",
  "Thalapothichil", "Udwartana (for weight loss)",
];

export const specialProgrammes = [
  "Tejomayi Therapy", "Ayurvardhini Therapy", "Sandhirujahara Therapy", "Pre & Post Natal Care",
  "Corporate Wellness Programme", "Traveller's Detoxification Programme", "Nirvana Therapy", "De-stress Package",
  "One Day Post-Delivery Package", "Geriatric Care Package",
];

/* -------------------------------------------------------------------------- */
/*  Conditions + One-Stop solution                                            */
/* -------------------------------------------------------------------------- */

export type ConditionCategory = { id: string; label: string; icon: string; image: string; items: string[] };

/**
 * Every condition from the original "Ayurveda Can Treat" list, grouped into categories.
 * The original site does not group them — this grouping is ours (labels reuse the original's
 * speciality names where they exist). New conditions can be added to any category.
 */
export const conditionCategories: ConditionCategory[] = [
  {
    id: "spine-joint",
    label: "Spine & Joint Care",
    icon: "bone",
    image: "/categories/spine-joint.webp",
    items: [
      "Ankylosing Spondylitis",
      "Fibromyalgia",
      "Gouty Arthritis",
      "Osteoarthritis",
      "Rheumatoid Arthritis",
      "Sciatica",
      "Slip Disc",
      "Spondylitis",
    ],
  },
  {
    id: "skin-hair",
    label: "Skin & Hair Care",
    icon: "sparkles",
    image: "/categories/skin-hair.webp",
    items: [
      "Acne",
      "Dandruff",
      "Dermatitis",
      "Hairfall",
      "Leucoderma",
      "Psoriasis",
      "Scalp Psoriasis",
      "Urticaria",
    ],
  },
  {
    id: "digestive",
    label: "Digestive & Anorectal Care",
    icon: "utensils",
    image: "/categories/digestive.webp",
    items: [
      "Acidity",
      "Constipation",
      "Fissure",
      "Fistula",
      "Flatulence",
      "Irritable Bowel Syndrome",
      "Jaundice",
      "Piles",
      "Ulcerative Colitis",
    ],
  },
  {
    id: "respiratory",
    label: "Respiratory, ENT & Eye",
    icon: "wind",
    image: "/categories/respiratory.webp",
    items: [
      "Allergic Rhinitis",
      "Allergy",
      "Common Cold",
      "Cough",
      "DNS (Deviated Nasal Septum)",
      "Dry Eye Syndrome",
    ],
  },
  {
    id: "reproductive",
    label: "Fertility & Reproductive Health",
    icon: "baby",
    image: "/categories/reproductive.webp",
    items: [
      "Female Infertility",
      "Leucorrhoea",
      "Male Infertility",
      "Oligospermia",
      "PCOD (Poly Cystic Ovarian Disease)",
      "Premature Ejaculation",
    ],
  },
  {
    id: "metabolic",
    label: "Metabolic & Lifestyle",
    icon: "activity",
    image: "/categories/metabolic.webp",
    items: [
      "Anaemia",
      "Diabetes",
      "Hypertension",
      "Hyperthyroidism",
      "Obesity",
    ],
  },
  {
    id: "neuro",
    label: "Neurological Care",
    icon: "brain",
    image: "/categories/neuro.webp",
    items: [
      "Headache",
      "Migraine",
      "Paralysis",
      "Parkinson's Disease",
    ],
  },
  {
    id: "kidney",
    label: "Kidney & Urinary",
    icon: "droplets",
    image: "/categories/kidney.webp",
    items: [
      "Kidney Stones",
      "Urinary Tract Infection",
    ],
  },
];

/** Flat list (category order). */
export const conditions = conditionCategories.flatMap((c) => c.items);

export type WhyItem = {
  title: string;
  text: string;
  image: string;
  alt: string;
  cta: { label: string; href: string; external?: boolean };
};

/**
 * "Why Choose Keva Ayurveda" — the six points from kevaayurveda.com/about-us.
 * The original gives only the titles; the supporting line under each is taken from facts
 * stated elsewhere on the original site (services, accreditation, GIC ID, hours, 2011).
 */
export const whyChoose: WhyItem[] = [
  {
    title: "End-To-End Services",
    text: "From in-clinic and online consultation to OP & IP treatments, Ayurveda pharmacy, medicine delivery across India, homecare for the elderly, corporate wellness, complete women care and yoga.",
    image: "/images/end-to-end.webp",
    alt: "Ayurveda therapy room with herbal oils and a treatment table",
    cta: { label: "Make an appointment", href: "appointment" },
  },
  {
    title: "Affordable Price",
    text: "Authentic, Affordable & Accessible Ayurveda for all, the vision Keva Ayurveda began with in 2011.",
    image: "/images/affordable.webp",
    alt: "A family at an Ayurveda clinic reception desk",
    cta: { label: "Make an appointment", href: "appointment" },
  },
  {
    title: "Highest Quality Standards",
    text: "India’s first NABH Accredited Ayurveda Company, and the first Ayurveda company to get Panchakarma accreditation.",
    image: "/images/quality.webp",
    alt: "A doctor reviewing a checklist in a spotless treatment room",
    cta: { label: "Make an appointment", href: "appointment" },
  },
  {
    title: "Customer Support",
    text: "Call +91 8050080058 for consultations or +91 8050056033 for treatments. We are open 8:00 am – 8:00 pm, all days.",
    image: "/images/support.webp",
    alt: "A friendly support team member on a call at the clinic desk",
    cta: { label: "Call now", href: "tel:+918050080058" },
  },
  {
    title: "Insurance Coverage Treatment",
    text: "Empanelled with the General Insurance Council (GIC) Common Empanelment Network, ID 1005793, and approved by IRDA, so Ayurveda treatments can be covered by insurance.",
    image: "/images/insurance.webp",
    alt: "A doctor explaining paperwork to a patient",
    cta: { label: "Avail Insurance!", href: "/medical-insurance" },
  },
  {
    title: "Experience In Healthcare Sector",
    text: "Operating since 2011, and rated “The Best Ayurveda Clinic in Bangalore” for the 5th time in a row.",
    image: "/images/experience.webp",
    alt: "A senior Ayurveda doctor with herbal medicines",
    cta: { label: "Make an appointment", href: "appointment" },
  },
];

/* -------------------------------------------------------------------------- */
/*  Reviews (verbatim from the original homepage)                             */
/* -------------------------------------------------------------------------- */

export const reviewPlatforms: PlatformReviews[] = [
  {
    platform: "Practo",
    rating: 4.5,
    scale: 5,
    reviews: [
      {
        name: "Pooja Rao",
        verified: true,
        text: "I visited Keva Ayurveda and Dr.Krishna Kumar for acne breakouts. He was kind enough to explain me the root cause of the issue and suggested the relevant treatment, which included proper diet plan as well. My acne has been reduced, the skin colour is enhanced and I have also lost 1kg with in 12 days! I'm starting to feel lot better already. I would like to thank Dr. Krishna Kumar for being so gentle in understanding and guiding me with the right therapy.",
      },
      {
        name: "Lingraju",
        verified: true,
        text: "Dr krishna kumar has built one of the most credible organisation in the world of ayurveda .. built on a very strong foondation of quality affordability and devoted to patient well being . I have found dr and his entire team acros to be focussed on making efforts to understand the root cause of the problem and treat from within versus a surface level treatment . A highly recommended place …wishing Dr krishna kumar and Keva great success in this very noble cause .",
      },
      {
        name: "Kruthika",
        verified: true,
        text: "We consulted Dr. Deepika for fertility treatment, in the beginning she thoroughly analysed our case with preliminary test. She closely monitored the progress / changes during the treatment and made changes to medicines to get the results as anticipated. Dr. Deepika was easily accessible to clear any doubts we had during the treatment. She explained things in detailed during the treatment. Big thanks to Dr. Deepika :-). I strongly recommend Dr. Deepika for any ayurvedic treatments.",
      },
    ],
  },
  {
    platform: "Lybrate",
    rating: 4.3,
    scale: 5,
    reviews: [
      {
        name: "Neha",
        text: "Here I am to express gratitude towards Dr Krishna. My mom had knee pain since so many years, we had gone through multiple treatment earlier but it was of no use. When I visited Keva Ayurveda, it was such a positive feeling. 7 days of magical treatment and Pain is completely gone.. Mom is really happy with the treatment. Thank you so much. I would highly recommend Dr. Krishna.",
      },
      {
        name: "Gajalakshmi",
        text: "Hi, my name is gajalakshmi actually I Am suffering from diabetic, and also I was having fibroid. But when I came to keva Ayurveda hospital Dr. Deepika mam suggest me to take panchakarma treatment after taking this I really felt very happy because now my sugar level came to normal. I really want to say thanks to Dr. Deepika mam, for treating me with such wonderful treatment. One of the best hospital and best doctor which I suggest everyone to go there and make their health perfect thank you",
      },
      {
        name: "Nirali",
        text: "Hi Deepika Doctor, after almost 4 months of hair treatment and consultation - feel extremely satisfied with each and every progress that has been undertaken. Thank you for your patience to resolve each and every query related to this treatment. This shows the indepth knowledge and experience on the subject. Now feel that I have made the right decision to visit Keva and Deepika doctor for my treatment. Regards, Nirali",
      },
    ],
  },
  {
    platform: "Google",
    rating: 4.0,
    scale: 5,
    reviews: [
      {
        name: "Akhil Juneja",
        text: "We visited Dr Krishna Kumar for the low sperm count and low motility after getting IVF suggestions from recommended hospital. Dr Krishna is very friendly, supportive and gave us the much needed confidence. He lay down the plan for 4 months and assured that if we follow this we will have baby for sure with the normal method. As he said after 4 months my wife is pregnant today naturally.",
      },
      {
        name: "Raman Panda",
        text: "My mother is paralysed from last 1month... I have been getting her treated in KEVA AYURVEDIC BTM LAYOUT branch for the last 15days. Our consulting doctor is Dr.Deepika who is excellent and the manager is also very helpful. We have got a very satisfactory result from the treatment given here... My mother is also happy with the treatment and her slow recovery... The premises is also well maintained. Well done KEVA. Thank You..",
      },
      {
        name: "Pradyumna S",
        text: "Came across keva ayurveda from my friend and visited HSR branch. I found the place clean and huygenic. Clinic looks well organised. Prior appointments were given to lessen waiting period, I am happy that I chose keva ayurveda. My parents are happy and wud like to continue their treatment at the same place. I strongly recommend Keva Ayurveda.",
      },
    ],
  },
];

/** "Testimonial Diaries" — YouTube IDs taken from the original page. */
export const videoTestimonials = ["ILl1mZaqmO4", "zU6N1ZNOObg", "c0y1Uev1wz4", "iCwYQmYBEZY", "mTNz5Jpr0RM"];

/* -------------------------------------------------------------------------- */
/*  Associations, essentials                                                  */
/* -------------------------------------------------------------------------- */

export const associations = [
  { name: "ASSOCHAM India", src: "/associations/client1.webp" },
  { name: "NABH Accredited", src: "/associations/client2.webp" },
  { name: "CureJoy", src: "/associations/client3.webp" },
  { name: "Government of Karnataka", src: "/associations/client4.webp" },
  { name: "Rohini", src: "/associations/client5-1.webp" },
  { name: "IRDAI", src: "/associations/client6-1.webp" },
];

export const essentials = [
  { title: "Swarna Bindu", text: "Get your children immunised now using Swarnabindu Prashana, one of the most comprehensive immunizing…", href: "/swarnabindu" },
  { title: "Home Remedies", text: "Almost everybody always prefers to first give home remedies a try before visiting a physician. Our kitchen and its cabinets…", href: "/home-remedies" },
  { title: "Ayurveda Recipes", text: "Here, you will find easy to cook recipes that are light and easily digestible. These recipes will maintain health and prevent…", href: "/ayurveda-recipes" },
  { title: "Medicines", text: "The science of Ayurveda encompasses within itself medicines given in various forms. The herbs are processed…", href: "/ayurveda-medicines" },
  { title: "Treatments", text: "Ayurvedic basic principles advocate treatment modalities that help in bringing back the harmony of the body.", href: "/ayurveda-treatments" },
  { title: "Diseases", text: "Any condition that causes pain, discomfort, distress to the individual, dysfunction in the body is considered as a disease.", href: "/diseases" },
];

/* -------------------------------------------------------------------------- */
/*  FAQs (verbatim from the original homepage)                                */
/* -------------------------------------------------------------------------- */

export const faqs: Faq[] = [
  {
    q: "What is Keva Ayurveda?",
    a: [
      "Keva Ayurveda is a comprehensive Ayurveda healthcare provider dedicated to making authentic Ayurvedic treatment accessible, affordable, and patient-centric. Founded in 2011 in Bengaluru, Keva Ayurveda has grown into one of India’s leading Ayurveda healthcare organizations by combining the timeless principles of Ayurveda with standardized clinical practices, quality systems, and a modern healthcare approach.",
      "As India’s first NABH Accredited Ayurveda Company, Keva Ayurveda offers a One-Stop Ayurveda Healthcare Solution, providing a complete range of services under one roof, including:",
      [
        "Personalized consultations with qualified Ayurveda doctors",
        "Doctor-supervised Panchakarma treatments",
        "Outpatient (OPD) and Inpatient (IPD) care",
        "Ayurvedic pharmacy and medicine delivery",
        "Online consultations for patients across India and abroad",
        "Preventive healthcare and wellness programs",
        "Women’s health, joint care, spine care, skin and hair care, digestive health, lifestyle disorder management, and chronic disease support",
        "Yoga, naturopathy, physiotherapy, and nutrition guidance where appropriate",
      ],
      "Every patient receives an individualized treatment plan based on Ayurvedic principles, including Prakriti (body constitution), Vikriti (current imbalance), medical history, lifestyle, and health goals. Rather than focusing only on symptom relief, Keva Ayurveda emphasizes addressing the root cause of illness while promoting long-term health and overall well-being.",
      "With a growing network of clinics, experienced Ayurveda doctors, standardized treatment protocols, and a commitment to quality care, Keva Ayurveda continues to serve patients seeking holistic, personalized, and evidence-informed Ayurvedic healthcare.",
    ],
  },
  {
    q: "What makes Keva different from other clinics?",
    a: [
      "Keva Ayurveda stands apart by offering a comprehensive, patient-centric Ayurveda healthcare experience that combines authentic Ayurvedic wisdom with standardized clinical practices and modern healthcare systems. As India’s first NABH Accredited Ayurveda Company, Keva Ayurveda is committed to delivering safe, ethical, and high-quality Ayurvedic care through qualified doctors, evidence-informed treatment protocols, and a strong focus on patient outcomes.",
      "Unlike many standalone Ayurveda clinics, Keva Ayurveda provides a One-Stop Ayurveda Healthcare Solution, offering:",
      [
        "Personalized consultations by experienced Ayurveda doctors.",
        "Doctor-supervised Panchakarma therapies tailored to each patient’s health condition and body constitution (Prakriti).",
        "Outpatient (OPD) and Inpatient (IPD) treatment facilities for comprehensive care.",
        "Ayurvedic pharmacy with prescribed medicines and home delivery services.",
        "Online consultations for patients across India and internationally.",
        "Insurance-supported Ayurveda treatments at eligible centres, subject to policy terms.",
        "Corporate wellness programs, preventive healthcare, and lifestyle counselling.",
        "Integrated services, including yoga, physiotherapy, naturopathy, and nutrition guidance where appropriate.",
      ],
      "Keva Ayurveda follows standardized operating procedures (SOPs), quality protocols, and patient safety measures across its network of clinics to ensure a consistent healthcare experience. Every treatment plan is individualized, focusing not only on symptom relief but also on addressing the underlying imbalance through Ayurveda’s holistic principles.",
      "With multiple centres across Karnataka, a growing network of franchise clinics, and a vision to make authentic Ayurveda Accessible, Affordable, and Global, Keva Ayurveda aims to provide trusted Ayurvedic healthcare for individuals and families seeking long-term wellness and holistic care.",
    ],
  },
  {
    q: "Is Keva Ayurveda NABH accredited?",
    a: ["Yes. Keva Ayurveda is India’s first NABH Accredited Ayurveda Company, reflecting its commitment to standardized clinical practices, patient safety, quality systems, and continuous improvement."],
  },
  {
    q: "What services does Keva Ayurveda offer?",
    a: [
      "Keva Ayurveda offers:",
      [
        "Ayurveda Doctor Consultations", "Panchakarma Treatments", "Inpatient (IPD) and Outpatient (OPD) Care",
        "Online Consultations", "Ayurvedic Medicines", "Lifestyle and Diet Counselling", "Women’s Health Programs",
        "Joint & Spine Care", "Skin & Hair Care", "Corporate Wellness Programs", "Preventive Health Check-ups",
        "Lab tests", "Online and Inhouse Yoga Classes*", "Acupuncture and Physiotherapy*",
      ],
    ],
  },
  {
    q: "What health conditions does Keva Ayurveda treat?",
    a: [
      "Keva Ayurveda provides Ayurvedic care for a wide range of chronic and lifestyle-related health conditions, including:",
      [
        "Arthritis", "Knee Pain", "Back Pain", "Sciatica", "Cervical Spondylosis", "Slip Disc", "PCOS", "Infertility",
        "Obesity", "Diabetes", "Psoriasis", "Eczema", "Hair Fall", "Migraine", "Digestive Disorders",
        "Stress-related conditions and many more",
      ],
      "Treatment recommendations are based on an individual consultation with a qualified Ayurveda doctor.",
    ],
  },
  {
    q: "Does Keva Ayurveda provide online consultations?",
    a: ["Yes. Patients can consult experienced Ayurveda doctors online from anywhere in India or abroad. Online consultations include medical assessment, personalized treatment advice, diet and lifestyle recommendations, Ayurvedic prescriptions where appropriate, and follow-up consultations. Call +91 8050080058 to fix an online appointment."],
  },
  {
    q: "Does Keva Ayurveda offer Panchakarma treatment?",
    a: ["Yes. Keva Ayurveda offers doctor-supervised Panchakarma therapies that are customized according to the patient’s condition, body constitution (Prakriti), and treatment goals. Panchakarma may be recommended for detoxification, rejuvenation, pain management, and certain chronic conditions after medical evaluation."],
  },
  {
    q: "Does Keva Ayurveda offer inpatient care?",
    a: ["Yes. Depending on the treatment plan, patients may receive care through outpatient consultations or inpatient Panchakarma programs that provide supervised therapy, dietary management, and daily medical monitoring."],
  },
  {
    q: "Are the doctors at Keva Ayurveda qualified?",
    a: ["Yes. Consultations are conducted by qualified Ayurveda doctors, and therapies are administered by trained Panchakarma therapists under medical supervision."],
  },
  {
    q: "Are treatments personalized for every patient?",
    a: ["Yes. Every patient undergoes an individual assessment. Treatment plans are customized based on Ayurvedic diagnosis, medical history, symptoms, lifestyle, and treatment objectives rather than following a one-size-fits-all approach."],
  },
  {
    q: "Does Keva Ayurveda provide Ayurvedic medicines?",
    a: ["Yes. Keva Ayurveda offers Ayurvedic medicines as part of the prescribed treatment plan. Medicines are recommended only after consultation with a qualified Ayurveda doctor. Ayurveda Medicines are available at Keva Ayurveda HSR branch mostly."],
  },
  {
    q: "Can Ayurvedic medicines be delivered to my home?",
    a: ["Yes. Patients consulting with Keva Ayurveda may be able to receive prescribed Ayurvedic medicines through home delivery services, subject to location and availability. Call or WhatsApp +91 9071208079 to get medicines delivered at your doorstep."],
  },
  {
    q: "How long does Ayurveda treatment usually take?",
    a: ["The duration of treatment varies depending on the medical condition, severity of symptoms, individual response to treatment, and treatment goals. Your Ayurveda doctor will explain the expected duration after evaluating your condition."],
  },
  {
    q: "Is Ayurveda suitable for long-term health?",
    a: ["Ayurveda focuses on maintaining balance in the body through personalized diet, lifestyle, herbal medicines, and therapies. Many people use Ayurvedic care for preventive health, wellness, and long-term management of chronic conditions under the guidance of qualified practitioners."],
  },
  {
    q: "Does Keva Ayurveda treat lifestyle disorders?",
    a: ["Yes. Keva Ayurveda provides holistic care for several lifestyle-related conditions, including obesity, stress, diabetes, sleep disturbances, digestive concerns, and metabolic health, using individualized Ayurvedic treatment plans. Check out reviews of patients who have been treated for their lifestyle disorder on our YouTube channel: https://www.youtube.com/@kevaayurveda6054/videos"],
  },
  {
    q: "What do patients say about Keva Ayurveda?",
    a: [
      "Keva Ayurveda is grateful for the trust and feedback received from thousands of patients over the years. Patient reviews help us continuously improve our services and maintain high standards of Ayurvedic healthcare.",
      "We have received thousands of patient reviews across platforms such as Practo and many other health portals, reflecting the experiences of patients who have consulted our doctors, undergone Panchakarma therapies, and received Ayurvedic treatment at our centres.",
      "Our team actively encourages genuine patient feedback and carefully reviews every suggestion, appreciation, or concern to enhance the patient experience.",
      "Like many healthcare organizations with an online presence, we have also observed that some reviews and ratings appear to be inaccurate or unrelated to actual patient experiences on Google. Where we believe reviews violate platform policies or are not from genuine patients, we report them to the respective platform for review. We respect the platform’s independent review process and do not seek to remove legitimate patient feedback.",
      "We remain committed to transparency and encourage prospective patients to consider the overall pattern of reviews, detailed patient experiences, and the quality of care provided over time.",
      "If you have any questions or concerns before choosing Keva Ayurveda, we encourage you to speak directly with our team or book a consultation to learn more about our approach to personalized Ayurvedic healthcare. For consultations: +91 8050080058 · For treatments: +91 8050056033 · Website: www.kevaayurveda.com",
    ],
  },
];


/* -------------------------------------------------------------------------- */
/*  Our Panel Of Doctors — from kevaayurveda.com/about-us (text as published;  */
/*  only obvious typos fixed)                                                  */
/* -------------------------------------------------------------------------- */

const doctorData: Omit<Doctor, "slug">[] = [
  {
    name: "Dr. Krishna Kumar",
    role: "Medical Director, Founder",
    credentials: "BAMS, PGDND, FAGE (Manipal)",
    experience: "16 years",
    photo: "/doctors/krishna.webp",
    cutout: "/doctors/panel/p27.webp",
    about: [
      "Dr. Krishna Kumar has been rated as one of the best Ayurveda doctors in Bangalore, recently awarded Gold star award for medical excellence by global achievers foundation. Armed with BAMS degree, PG in Nutrition & Dietetics, Fellowship from Manipal (age).",
    ],
    areas: ["Arthritis management", "Sciatica treatment", "Weight management / obesity treatment", "Psoriasis treatment", "Acne treatment", "Panchakarma / detoxification", "Diabetes management", "Hypertension management", "Hair fall & dandruff treatment", "Infertility management"],
  },
  {
    name: "Dr. Deepika",
    role: "Chief Medical Officer",
    credentials: "BAMS, YIC, FAGE (Manipal)",
    experience: "13 years",
    photo: "/doctors/deepika.webp",
    cutout: "/doctors/panel/p22.webp",
    specialties: ["PCOD", "Arthritis & spondylitis", "Panchakarma"],
    about: [
      "Dr. Deepika is one of the best Ayurvedic Doctor in Bangalore, rated with good reviews. She has bagged SIWAA award 2020 for her excellence in Medical Service. She has done her BAMS, YIC from SVYASA and FAGE (Manipal). She has also done certification courses in Ayurvedic Obstetrics & Gynecology, Infertility.",
    ],
    areas: ["PCOD", "Arthritis management", "Spondylitis and Sciatica treatment", "Weight management / obesity treatment", "Psoriasis treatment", "Acne treatment", "Panchakarma / detoxification", "Diabetes management", "Hypertension management", "Hair fall & dandruff treatment", "Infertility management", "Post natal care", "Allergies and many more"],
  },
  {
    name: "Dr. Akkamahadevi D",
    role: "Yoga & Naturopathy Consultant",
    credentials: "BNYS – SDM Ujire",
    experience: "5 years",
    photo: "/doctors/dr.webp",
    cutout: "/doctors/panel/p19.webp",
    specialties: ["Arthritis & spondylitis", "Paralysis & Parkinson", "Obesity & PCOD"],
    about: [
      "Dr Akkamahadevi has 5 years of experience in Yoga and Naturopathy. She was working as a Yoga and Naturopathy Consultant in SDM, Ujire and has been treating patients successfully for Arthritis, Spondylitis, Parkinson, Paralysis, Obesity and PCOD, Infertility, Diabetes, Hypertension, stress management, Asthma, Sinusitis, Migraine and others.",
    ],
  },
  {
    name: "Dr. Geetika Thakur",
    role: "Senior Ayurveda Consultant",
    credentials: "BAMS, YIC (SVYASA), CCN & CND (VLCC)",
    experience: "15+ years",
    photo: "/doctors/Geetika-Thakur.webp",
    cutout: "/doctors/panel/p23.webp",
    specialties: ["Joint disorders & arthritis", "Skin disorders", "Sciatica & spondylitis"],
    about: [
      "Dr. Geetika is an Ayurvedic Doctor with more than 15 years of experience. She is a qualified BAMS, certified YIC from SVYASA and CCN & CND from VLCC.",
      "She is specialized in treating Joint disorders like Arthritis etc; Skin disorders, Sciatica, Spondylitis, Paralysis, Digestive disorders, Lifestyle disorders like Obesity, Diabetes, hypertension, PCOD; General disorder like hair fall, Dandruff; Panchakarma / Detoxification and general health issues.",
      "She has written many health articles for newspapers and websites.",
    ],
  },
  {
    name: "Dr. Ayesha Firdous",
    role: "Senior Ayurveda Consultant",
    credentials: "BAMS",
    experience: "16 years",
    photo: "/doctors/Dr-Ayesha-Firdous.webp",
    cutout: "/doctors/panel/p21.webp",
    specialties: ["Panchakarma", "Digestive disorders", "Acne & skin disorders"],
    about: ["Specialized in panchakarma, Digestive Disorders, Acne, Migraine, Skin Disorders, etc."],
  },
  {
    name: "Dr. Rekha. KM",
    role: "Ayurveda Consultant",
    credentials: "BAMS",
    experience: "14 years",
    photo: "/doctors/drRekha.webp",
    cutout: "/doctors/panel/p24.webp",
    specialties: ["PCOD & infertility", "Pregnancy & post natal care", "Skin, joint & spine"],
    about: [
      "She is specialised in the treatment of PCOD, Female and Male infertility, Pregnancy Care, Post natal Care, Allergies, Asthma, Skin problems like Psoriasis, Acne, Dermatitis etc, Joint disorders like Rheumatoid Arthritis, Gout, Osteoarthritis, Diabetes management, Pain management, Hypertension management, TTTS (twin to twin transfusion syndrome) management, Depression, Thyroid disorder treatment, Obesity / weightloss management, Spine disorders like Sciatica, Cervical Spondylitis, Digestive disorders, Anxiety, Stress related disorders, Insomnia, Constipation, Piles, Fissures, Fistula, Eye disorders, Refractive error treatments for children and adults. Hairfall treatment and management. Beauty enhancement treatments.",
      "She is skilled in the use of Panchakarma therapies, Ayurvedic medicines, Dietary suggestions according to ailments, Prakruti of a person and seasonal conditions.",
    ],
  },
  {
    name: "Dr. Anuja Marawar",
    role: "Senior Ayurveda Physician",
    credentials: "BAMS, DPCH",
    experience: "18 years",
    photo: "/doctors/Dr-Anuja-Marawar.webp",
    cutout: "/doctors/panel/p20.webp",
    specialties: ["Hair fall & hair disorders", "Migraine & sinusitis", "Skin & digestive disorders"],
    about: [
      "Dr Anuja is providing traditional and authentic Ayurvedic treatments with the sole purpose of relief to the patient. Her experience includes providing effective treatments for hair thinning, hair fall and other hair disorders, migraine and headache, sinusitis, skin disorders, hyperacidity and stomach problems, stress management and related lifestyle disorders.",
    ],
  },
  {
    name: "Dr. Kishan",
    role: "Senior Ayurveda Consultant",
    credentials: "BAMS, PG Diploma in Panchakarma",
    experience: "13 years",
    photo: "/doctors/kishan.webp",
    cutout: "/doctors/panel/p28.webp",
    specialties: ["Panchakarma"],
    about: [
      "Worked as consultant and Medical officer in various reputed Ayurvedic institutions with 9 yrs of experience in practice and specialized in Panchakarma.",
    ],
  },
  {
    name: "Dr. Manisha Issac",
    role: "Senior Ayurveda Consultant",
    experience: "16+ years",
    photo: "/doctors/manisha-Issac.webp",
    cutout: "/doctors/panel/p26.webp",
    specialties: ["Diabetes", "Spinal disorders & arthritis", "Infertility & skin disorders"],
    about: [
      "Dr. Manisha Issac has over 16 years of professional experience in the field of Ayurvedic Medical Science. She is currently working as a Senior Doctor in Ayushman Panchakarma Therapy Centre, Kaggadasapura, Consultant Physician at Keva Ayurveda, Whitefield. She graduated from Government Ayurveda College Trivandrum, a premier institute in the field of Ayurvedic Medical Sciences.",
      "Dr. Manisha specializes in Diabetes, Spinal Disorders, Arthritis Management, Pediatric, Infertility, Skin Disorders, Metabolic Disorders and Panchakarma.",
    ],
  },
  {
    name: "Dr. Shraddha",
    role: "Yoga & Naturopathy Consultant",
    credentials: "Bachelor’s in Naturopathy and Yogic Sciences; Post graduation in Clinical Yoga from SDM College of Naturopathy and Yogic Sciences",
    experience: "4 years",
    photo: "/doctors/newdoc5.webp",
    cutout: "/doctors/panel/p29.webp",
    specialties: ["Lifestyle disorders", "Gynaecological disorders", "Pain management"],
    about: [
      "Having 4 years of experience in ayurvedic clinical practice.",
      "Has clinical experience of dealing with lifestyle related disorders, gynaecological disorders, Pain management. Has expertise in effectively delivering therapeutic yoga sessions, acupuncture, diet counselling. Firmly believes in the principles of Nature cure and is enthusiastic to implement the same to the health care system.",
    ],
  },
  {
    name: "Dr. Pavana Shetty",
    role: "Ayurvedic Consultant & Wellness Expert",
    experience: "15+ years",
    photo: "/doctors/drpavan.webp",
    cutout: "/doctors/panel/p25.webp",
    specialties: ["Panchakarma", "Women's health", "Lifestyle disease management"],
    about: [
      "With over 15 years of dedicated practice in traditional Ayurveda, Dr. Paavana is a trusted name in holistic healing and preventive care. She specializes in Panchakarma therapy, lifestyle disease management, women’s health, and stress-related disorders. Her deep understanding of ancient Ayurvedic principles, combined with a modern, patient-centric approach, has helped thousands of patients restore balance and vitality in their lives.",
    ],
    areas: ["Chronic lifestyle disorders (Diabetes, Hypertension, PCOS)", "Digestive health and detoxification", "Panchakarma treatments", "Ayurvedic skin and hair care", "Reproductive and menstrual health", "Stress, anxiety, and sleep disorders"],
  },
  {
    name: "Dr. Ajna Jasmin J",
    role: "Ayurvedic Consultant",
    credentials: "BAMS",
    photo: "/doctors/drajna.webp",
    cutout: "/doctors/panel/p18.webp",
    specialties: ["Spinal disorders & pain", "Digestive issues", "PCOS & gynaecological care"],
    about: [
      "Dr Ajna Jasmin J is an Ayurvedic consultant. Completed Bachelor in Ayurvedic Medicine and Surgery from Sri Kalabyraveshwara Swamy Ayurvedic College Hospital and Research Center.",
      "Specialties: She is specialized in Spinal disorders, Pain Management, Digestive issues, Gynaecological disease like PCOS, Preconception care, Post Natal Care, Arthritis, Migraine, Skin Disorders like Psoriasis, Eczema, Allergies, Acne, Obesity and Weight Management.",
    ],
  },
];

/** Each doctor gets a URL slug (e.g. "dr-krishna-kumar") for /doctors/<slug>. */
export const doctors: Doctor[] = doctorData.map((d) => ({ ...d, slug: slugify(d.name) }));

/** Shown on the home page carousel; the full panel lives on /doctors. */
export const featuredDoctors = doctors.slice(0, 6);


/**
 * About Us journey: where it began (2011), then milestones. Dated awards come first in date order;
 * the original gives no dates for the rest, so they keep their original order after them.
 */
export const journey: AwardSlide[] = [
  {
    title: "Founded in Bengaluru",
    meta: "2011",
    paragraphs: [
      "Keva Ayurveda began its operation in 2011 with a vision to provide Authentic, Affordable & Accessible Ayurveda for all.",
    ],
  },
  ...[
    "The Best Ayurveda Hospital & Clinic", // Karnataka Business Awards 2022
    "The Digital Transformer", // 22 June 2022
    "The Best Ayurveda Infertility Treatment Centre in Karnataka", // Nov 2023
    "The Best Ayurveda Clinic in Bangalore",
    "NABH Accreditation",
    "GIC Empanelled",
    "Excellence in Panchakarma Award",
  ].map((t) => awardSlides.find((a) => a.title === t)!),
];


/* -------------------------------------------------------------------------- */
/*  About Us page — text as published on kevaayurveda.com/about-us             */
/* -------------------------------------------------------------------------- */

export const aboutPage = {
  title: "One-stop Ayurveda solution for your health",
  lead: aboutIntro,
  services: ["Clinic", "Pharmacy", "Panchakarma Centre", "Hospital", "Retreat"],
  story:
    "Keva Ayurveda began its operation in 2011 with a vision to provide Authentic, Affordable & Accessible Ayurveda for all. Keva Ayurveda has been rated as The Best Ayurveda Clinic & Hospital in Bangalore and also considered as the most reliable on the basis of reviews and recommendations on Practo, Lybrate, Google, and other online health portals. Patients across India, Malaysia, Dubai, Singapore, Sri Lanka, USA, UK, Europe, visit Keva Ayurveda, Bangalore to avail best in class Ayurveda treatments.",
  registration:
    "Keva Ayurveda is registered under KPME, Government of Karnataka. Keva Ayurveda is also registered under Govt of India & approved by IRDA, this enables all Ayurveda treatments to be covered under Insurance. The leading health insurance companies and Third Party Administrators (TPAs) cover the treatments availed at Keva Ayurveda BTM branch only.",
  why: [
    { title: "End-To-End Services", icon: "heart" },
    { title: "Affordable Price", icon: "scale" },
    { title: "Highest Quality Standards", icon: "award" },
    { title: "Customer Support", icon: "phone" },
    { title: "Insurance Coverage Treatment", icon: "shield" },
    { title: "Experience In Healthcare Sector", icon: "stethoscope" },
  ],
  explore: [
    { title: "Specialities", items: ["Weight Management", "Spine & Joint Care", "Skin Care", "Panchakarma & Detoxification", "Infertility Management", "Paralysis & Parkinson Management", "Insomnia & Stress Management"] },
    { title: "Additional Specialities", items: ["Diabetes & Hypertension Management", "Cholesterol Management", "Psoriasis & Eczema Management", "Cervical & Lumbar Spondylitis", "Arthritis & Osteoarthritis Management", "PCOD, Thyroid Management", "Digestive Disorder Management"] },
    { title: "Rejuvenative Treatments", items: ["Ayurveda Beauty Treatments", "Corporate Wellness Programme", "Travellers Detox Programme", "Bridal & Groom Package", "Geriatric Care Package", "Authentic Kerala Treatments", "Hair Care Package"] },
  ],
};

/**
 * Home "Our Panel Of Doctors" stage, left to right: Dr. Krishna Kumar stands in the centre, his team on either side
 * (most senior closest to him). Only doctors with a cut-out photo are shown.
 */
const PANEL_ORDER = [
  "Dr. Akkamahadevi D", "Dr. Rekha. KM", "Dr. Ayesha Firdous", "Dr. Geetika Thakur", "Dr. Deepika",
  "Dr. Krishna Kumar",
  "Dr. Kishan", "Dr. Anuja Marawar", "Dr. Manisha Issac", "Dr. Pavana Shetty", "Dr. Shraddha", "Dr. Ajna Jasmin J",
];
export const panelDoctors: Doctor[] = PANEL_ORDER.map((n) => doctors.find((d) => d.name === n)).filter((d): d is Doctor => !!d?.cutout);
export const founderDoctor = panelDoctors.find((d) => d.name === "Dr. Krishna Kumar")!;
/** everyone else on the panel, as cards under the founder section */
export const teamDoctors = panelDoctors.filter((d) => d !== founderDoctor);
