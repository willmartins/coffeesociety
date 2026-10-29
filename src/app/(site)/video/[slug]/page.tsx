import { notFound } from "next/navigation";
import { VideoSingle } from "@/components/VideoSingle";
import { pageMeta } from "@/lib/meta";
import { getVideos } from "@/sanity/load";

export async function generateStaticParams() {
  const videos = await getVideos();
  return videos.map((video) => ({ slug: video.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const videos = await getVideos();
  const video = videos.find((item) => item.slug === slug);
  return pageMeta(video?.title ?? "Video", video?.excerpt ?? "");
}

export default async function VideoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const videos = await getVideos();
  const video = videos.find((item) => item.slug === slug);
  if (!video) notFound();
  return (
    <main>
      <VideoSingle video={video} />
    </main>
  );
}
