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
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-36 sm:px-8">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
          {project.id} · SECTOR: {project.sector}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-100 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-xl italic text-ink-300">
          {project.tagline}
        </p>
      </Reveal>

      <Reveal>
        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-white/8 bg-night-800">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 896px) 832px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <Reveal>
            <section>
              <h2 className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
                THE PROBLEM
              </h2>
              <p className="mt-4 leading-relaxed text-ink-300">{project.problem}</p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
                THE BUILD
              </h2>
              <ul className="mt-4 space-y-3">
                {project.build.map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed text-ink-300">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mission-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
                THE IMPACT
              </h2>
              <p className="mt-4 leading-relaxed text-ink-300">{project.impact}</p>
            </section>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <aside className="h-fit rounded-2xl border border-white/8 bg-night-900/60 p-6 md:sticky md:top-24">
            <h2 className="font-mono text-[11px] tracking-[0.25em] text-ink-500">
              SYSTEMS &amp; TOOLS
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-ink-300"
                >
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}?subject=Re: ${project.title}`}
              className="mt-6 block rounded-full bg-mission-500 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-mission-400"
            >
              Ask me about this build
            </a>
          </aside>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-20 flex items-center justify-between border-t border-white/5 pt-8">
          <Link
            href="/#work"
            className="text-sm text-ink-400 transition-colors hover:text-ink-100"
          >
            ← All work
          </Link>
          <Link
            href={`/work/${next.slug}/`}
            className="text-sm text-mission-300 transition-colors hover:text-mission-200"
          >
            Next: {next.title} →
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
