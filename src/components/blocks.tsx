import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { cn } from "@/lib/utils";
import type { Metric } from "@/data/site";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  image?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 md:pb-28 md:pt-48">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.13_0.008_25/85%),oklch(0.13_0.008_25/96%))]" />
        </>
      )}
      {!image && <div className="ember-veil absolute inset-0 -z-10" />}
      <div className="alpona absolute inset-0 -z-10 opacity-40" />
      <div className={cn("container-x", align === "center" && "text-center")}>
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className={cn(
              "mt-5 max-w-5xl text-[2rem] font-extrabold uppercase leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl",
              align === "center" && "mx-auto",
            )}
          >
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={160}>
            <p
              className={cn(
                "mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground md:text-lg",
                align === "center" && "mx-auto",
              )}
            >
              {lede}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={240}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  lede,
  children,
  className,
  tone = "default",
}: {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  children?: ReactNode;
  className?: string;
  tone?: "default" | "raised";
}) {
  return (
    <section
      className={cn(
        "relative py-14 sm:py-20 md:py-28",
        tone === "raised" && "border-y border-border bg-card/40",
        className,
      )}
    >
      <div className="container-x">
        {(eyebrow || title) && (
          <div className="max-w-3xl">
            {eyebrow && (
              <Reveal>
                <p className="eyebrow">{eyebrow}</p>
              </Reveal>
            )}
            {title && (
              <Reveal delay={60}>
                <h2 className="mt-4 text-2xl font-extrabold uppercase leading-[1.1] sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              </Reveal>
            )}
            {lede && (
              <Reveal delay={120}>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{lede}</p>
              </Reveal>
            )}
          </div>
        )}
        {children && <div className={cn(title || eyebrow ? "mt-10 md:mt-14" : "")}>{children}</div>}
      </div>
    </section>
  );
}

export function StatGrid({ items, columns = 4 }: { items: Metric[]; columns?: 3 | 4 }) {
  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
      )}
    >
      {items.map((m, i) => (
        <Reveal key={m.label} delay={i * 60} className="bg-background">
          <div className="group h-full p-6 transition-colors duration-500 hover:bg-card sm:p-8">
            <p className="display text-3xl text-gold-gradient sm:text-4xl lg:text-5xl">
              <CountUp value={m.value} />
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">{m.label}</p>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              {m.status}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CTABand({
  title,
  lede,
  primary = { label: "View sponsorship packages", to: "/packages" },
  secondary = { label: "Book a meeting", to: "/partner" },
}: {
  title: ReactNode;
  lede?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative isolate overflow-hidden border-y border-border py-16 sm:py-24 md:py-32">
      <div className="ember-veil absolute inset-0 -z-10 animate-glow" />
      <div className="alpona absolute inset-0 -z-10 opacity-50" />
      <div className="container-x text-center">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-2xl font-extrabold uppercase leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </Reveal>
        {lede && (
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{lede}</p>
          </Reveal>
        )}
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={primary.to}
              className="group inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 sm:w-auto sm:px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:shadow-[var(--glow-marigold)]"
            >
              {primary.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to={secondary.to}
              className="inline-flex w-full items-center justify-center gap-2 border border-border px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground sm:w-auto sm:px-8 transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y border-border py-6">
      <div className="animate-marquee flex w-max gap-16 group-hover:[animation-play-state:paused]">
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="display whitespace-nowrap text-xl uppercase text-foreground/25 sm:text-2xl md:text-4xl"
          >
            {t}
            <span className="ml-16 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProofBadge({ status }: { status: string }) {
  const tone =
    status === "Documented"
      ? "border-accent/50 text-accent"
      : status === "Projected"
        ? "border-primary/60 text-primary-foreground/90"
        : "border-border text-muted-foreground";
  return (
    <span className={cn("inline-block border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]", tone)}>
      {status}
    </span>
  );
}

export function PhotoProof({
  image,
  event,
  year,
  caption,
  category,
  className,
}: {
  image: string;
  event: string;
  year: string;
  caption?: string;
  category?: string;
  className?: string;
}) {
  return (
    <figure className={cn("group relative overflow-hidden border border-border", className)}>
      <img
        src={image}
        alt={caption ?? event}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-[var(--gradient-night)] p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
          {category ? `${category} · ` : ""}
          {year}
        </p>
        <p className="mt-2 text-sm font-semibold text-foreground">{event}</p>
        {caption && <p className="mt-1 text-xs text-muted-foreground">{caption}</p>}
      </figcaption>
    </figure>
  );
}
