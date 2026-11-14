import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "gold" | "outline" | "ghost" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-sage text-forest-950 shadow-[0_10px_24px_-10px_rgb(60_140_70/0.55)] hover:-translate-y-0.5 hover:bg-mint hover:shadow-[0_16px_32px_-10px_rgb(60_140_70/0.5)]",
  gold: "bg-sage text-forest-950 shadow-[0_10px_28px_-10px_rgb(181_217_138/0.8)] hover:-translate-y-0.5 hover:bg-sage-100",
  outline: "border border-forest-900/25 text-forest-900 hover:border-sage hover:bg-sage hover:text-forest-950",
  "outline-light": "border border-forest-900/30 text-forest-900 hover:bg-sage",
  ghost: "text-forest-900 hover:text-gold-700",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function CtaLink({ href, variant = "primary", arrow = true, external, className, children }: ButtonProps) {
  const cls = cn(
    "group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide transition-[color,background-color,translate,box-shadow,border-color] duration-300",
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
