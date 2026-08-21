import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { activations, objectives } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/activation-lab")({
  head: () => ({
    meta: [
      { title: "Brand Activation Lab — Imagine Your Brand at TRINETRA 2026" },
      { name: "description", content: "Type your brand name and preview it across fifteen TRINETRA 2026 activation surfaces, then build a recommended partnership plan from your objective." },
      { property: "og:title", content: "Brand Activation Lab — TRINETRA 2026" },
      { property: "og:description", content: "Imagine your brand at TRINETRA. Fifteen activation surfaces, one plan." },
      { property: "og:url", content: "https://www.mcamsv.com/activation-lab" },
      { property: "og:site_name", content: "TRINETRA 2026" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Brand Activation Lab — Imagine Your Brand at TRINETRA 2026" },
      { name: "twitter:description", content: "Type your brand name and preview it across fifteen TRINETRA 2026 activation surfaces, then build a recommended partnership plan from your objective." },
    ],
    links: [{ rel: "canonical", href: "https://www.mcamsv.com/activation-lab" }],
  }),
  component: ActivationLab,
});

function ActivationLab() {
  const [brand, setBrand] = useState("");
  const [selected, setSelected] = useState(activations[0]!.name);
  const [objective, setObjective] = useState<string | null>(null);
  const name = brand.trim() || "YOUR BRAND";
  const active = activations.find((a) => a.name === selected)!;
  const plan = objectives.find((o) => o.name === objective);

  return (
    <>
      <PageHero eyebrow="Page 19 · Activation Lab" title="Imagine your brand at TRINETRA." lede="Type a brand name to preview the association, then choose an objective to get a recommended inventory." />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <label className="eyebrow" htmlFor="brand">Company name</label>
            <input
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="e.g. Your Company Pvt. Ltd."
              className="mt-4 w-full border border-input bg-transparent px-5 py-4 text-base outline-none transition-colors focus:border-accent"
            />
            <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              {activations.map((a) => (
                <li key={a.name}>
                  <button
                    onClick={() => setSelected(a.name)}
                    className={cn(
                      "h-full w-full p-4 text-left text-xs font-bold uppercase tracking-[0.12em] transition-colors",
                      a.name === selected ? "bg-accent text-accent-foreground" : "bg-background text-muted-foreground hover:bg-card",
                    )}
                  >
                    {a.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="ember-veil alpona flex aspect-[4/3] flex-col items-center justify-center border border-border p-8 text-center">
              <p className="eyebrow">{active.name}</p>
              <p className="display mt-8 break-words text-3xl uppercase text-gold-gradient sm:text-5xl">{name}</p>
              <p className="my-6 text-xl text-accent">×</p>
              <p className="display text-2xl uppercase text-foreground/80 sm:text-4xl">TRINETRA 2026</p>
            </div>
            <div className="surface mt-4 p-8">
              <p className="eyebrow">Best for</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {active.best.map((b) => (
                  <li key={b} className="border border-border px-3 py-1.5 text-xs text-muted-foreground">{b}</li>
                ))}
              </ul>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Available in · {active.tier}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="raised" eyebrow="Activation planner" title="What does your brand want?">
        <div className="flex flex-wrap gap-3">
          {objectives.map((o) => (
            <button
              key={o.name}
              onClick={() => setObjective(o.name === objective ? null : o.name)}
              className={cn(
                "border px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors",
                o.name === objective ? "border-accent bg-accent text-accent-foreground" : "border-border text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {o.name}
            </button>
          ))}
        </div>
        {plan && (
          <Reveal className="mt-10">
            <div className="surface p-8">
              <p className="eyebrow">Recommended inventory for {plan.name}</p>
              <ul className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-3">
                {plan.recommends.map((r) => (
                  <li key={r} className="bg-background p-6 text-base font-bold uppercase">{r}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Recommendations are planning suggestions. No business results are guaranteed.
              </p>
            </div>
          </Reveal>
        )}
      </Section>

      <CTABand title="Build my partnership plan." primary={{ label: "Book a meeting", to: "/partner" }} secondary={{ label: "See packages", to: "/packages" }} />
    </>
  );
}
