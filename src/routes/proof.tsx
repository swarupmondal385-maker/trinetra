import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, PhotoProof, ProofBadge, Section } from "@/components/blocks";
import { mediaKit, metrics } from "@/data/site";
import { proofPhotos } from "@/data/proof-photos";


export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Proof Center — Claims, Sources and Documents" },
      { name: "description", content: "Every TRINETRA 2026 metric with its status and source, plus the downloadable media kit. Claims are easy; proof builds partnerships." },
      { property: "og:title", content: "TRINETRA Proof Center" },
      { property: "og:description", content: "Claims are easy. Proof builds partnerships." },
    ],
  }),
  component: Proof,
});

function Proof() {
  return (
    <>
      <PageHero eyebrow="Page 14 · Proof" title={<>Claims are easy.<br />Proof builds partnerships.</>} lede="A trust dashboard: what we claim, what status the claim has, and where it came from." />

      <Section eyebrow="Trust dashboard">
        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[46rem] text-left">
            <thead className="border-b border-border bg-card/60">
              <tr className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                <th className="p-5">Claim</th>
                <th className="p-5">Status</th>
                <th className="p-5">Source</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m) => (
                <tr key={m.label} className="border-b border-border last:border-0">
                  <td className="p-5">
                    <span className="display text-xl text-gold-gradient">{m.value}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{m.label}</span>
                  </td>
                  <td className="p-5 align-top"><ProofBadge status={m.status} /></td>
                  <td className="p-5 align-top text-sm text-muted-foreground">{m.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="raised" eyebrow="Media kit" title="Documents for your file.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {mediaKit.map((d, i) => (
            <Reveal key={d.title} delay={i * 50} className="bg-background">
              <div className="flex h-full flex-col justify-between gap-6 p-8">
                <p className="text-base font-bold uppercase tracking-[0.06em]">{d.title}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">{d.status}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Files appear as downloads only once the organising team uploads them. No placeholder documents are shown.
        </p>
      </Section>

      <CTABand title="Request the full document pack." primary={{ label: "Contact CRED", to: "/partner" }} secondary={{ label: "Previous sponsors", to: "/previous-sponsors" }} />
    </>
  );
}
