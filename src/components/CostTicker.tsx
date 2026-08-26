"use client";

import { useEffect, useRef } from "react";

const START = 459_398_391;
const PER_SECOND = 100_000 / 60;

function formatDollars(n: number) {
  return `$${Math.floor(n).toLocaleString("en-US")}`;
}

export function CostTicker() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = formatDollars(START);
      return;
    }

    const t0 = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      el.textContent = formatDollars(START + ((now - t0) / 1000) * PER_SECOND);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span ref={ref} className="block tabular-nums">
      {formatDollars(START)}
    </span>
  );
}
