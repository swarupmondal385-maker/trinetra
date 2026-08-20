/**
 * Elegant Bengali cultural motifs as inline SVG — used for section dividers and
 * restrained floating decoration. All strokes use currentColor so they inherit
 * the semantic theme colour.
 */

export function AlponaDivider({ className }: { className?: string }) {
  return (
    <div className={`container-x py-8 sm:py-12 ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" className="h-6 w-full text-accent/60 sm:h-8" fill="none" preserveAspectRatio="none">
        <path d="M0 20h480" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M720 20h480" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path
          d="M540 20c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20Zm40 0c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20Zm40 0c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="600" cy="20" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}

export function KaashFlower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 64" className={className} fill="none" aria-hidden="true">
      <path d="M24 64V26" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      <g stroke="currentColor" strokeWidth="1.1" opacity="0.85">
        <path d="M24 26c-6-6-14-7-18-4 4 5 12 7 18 4Z" />
        <path d="M24 26c6-6 14-7 18-4-4 5-12 7-18 4Z" />
        <path d="M24 18c-5-6-6-13-3-17 5 4 7 12 3 17Z" />
        <path d="M24 20c5-5 12-6 16-3-4 5-11 6-16 3Z" />
        <path d="M24 20c-5-5-12-6-16-3 4 5 11 6 16 3Z" />
      </g>
    </svg>
  );
}

export function Conch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M14 44c-4-10 2-24 14-30 10-5 20-2 22 6 2 7-4 12-10 12-4 0-7-3-6-7 1-3 4-4 6-3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M14 44c4 8 14 12 24 10 8-2 13-7 14-13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function Dhaak({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <ellipse cx="32" cy="32" rx="13" ry="20" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="32" cy="32" rx="7" ry="20" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
      <path d="M19 20l26 24M19 44l26-24" stroke="currentColor" strokeWidth="0.8" opacity="0.45" />
      <path d="M45 26l12-8M45 40l12 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function Diya({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} fill="none" aria-hidden="true">
      <path d="M10 26c6 10 36 10 44 0-6-4-38-4-44 0Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M32 22c0-6-4-8-4-12 4 2 8 6 8 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Restrained ambient decoration. Desktop gets a few slow-floating motifs,
 * mobile gets almost none, and prefers-reduced-motion freezes them.
 */
export function FloatingMotifs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <KaashFlower className="motif-float absolute left-[4%] top-[18%] hidden h-16 w-auto text-accent/25 sm:block" />
      <KaashFlower className="motif-float-slow absolute right-[7%] top-[52%] hidden h-24 w-auto text-accent/20 lg:block" />
      <Conch className="motif-float-slow absolute bottom-[14%] left-[10%] hidden h-14 w-auto text-accent/20 lg:block" />
      <Dhaak className="motif-float absolute right-[5%] top-[14%] h-10 w-auto text-accent/20 sm:h-16" />
      <Diya className="motif-float-slow absolute bottom-[10%] right-[16%] hidden h-10 w-auto text-accent/25 sm:block" />
    </div>
  );
}
