import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { formatDate, posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Broadcast log from Lannon Khau — building AI systems, teaching robotics, and shipping to production.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-24 pt-16 sm:px-8 sm:pt-20">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.3em] text-stamp">
          BROADCAST LOG{" "}
          <span className="font-jp ml-2 text-ink-faint" aria-hidden="true">
            放送ログ
          </span>
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase tracking-wide text-ink sm:text-6xl">
          Field notes.
        </h1>
        <div className="mt-5 h-[3px] w-24 bg-ink" />
      </Reveal>

      <div className="mt-14 space-y-8">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 60}>
            <Link
              href={`/blog/${post.slug}/`}
              className="panel group flex flex-col gap-5 bg-paper p-5 sm:flex-row sm:items-center"
            >
              <div className="relative h-36 w-full shrink-0 overflow-hidden border-2 border-ink bg-paper-dim sm:h-28 sm:w-44">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  sizes="(min-width: 640px) 176px, 100vw"
                  className="mono-img object-cover"
                />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-ink-faint">
                  {formatDate(post.date).toUpperCase()} · {post.readTime.toUpperCase()}
                </p>
                <h2 className="mt-2 font-display text-2xl uppercase tracking-wide text-ink transition-colors group-hover:text-stamp">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {post.summary}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
