import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import Constellation from "@/components/Constellation";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Starfield from "@/components/Starfield";
import { projects } from "@/data/projects";
import { formatDate, posts } from "@/data/posts";
import { site } from "@/data/site";

const stack = [
  { group: "Languages", items: ["Python", "TypeScript", "SQL"] },
  {
    group: "AI / ML",
    items: [
      "Claude",
      "RAG pipelines",
      "Azure Document Intelligence",
      "Azure Cognitive Search",
      "Prompt engineering",
      "Citation verification",
    ],
  },
  {
    group: "Cloud & Infra",
    items: ["Azure", "AWS", "Supabase", "Azure Entra ID", "GitHub Actions"],
  },
  {
    group: "Frameworks & Tools",
    items: ["Next.js", "Flask", "n8n", "Streamlit", "Plotly"],
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <Starfield />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-mission-500/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pb-32 lg:pt-44">
          <div>
            <p
              className="hero-rise font-mono text-[11px] tracking-[0.3em] text-mission-300"
              style={{ "--rise-delay": "0ms" } as React.CSSProperties}
            >
              FULL-STACK AI/ML ENGINEER
            </p>
            <h1
              className="hero-rise mt-6 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl"
              style={{ "--rise-delay": "120ms" } as React.CSSProperties}
            >
              From prototype to production,{" "}
              <em className="font-serif font-normal text-mission-200">
                tell your story.
              </em>
            </h1>
            <p
              className="hero-rise mt-6 max-w-lg text-lg leading-relaxed text-ink-300"
              style={{ "--rise-delay": "240ms" } as React.CSSProperties}
            >
              I build AI-powered systems that turn raw data into insight, clarity, and
              production-grade tools — document intelligence pipelines, RAG agents, and
              workflows used daily by real professionals.
            </p>
            <div
              className="hero-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ "--rise-delay": "360ms" } as React.CSSProperties}
            >
              <Link
                href="/#work"
                className="rounded-full bg-mission-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mission-400"
              >
                Explore the work
              </Link>
              <Link
                href="/about/"
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-ink-300 transition-colors hover:border-white/25 hover:text-ink-100"
              >
                About me
              </Link>
            </div>
          </div>
          <div className="hidden flex-col items-center gap-5 lg:flex">
            <Constellation className="h-[400px] w-auto" />
            <p className="hero-rise font-mono text-[10px] tracking-[0.25em] text-ink-500" style={{ "--rise-delay": "600ms" } as React.CSSProperties}>
              SCORPIUS · CHARTED FROM J2000 COORDINATES
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SELECTED WORK ---------- */}
      <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8" id="work">
        <Reveal>
          <SectionHeading kicker="SELECTED WORK" title="Production AI, shipped." />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- ABOUT TEASER ---------- */}
      <section className="border-y border-white/5 bg-night-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <Reveal>
            <div className="flex justify-center">
              <BusinessCard />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
              ENGINEER. BUILDER. EXPLORER.
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-100">
              Systems that think, learn, and ship.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink-300">
              I&apos;m Lannon Khau, a full-stack AI engineer specializing in Python,
              cloud infrastructure, and AI-powered workflows. Most recently at Sweet
              James, I engineered end-to-end AI systems — Azure Document Intelligence,
              OCR pipelines, n8n automation, and conversational RAG — deployed to
              production and used daily by legal professionals.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-300">
              Before that: a B.S. in Information Systems from Cal State Fullerton, and
              150+ students taught to program IoT devices through a district-wide
              initiative.
            </p>
            <Link
              href="/about/"
              className="mt-6 inline-block text-sm text-mission-300 transition-colors hover:text-mission-200"
            >
              Read the full story →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- STACK ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeading kicker="STACK" title="Tools I ship with." />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((g, i) => (
            <Reveal key={g.group} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/8 bg-night-900/60 p-6">
                <h3 className="font-mono text-[11px] tracking-[0.25em] text-ink-500">
                  {g.group.toUpperCase()}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-ink-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WRITING ---------- */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <SectionHeading kicker="WRITING" title="Field notes." />
          </Reveal>
          <ul className="divide-y divide-white/5">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <li>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="text-lg text-ink-100 transition-colors group-hover:text-mission-200">
                      {post.title}
                    </span>
                    <span className="font-mono text-xs text-ink-500">
                      {formatDate(post.date)} · {post.readTime}
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section
        className="relative scroll-mt-24 overflow-hidden border-t border-white/5"
        id="contact"
      >
        <Starfield count={60} />
        <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
              SECTOR: OUTREACH
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-100">
              Let&apos;s connect.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-300">
              I&apos;m open to full-time AI/ML engineering roles and interesting
              production-AI problems. If you&apos;re building something real, I&apos;d
              love to hear about it.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-mission-500 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-mission-400"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-7 py-3 text-sm text-ink-300 transition-colors hover:border-white/25 hover:text-ink-100"
              >
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-7 py-3 text-sm text-ink-300 transition-colors hover:border-white/25 hover:text-ink-100"
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
