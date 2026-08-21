import { createFileRoute } from "@tanstack/react-router";
import campus from "@/assets/campus.jpg";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section, StatGrid } from "@/components/blocks";
import { disciplines, makautTimeline, metrics } from "@/data/site";

export const Route = createFileRoute("/about-makaut")({
  head: () => ({
    meta: [
      { title: "About MAKAUT — The Institution Behind TRINETRA 2026" },
      {
        name: "description",
        content:
          "Maulana Abul Kalam Azad University of Technology, West Bengal — 200+ affiliated colleges and a 1.5 lakh+ student ecosystem behind TRINETRA 2026.",
      },
      { property: "og:title", content: "About MAKAUT — The Institution Behind TRINETRA" },
      {
        property: "og:description",
        content: "A leading state technical university in West Bengal and the institutional backing of TRINETRA 2026.",
      },
      { property: "og:url", content: "https://www.mcamsv.com/about-makaut" },
      { property: "og:site_name", content: "TRINETRA 2026" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About MAKAUT — The Institution Behind TRINETRA 2026" },
      { name: "twitter:description", content: "Maulana Abul Kalam Azad University of Technology, West Bengal — 200+ affiliated colleges and a 1.5 lakh+ student ecosystem behind TRINETRA 2026." },
    ],
    links: [{ rel: "canonical", href: "https://www.mcamsv.com/about-makaut" }],
  }),
  component: AboutMakaut,
});

function AboutMakaut() {
  return (
    <>
      <PageHero
        eyebrow="Page 02 · Institution"
        title="The institution behind the experience."
        lede="Maulana Abul Kalam Azad University of Technology, West Bengal — formerly WBUT — is presented in the sponsorship brochure as one of the leading state universities in West Bengal for technical and professional education."
        image={campus}
      />

      <Section eyebrow="Established for" title="Six domains of professional education.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal key={d} delay={i * 50} className="bg-background">
              <div className="p-8 text-lg font-bold uppercase tracking-[0.08em]">{d}</div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          The institution was established by the Government of West Bengal to promote higher education across
          engineering, technology, management, pharmacy, architecture and applied sciences.
        </p>
      </Section>

      <Section tone="raised" eyebrow="Timeline" title="From 1998 to TRINETRA 2026.">
        <ol className="relative border-l border-border pl-8">
          {makautTimeline.map((t, i) => (
            <Reveal as="li" key={t.year} delay={i * 80} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.15rem] mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="display text-2xl text-gold-gradient">{t.year}</p>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Institutional scale" title="The ecosystem, in numbers.">
        <StatGrid items={metrics.filter((m) => m.label.includes("colleges") || m.label.includes("ecosystem"))} columns={3} />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
          {[
            { k: "Main campus", v: "Haringhata, Nadia" },
            { k: "City campus", v: "Kolkata" },
          ].map((c) => (
            <div key={c.k} className="bg-background p-8">
              <p className="eyebrow">{c.k}</p>
              <p className="mt-3 text-2xl font-bold uppercase">{c.v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised" eyebrow="Mission positioning" title="Why this matters to a brand.">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-3 text-base text-muted-foreground">
              {[
                "Innovation and research",
                "Entrepreneurship",
                "Industry-oriented learning",
                "Globally competent professionals",
                "Ethics and technical excellence",
              ].map((m) => (
                <li key={m} className="border-b border-border pb-3">
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="surface p-8">
              <p className="eyebrow">Brand relevance</p>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>A large youth ecosystem concentrated across one affiliated network.</li>
                <li>A multidisciplinary audience spanning technology, management and design.</li>
                <li>Future professionals and early-career decision makers.</li>
                <li>Regional reach across West Bengal through affiliated institutions.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand title="Institutional backing. Cultural energy." lede="Explore what the association behind the fest looks like." primary={{ label: "About MCA", to: "/about-mca" }} />
    </>
  );
}
