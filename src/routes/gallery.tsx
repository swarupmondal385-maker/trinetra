import { createFileRoute } from "@tanstack/react-router";
import heroCrowd from "@/assets/hero-crowd.jpg";
import stageBand from "@/assets/stage-band.jpg";
import danceTroupe from "@/assets/dance-troupe.jpg";
import dhaki from "@/assets/dhaki.jpg";
import campus from "@/assets/campus.jpg";
import { CTABand, PageHero, PhotoProof, Section } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Throwback — Real People, Real Events" },
      { name: "description", content: "A cinematic archive of MAKAUT cultural moments — crowd, stage, performances and campus, ready for the team's own photographs." },
      { property: "og:title", content: "TRINETRA Gallery & Throwback" },
      { property: "og:description", content: "Real people. Real events. Real experiences." },
    ],
  }),
  component: Gallery,
});

const shots = [
  { image: heroCrowd, event: "Festival main stage", year: "Reference", category: "Crowd", caption: "Replace with uploaded crowd photography." },
  { image: dhaki, event: "Dhaki performance", year: "Reference", category: "Culture", caption: "Replace with uploaded cultural photography." },
  { image: danceTroupe, event: "Dance showcase", year: "Reference", category: "Performance", caption: "Replace with uploaded club photography." },
  { image: stageBand, event: "Live concert", year: "Reference", category: "Stage", caption: "Replace with uploaded concert photography." },
  { image: campus, event: "Campus", year: "Reference", category: "Campus", caption: "Replace with uploaded campus photography." },
];

function Gallery() {
  return (
    <>
      <PageHero eyebrow="Page 12 · Gallery" title={<>Real people.<br />Real events.<br />Real experiences.</>} lede="These are reference visuals. Every frame is a slot — as the team uploads genuine event photography, it replaces the reference image without any redesign." />

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
