import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";

export const Route = createFileRoute("/previous-sponsors")({
  head: () => ({
    meta: [
      { title: "Previous Sponsors — Built Through Collaboration" },
      { name: "description", content: "Past brand associations of the MAKAUT Cultural Association. Logos are published only where an actual association exists." },
      { property: "og:title", content: "Previous Sponsors — TRINETRA" },
      { property: "og:description", content: "Built through collaboration." },
    ],
  }),
  component: PreviousSponsors,
});

function PreviousSponsors() {
  return (
    <>
      <PageHero eyebrow="Page 15 · Partners" title="Built through collaboration." lede="Previous brand associations are listed from the organisers' own records. We never imply endorsement beyond the actual association." />

      <Section eyebrow="Past partners" title="Logo wall.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <Reveal key={i} delay={i * 40} className="bg-background">
              <div className="flex h-32 items-center justify-center p-6 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Logo slot {String(i + 1).padStart(2, "0")}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Logos are placed at their original aspect ratio, never stretched. Upload the asset pack to populate this wall.
        </p>
      </Section>

      <Section tone="raised" eyebrow="2026 partners" title="Reserved.">
        <p className="max-w-2xl text-sm text-muted-foreground">
          No brand appears in the 2026 section until the partnership is officially confirmed. Your logo could be the first.
        </p>
      </Section>

      <CTABand title="Be a 2026 partner." />
    </>
  );
}
