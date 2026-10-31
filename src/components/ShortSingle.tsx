import type { ShortDoc } from "@/content/types";
import { VideoPlaceholder } from "./VideoPlaceholder";

export function ShortSingle({ short }: { short: ShortDoc }) {
  return (
    <article className="short-page">
      <div className="short-row">
        <div className="short-frame">
          <h1 className="chip chip--lg chip--aqua chip--white">{short.title}</h1>
          <p className="chip chip--sm chip--pink chip--ink rot--2">{short.kicker}</p>
        </div>
        <VideoPlaceholder label={`${short.title} short`} imageUrl={short.imageUrl} compact />
      </div>
    </article>
  );
}
