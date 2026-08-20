import { useEffect, useState } from "react";
import { eventEnd, eventStart } from "@/data/event";

type State =
  | { phase: "before"; d: number; h: number; m: number; s: number }
  | { phase: "live" }
  | { phase: "after" };

function compute(): State {
  const now = Date.now();
  if (now >= eventEnd.getTime()) return { phase: "after" };
  const diff = eventStart.getTime() - now;
  if (diff <= 0) return { phase: "live" };
  const s = Math.floor(diff / 1000);
  return {
    phase: "before",
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

export function Countdown({ className }: { className?: string }) {
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    setState(compute());
    const id = setInterval(() => setState(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!state) {
    return <div className={className} aria-hidden="true" style={{ minHeight: 64 }} />;
  }

  if (state.phase !== "before") {
    return (
      <p className={`display text-xl text-gold-gradient sm:text-3xl ${className ?? ""}`}>
        {state.phase === "live" ? "TRINETRA IS LIVE" : "SEE YOU NEXT YEAR"}
      </p>
    );
  }

  const cells = [
    { v: state.d, l: "Days" },
    { v: state.h, l: "Hours" },
    { v: state.m, l: "Min" },
    { v: state.s, l: "Sec" },
  ];

  return (
    <div
      className={`grid grid-cols-4 gap-px overflow-hidden border border-border bg-border ${className ?? ""}`}
      role="timer"
      aria-label="Countdown to TRINETRA 2026"
    >
      {cells.map((c) => (
        <div key={c.l} className="bg-background/70 px-2 py-3 text-center backdrop-blur sm:px-4 sm:py-4">
          <span className="display block text-[clamp(1.25rem,6vw,2.25rem)] leading-none text-gold-gradient tabular-nums">
            {String(c.v).padStart(2, "0")}
          </span>
          <span className="mt-1.5 block text-[8px] font-bold uppercase tracking-[0.24em] text-muted-foreground sm:text-[9px]">
            {c.l}
          </span>
        </div>
      ))}
    </div>
  );
}
