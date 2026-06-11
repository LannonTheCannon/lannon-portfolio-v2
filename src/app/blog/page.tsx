import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { formatDate, posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes from Lannon Khau — building AI systems, teaching robotics, and shipping to production.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-24 pt-36 sm:px-8">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
          FIELD NOTES
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-100 sm:text-5xl">
          Writing from the build log.
        </h1>
      </Reveal>

      <div className="mt-14 space-y-6">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80}>
            <Link
              href={`/blog/${post.slug}/`}
              className="lift group flex flex-col gap-5 rounded-2xl border border-white/8 bg-night-900/60 p-5 sm:flex-row sm:items-center"
            >
              <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-xl bg-night-800 sm:h-28 sm:w-44">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  sizes="(min-width: 640px) 176px, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-ink-500">
                  {formatDate(post.date).toUpperCase()} · {post.readTime.toUpperCase()}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-ink-100 transition-colors group-hover:text-mission-200">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
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
