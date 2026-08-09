import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroCrowd from "@/assets/hero-crowd.jpg";
import stageBand from "@/assets/stage-band.jpg";
import danceTroupe from "@/assets/dance-troupe.jpg";
import dhaki from "@/assets/dhaki.jpg";
import campus from "@/assets/campus.jpg";
import { Reveal } from "@/components/Reveal";
import { TrinetraMark } from "@/components/TrinetraMark";
import { CTABand, Marquee, Section, StatGrid } from "@/components/blocks";
import {
  brandEnvironment,
  festival,
  metrics,
  schedule,
  sponsorHooks,
  whySponsor,
  packages,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRINETRA 2026 — MAKAUT Autumn Fest | Sponsorship" },
      {
        name: "description",
        content:
          "TRINETRA 2026, MAKAUT's Autumn Fest on 24–25 September 2026. A two-day cultural festival and brand environment — explore partnership opportunities.",
      },
      { property: "og:title", content: "TRINETRA 2026 — MAKAUT Autumn Fest" },
      {
        property: "og:description",
        content: "Where Bengal's culture meets the next generation. Explore sponsorship opportunities.",
      },
    ],
  }),
  component: Home,
});

const montage = ["Culture", "Music", "Youth", "Creativity", "Community", "Brands", "TRINETRA"];

