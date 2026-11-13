import { MessageCircle, Phone } from "lucide-react";
import { ctaHref, site, tel } from "@/content/site";

/** Persistent WhatsApp chat (all sizes) and call button (mobile), as on the original site. */
export function FloatingActions() {
  return (
    <>
      <a
        href={tel(site.phone.consult)}
        aria-label="Call now"
        className="fixed bottom-4 left-4 z-40 grid size-12 cursor-pointer place-items-center rounded-full bg-forest-900 text-ivory shadow-lift transition-colors hover:bg-forest-700 lg:hidden"
      >
        <Phone aria-hidden className="size-5" />
      </a>
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Keva Ayurveda on WhatsApp"
        className="fixed bottom-4 right-4 z-40 flex min-h-14 cursor-pointer items-center gap-3 rounded-full bg-sage py-2 pl-5 pr-2 text-forest-950 shadow-lift transition-colors hover:bg-ivory sm:bottom-6 sm:right-6"
      >
        <span className="hidden max-w-52 text-left text-xs leading-snug sm:block">
          <b className="block text-sm">Click to chat</b>
          Welcome to Keva Ayurveda!
        </span>
        <span className="grid size-11 place-items-center rounded-full bg-forest-900 text-ivory">
          <MessageCircle aria-hidden className="size-5" />
        </span>
      </a>
    </>
  );
}
