import { createFileRoute } from "@tanstack/react-router";
import dhaki from "@/assets/dhaki.jpg";
import heroCrowd from "@/assets/hero-crowd.jpg";
import { Reveal } from "@/components/Reveal";
import { TrinetraMark } from "@/components/TrinetraMark";
import { CTABand, PageHero, Section } from "@/components/blocks";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "The Story of TRINETRA — Tradition Meets the Next Generation" },
      {
        name: "description",
        content:
          "TRINETRA 2026 is inspired by the spirit of Bengal's grandest celebration — a two-day immersive experience of performance, culture and youth-driven creativity.",
      },
      { property: "og:title", content: "The Story of TRINETRA" },
      { property: "og:description", content: "Before the lights. Before the music. There is a feeling." },
      { property: "og:url", content: "https://www.mcamsv.com/story" },
      { property: "og:site_name", content: "TRINETRA 2026" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Story of TRINETRA — Tradition Meets the Next Generation" },
      { name: "twitter:description", content: "TRINETRA 2026 is inspired by the spirit of Bengal's grandest celebration — a two-day immersive experience of performance, culture and youth-driven creativity." },
    ],
    links: [{ rel: "canonical", href: "https://www.mcamsv.com/story" }],
  }),
  component: Story,
});

const words = ["Bengal.", "Durga Puja.", "Dhaak.", "Art.", "Community.", "Youth.", "TRINETRA."];

function Story() {
  return (
    <>
      <PageHero
        eyebrow="Page 04 · Origin"
        align="center"
        title={
          <>
            Before the lights.
            <br />
            Before the music.
            <br />
            There is a feeling.
          </>
        }
        image={heroCrowd}
      />

      <section className="relative border-y border-border py-24">
        <div className="container-x">
          <ul className="mx-auto max-w-4xl">
            {words.map((w, i) => (
              <Reveal as="li" key={w} delay={i * 80}>
                <p
                  className="display py-3 text-center text-4xl uppercase sm:text-7xl"
                  style={{ color: `oklch(${0.35 + i * 0.09} ${0.12 - i * 0.008} ${25 + i * 8})` }}
                >
                  {w}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Section eyebrow="The idea" title="Bengal's grandest celebration, reimagined for a campus.">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                TRINETRA 2026 is inspired by the spirit of Bengal's grandest celebration — Durga Puja. It is designed
                as a two-day immersive experience bringing together high-energy performances, competitions, cultural
                showcases, live entertainment, interactive experiences and youth-driven creativity.
              </p>
              <p>
                It combines Bengal's festive tradition with modern expression, and serves as a stage for emerging
                talent, collaboration, music, fashion, art, performance, innovation and shared experience.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Dhaak", "Conch", "Alpona", "Festival lights", "Stage", "Crowd"].map((t) => (
                <span key={t} className="border border-border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden border border-border">
              <img src={dhaki} alt="Dhaki drummers performing" loading="lazy" className="w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="ember-veil alpona relative border-t border-border py-32 text-center">
        <div className="container-x">
          <Reveal>
            <TrinetraMark className="mx-auto h-16 w-auto text-accent" animate />
            <h2 className="display mt-10 text-3xl uppercase text-gold-gradient sm:text-6xl">
              Tradition meets the next generation.
            </h2>
          </Reveal>
        </div>
      </section>

      <CTABand title="See what the two days actually contain." primary={{ label: "The experience", to: "/experience" }} secondary={{ label: "Event schedule", to: "/schedule" }} />
    </>
  );
}
