import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { site } from "@/data/site";

// The futuristic business card, carried over from v1 (BUSINESS-CARD-023).
export default function BusinessCard() {
  return (
    <TiltCard className="w-[340px] max-w-full rounded-2xl">
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-night-700/80 via-night-800/90 to-night-900 p-6 shadow-[0_20px_60px_-20px_rgb(59_108_246/0.35)]">
        {/* corner metadata */}
        <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.22em] text-ink-500">
          <span>BUSINESS-CARD-023</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-mission-400 shadow-[0_0_8px_2px_rgb(94_139_255/0.6)]" />
        </div>

        <div className="mt-5 flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/20">
            <Image
              src="/images/avatar.png"
              alt="Portrait of Lannon Khau"
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-ink-100">
              Lannon Khau
            </p>
            <p className="mt-0.5 font-mono text-[10px] tracking-[0.18em] text-mission-300">
              FULL-STACK AI/ML ENGINEER
            </p>
          </div>
        </div>

        <p className="mt-5 font-serif text-sm italic leading-relaxed text-ink-300">
          &ldquo;From prototype to production, tell your story.&rdquo;
        </p>

        <div className="mt-5 flex flex-col gap-1.5 border-t border-white/10 pt-4">
          <span className="font-mono text-[9px] tracking-[0.22em] text-ink-500">
            SECTOR: PRODUCTION AI
          </span>
          <span className="font-mono text-[10px] tracking-[0.12em] text-ink-400">
            {site.email}
          </span>
        </div>
      </div>
    </TiltCard>
  );
}
