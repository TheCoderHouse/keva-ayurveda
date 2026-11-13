import { cn } from "@/lib/cn";

/** Fixed layout so server and client render identically (no random values). */
const LEAVES = [
  { left: "4%",  size: 34, dur: 17, delay: -3,  drift: 70,  spin: 220, tone: "sage" },
  { left: "13%", size: 22, dur: 21, delay: -11, drift: -50, spin: -180, tone: "dark" },
  { left: "24%", size: 40, dur: 19, delay: -7,  drift: 90,  spin: 260, tone: "dark" },
  { left: "36%", size: 26, dur: 23, delay: -15, drift: -80, spin: -240, tone: "sage" },
  { left: "47%", size: 32, dur: 18, delay: -1,  drift: 60,  spin: 200, tone: "sage" },
  { left: "58%", size: 24, dur: 22, delay: -9,  drift: -70, spin: -210, tone: "dark" },
  { left: "69%", size: 38, dur: 20, delay: -13, drift: 80,  spin: 250, tone: "sage" },
  { left: "79%", size: 28, dur: 24, delay: -5,  drift: -60, spin: -190, tone: "dark" },
  { left: "88%", size: 36, dur: 18, delay: -10, drift: 70,  spin: 230, tone: "sage" },
  { left: "95%", size: 22, dur: 21, delay: -17, drift: -40, spin: -170, tone: "dark" },
] as const;

/** Decorative leaves drifting down the nearest positioned ancestor. Hidden from assistive tech; still for reduced motion. */
export function FallingLeaves({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden [container-type:size]", className)}>
      {LEAVES.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 40 60"
          width={l.size}
          height={l.size * 1.5}
          className={cn(
            "leaf-fall absolute top-0 opacity-0",
            l.tone === "sage" ? "text-sage" : "text-gold-700/80",
          )}
          style={
            {
              left: l.left,
              "--leaf-dur": `${l.dur}s`,
              "--leaf-delay": `${l.delay}s`,
              "--drift": `${l.drift}px`,
              "--spin": `${l.spin}deg`,
            } as React.CSSProperties
          }
        >
          <path d="M20 2C34 14 38 34 20 58C2 34 6 14 20 2Z" fill="currentColor" />
          <path d="M20 8V54M20 24L28 18M20 34L12 28M20 42L27 37" stroke="#2e2d28" strokeOpacity="0.25" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}
