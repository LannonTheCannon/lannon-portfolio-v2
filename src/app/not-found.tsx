import Link from "next/link";
import Sunburst from "@/components/Sunburst";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 halftone" aria-hidden="true" />
      <Sunburst className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 text-ink/[0.06]" />
      <div className="relative px-5 text-center">
        <p className="font-mono text-[11px] tracking-[0.3em] text-stamp">
          SIGNAL LOST · 404
        </p>
        <h1 className="mt-4 font-display text-6xl uppercase tracking-wide text-ink">
          Lost episode.
        </h1>
        <p className="mt-4 text-ink-soft">
          The page you&apos;re looking for never aired.
        </p>
        <Link
          href="/"
          className="panel mt-8 inline-block bg-ink px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase text-paper"
        >
          Back to broadcast
        </Link>
      </div>
    </section>
  );
}
