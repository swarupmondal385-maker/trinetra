import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroCrowd from "@/assets/hero-crowd.jpg";
import stageBand from "@/assets/stage-band.jpg";
import danceTroupe from "@/assets/dance-troupe.jpg";


import openingFilm from "@/assets/trinetra-opening-film.mp4.asset.json";
import openingFilmPoster from "@/assets/opening-film-poster.jpg.asset.json";
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
        content: "TRINETRA — The Sharod Symphony. Where Bengal's greatest saga awakens on campus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://mcamsv.com/" },
    ],
    links: [{ rel: "canonical", href: "https://mcamsv.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "TRINETRA 2026",
          alternateName: "TRINETRA 2026 — MAKAUT Autumn Fest",
          description:
            "TRINETRA 2026, MAKAUT's Autumn Fest — a two-day cultural festival on 24–25 September 2026 at the MAKAUT Main Campus, Haringhata.",
          startDate: "2026-09-24",
          endDate: "2026-09-25",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "MAKAUT Main Campus, Haringhata",
            address: {
              "@type": "PostalAddress",
              streetAddress: "MAKAUT Main Campus, Haringhata",
              addressLocality: "Haringhata",
              addressRegion: "West Bengal",
              addressCountry: "IN",
            },
          },
          organizer: {
            "@type": "Organization",
            name: "MAKAUT Cultural Association",
            url: "https://mcamsv.com/",
          },
          url: "https://mcamsv.com/",
        }),
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

        <div className="container-x pb-14 pt-32 sm:pb-20 sm:pt-40">
          <Reveal>
            <div className="flex items-center gap-4">
              <TrinetraMark className="h-10 w-auto text-accent" animate />
              <p className="eyebrow">{festival.descriptor}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="display mt-8 text-[2.75rem] leading-[0.88] text-gold-gradient sm:text-[6rem] lg:text-[9rem]">
              TRINETRA
              <span className="block text-foreground/90">2026</span>
              <span className="sr-only"> — MAKAUT Autumn Fest</span>
            </h1>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              MAKAUT Autumn Fest
            </p>

          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <Reveal delay={200}>
              <h2 className="max-w-2xl text-xl font-extrabold uppercase leading-[1.15] sm:text-4xl">
                TRINETRA — The Sharod Symphony
                <br />
                <span className="text-gold-gradient">Where Bengal's greatest saga awakens on campus.</span>
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
              <dl className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                <div className="bg-background/80 p-6 backdrop-blur">
                  <dt className="eyebrow">Dates</dt>
                  <dd className="mt-3 text-lg font-bold">{festival.dates}</dd>
                </div>
                <div className="bg-background/80 p-6 backdrop-blur">
                  <dt className="eyebrow">Venue</dt>
                  <dd className="mt-3 text-lg font-bold">MAKAUT, WB Main Campus</dd>
                </div>
                <div className="bg-background/80 p-6 backdrop-blur sm:col-span-2">
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
      <section className="relative overflow-hidden border-y border-border py-16 sm:py-24 md:py-32">
        <div className="ember-veil absolute inset-0 -z-10" />
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The opening film</p>
            <h2 className="display mt-4 text-2xl leading-[0.95] text-gold-gradient sm:text-5xl lg:text-6xl">
              TRINETRA in motion
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <figure className="group relative mt-8 overflow-hidden border border-border sm:mt-12">
              <video
                src={openingFilm.url}
                poster={openingFilmPoster.url}
                controls
                playsInline
                muted
                loop
                autoPlay
                preload="metadata"
                aria-label="TRINETRA 2026 opening film"
                className="aspect-video w-full bg-black object-cover"
              />
              <figcaption className="sr-only">TRINETRA 2026 opening film</figcaption>
            </figure>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 sm:mt-12">
            {montage.map((word, i) => (
              <Reveal key={word} delay={i * 70}>
                <span className="display text-lg uppercase text-foreground/40 transition-colors duration-500 hover:text-accent sm:text-3xl">
                  {word}
                </span>
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
          <article key={s.name} className="group relative isolate min-h-[60vh] overflow-hidden md:min-h-[70vh]">
            <img
              src={s.img}
              alt={s.name}
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.13_0.008_25/40%),oklch(0.13_0.008_25/94%))]" />
            <div className="flex h-full flex-col justify-end p-6 sm:p-10">
              <p className="eyebrow">Showstopper</p>
              <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight sm:text-5xl">{s.name}</h3>
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
      <Section eyebrow="Sponsorship inventory" title="Four ways to partner.">
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
