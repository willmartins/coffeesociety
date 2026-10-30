export function HeroBanner({ title, badgeUrl }: { title: string; badgeUrl: string }) {
  return (
    <section className="pattern-overlay pattern-slash pattern-slash--home hero">
      <div className="hero-row">
        <h1>{title}</h1>
        {/* next/image does not render this SVG badge cleanly. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={badgeUrl} alt="" className="hero-badge" />
      </div>
    </section>
  );
}
