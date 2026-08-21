import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { whySponsor } from "@/data/site";

export const Route = createFileRoute("/why-sponsor")({
  head: () => ({
    meta: [
      { title: "Why Sponsor TRINETRA 2026 — Your Audience Is Already Here" },
      { name: "description", content: "Seven reasons brands partner with TRINETRA 2026: youth access, multi-touchpoint visibility, cultural relevance, amplification, interaction, association and recall." },
      { property: "og:title", content: "Why Sponsor TRINETRA 2026" },
      { property: "og:description", content: "Physical audience, digital visibility, cultural relevance and experiential engagement." },
      { property: "og:url", content: "https://www.mcamsv.com/why-sponsor" },
      { property: "og:site_name", content: "TRINETRA 2026" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Why Sponsor TRINETRA 2026 — Your Audience Is Already Here" },
      { name: "twitter:description", content: "Seven reasons brands partner with TRINETRA 2026: youth access, multi-touchpoint visibility, cultural relevance, amplification, interaction, association and recall." },
    ],
    links: [{ rel: "canonical", href: "https://www.mcamsv.com/why-sponsor" }],
  }),
  component: WhySponsor,
});

function WhySponsor() {
  return (
    <>
      <PageHero eyebrow="Page 16 · The case" title="Your audience is already here." lede="TRINETRA offers brands a combination of physical audience, digital visibility, cultural relevance, experiential engagement and youth interaction." />

      <Section>
        <div className="space-y-px border border-border bg-border">
          {whySponsor.map((b, i) => (
            <Reveal key={b.no} delay={i * 40} className="bg-background">
              <div className="grid gap-6 p-8 md:grid-cols-[8rem_1fr_1.2fr] md:items-baseline md:p-10">
                <p className="display text-4xl text-gold-gradient">{b.no}</p>
                <h2 className="text-xl font-extrabold uppercase leading-tight sm:text-2xl">{b.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs text-muted-foreground">
          Figures such as the 5,000+ footfall are projections by the organising team, not achieved historical attendance.
          No business outcome is guaranteed.
        </p>
      </Section>

      <CTABand title="Explore sponsorship packages." />
    </>
  );
}
