import { MessageCircle, Phone } from "lucide-react";
import { ctaHref, site, tel } from "@/content/site";

/** Persistent WhatsApp chat (all sizes) and call button (mobile), as on the original site. */
export function FloatingActions() {
  return (
    <>
      <a
        href={tel(site.phone.consult)}
        aria-label="Call now"
        className="glass-ios fixed bottom-4 left-8 z-40 grid size-16 cursor-pointer place-items-center rounded-full text-forest-950 transition-transform hover:scale-105 lg:hidden"
      >
        <Phone aria-hidden className="size-7" />
      </a>
      <a
        href={ctaHref}
        data-chat
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Keva Ayurveda on WhatsApp"
        className="glass-ios fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 flex min-h-16 cursor-pointer items-center gap-3 rounded-full p-2 text-forest-950 transition-transform hover:scale-[1.03] min-[1700px]:pl-5 sm:bottom-6 sm:right-6"
      >
        <span className="hidden max-w-52 text-left text-xs leading-snug min-[1700px]:block">
          <b className="block text-sm">Click to chat</b>
          Welcome to Keva Ayurveda!
        </span>
        <span className="grid size-12 place-items-center rounded-full bg-white/60 text-forest-900">
          <MessageCircle aria-hidden className="size-6" />
        </span>
      </a>
    </>
  );
}
