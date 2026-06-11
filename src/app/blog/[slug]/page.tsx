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
      return <p className="leading-relaxed text-ink-soft">{block.text}</p>;
    case "h2":
      return (
        <h2 className="pt-4 font-display text-3xl uppercase tracking-wide text-ink">
          {block.text}
        </h2>
      );
    case "code":
      return (
        <pre className="overflow-x-auto border-[3px] border-ink bg-ink p-5 font-mono text-[13px] leading-relaxed text-paper">
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
          className="panel mono-img"
        />
      );
    case "quote":
      return (
        <blockquote className="border-l-[3px] border-stamp pl-5 text-lg italic text-ink">
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
    <article className="mx-auto max-w-2xl px-5 pb-24 pt-16 sm:px-8 sm:pt-20">
      <p className="font-mono text-[11px] tracking-[0.3em] text-stamp">
        BROADCAST · {formatDate(post.date).toUpperCase()} · {post.readTime.toUpperCase()}
      </p>
      <h1 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide text-ink sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg italic text-ink-faint">{post.summary}</p>
      <div className="mt-5 h-[3px] w-24 bg-ink" />

      <div className="mt-12 space-y-7">
        {post.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <div className="mt-16 border-t-[3px] border-ink pt-8">
        <Link
          href="/blog/"
          className="font-mono text-xs tracking-[0.15em] uppercase text-ink-faint transition-colors hover:text-ink"
        >
          ← Broadcast log
        </Link>
      </div>
    </article>
  );
}
