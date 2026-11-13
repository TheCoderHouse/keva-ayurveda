export type NavLink = { label: string; href: string; external?: boolean };

export type NavGroup = {
  label: string;
  href: string;
  external?: boolean;
  groups?: { title?: string; items: NavLink[] }[];
};

export type Speciality = {
  title: string;
  blurb: string;
  href: string;
  icon: string; // key into components/ui/icon map
};

export type Review = { name: string; text: string; verified?: boolean };

export type PlatformReviews = {
  platform: string;
  rating: number;
  scale: number;
  reviews: Review[];
};

/** A FAQ answer is a list of blocks: a string is a paragraph, a string[] is a bullet list. */
export type FaqBlock = string | string[];
export type Faq = { q: string; a: FaqBlock[] };

export type Clinic = { name: string; area: string };

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  credentials?: string;
  experience?: string;
  /** Optional per-doctor figure, e.g. "5,000+". When absent the clinic-wide figure is shown. */
  patients?: string;
  about: string[];
  areas?: string[];
};
