import { createFileRoute } from "@tanstack/react-router";
import stageBand from "@/assets/stage-band.jpg";
import danceTroupe from "@/assets/dance-troupe.jpg";
import dhaki from "@/assets/dhaki.jpg";
import heroCrowd from "@/assets/hero-crowd.jpg";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero } from "@/components/blocks";

export const Route = createFileRoute("/headliners")({
  head: () => ({
    meta: [
      { title: "Headliners & Highlights — Fossils, Rainbow Dance Troupe" },
      {
        name: "description",
        content:
          "Fossils, the Rainbow Dance Troupe, Pathaks × Dhakis and the Influencers' Summit — the four headline moments of TRINETRA 2026.",
      },
      { property: "og:title", content: "TRINETRA 2026 Headliners & Highlights" },
      { property: "og:description", content: "Four headline moments across 24–25 September 2026." },
    ],
  }),
  component: Headliners,
});

const acts = [
  {
    img: danceTroupe,
    name: "Rainbow Dance Troupe",
    meta: "24 September 2026 · 07:00 PM · MAKAUT, WB Main Campus",
    body: "The sponsorship brochure describes the troupe as having captivated audiences on India's Got Talent, highlighting their energy, creativity, choreography and stage presence.",
    sponsor: "Main stage LCD access, artist association, hospitality and premium seated passes.",
  },
  {
    img: stageBand,
    name: "Fossils — The Band",
    meta: "25 September 2026 · 04:00 PM · MAKAUT, WB Main Campus",
    body: "Presented in the brochure as an iconic and influential name in the Bengali rock scene, known for its lyrics, live performances and a major fan following.",
    sponsor: "Ticket branding, pamphlet distribution, VIP and DIAMOND passes, product launch sequence.",
  },
  {
    img: dhaki,
    name: "Pathaks × Dhakis",
    meta: "24 September 2026 · 04:00 PM onwards",
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
];

function Headliners() {
  return (
    <>
      <PageHero eyebrow="Page 07 · Headliners" title="The moments people will queue for." lede="Four headline attractions anchor the two days — each with a defined brand association." />

      {acts.map((a, i) => (
        <section key={a.name} className="border-t border-border">
          <div className={`grid lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
            <div className="group relative min-h-[36vh] overflow-hidden sm:min-h-[50vh]">
              <img
                src={a.img}
                alt={a.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.008_25/20%),oklch(0.13_0.008_25/70%))]" />
            </div>
            <div className="[direction:ltr]">
              <Reveal>
                <div className="p-6 sm:p-10 md:p-16">
                  <p className="eyebrow">Highlight {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 text-2xl font-extrabold uppercase leading-none sm:mt-5 sm:text-5xl">
                    {a.name}
                  </h2>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                    {a.meta}
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6">{a.body}</p>

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
