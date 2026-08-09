import { cn } from "@/lib/utils";

/** The TRINETRA third-eye mark: a lotus-eye drawn with a single hairline. */
export function TrinetraMark({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg viewBox="0 0 120 72" fill="none" className={cn("h-8 w-auto", className)} aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          animate
            ? { strokeDasharray: 1200, animation: "trinetra-draw 2.2s cubic-bezier(0.16,1,0.3,1) both" }
            : undefined
        }
      >
        <path d="M4 36C22 12 44 4 60 4s38 8 56 32c-18 24-40 32-56 32S22 60 4 36Z" />
        <circle cx="60" cy="36" r="17" />
        <circle cx="60" cy="36" r="7" fill="currentColor" stroke="none" />
        <path d="M60 4V0M60 72v-4M24 14l-3-4M96 14l3-4M24 58l-3 4M96 58l3 4" />
        <path d="M42 36c0-10 8-18 18-18s18 8 18 18" opacity="0.5" />
      </g>
    </svg>
  );
}
