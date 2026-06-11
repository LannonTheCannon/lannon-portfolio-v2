"use client";

import { useEffect, useRef, useState } from "react";
import TiltCard from "@/components/TiltCard";

// Front pages keep landing on the pile, each at its own angle. Only the
// top few are ever rendered — the stack is an illusion that never grows.

type Edition = { headline: string; deck: string };

const EDITIONS: Edition[] = [
  {
    headline: "In-house AI replaces service provider — saves $150,000 a month",
    deck: "Check validation pipeline goes live on Azure; vendor contract quietly retired.",
  },
  {
    headline: "1,200 tests can't be wrong: AI now drafts legal demand letters",
    deck: "14 sections stream in live, every citation verified against source PDFs.",
  },
  {
    headline: "40+ document types now file themselves overnight",
    deck: "12-category taxonomy, smart naming, semantic search — zero hands touched.",
  },
  {
    headline: "Settlement checks validate themselves, auditors applaud",
    deck: "OCR meets batch reconciliation; the manual review queue is no more.",
  },
  {
    headline: "Local engineer teaches 150+ students to program Mars rovers",
    deck: "District-wide IoT initiative spans three schools and one cardboard habitat.",
  },
];

const ANGLES = [-4, 3, -2, 5, 1.5];
const VISIBLE = 3; // papers on the pile at any moment
const INTERVAL_MS = 9000;

function Paper({
  edition,
  index,
  isTop,
}: {
  edition: Edition;
  index: number;
  isTop: boolean;
}) {
  return (
    <article className="absolute inset-0 border-[3px] border-ink bg-paper p-7 shadow-[5px_6px_0_0_var(--color-ink)]">
      <div className="pointer-events-none absolute inset-0 halftone" aria-hidden="true" />

      {/* every shipped build gets the stamp */}
      <span
        aria-hidden="true"
        className={`absolute bottom-14 right-6 z-10 -rotate-12 border-4 border-stamp px-3 py-1 font-display text-2xl uppercase tracking-[0.15em] text-stamp ${isTop ? "stamp-slam" : ""}`}
      >
        Shipped
      </span>

      {/* masthead */}
      <div className="relative border-b-[3px] border-ink pb-3 text-center">
        <p className="font-display text-3xl uppercase tracking-wide text-ink">
          The Daily Build
        </p>
        <div className="mt-2 flex items-center justify-between border-t border-ink/40 pt-1.5 font-mono text-[9px] tracking-[0.18em] text-ink-faint">
          <span>VOL. {String(index + 1).padStart(3, "0")}</span>
          <span>SHIPPED DAILY</span>
          <span>FREE</span>
        </div>
      </div>

      {/* headline */}
      <h3 className="relative mt-5 font-display text-[27px] uppercase leading-[1.05] tracking-wide text-ink">
        {edition.headline}
      </h3>
      <p className="relative mt-3 border-l-[3px] border-stamp pl-3 text-sm italic leading-snug text-ink-soft">
        {edition.deck}
      </p>

      {/* greeked columns */}
      <div className="relative mt-5 grid grid-cols-2 gap-4" aria-hidden="true">
        {[0, 1].map((col) => (
          <div key={col} className="space-y-1.5">
            {[92, 100, 96, 88, 100, 70].map((w, i) => (
              <div key={i} className="h-[5px] bg-ink/15" style={{ width: `${w}%` }} />
            ))}
          </div>
        ))}
      </div>

      <p className="relative mt-4 border-t border-ink/40 pt-2 font-mono text-[9px] tracking-[0.2em] text-ink-faint">
        BY L. KHAU · FULL-STACK AI/ML ENGINEER
      </p>
    </article>
  );
}

export default function NewspaperStack() {
  const [top, setTop] = useState(VISIBLE - 1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => setTop((t) => t + 1), INTERVAL_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // bottom-to-top: the VISIBLE most recent editions
  const pile = Array.from({ length: VISIBLE }, (_, i) => top - (VISIBLE - 1) + i);

  return (
    <TiltCard className="h-[480px] w-[510px] max-w-full">
      <div className="relative h-full w-full">
        {pile.map((n) => {
          const edition = EDITIONS[((n % EDITIONS.length) + EDITIONS.length) % EDITIONS.length];
          const angle = ANGLES[((n % ANGLES.length) + ANGLES.length) % ANGLES.length];
          return (
            <div
              key={n}
              className={`absolute inset-0 ${n === top ? "paper-drop" : ""}`}
              style={{ "--paper-angle": `${angle}deg`, rotate: `${angle}deg` } as React.CSSProperties}
            >
              <Paper edition={edition} index={n} isTop={n === top} />
            </div>
          );
        })}
      </div>
    </TiltCard>
  );
}
