import Link from "next/link";
import Starfield from "@/components/Starfield";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <Starfield count={80} />
      <div className="relative px-5 text-center">
        <p className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
          SIGNAL LOST · 404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-100">
          This sector is uncharted.
        </h1>
        <p className="mt-4 text-ink-400">
          The page you&apos;re looking for drifted out of orbit.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-mission-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mission-400"
        >
          Return to base
        </Link>
      </div>
    </section>
  );
}
