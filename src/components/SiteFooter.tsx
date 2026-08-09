import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { navGroups } from "@/data/nav";
import { festival, contacts } from "@/data/site";
import { TrinetraMark } from "./TrinetraMark";

const sponsorship = contacts.find((c) => c.role === "Sponsorship Head");

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="hairline" />
      <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <TrinetraMark className="h-10 w-auto text-accent" />
          <p className="display mt-6 text-3xl text-gold-gradient">TRINETRA 2026</p>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            {festival.descriptor}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Organised by the {festival.organiser}, {festival.institution}.
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {festival.venue}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a className="hover:text-foreground" href={`mailto:${sponsorship?.email}`}>
                {sponsorship?.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a className="hover:text-foreground" href={`tel:+91${sponsorship?.phone}`}>
                +91 {sponsorship?.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {navGroups.map((g) => (
            <div key={g.group}>
              <p className="eyebrow">{g.group}</p>
              <ul className="mt-4 space-y-2">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="eyebrow">Partner</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/partner" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/proof" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  Media Kit & Documents
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {festival.year} MAKAUT Cultural Association. All rights reserved.</p>
          <p>{festival.dates} · MAKAUT, WB Main Campus</p>
        </div>
      </div>
    </footer>
  );
}
