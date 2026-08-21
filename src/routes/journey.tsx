import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { makautTimeline } from "@/data/site";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey & Achievements — MAKAUT Cultural Association" },
      {
        name: "description",
        content:
          "The route from the founding of MAKAUT to the MAKAUT Cultural Association and TRINETRA 2026, with space for documented achievements as proof is added.",
      },
      { property: "og:title", content: "Journey & Achievements" },
      { property: "og:description", content: "How TRINETRA got here — documented, not claimed." },
      { property: "og:url", content: "https://www.mcamsv.com/journey" },
      { property: "og:site_name", content: "TRINETRA 2026" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Journey & Achievements — MAKAUT Cultural Association" },
      { name: "twitter:description", content: "The route from the founding of MAKAUT to the MAKAUT Cultural Association and TRINETRA 2026, with space for documented achievements as proof is added." },
    ],
    links: [{ rel: "canonical", href: "https://www.mcamsv.com/journey" }],
  }),
  component: Journey,
});

function Journey() {
  return (
    <>
      <PageHero eyebrow="Page 11 · Journey" title="How we got here." lede="A short institutional history, and an achievements archive that only fills up with material the team can evidence." />

      <Section eyebrow="Milestones">
        <ol className="relative border-l border-border pl-8">
          {makautTimeline.map((t, i) => (
            <Reveal as="li" key={t.year} delay={i * 70} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.15rem] mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="display text-2xl text-gold-gradient">{t.year}</p>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="raised" eyebrow="Achievements archive" title="Awaiting verified entries.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {["Inter-college participation", "External institutional events", "Club-level recognitions", "Campus productions", "Press coverage", "Certificates & documents"].map((k, i) => (
            <Reveal key={k} delay={i * 50} className="bg-background">
              <div className="h-full p-8">
                <p className="text-base font-bold uppercase tracking-[0.08em]">{k}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Entries appear here once the organising team uploads the photograph, date and supporting document.
                </p>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  Awaiting upload
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Nothing is displayed as an achievement without a source. This is deliberate.
        </p>
      </Section>

      <CTABand title="Prefer to see the evidence first?" primary={{ label: "Proof Center", to: "/proof" }} secondary={{ label: "Gallery", to: "/gallery" }} />
    </>
  );
}
