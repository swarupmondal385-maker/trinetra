import { createFileRoute } from "@tanstack/react-router";
import { CTABand, PageHero, PhotoProof, Section } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { proofPhotos } from "@/data/proof-photos";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Throwback — Real People, Real Events" },
      { name: "description", content: "Photographs from past MAKAUT Cultural Association events — main stage production, headline acts, crowd energy and campus craft." },
      { property: "og:title", content: "TRINETRA Gallery & Throwback" },
      { property: "og:description", content: "Real people. Real events. Real experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.mcamsv.com/gallery" },
      { property: "og:site_name", content: "TRINETRA 2026" },
      { property: "og:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { name: "twitter:title", content: "Gallery & Throwback — Real People, Real Events" },
      { name: "twitter:description", content: "Photographs from past MAKAUT Cultural Association events — main stage production, headline acts, crowd energy and campus craft." },
    ],
    links: [{ rel: "canonical", href: "https://www.mcamsv.com/gallery" }],
  }),
  component: Gallery,
});

const shots = proofPhotos;

function Gallery() {
  return (
    <>
      <PageHero eyebrow="Page 12 · Gallery" title={<>Real people.<br />Real events.<br />Real experiences.</>} lede="Every frame below is an actual photograph from a past MAKAUT Cultural Association event — stage production, headline artists, crowd scale and campus craft." />

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          <PhotoProof {...shots[0]!} className="md:col-span-2 md:row-span-2 aspect-[16/10] md:aspect-auto" />
          {shots.slice(1).map((s) => (
            <PhotoProof key={s.event} {...s} className="aspect-[4/3]" />
          ))}
        </div>
      </Section>


      <Section tone="raised" eyebrow="Archive structure" title="Where uploaded media will live.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {["Event crowd", "Past events", "Stage", "Performances", "Achievements", "Team", "Clubs", "Campus", "Sponsors", "Certificates", "Backstage", "Brand activation"].map((f, i) => (
            <Reveal key={f} delay={i * 30} className="bg-background">
              <div className="p-6 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">/{f.toLowerCase().replace(/ /g, "-")}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand title="Proof beats stock photography." primary={{ label: "Proof Center", to: "/proof" }} />
    </>
  );
}
