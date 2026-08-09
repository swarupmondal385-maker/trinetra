import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { categoryDisclaimer, partnershipCategories } from "@/data/site";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Partnership Categories — TRINETRA 2026" },
      { name: "description", content: "Fifteen category partnerships for TRINETRA 2026 — telecom, beverage, media, style, prize, health, apparel, ticketing and more." },
      { property: "og:title", content: "TRINETRA 2026 Partnership Categories" },
      { property: "og:description", content: "Category partnerships with stalls and campus banner presence." },
    ],
  }),
  component: Categories,
});

function Categories() {
  return (
    <>
      <PageHero eyebrow="Page 18 · Categories" title="Fifteen ways to own a category." lede="Category partnerships sit alongside the tiered packages and can be combined with them." />

      <Section>
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {partnershipCategories.map((c, i) => (
            <Reveal key={c.name} delay={i * 35} className="bg-background">
              <div className="group flex h-full flex-col justify-between gap-8 p-8 transition-colors duration-500 hover:bg-card">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.24em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-xl font-extrabold uppercase transition-colors group-hover:text-accent">{c.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{c.deliverable}</p>
                </div>
                <Link to="/partner" className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Discuss this partnership →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">{categoryDisclaimer}</p>
      </Section>

      <CTABand title="Claim your category." primary={{ label: "Book a meeting", to: "/partner" }} secondary={{ label: "Activation Lab", to: "/activation-lab" }} />
    </>
  );
}
