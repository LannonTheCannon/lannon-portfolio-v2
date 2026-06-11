type SectionHeadingProps = {
  kicker: string;
  title: string;
  id?: string;
};

export default function SectionHeading({ kicker, title, id }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-[11px] tracking-[0.3em] text-mission-300">{kicker}</p>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
