import { site } from "@/data/site";

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "YouTube", href: site.youtube },
  { label: "Email", href: `mailto:${site.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-paper/60">
            つづく — TO BE CONTINUED · ALWAYS BUILDING.
          </p>
          <p className="mt-2 text-sm text-paper/70">
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
                className="font-mono text-xs tracking-[0.15em] uppercase text-paper/70 underline-offset-4 transition-colors hover:text-paper hover:underline"
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
