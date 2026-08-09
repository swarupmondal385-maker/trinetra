import { createFileRoute } from "@tanstack/react-router";
import dhaki from "@/assets/dhaki.jpg";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { clubs, contacts, facultyMessage } from "@/data/site";

export const Route = createFileRoute("/about-mca")({
  head: () => ({
    meta: [
      { title: "About MCA — MAKAUT Cultural Association" },
      {
        name: "description",
        content:
          "The MAKAUT Cultural Association, established 21 February 2025, is a 900+ member student community and the organiser of TRINETRA 2026.",
      },
      { property: "og:title", content: "About MCA — MAKAUT Cultural Association" },
      { property: "og:description", content: "900+ voices. One cultural community. The team behind TRINETRA 2026." },
    ],
  }),
  component: AboutMca,
});

function AboutMca() {
  return (
    <>
      <PageHero
        eyebrow="Page 03 · The association"
        title={
          <>
            900+ voices.
            <br />
            One cultural community.
          </>
        }
        lede="The MAKAUT Cultural Association (MCA) was established on 21 February 2025 to create a platform where students can express talent, creativity, passion, identity, collaboration and culture beyond academics."
        image={dhaki}
      />

      <Section eyebrow="Vision" title="Culture, beyond the classroom.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {["Talent", "Creativity", "Passion", "Identity", "Collaboration", "Culture"].map((v, i) => (
            <Reveal key={v} delay={i * 50} className="bg-background">
              <div className="p-10">
                <span className="text-[10px] font-bold tracking-[0.24em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="display mt-4 text-3xl text-foreground/80">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="raised" eyebrow="Leadership" title="Who guides MCA.">
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {contacts.slice(0, 3).map((c, i) => (
            <Reveal key={c.name} delay={i * 60} className="bg-background">
              <div className="h-full p-8">
                <p className="eyebrow">{c.role}</p>
                <p className="mt-4 text-xl font-bold">{c.name}</p>
                {c.email && (
                  <a href={`mailto:${c.email}`} className="mt-3 block break-all text-sm text-muted-foreground hover:text-accent">
                    {c.email}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Faculty coordinator" title="A message from Team TRINETRA.">
        <Reveal>
          <blockquote className="surface p-10 md:p-16">
            <p className="display text-5xl leading-none text-accent">“</p>
            <div className="mt-6 space-y-5 font-[family-name:var(--font-serif)] text-xl leading-relaxed text-foreground/90 md:text-2xl">
              {facultyMessage.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <footer className="mt-10 border-t border-border pt-6">
              <p className="text-base font-bold uppercase tracking-[0.14em]">{facultyMessage.author}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                {facultyMessage.role}
              </p>
            </footer>
          </blockquote>
        </Reveal>
      </Section>

      <Section tone="raised" eyebrow="The community" title="Seven clubs. One association.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {clubs.map((c, i) => (
            <Reveal key={c.name} delay={i * 50} className="bg-background">
              <div className="h-full p-8">
                <h3 className="text-base font-bold uppercase tracking-[0.1em]">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          MCA has grown into a vibrant student community promoting unity, innovation and cultural excellence, and has
          participated in inter-college and external institutional events.
        </p>
      </Section>

      <CTABand
        title="TRINETRA is MCA's flagship pre-Durga Puja fest."
        primary={{ label: "Read the story", to: "/story" }}
        secondary={{ label: "Meet the leadership", to: "/leadership" }}
      />
    </>
  );
}
