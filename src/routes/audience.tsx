import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section, StatGrid } from "@/components/blocks";
import { funnel, metrics } from "@/data/site";

export const Route = createFileRoute("/audience")({
  head: () => ({
    meta: [
      { title: "Audience & Reach — TRINETRA 2026 Media Kit" },
      { name: "description", content: "The audience behind the energy: projected footfall, social reach, campus creators and the MAKAUT student ecosystem — every figure labelled with its status." },
      { property: "og:title", content: "Audience & Reach — TRINETRA 2026" },
      { property: "og:description", content: "The media kit for brand and media planners." },
      { property: "og:url", content: "https://www.mcamsv.com/audience" },
      { property: "og:site_name", content: "TRINETRA 2026" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Audience & Reach — TRINETRA 2026 Media Kit" },
      { name: "twitter:description", content: "The audience behind the energy: projected footfall, social reach, campus creators and the MAKAUT student ecosystem — every figure labelled with its status." },
    ],
    links: [{ rel: "canonical", href: "https://www.mcamsv.com/audience" }],
  }),
  component: Audience,
});

function Audience() {
  return (
    <>
      <PageHero eyebrow="Page 13 · Media kit" title="The audience behind the energy." lede="Presented like a media kit, not a poster. Where verified data does not yet exist, we say so instead of inventing a chart." />

      <Section eyebrow="Primary metrics">
        <StatGrid items={metrics.slice(0, 4)} />
        <div className="mt-px">
          <StatGrid items={metrics.slice(4)} columns={3} />
        </div>
      </Section>

      <Section tone="raised" eyebrow="Detailed analytics" title="Available to partners on request.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {["Age distribution", "Gender distribution", "Department distribution", "Location distribution", "Instagram reach", "Reel views", "Engagement rate", "Previous attendance", "Creator reach", "Website visitors"].map((m, i) => (
            <Reveal key={m} delay={i * 30} className="bg-background">
              <div className="h-full p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.08em]">{m}</p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">On request</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Sponsor funnel" title="From a scroll to a memory.">
        <ol className="grid gap-px border border-border bg-border md:grid-cols-6">
          {funnel.map((f, i) => (
            <Reveal as="li" key={f} delay={i * 60} className="bg-background">
              <div className="h-full p-6">
                <p className="display text-2xl text-gold-gradient">0{i + 1}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em]">{f}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CTABand title="Ask us for the analytics pack." primary={{ label: "Request access", to: "/partner" }} secondary={{ label: "Proof Center", to: "/proof" }} />
    </>
  );
}
