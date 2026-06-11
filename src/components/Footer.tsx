import { site } from "@/data/site";

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "YouTube", href: site.youtube },
  { label: "Email", href: `mailto:${site.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-ink-500">
            ALWAYS BUILDING.
          </p>
          <p className="mt-2 text-sm text-ink-400">
            © {new Date().getFullYear()} Lannon Khau
          </p>
        </div>
        <ul className="flex flex-wrap gap-5">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm text-ink-400 transition-colors hover:text-mission-300"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
