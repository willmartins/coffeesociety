import type { VideoDoc } from "@/content/types";
import { VideoPlaceholder } from "./VideoPlaceholder";

export function VideoSingle({ video }: { video: VideoDoc }) {
  return (
    <article className="video-page">
      <div className="video-top">
        <div className="video-player-wrap">
          <VideoPlaceholder
            label={`${video.title} video`}
            imageUrl={`/assets/placeholders/video-${video.slug}.jpg`}
          />
        </div>
        <div className="video-copy">
          <h1>{video.title}</h1>
          <p>{video.excerpt}</p>
        </div>
      </div>
      <section className="video-more">
        {video.categoryTitle ? <h2 className="mid">{video.categoryTitle}</h2> : null}
        {video.categoryDescription ? <p>{video.categoryDescription}</p> : null}
        <div className="video-links">
          {video.previousSlug ? (
            <a href={`/video/${video.previousSlug}/`}>{video.previousTitle}</a>
          ) : (
            <span />
          )}
          {video.nextSlug ? <a href={`/video/${video.nextSlug}/`}>{video.nextTitle}</a> : null}
        </div>
      </section>
    </article>
  );
}
