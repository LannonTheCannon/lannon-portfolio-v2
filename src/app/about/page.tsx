import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Starfield from "@/components/Starfield";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lannon Khau — full-stack AI engineer building production systems that think, learn, and adapt.",
};

const timeline = [
  {
    period: "Sweet James — AI Engineer",
    body: "Engineered end-to-end AI legal tech: Azure Document Intelligence pipelines, OCR check validation, RAG-powered demand letter generation with citation verification, document classification across 40+ types, and n8n workflow automation — all deployed to production and used daily by legal professionals.",
  },
  {
    period: "Scale AI — LLM Evaluation",
    body: "Evaluated large language models — building the judgment for what good AI output actually looks like, which now informs how I design and test production AI systems.",
  },
  {
    period: "Creative Core / Anaheim School District — Instructor",
    body: "Taught 150+ students to program IoT devices through a district-wide initiative — Raspberry Pi, Arduino, autonomous rovers, and a Mars Habitat build spanning three schools. Built a custom gamified LMS to run it.",
  },
  {
    period: "Cal State Fullerton — B.S. Information Systems",
    body: "Where the foundation was laid: systems thinking, data, and the habit of building things that ship.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Starfield count={70} />
        <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-36 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
              {site.callsign}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-100 sm:text-5xl">
              Engineer. Builder.{" "}
              <em className="font-serif font-normal text-mission-200">Explorer.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <Reveal>
            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/avatar.png"
                alt="Portrait of Lannon Khau"
                fill
                sizes="192px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4 leading-relaxed text-ink-300">
              <p>
                I&apos;m a full-stack AI engineer who builds systems that think, learn,
                and adapt. My name is Lannon, and I specialize in Python, cloud
                infrastructure, and production AI systems. From evaluating large
                language models to architecting document intelligence pipelines on
                Azure, I build tools that turn complex data into clear, actionable
                insight.
              </p>
              <p>
                Most recently I engineered AI-powered legal tech at Sweet James,
                designing end-to-end systems spanning OCR, RAG, and workflow
                automation. My stack spans Flask, AWS, Azure, Supabase, and n8n. I
                architect document intelligence pipelines, build RAG-powered demand
                letter generators, and design citation verification systems — all
                shipped to production and used daily by legal professionals.
              </p>
              <p className="font-serif italic text-ink-100">
                &ldquo;Building with intention, curiosity, and a quiet fire to explore
                the unknown.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="mt-20 font-mono text-[11px] tracking-[0.3em] text-mission-300">
            FROM PROJECTS TO PRODUCTION
          </h2>
        </Reveal>
        <ol className="mt-8 space-y-0 border-l border-white/10">
          {timeline.map((t, i) => (
            <Reveal key={t.period} delay={i * 80}>
              <li className="relative pb-10 pl-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-night-950 bg-mission-400"
                />
                <h3 className="font-medium text-ink-100">{t.period}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-400">
                  {t.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-12 rounded-2xl border border-white/8 bg-night-900/60 p-7">
            <p className="font-mono text-[10px] tracking-[0.25em] text-ink-500">
              RE: THE CALLSIGN
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              &ldquo;Mission Blue Scorpion&rdquo; came from my zodiac sign. Someone told
              me I was a water Scorpio or something, and I thought that sounded cool.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="rounded-full bg-mission-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mission-400"
            >
              See the work
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-ink-300 transition-colors hover:border-white/25 hover:text-ink-100"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
