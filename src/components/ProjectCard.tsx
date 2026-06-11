import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  episode,
}: {
  project: Project;
  episode: number;
}) {
  return (
    <Link
      href={`/work/${project.slug}/`}
      className="panel group block overflow-hidden bg-paper"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b-[3px] border-ink bg-paper-dim">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="mono-img object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute left-0 top-0 bg-ink px-3 py-1.5 font-display text-sm tracking-wide text-paper">
          EP.{String(episode).padStart(2, "0")}
        </span>
      </div>
      <div className="p-6">
        <p className="font-mono text-[10px] tracking-[0.25em] text-ink-faint">
          {project.sector}
        </p>
        <h3 className="mt-2 font-display text-2xl uppercase tracking-wide text-ink group-hover:text-stamp">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
          {project.tagline}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <li
              key={t}
              className="border border-ink/30 px-2.5 py-0.5 font-mono text-[10px] text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
