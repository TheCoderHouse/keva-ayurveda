"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { clinics } from "@/content/site";

type Variant = "glass" | "solid" | "bar";

const input = {
  glass:
    "border-white/35 bg-white/15 text-white placeholder:text-white/80 focus:border-white focus:ring-2 focus:ring-sage",
  solid:
    "border-forest-900/15 bg-white/80 text-forest-900 placeholder:text-ink-soft focus:border-forest-900 focus:ring-2 focus:ring-sage",
  bar:
    "border-forest-900/15 bg-white/90 text-forest-900 placeholder:text-ink-soft focus:border-forest-900 focus:ring-2 focus:ring-sage",
} as const;

/**
 * Hero "Book now" card. Fields are the original enquiry form's.
 * - glass: frosted, tinted glass for use over the banner photos (they stay visible through it)
 * - solid: light card for use on the page background (mobile / tablet)
 * Submit hands the details to WhatsApp, pre-filled.
 */
export function BookForm({ variant = "solid", className, hideTitle, onSent }: { variant?: Variant; className?: string; hideTitle?: boolean; onSent?: () => void }) {
  const [sent, setSent] = useState(false);
  const glass = variant === "glass";
  const bar = variant === "bar";
  const field = cn(
    "h-10 w-full rounded-xl border px-3 font-sans text-sm focus:outline-none",
    input[variant],
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const msg = [
      "Appointment request from the Keva Ayurveda website",
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      `Consultation / Treatment for: ${d.reason || "-"}`,
      `Nearest clinic: ${d.clinic}`,
    ].join("\n");
    window.open(`https://api.whatsapp.com/send?phone=918050080058&text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    onSent?.();
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-labelledby={`book-title-${variant}`}
      className={cn(
        "relative overflow-hidden rounded-3xl p-5 font-sans",
        glass
          ? "border border-white/40 bg-forest-950/35 text-white backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgb(255_255_255/0.55),0_24px_60px_-16px_rgb(0_0_0/0.55)]"
          : bar
            ? "rounded-[2rem] border border-white/70 bg-ivory/85 px-6 py-5 text-forest-900 shadow-[0_30px_70px_-24px_rgb(13_31_23/0.55)] backdrop-blur-2xl"
            : "border border-forest-900/10 bg-ivory/95 text-forest-900 shadow-lift",
        className,
      )}
    >
      {/* gloss: soft diagonal sheen across the glass */}
      {glass && (
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent" />
      )}

      <div className="relative">
        <h2 id={`book-title-${variant}`} className={cn("font-sans font-semibold tracking-normal", bar ? "text-lg" : "text-2xl", hideTitle && "sr-only")}>Book your consultation</h2>

        <div className={cn("mt-4 grid grid-cols-2 gap-2.5", bar && "lg:grid-cols-12")}>
          <label className={bar ? "lg:col-span-3" : undefined}><span className="sr-only">Your name</span>
            <input name="name" required autoComplete="name" placeholder="Your Name" className={field} /></label>
          <label className={bar ? "lg:col-span-3" : undefined}><span className="sr-only">Your phone number</span>
            <input name="phone" type="tel" required autoComplete="tel" placeholder="Your Phone No." className={field} /></label>
          <label className={cn("col-span-2", bar && "lg:col-span-3")}><span className="sr-only">Your email address</span>
            <input name="email" type="email" required autoComplete="email" placeholder="Your Email Address" className={field} /></label>
          <label className={cn("col-span-2", bar && "lg:col-span-3")}><span className="sr-only">Consultation or treatment for</span>
            <input name="reason" placeholder="Consultation / Treatment for" className={field} /></label>
          <label className={cn("col-span-2", bar && "lg:col-span-4")}><span className="sr-only">Select nearest clinic</span>
            <select name="clinic" required defaultValue="" className={cn(field, "cursor-pointer")}>
              <option value="" disabled className="text-forest-900">Select Nearest Clinic (required)</option>
              {clinics.map((c) => (
                <option key={c.name} value={c.name} className="text-forest-900">{c.name}</option>
              ))}
            </select>
          </label>
          {bar && (
            <>
              <div className="col-span-2 flex items-center lg:col-span-5"><label className={cn("flex cursor-pointer items-start gap-2.5 text-xs leading-snug", glass ? "text-white/90" : "text-ink-soft")}>
          <input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[#a9b887]" />
          I authorize Keva Ayurveda representative to contact me. I understand that this will override the DND status on my mobile number.*
        </label></div>
              <div className="col-span-2 lg:col-span-3"><button
          type="submit"
          className={cn(
            "h-11 w-full cursor-pointer rounded-full text-sm font-semibold uppercase tracking-[0.12em] transition-colors",
            glass ? "bg-sage text-forest-950 hover:bg-white" : "bg-sage text-forest-950 hover:bg-mint",
          )}
        >
          Submit
        </button></div>
            </>
          )}
        </div>

        {!bar && (
          <>
            <div className="mt-3"><label className={cn("flex cursor-pointer items-start gap-2.5 text-xs leading-snug", glass ? "text-white/90" : "text-ink-soft")}>
          <input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[#a9b887]" />
          I authorize Keva Ayurveda representative to contact me. I understand that this will override the DND status on my mobile number.*
        </label></div>
            <button
          type="submit"
          className={cn(
            "mt-4 h-11 w-full cursor-pointer rounded-full text-sm font-semibold uppercase tracking-[0.12em] transition-colors",
            glass ? "bg-sage text-forest-950 hover:bg-white" : "bg-sage text-forest-950 hover:bg-mint",
          )}
        >
          Submit
        </button>
          </>
        )}
        {sent && (
          <p role="status" className={cn("mt-2 text-center text-xs", glass ? "text-white" : "text-gold-700")}>
            Opening WhatsApp with your details…
          </p>
        )}
      </div>
    </form>
  );
}
