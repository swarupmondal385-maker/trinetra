import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Small delay so heavy sections fade in gracefully instead of popping. */
export function useSectionReady(delay = 700) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return ready;
}

export function SkeletonLine({ className }: { className?: string }) {
  return <div className={cn("skeleton-sheen h-3 rounded-sm", className)} />;
}

export function PersonCardSkeleton() {
  return (
    <div className="bg-background p-6 sm:p-8">
      <div className="skeleton-sheen h-40 w-full rounded-sm" />
      <SkeletonLine className="mt-6 h-5 w-2/3" />
      <SkeletonLine className="mt-3 w-1/2" />
      <SkeletonLine className="mt-4 w-4/5" />
      <SkeletonLine className="mt-2 w-1/3" />
    </div>
  );
}

export function ScheduleSkeleton() {
  return (
    <div className="surface h-full p-6 sm:p-8">
      <div className="flex items-baseline justify-between border-b border-border pb-5">
        <SkeletonLine className="h-6 w-24" />
        <SkeletonLine className="w-28" />
      </div>
      <div className="mt-6 space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-5">
            <SkeletonLine className="w-20 shrink-0" />
            <div className="flex-1">
              <SkeletonLine className="w-1/2" />
              <SkeletonLine className="mt-2 w-4/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
