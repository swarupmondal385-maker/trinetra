import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { artists, statusLabel, type Artist } from "@/data/event";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

function ArtistArtwork({ artist }: { artist: Artist }) {
  const [failed, setFailed] = useState(false);

  if (artist.image && !failed) {
    return (
      <img
        src={artist.image}
        alt={artist.imageAlt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        style={{ objectPosition: artist.focal ?? "50% 35%" }}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
      />
    );
  }

  // Branded fallback — never a broken image.
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 -z-10",
        artist.tone === "night"
          ? "bg-[radial-gradient(120%_90%_at_20%_10%,oklch(0.44_0.17_300/60%),transparent_60%),radial-gradient(120%_90%_at_85%_90%,oklch(0.5_0.19_349/55%),transparent_55%),linear-gradient(160deg,oklch(0.16_0.02_300),oklch(0.13_0.008_25))]"
          : "bg-[radial-gradient(120%_90%_at_15%_15%,oklch(0.541_0.196_26/62%),transparent_58%),radial-gradient(120%_90%_at_85%_85%,oklch(0.81_0.166_76/45%),transparent_55%),linear-gradient(160deg,oklch(0.19_0.05_30),oklch(0.13_0.008_25))]",
      )}
    >
      <div className="alpona absolute inset-0 opacity-30" />
    </div>
  );
}

export function ArtistShowcase() {
  return (
    <section aria-label="Featured artists" className="grid border-y border-border lg:grid-cols-2">
      {artists.map((a, i) => (
        <Reveal key={a.slug} delay={i * 90}>
          <article className="media-dark group relative isolate flex h-full min-h-[78svh] flex-col justify-end overflow-hidden sm:min-h-[70svh]">
            <ArtistArtwork artist={a} />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.13_0.008_25/35%),oklch(0.13_0.008_25/55%)_45%,oklch(0.13_0.008_25/95%))]"
            />

            <div className="flex flex-col gap-4 p-6 sm:p-9 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="border border-accent/60 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.24em] text-accent">
                  {a.dayLabel}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  {statusLabel[a.status]}
                </span>
              </div>

              <h3 className="display text-[clamp(2rem,9vw,4.5rem)] leading-[0.92] text-gold-gradient">
                {a.name}
              </h3>
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-foreground/90">
                {a.category} · {a.date} · {a.time}
              </p>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{a.blurb}</p>

              <ul className="flex flex-wrap gap-2">
                {a.genres.map((g) => (
                  <li
                    key={g}
                    className="border border-border/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-foreground/80"
                  >
                    {g}
                  </li>
                ))}
              </ul>

              <Link
                to={a.cta.to}
                className="mt-2 inline-flex w-fit min-h-11 items-center gap-2 border border-accent/70 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent transition-colors duration-300 hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground"
              >
                {a.cta.label} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}
