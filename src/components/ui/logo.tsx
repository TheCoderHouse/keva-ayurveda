import Link from "next/link";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/cn";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const light = tone === "light";
  return (
    <Link href="/" aria-label="Keva Ayurveda — home" className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid size-9 place-items-center rounded-full",
          light ? "bg-gold-300 text-forest-950" : "bg-forest-900 text-gold-300",
        )}
      >
        <Leaf aria-hidden className="size-4.5" strokeWidth={1.6} />
      </span>
      <span className={cn("font-display text-2xl font-medium leading-none tracking-tight", light ? "text-ivory" : "text-forest-900")}>
        Keva
        <span className={cn("ml-1.5 text-[0.62em] font-sans font-medium uppercase tracking-[0.28em]", light ? "text-gold-300" : "text-gold-700")}>
          Ayurveda
        </span>
      </span>
    </Link>
  );
}