function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate flex min-h-screen items-end overflow-hidden">
        <img
          src={heroCrowd}
          alt="A crowd of thousands at a Durga Puja-inspired festival stage lit in vermilion and gold"
          width={1920}
          height={1088}
          className="animate-curtain absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.13_0.008_25/72%),oklch(0.13_0.008_25/40%)_35%,oklch(0.13_0.008_25/96%))]" />

        <div className="container-x pb-20 pt-40">
          <Reveal>
            <div className="flex items-center gap-4">
              <TrinetraMark className="h-10 w-auto text-accent" animate />
              <p className="eyebrow">{festival.descriptor}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="display mt-8 text-[3.5rem] leading-[0.86] text-gold-gradient sm:text-[6rem] lg:text-[9rem]">
              TRINETRA
              <span className="block text-foreground/90">2026</span>
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <Reveal delay={200}>
              <h2 className="max-w-2xl text-2xl font-extrabold uppercase leading-[1.1] sm:text-4xl">
                Where Bengal's culture
                <br />
                meets the next generation.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{festival.intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/packages"
                  className="group inline-flex items-center gap-2 bg-accent px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-foreground transition-shadow duration-300 hover:shadow-[var(--glow-marigold)]"
                >
                  Explore partnership opportunities
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 border border-border px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
                >
                  View the experience
                </Link>
                <Link
                  to="/partner"
                  className="inline-flex items-center gap-2 px-3 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-accent underline-offset-8 hover:underline"
                >
                  Book a sponsorship meeting
                </Link>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <dl className="grid grid-cols-2 gap-px border border-border bg-border">
                <div className="bg-background/80 p-6 backdrop-blur">
                  <dt className="eyebrow">Dates</dt>
                  <dd className="mt-3 text-lg font-bold">{festival.dates}</dd>
                </div>
                <div className="bg-background/80 p-6 backdrop-blur">
                  <dt className="eyebrow">Venue</dt>
                  <dd className="mt-3 text-lg font-bold">MAKAUT, WB Main Campus</dd>
                </div>
                <div className="col-span-2 bg-background/80 p-6 backdrop-blur">
                  <dt className="eyebrow">Organised by</dt>
                  <dd className="mt-3 text-sm text-muted-foreground">
                    MAKAUT Cultural Association (MCA) · CRED — Corporate Relations and Events Department
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="mt-14 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            <span className="animate-float-slow inline-block h-10 w-px bg-accent" />
            Scroll to begin
          </div>
        </div>
      </section>

      {/* ---------- OPENING FILM ---------- */}
      <section className="relative overflow-hidden border-y border-border py-24 md:py-32">
        <div className="ember-veil absolute inset-0 -z-10" />
        <div className="container-x">
          <p className="eyebrow">The opening film</p>
          <ul className="mt-10 space-y-2">
            {montage.map((word, i) => (
              <Reveal as="li" key={word} delay={i * 90}>
                <div className="group flex items-baseline gap-6 border-b border-border/60 py-4">
                  <span className="w-10 text-[10px] font-bold tracking-[0.2em] text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="display text-3xl uppercase text-foreground/40 transition-colors duration-500 group-hover:text-accent sm:text-6xl lg:text-7xl">
                    {word}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { src: dhaki, alt: "Bengali dhaki drummers performing under red festival light" },
              { src: danceTroupe, alt: "Dance troupe mid-leap in colourful costumes on stage" },
              { src: campus, alt: "MAKAUT-style university campus at golden hour" },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 120}>
                <div className="group overflow-hidden border border-border">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INSTANT SCALE ---------- */}
      <Section
        eyebrow="Instant scale"
        title={<>The numbers a brand manager asks for first.</>}
        lede="Every figure below is labelled with its status. Projected values are never presented as achieved attendance."
      >
        <StatGrid items={metrics.slice(0, 4)} />
        <div className="mt-px">
          <StatGrid items={metrics.slice(4)} columns={3} />
        </div>
        <div className="mt-8">
          <Link
            to="/proof"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent"
          >
            See the source of every number <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ---------- BRAND ENVIRONMENT ---------- */}
      <Section
        tone="raised"
        eyebrow="Brand environment"
        title={
          <>
            This isn't just an event.
            <br />
            It's a two-day brand environment.
          </>
        }
      >
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {brandEnvironment.map((c, i) => (
            <Reveal key={c.title} delay={i * 50} className="bg-background">
              <div className="group h-full p-8 transition-colors duration-500 hover:bg-card">
                <span className="text-[10px] font-bold tracking-[0.24em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-bold uppercase leading-tight transition-colors group-hover:text-accent">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- 2 DAY EXPERIENCE ---------- */}
      <Section eyebrow="The programme" title="Two days. One campus.">
        <div className="grid gap-10 lg:grid-cols-2">
          {schedule.map((day) => (
            <Reveal key={day.day}>
              <div className="surface h-full p-8">
                <div className="flex items-baseline justify-between border-b border-border pb-5">
                  <p className="display text-2xl text-gold-gradient">{day.day}</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {day.date}
                  </p>
                </div>
                <ul className="mt-6 space-y-5">
                  {day.items.map((it) => (
                    <li key={it.code} className="flex gap-5">
                      <span className="w-20 shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                        {it.time}
                      </span>
                      <span>
                        <span className="block text-sm font-bold uppercase tracking-[0.14em]">{it.code}</span>
                        <span className="mt-1 block text-sm text-muted-foreground">{it.title}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 border border-border px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
          >
            Explore full programme <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ---------- SHOWSTOPPERS ---------- */}
      <section className="grid border-y border-border md:grid-cols-2">
        {[
          {
            img: danceTroupe,
            name: "Rainbow Dance Troupe",
            meta: "24 September 2026 · 07:00 PM",
            line: "Energy, creativity, choreography and stage presence — the Day 1 climax.",
          },
          {
            img: stageBand,
            name: "Fossils — The Band",
            meta: "25 September 2026 · 04:00 PM",
            line: "An iconic name in the Bengali rock scene, live on the TRINETRA main stage.",
          },
        ].map((s) => (
          <article key={s.name} className="group relative isolate min-h-[70vh] overflow-hidden">
            <img
              src={s.img}
              alt={s.name}
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.13_0.008_25/40%),oklch(0.13_0.008_25/94%))]" />
            <div className="flex h-full flex-col justify-end p-10">
              <p className="eyebrow">Showstopper</p>
              <h3 className="mt-4 text-3xl font-extrabold uppercase leading-none sm:text-5xl">{s.name}</h3>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">{s.meta}</p>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">{s.line}</p>
              <Link
                to="/headliners"
                className="mt-7 inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-accent"
              >
                See the highlight <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <Marquee items={sponsorHooks} />

      {/* ---------- SPONSOR OPPORTUNITY ---------- */}
      <Section
        eyebrow="Sponsor opportunity"
        title={
          <>
            Your brand shouldn't just appear.
            <br />
            It should become part of the experience.
          </>
        }
        lede="Fifteen defined activation surfaces across the campus, the stage, the screens and the content."
      >
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Main Stage LED",
            "Entrance Gate",
            "Digital Standee",
            "Product Stall",
            "Merchandise",
            "Creator Content",
          ].map((s, i) => (
            <Reveal key={s} delay={i * 60} className="bg-background">
              <div className="flex h-full items-center justify-between p-8 transition-colors duration-500 hover:bg-card">
                <span className="text-lg font-bold uppercase">{s}</span>
                <ArrowUpRight className="h-5 w-5 text-accent" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/activation-lab"
            className="inline-flex items-center gap-2 bg-accent px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-foreground"
          >
            Imagine your brand at TRINETRA <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ---------- WHY SPONSOR PREVIEW ---------- */}
      <Section tone="raised" eyebrow="Why sponsor" title="Your audience is already here.">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {whySponsor.slice(0, 6).map((b, i) => (
            <Reveal key={b.no} delay={i * 60} className="bg-background">
              <div className="h-full p-8">
                <p className="display text-3xl text-gold-gradient">{b.no}</p>
                <h3 className="mt-4 text-base font-bold uppercase tracking-[0.1em]">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- PACKAGE PREVIEW ---------- */}
      <Section eyebrow="Sponsorship inventory" title="Six ways to partner.">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.tier} delay={i * 60} className="bg-background">
              <Link to="/packages" className="block h-full p-8 transition-colors duration-500 hover:bg-card">
                <p className="eyebrow">{p.tagline}</p>
                <h3 className="mt-4 text-xl font-bold uppercase">{p.tier}</h3>
                <p className="display mt-6 text-3xl text-gold-gradient">{p.price}</p>
                <p className="mt-4 text-sm text-muted-foreground">{p.benefits.length} deliverables</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title={
          <>
            Let's build something
            <br />
            the audience will remember.
          </>
        }
        lede={festival.sponsorLine}
      />
    </>
  );
}
