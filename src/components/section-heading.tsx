type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f5b24]">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-[#2f1a08] md:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-[#6d5335]">{description}</p> : null}
    </div>
  );
}
