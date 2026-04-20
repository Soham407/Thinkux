export function BrandHeading({
  name,
  tagline,
}: {
  name: string;
  tagline?: string;
}) {
  return (
    <div className="flex items-baseline gap-4 flex-wrap">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[color:var(--foreground)]">
        {name}
      </h1>
      {tagline ? (
        <p className="text-base md:text-lg text-[color:var(--foreground)]/70">
          {tagline}
        </p>
      ) : null}
    </div>
  );
}
