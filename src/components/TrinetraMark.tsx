import { cn } from "@/lib/utils";
import logoAsset from "@/assets/trinetra-logo.png.asset.json";

/** Official TRINETRA third-eye logo. */
export function TrinetraMark({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <img
      src={logoAsset.url}
      alt="TRINETRA official logo"
      loading="eager"
      decoding="async"
      className={cn(
        "h-8 w-auto select-none object-contain drop-shadow-[0_0_18px_oklch(0.81_0.166_76/35%)]",
        animate && "animate-blur-in",
        className,
      )}
    />
  );
}
