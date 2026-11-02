import type { Block, TrackDoc } from "@/content/types";
import { teamImages } from "@/content/live-media";

export function TeamHub({ blocks, tracks }: { blocks: Block[]; tracks: TrackDoc[] }) {
  const intro = blocks.filter((block) => block.type === "p" || block.type === "h1");
  return (
    <div>
      <section className="team-hero">
        <div className="team-panel">
          {intro.map((block, index) =>
            block.type === "h1" ? (
              <h1 key={index}>{block.text}</h1>
            ) : (
              <p key={index}>{block.text}</p>
            ),
          )}
        </div>
      </section>
      <section className="section-pad">
        <ul className="team-grid wrap">
          {tracks.map((track) => (
            <li key={track.slug}>
              <a
                className="team-card"
                href={`/training-track/${track.slug}/`}
                style={{ backgroundImage: `url(${teamImages[track.slug] ?? ""})` }}
              >
                <span>{track.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
