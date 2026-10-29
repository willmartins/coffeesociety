import type { VideoDoc } from "@/content/types";
import { VideoPlaceholder } from "./VideoPlaceholder";

export function VideoSingle({ video }: { video: VideoDoc }) {
  return (
    <article className="mx-auto grid max-w-[1100px] gap-6 px-5 py-28">
      <VideoPlaceholder label={`${video.title} video`} />
      <h1 className="m-0 font-[hoss-sharp,sans-serif] text-[36px] font-bold uppercase leading-[0.95] md:text-[52px]">
        {video.title}
      </h1>
      <p>{video.excerpt}</p>
      {video.categoryTitle ? (
        <section>
          <h2>{video.categoryTitle}</h2>
          <p>{video.categoryDescription}</p>
        </section>
      ) : null}
      <nav className="flex justify-between gap-4" aria-label="More videos">
        {video.previousSlug ? (
          <a href={`/video/${video.previousSlug}/`}>Previous {video.previousTitle}</a>
        ) : (
          <span />
        )}
        {video.nextSlug ? <a href={`/video/${video.nextSlug}/`}>Next {video.nextTitle}</a> : null}
      </nav>
    </article>
  );
}
