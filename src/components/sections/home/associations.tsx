import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

/**
 * "Our Association": partner / accreditation brands in an endless, slow horizontal loop (pure CSS, pauses on hover,
 * static for reduced-motion users). To use a real logo, drop a .webp file named after `logo` into /public/associations;
 * until it exists the brand shows as a typographic wordmark.
 */
const brands = [
  { name: "Rohini", logo: "rohini.webp", color: "#b2243f", sub: "" },
  { name: "IRDAI", logo: "irdai.webp", color: "#1d2fc9", sub: "Insurance Regulatory and Development Authority" },
  { name: "ASSOCHAM", logo: "assocham.webp", color: "#d4372c", sub: "India" },
  { name: "NABH", logo: "nabh.webp", color: "#1b75c8", sub: "Accredited" },
  { name: "CureJoy", logo: "curejoy.webp", color: "#2f3a2f", sub: "" },
  { name: "Karnataka", logo: "karnataka.webp", color: "#b8321f", sub: "One state. Many worlds." },
] as const;

const hasFile = (f: string) => fs.existsSync(path.join(process.cwd(), "public", "associations", f));

function BrandCard({ b }: { b: (typeof brands)[number] }) {
  return (
    <div className="grid h-28 w-44 shrink-0 place-items-center rounded-2xl border border-forest-900/10 bg-white/80 px-5 shadow-soft transition-transform duration-500 hover:-translate-y-1 sm:h-32 sm:w-56">
      {hasFile(b.logo) ? (
        <Image src={`/associations/${b.logo}`} alt={b.name} width={180} height={90} className="max-h-16 w-auto object-contain sm:max-h-20" />
      ) : (
        <span className="text-center leading-tight">
          <span className="block font-display text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: b.color }}>{b.name}</span>
          {b.sub && <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.16em] text-ink-soft">{b.sub}</span>}
        </span>
      )}
    </div>
  );
}

export function Associations() {
  return (
    <section aria-labelledby="assoc-title" className="overflow-hidden bg-sage-100/50 py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionTitle id="assoc-title">Our Association</SectionTitle>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-ink-soft sm:text-lg">Recognised, accredited and trusted by leading institutions.</p>
      </Container>

      <div
        className="group mt-8 sm:mt-10 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
        role="region"
        aria-label="Associated brands"
      >
        {/* two identical halves; the track slides by exactly one half, so the loop has no visible seam */}
        <div className="flex w-max animate-marquee [animation-duration:40s] motion-reduce:animate-none gap-4 pr-4 group-hover:[animation-play-state:paused] sm:gap-6 sm:pr-6">
          {[0, 1].map((half) => (
            <ul key={half} aria-hidden={half === 1} className="flex shrink-0 gap-4 sm:gap-6">
              {[...brands, ...brands].map((b, i) => (
                <li key={`${b.name}-${i}`}><BrandCard b={b} /></li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
