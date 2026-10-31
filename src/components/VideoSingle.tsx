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
          <VideoPlaceholder label={`${video.title} video`} imageUrl={video.imageUrl} />
        </div>
      </div>
      <div className="video-repeat">
        <h1>{video.title}</h1>
        <p>{video.excerpt}</p>
      </div>
    </article>
  );
}
