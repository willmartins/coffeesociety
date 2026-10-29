import type { ShortDoc } from "@/content/types";
import { VideoPlaceholder } from "./VideoPlaceholder";

export function ShortSingle({ short }: { short: ShortDoc }) {
  return (
    <article className="mx-auto grid max-w-[800px] gap-4 px-5 py-28">
      <h1 className="m-0 font-[hoss-sharp,sans-serif] text-[32px] font-bold leading-[1.1] md:text-[48px]">
        {short.title}
      </h1>
      <p className="m-0 uppercase tracking-[0.08em]">{short.kicker}</p>
      <VideoPlaceholder label={`${short.title} short`} />
    </article>
  );
}
