import {
  Activity, Baby, Bone, Brain, Droplets, Eye, Flame, Flower2, Heart, HeartPulse, Info, Layers, Leaf, MessageCircle, Moon, Package, Phone, Scale, Sparkles,
  Star, Stethoscope, Users, Video, Waves, Wind, type LucideIcon,
} from "lucide-react";

/** First matching keyword wins, so keep the specific ones first. */
const RULES: [RegExp, LucideIcon][] = [
  [/video/, Video],
  [/practo|google|testimonial/, Star],
  [/contact/, Phone],
  [/faq/, MessageCircle],
  [/about/, Info],
  [/weight|scale/, Scale],
  [/spine|joint|janu|kati|greeva|bone|paralysis|geriatric/, Bone],
  [/hair|skin|beauty|facial/, Sparkles],
  [/panchakarma|nirvana|tejomayi|ayurvardhini|sandhirujahara/, Flower2],
  [/insomnia|stress|sleep|shiro|thalapo|takra/, Moon],
  [/cholesterol|metabolic|lifestyle/, Activity],
  [/infertility|fertility|reproductive|natal|delivery|women/, Baby],
  [/parkinson|neuro/, Brain],
  [/respiratory|nasya|nasyam|ent\b/, Wind],
  [/eye|akshi|netra|tarpanam/, Eye],
  [/kidney|urinary|dhara|abhyangam|pichu|pizhi|basti|basthi|ksheer|udwart|detox/, Droplets],
  [/swedam|kizhi|lepam|lepa|choorna|patrapotala|njavara|navara/, Flame],
  [/package|programme|program/, Package],
  [/corporate|wellness/, Users],
  [/integrated/, Layers],
  [/digestive|anorectal|piles/, HeartPulse],
  [/care|management|health/, Heart],
];

const GROUP_FALLBACK: Record<string, LucideIcon> = {
  specialities: Stethoscope,
  "ayurveda can treat": HeartPulse,
  "ayurveda treatments": Leaf,
  "special treatments": Waves,
};

export function NavIcon({ label, group, className }: { label: string; group?: string; className?: string }) {
  const key = label.toLowerCase();
  const Cmp = RULES.find(([re]) => re.test(key))?.[1] ?? GROUP_FALLBACK[group?.toLowerCase() ?? ""] ?? Leaf;
  return <Cmp aria-hidden strokeWidth={1.6} className={className} />;
}
