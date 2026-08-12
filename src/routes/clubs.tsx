import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { clubs } from "@/data/site";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Clubs & Talent — The Culture Behind TRINETRA 2026" },
      {
        name: "description",
        content:
          "Drama, art, music, quiz, fashion, dance and photography — the seven MCA clubs and the students who run the culture behind TRINETRA 2026.",
      },
      { property: "og:title", content: "Clubs & Talent — MAKAUT Cultural Association" },
      { property: "og:description", content: "One association. Multiple creative worlds." },
    ],
  }),
  component: Clubs,
});

function Clubs() {
  const [showScores, setShowScores] = useState(false);

  return (
    <>
      <PageHero eyebrow="Page 08 · Clubs" title="The culture behind the festival." lede="Seven clubs, each with its own creative language, together produce every segment on the TRINETRA stage." />

      <Section>
        <div className="space-y-px border border-border bg-border">
          {clubs.map((c, i) => (
            <Reveal key={c.name} delay={i * 50} className="bg-background">
              <div className="grid gap-6 p-8 md:grid-cols-[1fr_1.3fr] md:p-10">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.24em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-2xl font-extrabold uppercase sm:text-4xl">{c.name}</h2>
                  <p className="mt-3 max-w-sm text-sm text-muted-foreground">{c.line}</p>
                </div>
                <ul className="grid gap-px self-start border border-border bg-border sm:grid-cols-2">
                  {c.people.map((p) => (
                    <li key={p.name} className="bg-background p-6">
                      <p className="text-base font-bold">{p.name}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{p.role}</p>
                      {showScores && p.score && (
                        <p className="mt-3 text-xs text-muted-foreground">Selection score · {p.score}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => setShowScores((v) => !v)}
            className="border border-border px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {showScores ? "Hide selection archive" : "Show selection archive"}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Selection scores are internal records and stay hidden on sponsor-facing cards by default.
          </p>
        </div>
      </Section>

      <Section tone="raised" eyebrow="Together" title="One association. Multiple creative worlds." />

      <CTABand title="Meet the people who run it." primary={{ label: "Leadership", to: "/leadership" }} secondary={{ label: "Partner with us", to: "/partner" }} />
    </>
  );
}
