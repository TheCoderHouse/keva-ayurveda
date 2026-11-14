type P = { className?: string };
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

/** Simple outline brand glyphs (lucide dropped its brand icons). */
export const FacebookIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.4l.6-3.5H14V8.8c0-.2.1-.3.3-.3Z" /></svg>
);
export const InstagramIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></svg>
);
export const XIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 4l16 16M20 4 4 20" /></svg>
);
export const YoutubeIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="m10 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" /></svg>
);
