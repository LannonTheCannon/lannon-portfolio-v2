"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center bg-ink font-display text-sm text-paper transition-colors group-hover:bg-stamp">
            LK
          </span>
          <span className="font-mono text-xs tracking-[0.2em] text-ink">
            LANNON KHAU
          </span>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="border-2 border-ink bg-ink px-4 py-1.5 font-mono text-xs tracking-[0.15em] text-paper uppercase transition-colors hover:bg-stamp hover:border-stamp"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border-2 border-ink text-ink sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.5" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2.5" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t-[3px] border-ink bg-paper px-5 pb-6 pt-2 sm:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block border-b border-ink/15 px-1 py-3 font-mono text-sm tracking-[0.15em] uppercase text-ink"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 block bg-ink px-3 py-3 text-center font-mono text-sm tracking-[0.15em] uppercase text-paper"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
