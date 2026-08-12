import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ScheduleSkeleton, useSectionReady } from "@/components/Skeleton";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { schedule } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Event Schedule — TRINETRA 2026, 24–25 September" },
      {
        name: "description",
        content:
          "The full TRINETRA 2026 programme: Bodhan, Sammilan, Spandan, Garjan, Bicharan, Avahan, Darshan and Akalbodhan across two days.",
      },
      { property: "og:title", content: "TRINETRA 2026 Event Schedule" },
      { property: "og:description", content: "Eight segments across 24–25 September 2026 at MAKAUT WB Main Campus." },
    ],
  }),
  component: Schedule,
});

function Schedule() {
  const [open, setOpen] = useState<string | null>("BODHAN");
  const ready = useSectionReady(650);

  return (
    <>
      <PageHero
        eyebrow="Page 06 · Programme"
        title={
          <>
            Eight segments.
            <br />
            Two days.
          </>
        }
        lede="Expand any segment to see the description and where a brand can integrate."
      />

      {schedule.map((day, di) => (
        <Section key={day.day} tone={di % 2 === 1 ? "raised" : "default"} eyebrow={day.date} title={day.day}>
          {!ready && <ScheduleSkeleton />}
          <div className={cn("border border-border", !ready && "hidden")}>
            {day.items.map((it) => {
              const isOpen = open === it.code;
              return (
                <div key={it.code} className="border-b border-border last:border-b-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : it.code)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-card sm:gap-6 sm:p-6 md:p-8"
                  >
                    <span className="w-16 shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] text-accent sm:w-24 sm:text-[11px] sm:tracking-[0.18em]">
                      {it.time}
                    </span>
                    <span className="flex-1">
                      <span className="block text-lg font-extrabold uppercase tracking-[0.1em] sm:text-xl md:text-3xl">
                        {it.code}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">{it.title}</span>
                    </span>
                    <ChevronDown
                      className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-500", isOpen && "rotate-180 text-accent")}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 border-t border-border bg-card/50 p-6 md:grid-cols-2 md:p-8">
                        <div>
                          <p className="eyebrow">About</p>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.description}</p>
                          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                            Venue · MAKAUT, WB Main Campus
                          </p>
                        </div>
                        <div>
                          <p className="eyebrow">Sponsor integration</p>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.sponsorAngle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      ))}

      <Reveal>
        <p className="container-x pb-16 text-xs text-muted-foreground">
          Timings are indicative and may be refined closer to the event.
        </p>
      </Reveal>

      <CTABand title="Pick your moment in the programme." primary={{ label: "Sponsorship packages", to: "/packages" }} />
    </>
  );
}
