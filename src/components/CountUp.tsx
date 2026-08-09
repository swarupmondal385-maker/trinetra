import { useEffect, useRef, useState } from "react";

/** Parses a display value like "1.5 Lakh+" / "5,000+" / "2M+" and counts the numeric part up once. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value.replace(/[\d.,]+/, "0"));
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;
    const match = value.match(/[\d.,]+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const raw = match[0];
    const target = parseFloat(raw.replace(/,/g, ""));
    const decimals = raw.includes(".") ? (raw.split(".")[1] ?? "").length : 0;
    const grouped = raw.includes(",");

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      done.current = true;
      return;
    }

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      const out = grouped ? Number(fixed).toLocaleString("en-IN") : fixed;
      return value.replace(raw, out);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || done.current) return;
        done.current = true;
        io.disconnect();
        const duration = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(format(target * eased));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
