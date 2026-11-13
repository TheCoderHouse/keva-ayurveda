import {
  Activity, Award, Baby, BadgeCheck, IndianRupee, MapPin, Bone, Brain, Droplets, Flame, Flower2, Heart, Leaf, Moon, Scale, Sparkles, Phone, ShieldCheck, Stethoscope, Utensils, Waves, Wind, Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  bone: Bone, waves: Waves, sparkles: Sparkles, flower: Flower2, heart: Heart, scale: Scale,
  moon: Moon, leaf: Leaf, brain: Brain, flame: Flame, activity: Activity, wind: Wind, zap: Zap,
  baby: Baby, award: Award, badge: BadgeCheck, rupee: IndianRupee, pin: MapPin, phone: Phone, shield: ShieldCheck, stethoscope: Stethoscope, droplets: Droplets, utensils: Utensils,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Leaf;
  return <Cmp aria-hidden strokeWidth={1.4} className={className} />;
}
