import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light" | "sage";
  className?: string;
}) {
  const light = tone === "light";
  const onSage = tone === "sage";
  return (
    <header className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em]",
          light ? "text-gold-300" : onSage ? "text-forest-900/70" : "text-gold-700",
          align === "center" && "justify-center",
        )}
      >
        <span aria-hidden className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </p>
      <h2 className={cn("text-4xl sm:text-5xl lg:text-6xl", light ? "text-ivory" : "text-forest-900")}>{title}</h2>
      {description && (
        <p className={cn("mt-6 text-lg leading-relaxed", light ? "text-ivory/75" : onSage ? "text-forest-900/80" : "text-ink-soft")}>{description}</p>
      )}
    </header>
  );
}
