import { cn } from "@/lib/cn";

/** Decorative line-art leaf spray. Swap for photography via <Media/> when assets are available. */
export function Botanical({ className }: { className?: string }) {
  const leaves = Array.from({ length: 9 });
  return (
    <svg viewBox="0 0 200 400" fill="none" aria-hidden className={cn("pointer-events-none", className)}>
      <path d="M100 400C100 300 96 180 104 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {leaves.map((_, i) => {
        const y = 360 - i * 38;
        const left = i % 2 === 0;
        const dir = left ? -1 : 1;
        return (
          <path
            key={i}
            d={`M100 ${y} C ${100 + dir * 30} ${y - 8}, ${100 + dir * 62} ${y - 34}, ${100 + dir * 70} ${y - 70} C ${100 + dir * 36} ${y - 54}, ${100 + dir * 8} ${y - 30}, 100 ${y}Z`}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
}
