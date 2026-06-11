import Image from "next/image";
import Link from "next/link";
import NewspaperStack from "@/components/NewspaperStack";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Sunburst from "@/components/Sunburst";
import { projects } from "@/data/projects";
import { formatDate, posts } from "@/data/posts";
import { site } from "@/data/site";

const ticker = [
  "PYTHON",
  "TYPESCRIPT",
  "CLAUDE",
  "RAG PIPELINES",
  "AZURE DOCUMENT INTELLIGENCE",
  "AZURE COGNITIVE SEARCH",
  "N8N",
  "FLASK",
  "NEXT.JS",
  "SUPABASE",
  "AWS",
  "GITHUB ACTIONS",
];

export default function Home() {
  return (
    <>
      {/* ---------- TITLE CARD ---------- */}
      <section className="relative overflow-hidden border-b-[3px] border-ink">
        <div className="pointer-events-none absolute inset-0 halftone" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p
              className="hero-rise font-mono text-[11px] tracking-[0.3em] text-ink-faint"
              style={{ "--rise-delay": "0ms" } as React.CSSProperties}
            >
              FULL-STACK AI/ML ENGINEER
            </p>

            <h1
              className="hero-rise mt-8 font-display text-[clamp(2.5rem,5vw,4.75rem)] uppercase leading-[0.95] tracking-wide text-ink"
              style={{ "--rise-delay": "120ms" } as React.CSSProperties}
            >
              <span className="whitespace-nowrap">From prototype</span>
              <br />
              <span className="whitespace-nowrap">to production,</span>
              <br />
              <span className="whitespace-nowrap text-stamp">tell your story.</span>
            </h1>

            <p
              className="hero-rise mt-8 max-w-lg text-lg leading-relaxed text-ink-soft"
              style={{ "--rise-delay": "240ms" } as React.CSSProperties}
            >
              I build AI-powered systems that turn raw data into insight, clarity,
              and production-grade tools — used daily by real professionals.
            </p>

            <div
              className="hero-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ "--rise-delay": "360ms" } as React.CSSProperties}
            >
              <Link
                href="/#work"
                className="panel bg-ink px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase text-paper"
              >
                View episodes
              </Link>
              <Link
                href="/about/"
                className="panel bg-paper px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase text-ink"
              >
                Character file
              </Link>
            </div>
          </div>

          {/* the morning editions keep landing */}
          <div
            className="hero-rise relative hidden items-center justify-center lg:flex"
            style={{ "--rise-delay": "300ms" } as React.CSSProperties}
          >
            <NewspaperStack />
          </div>
        </div>
      </section>

      {/* ---------- TICKER ---------- */}
      <div className="marquee border-b-[3px] border-ink bg-ink py-2.5" aria-hidden="true">
        {[0, 1].map((dup) => (
          <div key={dup} className="marquee-track">
            {ticker.map((t) => (
              <span
                key={`${dup}-${t}`}
                className="px-6 font-mono text-[11px] tracking-[0.25em] text-paper/80"
              >
                {t} <span className="ml-6 text-stamp">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* ---------- EPISODES ---------- */}
      <section className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8" id="work">
        <Reveal>
          <SectionHeading kicker="SELECTED WORK" jp="エピソード" title="The episodes." />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}>
              <ProjectCard project={p} episode={i + 1} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CHARACTER FILE ---------- */}
      <section className="relative overflow-hidden border-y-[3px] border-ink bg-paper-dim">
        <div className="pointer-events-none absolute inset-0 halftone-coarse" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <Reveal>
            <div className="panel relative mx-auto h-56 w-56 overflow-hidden lg:h-64 lg:w-64">
              <Image
                src="/images/avatar.png"
                alt="Portrait of Lannon Khau"
                fill
                sizes="256px"
                className="mono-img object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-[11px] tracking-[0.3em] text-stamp">
              CHARACTER FILE <span className="font-jp ml-2 text-ink-faint" aria-hidden="true">キャラクター</span>
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-wide text-ink">
              Engineer. Builder. Explorer.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">
              I&apos;m Lannon Khau, a full-stack AI engineer specializing in Python,
              cloud infrastructure, and AI-powered workflows. Most recently at Sweet
              James, I engineered end-to-end AI systems — Azure Document Intelligence,
              OCR pipelines, n8n automation, and conversational RAG — deployed to
              production and used daily by legal professionals.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Before that: a B.S. in Information Systems from Cal State Fullerton, and
              150+ students taught to program IoT devices through a district-wide
              initiative.
            </p>
            <Link
              href="/about/"
              className="mt-7 inline-block border-b-2 border-ink pb-0.5 font-mono text-xs tracking-[0.15em] uppercase text-ink transition-colors hover:border-stamp hover:text-stamp"
            >
              Open the full file →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- BROADCAST LOG ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeading kicker="WRITING" jp="放送ログ" title="Broadcast log." />
        </Reveal>
        <ul>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <li className="border-b-2 border-ink first:border-t-2">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="font-display text-xl uppercase tracking-wide text-ink transition-colors group-hover:text-stamp">
                    {post.title}
                  </span>
                  <span className="font-mono text-xs text-ink-faint">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- NEXT EPISODE ---------- */}
      <section
        className="relative scroll-mt-20 overflow-hidden border-t-[3px] border-ink bg-ink text-paper"
        id="contact"
      >
        <div className="pointer-events-none absolute inset-0 halftone-inverse" aria-hidden="true" />
        <Sunburst className="pointer-events-none absolute -right-72 top-1/2 hidden h-[820px] w-[820px] -translate-y-1/2 text-paper/[0.06] lg:block" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] text-paper/60">
              NEXT EPISODE <span className="font-jp ml-2" aria-hidden="true">次回予告</span>
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.95] tracking-wide sm:text-6xl">
              Your team ships
              <br />
              <span className="text-stamp">real AI.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-paper/80">
              I&apos;m open to full-time AI/ML engineering roles and interesting
              production-AI problems. If you&apos;re building something real,
              I&apos;d love to hear about it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="border-2 border-paper bg-paper px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase text-ink transition-colors hover:bg-stamp hover:border-stamp hover:text-paper"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-paper/50 px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase text-paper transition-colors hover:border-paper"
              >
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-paper/50 px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase text-paper transition-colors hover:border-paper"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
