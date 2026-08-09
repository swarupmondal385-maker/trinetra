import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { contacts, credMembers } from "@/data/site";

export const Route = createFileRoute("/cred")({
  head: () => ({
    meta: [
      { title: "CRED — Corporate Relations and Events, TRINETRA 2026" },
      {
        name: "description",
        content:
          "CRED is the Corporate Relations and Events Department of the MAKAUT Cultural Association — the single point of contact for every TRINETRA 2026 partnership.",
      },
      { property: "og:title", content: "CRED — Corporate Relations and Events" },
      { property: "og:description", content: "The team connecting culture with corporate India." },
    ],
  }),
  component: Cred,
});

function Cred() {
  const sponsorship = contacts.find((c) => c.role === "Sponsorship Head");

  return (
    <>
      <PageHero
        eyebrow="Page 10 · CRED"
        title={
          <>
            The team connecting
            <br />
            culture with corporate India.
          </>
        }
        lede="Corporate Relations and Events Department, by the MAKAUT Cultural Association. CRED owns sponsor discovery, proposals, deliverable tracking and on-ground activation delivery."
      />

      <Section eyebrow="How we work" title="One desk, four stages.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Discovery", v: "Understanding your objective, category and budget range." },
            { k: "Proposal", v: "A tailored inventory built from the published packages." },
            { k: "Agreement", v: "Deliverables, timelines and creative specifications confirmed in writing." },
            { k: "Delivery", v: "On-ground execution, documentation and a post-event summary." },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 60} className="bg-background">
              <div className="h-full p-8">
                <p className="display text-3xl text-gold-gradient">0{i + 1}</p>
                <h3 className="mt-4 text-base font-bold uppercase tracking-[0.1em]">{s.k}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="raised" eyebrow="The department" title="CRED members.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {credMembers.map((m, i) => (
            <Reveal key={m} delay={i * 30} className="bg-background">
              <div className="p-6 text-sm font-semibold uppercase tracking-[0.08em]">{m}</div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Spellings follow the official CRED document. Roles and portraits will be published as approved.
        </p>
      </Section>

      <Section eyebrow="Direct line" title="Sponsorship desk.">
        <Reveal>
          <div className="surface flex flex-wrap items-center justify-between gap-6 p-10">
            <div>
              <p className="eyebrow">Sponsorship Head</p>
              <p className="mt-3 text-2xl font-bold">{sponsorship?.name}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${sponsorship?.email}`} className="bg-accent px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-foreground">
                Email sponsorship team
              </a>
              <a href={`tel:+91${sponsorship?.phone}`} className="border border-border px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-accent hover:text-accent">
                +91 {sponsorship?.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand title="Start the conversation." primary={{ label: "Book a meeting", to: "/partner" }} secondary={{ label: "See packages", to: "/packages" }} />
    </>
  );
}
