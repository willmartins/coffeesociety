import type { Block, TrackDoc } from "@/content/types";

export function TeamHub({ blocks, tracks }: { blocks: Block[]; tracks: TrackDoc[] }) {
  const intro = blocks.filter((block) => block.type === "p" || block.type === "h1");
  return (
    <section className="mx-auto max-w-[1100px] px-5 py-28">
      {intro.map((block, index) =>
        block.type === "h1" ? (
          <h1 key={index} className="font-[hoss-sharp,sans-serif] text-[42px] uppercase">
            {block.text}
          </h1>
        ) : (
          <p key={index}>{block.text}</p>
        ),
      )}
      <ul className="grid list-none gap-4 p-0 md:grid-cols-2">
        {tracks.map((track) => (
          <li key={track.slug}>
            <a className="pill" href={`/training-track/${track.slug}/`}>
              {track.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
