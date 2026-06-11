import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
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
      <section className="relative overflow-hidden border-b-[3px] border-ink">
        <div className="pointer-events-none absolute inset-0 halftone" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-16 sm:px-8 sm:pt-20">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] text-stamp">
              CHARACTER FILE · 023{" "}
              <span className="font-jp ml-2 text-ink-faint" aria-hidden="true">
                キャラクター
              </span>
            </p>
            <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-7xl">
              Engineer. Builder.
              <br />
              <span className="text-stamp">Explorer.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <Reveal>
            <div className="panel relative mx-auto h-48 w-48 overflow-hidden">
              <Image
                src="/images/avatar.png"
                alt="Portrait of Lannon Khau"
                fill
                sizes="192px"
                className="mono-img object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4 leading-relaxed text-ink-soft">
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
              <p className="border-l-[3px] border-stamp pl-4 italic text-ink">
                &ldquo;Building with intention, curiosity, and a quiet fire to explore
                the unknown.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="mt-20 font-mono text-[11px] tracking-[0.3em] text-stamp">
            FROM PROJECTS TO PRODUCTION{" "}
            <span className="font-jp ml-2 text-ink-faint" aria-hidden="true">
              経歴
            </span>
          </h2>
        </Reveal>
        <ol className="mt-8 border-l-[3px] border-ink">
          {timeline.map((t, i) => (
            <Reveal key={t.period} delay={i * 60}>
              <li className="relative pb-10 pl-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-[7.5px] top-1.5 h-3 w-3 bg-ink"
                />
                <h3 className="font-display text-lg uppercase tracking-wide text-ink">
                  {t.period}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  {t.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="panel bg-ink px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase text-paper"
            >
              View episodes
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="panel bg-paper px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase text-ink"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
