export function Marquee({ text, className }: { text: string; className?: string }) {
  const items = Array.from({ length: 6 }, () => text);
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`} aria-label={text}>
      <div className="marquee-track inline-flex" aria-hidden>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="display-serif display-lg px-8">
            {t}
            <span className="mx-8 not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
