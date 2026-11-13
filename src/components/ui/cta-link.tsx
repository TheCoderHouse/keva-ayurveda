import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "gold" | "outline" | "ghost" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-forest-900 text-ivory hover:bg-forest-700",
  gold: "bg-sage text-forest-950 hover:bg-ivory",
  outline: "border border-forest-900/25 text-forest-900 hover:border-forest-900 hover:bg-forest-900 hover:text-ivory",
  "outline-light": "border border-ivory/40 text-ivory hover:bg-ivory hover:text-forest-900",
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
    "group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-7 text-sm font-medium tracking-wide transition-colors duration-300",
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
