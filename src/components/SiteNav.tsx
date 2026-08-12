import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { navGroups } from "@/data/nav";
import { TrinetraMark } from "./TrinetraMark";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20 md:gap-6">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <TrinetraMark className="h-7 w-auto text-accent transition-transform duration-500 group-hover:scale-110" />
            <span className="leading-none">
              <span className="display block text-base tracking-[0.18em] text-foreground sm:text-lg">TRINETRA</span>
              <span className="mt-1 hidden text-[9px] font-bold uppercase tracking-[0.34em] text-muted-foreground sm:block">
                MAKAUT Autumn Fest 2026
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navGroups.map((g) => (
              <div key={g.group} className="group/item relative">
                <button className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground">
                  {g.group}
                </button>
                <div className="invisible absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:opacity-100">
                  <div className="surface rounded-md p-2">
                    {g.links.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        className="block rounded-sm px-4 py-3 transition-colors hover:bg-secondary"
                        activeProps={{ className: "bg-secondary" }}
                      >
                        <span className="block text-sm font-semibold text-foreground">{l.label}</span>
                        {l.note && (
                          <span className="mt-0.5 block text-xs text-muted-foreground">{l.note}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              to="/partner"
              className="hidden rounded-sm border border-accent/60 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground sm:inline-block"
            >
              Book a meeting
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-border/60">
          <div
            className="h-px bg-accent transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Full-screen animated menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto bg-background/97 backdrop-blur-2xl transition-all duration-500",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="alpona ember-veil min-h-full pb-24 pt-24 md:pt-28">
          <div className="container-x grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
            <div className="xl:col-span-1">
              <p className="eyebrow">Navigate</p>
              <p className="display mt-4 text-4xl text-gold-gradient">TRINETRA 2026</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Twenty chapters — culture, credibility, proof and partnership. Built to be walked through in a
                meeting.
              </p>
              <Link
                to="/partner"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-foreground transition-transform duration-300 hover:translate-x-1"
              >
                Partner with us <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            {navGroups.map((g) => (
              <div key={g.group}>
                <p className="eyebrow border-b border-border pb-3">{g.group}</p>
                <ul className="mt-4 space-y-1">
                  {g.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="group/link block py-2 text-lg font-semibold text-foreground/85 transition-colors hover:text-accent"
                      >
                        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover/link:bg-[length:100%_1px]">
                          {l.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
