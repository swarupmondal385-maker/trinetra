import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { comparisonRows, packages, tierKeys } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Sponsorship Packages — TRINETRA 2026 (₹70,000 to ₹15 Lakh+)" },
      { name: "description", content: "Title, Platinum, Gold, Silver, Bronze and Associate sponsorship packages for TRINETRA 2026, with a full deliverable comparison matrix." },
      { property: "og:title", content: "TRINETRA 2026 Sponsorship Packages" },
      { property: "og:description", content: "Six partnership tiers, each with defined on-ground and digital deliverables." },
    ],
  }),
  component: Packages,
});

function Packages() {
  const [open, setOpen] = useState<string | null>("Title Sponsor");

  return (
    <>
      <PageHero eyebrow="Page 17 · Inventory" title="Partnership inventory." lede="Six tiers of association. Every deliverable below is taken from the official TRINETRA 2026 sponsorship brochure." />

      <Section>
        <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
          {packages.map((p, i) => {
            const isOpen = open === p.tier;
            return (
              <Reveal key={p.tier} delay={i * 50} className="bg-background">
                <div className={cn("flex h-full flex-col p-8", p.highlight && "bg-card")}>
                  <p className="eyebrow">{p.tagline}</p>
                  <h2 className="mt-4 text-2xl font-extrabold uppercase">{p.tier}</h2>
                  <p className="display mt-6 text-4xl text-gold-gradient">{p.price}</p>
                  <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                    {(isOpen ? p.benefits : p.benefits.slice(0, 5)).map((b) => (
                      <li key={b} className="flex gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {p.benefits.length > 5 && (
                    <button
                      onClick={() => setOpen(isOpen ? null : p.tier)}
                      className="mt-6 self-start text-[11px] font-bold uppercase tracking-[0.2em] text-accent"
                    >
                      {isOpen ? "Show less" : `+ ${p.benefits.length - 5} more deliverables`}
                    </button>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="raised" eyebrow="Compare" title="Deliverable matrix.">
        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead className="border-b border-border bg-card/60">
              <tr className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                <th className="p-4">Deliverable</th>
                {tierKeys.map((t) => (
                  <th key={t} className="p-4 text-center">{t}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r) => (
                <tr key={r.row} className="border-b border-border last:border-0 transition-colors hover:bg-card/50">
                  <td className="p-4 text-muted-foreground">{r.row}</td>
                  {tierKeys.map((t) => (
                    <td key={t} className="p-4 text-center">
                      {r.tiers[t] ? (
                        <Check className="mx-auto h-4 w-4 text-accent" />
                      ) : (
                        <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Packages and deliverables may be customised through mutual discussion.
        </p>
      </Section>

      <CTABand title="Customise a package with CRED." primary={{ label: "Book a meeting", to: "/partner" }} secondary={{ label: "Partnership categories", to: "/categories" }} />
    </>
  );
}
