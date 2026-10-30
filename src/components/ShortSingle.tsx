import type { ShortDoc } from "@/content/types";
import { VideoPlaceholder } from "./VideoPlaceholder";

export function ShortSingle({ short }: { short: ShortDoc }) {
  return (
    <article className="short-page">
      <div className="short-frame">
        <h1 className="chip chip--lg chip--aqua chip--ink">{short.title}</h1>
        <p className="chip chip--sm chip--pink chip--ink rot--2">{short.kicker}</p>
        <VideoPlaceholder label={`${short.title} short`} />
      </div>
    </article>
  );
}
