type SectionHeadingProps = {
  kicker: string;
  jp?: string;
  title: string;
  id?: string;
};

export default function SectionHeading({ kicker, jp, title, id }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-3">
        <p className="font-mono text-[11px] tracking-[0.3em] text-stamp">{kicker}</p>
        {jp && (
          <p className="font-jp text-[11px] tracking-[0.2em] text-ink-faint" aria-hidden="true">
            {jp}
          </p>
        )}
      </div>
      <h2
        id={id}
        className="mt-3 font-display text-4xl uppercase tracking-wide text-ink sm:text-5xl"
      >
        {title}
      </h2>
      <div className="mt-4 h-[3px] w-24 bg-ink" />
    </div>
  );
}
