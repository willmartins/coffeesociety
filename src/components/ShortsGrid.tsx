import type { ShortDoc } from "@/content/types";

export function ShortsGrid({
  heading,
  kicker,
  shorts,
}: {
  heading: string;
  kicker: string;
  shorts: ShortDoc[];
}) {
  return (
    <section className="shorts-band">
      <div className="wrap">
        <h2 className="display">
          {heading}
          <br />
          {kicker}
        </h2>
        <ul className="shorts-grid">
          {shorts.map((short) => (
            <li key={short.slug}>
              <a
                href={`/shorts/${short.slug}/`}
                className="short-card coffee-bg-treated"
                style={{ backgroundImage: `url(${short.imageUrl})` }}
              >
                <span className="chip chip--md chip--olive chip--cream rot-2 filter-avoid">{short.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
