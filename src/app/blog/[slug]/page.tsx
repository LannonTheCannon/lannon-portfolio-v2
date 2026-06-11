import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts, type PostBlock } from "@/data/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, images: [post.cover] },
  };
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "p":
      return <p className="leading-relaxed text-ink-300">{block.text}</p>;
    case "h2":
      return (
        <h2 className="pt-4 text-2xl font-semibold tracking-tight text-ink-100">
          {block.text}
        </h2>
      );
    case "code":
      return (
        <pre className="overflow-x-auto rounded-xl border border-white/8 bg-night-900 p-5 font-mono text-[13px] leading-relaxed text-mission-200">
          <code>{block.code}</code>
        </pre>
      );
    case "img":
      return (
        <Image
          src={block.src}
          alt={block.alt}
          width={1000}
          height={620}
          className="rounded-xl border border-white/8"
        />
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-mission-400 pl-5 font-serif text-lg italic text-ink-100">
          {block.text}
        </blockquote>
      );
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 pb-24 pt-36 sm:px-8">
      <p className="font-mono text-[11px] tracking-[0.3em] text-mission-300">
        FIELD NOTE · {formatDate(post.date).toUpperCase()} · {post.readTime.toUpperCase()}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-4 font-serif text-lg italic text-ink-400">{post.summary}</p>

      <div className="mt-12 space-y-7">
        {post.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <div className="mt-16 border-t border-white/5 pt-8">
        <Link
          href="/blog/"
          className="text-sm text-ink-400 transition-colors hover:text-ink-100"
        >
          ← All field notes
        </Link>
      </div>
    </article>
  );
}
