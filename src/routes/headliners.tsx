import { createFileRoute } from "@tanstack/react-router";
import dhaki from "@/assets/dhaki.jpg";
import heroCrowd from "@/assets/hero-crowd.jpg";
import stageBand from "@/assets/stage-band.jpg";
import { ArtistShowcase } from "@/components/ArtistShowcase";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero } from "@/components/blocks";
import { artists } from "@/data/event";

export const Route = createFileRoute("/headliners")({
  head: () => ({
    meta: [
      { title: "Artists & Highlights — DJ Koyel, The Morphine India | TRINETRA 2026" },
      {
        name: "description",
        content:
          "DJ Koyel on Day 1, The Morphine India on Day 2, plus Pathaks × Dhakis and the Influencers' Summit — the headline moments of TRINETRA 2026.",
      },
      { property: "og:title", content: "TRINETRA 2026 Artists & Highlights" },
      {
        property: "og:description",
        content: "DJ Koyel, The Morphine India and the headline moments of 24–25 September 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mcamsv.com/headliners" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mcamsv.com/headliners" }],
  }),
  component: Headliners,
});

const highlights = [
  {
    img: dhaki,
    name: "Pathaks × Dhakis",
    meta: "25 September 2026 · 11:00 AM onwards",
    body: "A Maharashtrian Dhol-Tasha Pathak and a traditional Bengali Dhaki crew meet in a high-energy jugalbandi — the most photographed cultural moment of the fest.",
    sponsor: "Content capture rights, LED advertisement around a peak-emotion moment.",
  },
  {
    img: heroCrowd,
    name: "Influencers' Summit",
    meta: "25 September 2026 · 12:00 PM onwards",
    body: "Digital personalities meet campus culture — Bengali adda, conversations, stories, trends, humour and interactive audience moments, with one host and three influencers.",
    sponsor: "Creator campaigns, branded conversation segments and social amplification.",
  },
  {
    img: stageBand,
    name: "Technology & Innovation Arena",
    meta: "24 September 2026 · 11:30 AM onwards",
    body: "Hackathon, robotics, project expo, startup pitch, coding challenge and the e-sports arena — Day 1 belongs to the makers of MAKAUT.",
    sponsor: "Arena naming rights, hiring desk, prize pool branding and live product demos.",
  },
];

function Headliners() {
  return (
    <>
      <PageHero
        eyebrow="Page 07 · Artists & Highlights"
        title="The moments people will queue for."
        lede={`Two featured artists — ${artists.map((a) => a.name).join(" and ")} — anchor the nights, with headline cultural and technology moments across both days.`}
      />

      <ArtistShowcase />

      {highlights.map((a, i) => (
        <section key={a.name} className="border-t border-border">
          <div className={`grid lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
            <div className="group relative min-h-[32vh] overflow-hidden sm:min-h-[50vh]">
              <img
                src={a.img}
                alt={a.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.008_25/20%),oklch(0.13_0.008_25/70%))]" />
            </div>
            <div className="[direction:ltr]">
              <Reveal>
                <div className="p-6 sm:p-10 md:p-16">
                  <p className="eyebrow">Highlight {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="heading-xl mt-4 font-extrabold uppercase sm:mt-5">{a.name}</h2>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                    {a.meta}
                  </p>
                  <p className="body-fluid mt-5 max-w-xl text-muted-foreground sm:mt-6">{a.body}</p>

                  <div className="mt-8 border-t border-border pt-6">
                    <p className="eyebrow">Sponsor opportunity</p>
                    <p className="mt-3 max-w-xl text-sm text-muted-foreground">{a.sponsor}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CTABand title="Associate your brand with a headline moment." />
    </>
  );
}
