import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* episode title card */}
      <header className="relative overflow-hidden border-b-[3px] border-ink bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0 halftone-inverse" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-16 sm:px-8 sm:pt-20">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] text-paper/60">
              EPISODE {String(index + 1).padStart(2, "0")} · {project.sector}
            </p>
            <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg italic text-paper/80">
              {project.tagline}
            </p>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="panel relative mt-12 aspect-[16/9] overflow-hidden bg-paper-dim">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 896px) 832px, 100vw"
              className="mono-img object-cover"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <Reveal>
              <section>
                <h2 className="font-mono text-[11px] tracking-[0.3em] text-stamp">
                  THE PROBLEM
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">{project.problem}</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-mono text-[11px] tracking-[0.3em] text-stamp">
                  THE BUILD
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.build.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-ink-soft">
                      <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 bg-ink" />
                      {b}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-mono text-[11px] tracking-[0.3em] text-stamp">
                  THE IMPACT
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">{project.impact}</p>
              </section>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <aside className="panel h-fit bg-paper p-6 md:sticky md:top-24">
              <h2 className="font-mono text-[11px] tracking-[0.25em] text-ink-faint">
                SYSTEMS &amp; TOOLS
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <li
                    key={t}
                    className="border border-ink/30 px-3 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${site.email}?subject=Re: ${project.title}`}
                className="mt-6 block bg-ink px-5 py-2.5 text-center font-mono text-xs tracking-[0.15em] uppercase text-paper transition-colors hover:bg-stamp"
              >
                Ask me about this build
              </a>
            </aside>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 flex items-center justify-between border-t-[3px] border-ink pt-8">
            <Link
              href="/#work"
              className="font-mono text-xs tracking-[0.15em] uppercase text-ink-faint transition-colors hover:text-ink"
            >
              ← All episodes
            </Link>
            <Link
              href={`/work/${next.slug}/`}
              className="font-mono text-xs tracking-[0.15em] uppercase text-stamp transition-colors hover:text-ink"
            >
              Next episode: {next.title} →
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
