import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PersonCardSkeleton, useSectionReady } from "@/components/Skeleton";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { clubs, contacts } from "@/data/site";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — TRINETRA 2026 Organising Team" },
      {
        name: "description",
        content:
          "Faculty guidance, executive leadership, operations and sponsorship — the people accountable for delivering TRINETRA 2026.",
      },
      { property: "og:title", content: "TRINETRA 2026 Leadership" },
      { property: "og:description", content: "The organising team behind the MAKAUT Autumn Fest." },
    ],
  }),
  component: Leadership,
});

function Leadership() {
  const ready = useSectionReady(650);
  const executiveRoles = [
    "Executive Head",
    "Executive Co-Head",
    "Deputy Executive Head",
    "Operations Head",
    "Technology & R&D Head",
  ];
  const groups = [
    { title: "Faculty guidance", people: contacts.filter((c) => c.role === "Faculty Coordinator") },
    {
      title: "Executive leadership",
      people: executiveRoles
        .map((r) => contacts.find((c) => c.role === r))
        .filter((c): c is (typeof contacts)[number] => Boolean(c)),
    },
    { title: "Sponsorship", people: contacts.filter((c) => c.role === "Sponsorship Head") },
  ];

  return (
    <>
      <PageHero eyebrow="Page 09 · Leadership" title="Accountable names, not anonymous committees." lede="Every sponsor conversation has a named owner. Portrait photography and biographies will be added as they are approved for publication." />

      {groups.map((g, gi) => (
        <Section key={g.title} tone={gi % 2 === 1 ? "raised" : "default"} eyebrow={g.title}>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {!ready &&
              g.people.map((p) => <PersonCardSkeleton key={`s-${p.name}`} />)}
            {ready && g.people.map((p, i) => (
              <Reveal key={p.name} delay={i * 60} className="bg-background">
                <div className="h-full p-6 sm:p-8">
                  <div className="flex h-40 items-center justify-center border border-dashed border-border text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                    Portrait pending upload
                  </div>
                  <p className="mt-6 text-xl font-bold">{p.name}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{p.role}</p>
                  {p.email && (
                    <a href={`mailto:${p.email}`} className="mt-4 block break-all text-sm text-muted-foreground hover:text-accent">
                      {p.email}
                    </a>
                  )}
                  {p.showPhone && p.phone && (
                    <a href={`tel:+91${p.phone}`} className="mt-1 block text-sm text-muted-foreground hover:text-accent">
                      +91 {p.phone}
                    </a>
                  )}
                  <p className="mt-4 text-xs text-muted-foreground">Biography to be supplied by the organising team.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Section eyebrow="Club leadership" title="Who leads each creative vertical.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {clubs.map((c, i) => (
            <Reveal key={c.name} delay={i * 40} className="bg-background">
              <div className="h-full p-8">
                <p className="eyebrow">{c.name}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {c.people.map((p) => (
                    <li key={p.name}>
                      {p.name} — <span className="text-foreground/70">{p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand title="Talk to the sponsorship desk directly." primary={{ label: "Book a meeting", to: "/partner" }} />
    </>
  );
}
