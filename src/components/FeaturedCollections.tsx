export function FeaturedCollections({
  title,
  collections,
}: {
  title: string;
  collections: { label: string; href: string; imageUrl: string }[];
}) {
  const chips = ["chip chip--lg chip--navy chip--hot rot-2", "chip chip--lg chip--beige chip--hot rot--3"];
  return (
    <section className="pattern-overlay pattern-spoonbackground featured">
      <div className="wrap">
        <h2 className="display">
          {title.includes(" ") ? (
            <>
              {title.split(" ")[0]}
              <br />
              {title.split(" ").slice(1).join(" ")}
            </>
          ) : (
            title
          )}
        </h2>
        <div className="feature-grid">
          {collections.map((card, index) => (
            <a
              key={card.href}
              href={card.href}
              className={`feature-card coffee-bg-treated ${index === 0 ? "feature-card--centre" : "feature-card--start"}`}
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <span className={`${chips[index] ?? chips[0]} filter-avoid`}>{card.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
