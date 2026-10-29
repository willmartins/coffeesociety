import { notFound } from "next/navigation";
import { ArchiveListing } from "@/components/ArchiveListing";
import { pageMeta } from "@/lib/meta";
import { getTracks, getTrainers } from "@/sanity/load";

export async function generateStaticParams() {
  const tracks = await getTracks();
  return tracks.map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tracks = await getTracks();
  const track = tracks.find((item) => item.slug === slug);
  return pageMeta(track?.title ?? "Team", track?.description ?? "");
}

export default async function TeamTrackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [tracks, trainers] = await Promise.all([getTracks(), getTrainers()]);
  const track = tracks.find((item) => item.slug === slug);
  if (!track) notFound();
  return (
    <main>
      <ArchiveListing
        title={track.title}
        description={track.description}
        emptyVideos
        emptyCourses
        trainers={trainers}
      />
    </main>
  );
}
