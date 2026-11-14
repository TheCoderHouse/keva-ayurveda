import { cn } from "@/lib/cn";

/** The one section-heading style used across the site: centred, display serif, same size everywhere. */
export function SectionTitle({
  id,
  as: Tag = "h2",
  className,
  children,
}: {
  id?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag id={id} className={cn("text-balance text-center text-[1.65rem] leading-tight font-semibold sm:text-4xl text-forest-900 sm:text-4xl lg:text-5xl", className)}>
      {children}
    </Tag>
  );
}
