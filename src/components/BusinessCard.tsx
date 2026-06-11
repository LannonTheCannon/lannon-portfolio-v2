import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { site } from "@/data/site";

// Character-file ID card — 3D tilt carried over from v1's tilt.js.
export default function BusinessCard() {
  return (
    <TiltCard className="w-[510px] max-w-full">
      <div className="panel relative overflow-hidden bg-paper p-9">
        <div className="pointer-events-none absolute inset-0 halftone" aria-hidden="true" />

        <div className="relative flex items-center justify-between font-mono text-xs tracking-[0.22em] text-ink-faint">
          <span>CHARACTER FILE · 023</span>
          <span className="bg-stamp px-2 py-1 text-paper">CLASSIFIED</span>
        </div>

        <div className="relative mt-7 flex items-center gap-6">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden border-2 border-ink">
            <Image
              src="/images/avatar.png"
              alt="Portrait of Lannon Khau"
              fill
              sizes="96px"
              className="mono-img object-cover"
            />
          </div>
          <div>
            <p className="font-display text-3xl uppercase tracking-wide text-ink">
              Lannon Khau
            </p>
            <p className="mt-1.5 font-mono text-xs tracking-[0.18em] text-ink-faint">
              FULL-STACK AI/ML ENGINEER
            </p>
          </div>
        </div>

        <p className="relative mt-7 border-l-[3px] border-ink pl-4 text-lg italic leading-relaxed text-ink-soft">
          &ldquo;From prototype to production, tell your story.&rdquo;
        </p>

        <div className="relative mt-7 flex flex-col gap-2 border-t-2 border-ink pt-5">
          <span className="font-mono text-xs tracking-[0.22em] text-ink-faint">
            AFFILIATION: PRODUCTION AI
          </span>
          <span className="font-mono text-sm tracking-[0.12em] text-ink">
            {site.email}
          </span>
        </div>
      </div>
    </TiltCard>
  );
}
