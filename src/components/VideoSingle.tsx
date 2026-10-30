import type { VideoDoc } from "@/content/types";
import { VideoPlaceholder } from "./VideoPlaceholder";

export function VideoSingle({ video }: { video: VideoDoc }) {
  return (
    <article className="video-page">
      <div className="video-top">
        <div className="video-copy">
          <h1>{video.title}</h1>
          <p>{video.excerpt}</p>
        </div>
        <div className="video-player-wrap">
          <VideoPlaceholder label={`${video.title} video`} />
        </div>
      </div>
      <div className="video-repeat">
        <h1>{video.title}</h1>
        <p>{video.excerpt}</p>
        {video.categoryTitle ? (
          <section>
            <h2 className="mid">{video.categoryTitle}</h2>
            <p>{video.categoryDescription}</p>
          </section>
        ) : null}
      </div>
      <nav className="video-more" aria-label="More videos">
        {video.previousSlug ? (
          <a href={`/video/${video.previousSlug}/`}>Previous {video.previousTitle}</a>
        ) : null}
        {video.nextSlug ? <a href={`/video/${video.nextSlug}/`}>Next {video.nextTitle}</a> : null}
      </nav>
    </article>
  );
}
