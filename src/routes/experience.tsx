import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import danceTroupe from "@/assets/dance-troupe.jpg";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { experienceCategories } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "TRINETRA 2026 Experience — Two Days, Twelve Worlds" },
      {
        name: "description",
        content:
          "Music, dance, culture, fashion, art, creators, competitions and brand activations — the TRINETRA 2026 experience, with a sponsor lens on every category.",
      },
      { property: "og:title", content: "The TRINETRA 2026 Experience" },
      { property: "og:description", content: "2 days. One campus. Thousands of experiences." },
    ],
  }),
  component: Experience,
});

function Experience() {
  const [sponsorLens, setSponsorLens] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Page 05 · Experience"
        title={
          <>
            2 days.
            <br />
            One campus.
            <br />
            Thousands of experiences.
          </>
        }
        lede="Every category below is both a cultural moment and a defined brand opportunity. Switch the lens to see how."
        image={danceTroupe}
      />

      <Section>
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <span className="eyebrow">Sponsor lens</span>
          <button
            onClick={() => setSponsorLens((v) => !v)}
            role="switch"
            aria-checked={sponsorLens}
            aria-label="Toggle sponsor lens"
            className={cn(
              "relative h-9 w-20 border transition-colors duration-300",
              sponsorLens ? "border-accent bg-accent/15" : "border-border bg-secondary",
            )}
          >
            <span
              className={cn(
                "absolute top-1 h-6 w-8 bg-accent transition-transform duration-300",
                sponsorLens ? "translate-x-10" : "translate-x-1",
              )}
            />
          </button>
          <span className="text-sm text-muted-foreground">
            {sponsorLens ? "Showing brand integration points" : "Showing the audience experience"}
          </span>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {experienceCategories.map((c, i) => (
            <Reveal key={c.name} delay={i * 40} className="bg-background">
              <div className="group h-full p-8 transition-colors duration-500 hover:bg-card">
                <span className="text-[10px] font-bold tracking-[0.24em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold uppercase transition-colors group-hover:text-accent">
                  {c.name}
                </h3>
                <p
                  key={sponsorLens ? "s" : "n"}
                  className="reveal-in mt-4 min-h-16 text-sm leading-relaxed text-muted-foreground"
                >
                  {sponsorLens ? c.sponsor : c.normal}
                </p>
                {sponsorLens && (
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                    Brand integration
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="raised" eyebrow="Worked example" title="How a category becomes an activation.">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Music", v: ["Stage sponsorship", "LED advertisement", "Artist association"] },
            { k: "Influencer Summit", v: ["Creator campaigns", "Branded conversation", "Social content"] },
            { k: "Club Show", v: ["Youth engagement", "Contest integration"] },
            { k: "Crowd Zone", v: ["Sampling", "Stalls", "Product experience"] },
          ].map((e, i) => (
            <Reveal key={e.k} delay={i * 60} className="bg-background">
              <div className="h-full p-8">
                <p className="text-lg font-bold uppercase">{e.k}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {e.v.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-accent">→</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand title="Build your own activation plan." primary={{ label: "Brand Activation Lab", to: "/activation-lab" }} />
    </>
  );
}
