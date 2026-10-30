import { notFound } from "next/navigation";
import { ArchiveListing } from "@/components/ArchiveListing";
import { pageMeta } from "@/lib/meta";
import { getCategories, getShorts, getTrainers, getVideos } from "@/sanity/load";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((item) => item.slug === slug);
  return pageMeta(category?.title ?? "Topic", category?.description ?? "");
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [categories, videos, shorts, trainers] = await Promise.all([
    getCategories(),
    getVideos(),
    getShorts(),
    getTrainers(),
  ]);
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const categoryVideos = videos.filter((video) => video.categorySlug === slug);
  return (
    <main>
      <ArchiveListing
        title={category.title}
        description={category.description}
        videos={categoryVideos.map((video) => ({
          title: video.title,
          href: `/video/${video.slug}/`,
          imageUrl: video.imageUrl,
        }))}
        shorts={
          slug === "barista-foundation-course"
            ? shorts.map((short) => ({ title: short.title, href: `/shorts/${short.slug}/`, imageUrl: short.imageUrl }))
            : []
        }
        videoEmpties={1}
        courseEmpties={2}
        trainers={trainers}
      />
    </main>
  );
}
