import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}/`}
      className="lift group block overflow-hidden rounded-2xl border border-white/8 bg-night-900/60"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-night-800">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <p className="font-mono text-[10px] tracking-[0.25em] text-ink-500">
          {project.id} · SECTOR: {project.sector}
        </p>
        <h3 className="mt-2.5 text-xl font-semibold text-ink-100 transition-colors group-hover:text-mission-200">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-400">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/8 px-2.5 py-0.5 font-mono text-[10px] text-ink-400"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
