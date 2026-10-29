import { ArchiveListing } from "@/components/ArchiveListing";
import { pageMeta } from "@/lib/meta";
import { getCategories, getTrainers } from "@/sanity/load";

export const metadata = pageMeta(
  "Video Shorts Archive - Coffee Society by Lavazza",
  "Welcome to Barista Skills – Foundation, your introduction to the essential principles of great coffee.",
);

export default async function ShortsArchivePage() {
  const [categories, trainers] = await Promise.all([getCategories(), getTrainers()]);
  const foundation = categories.find((category) => category.slug === "barista-foundation-course");
  return (
    <main>
      <ArchiveListing
        title={foundation?.title}
        description={foundation?.description}
        emptyVideos
        emptyCourses
        trainers={trainers}
      />
    </main>
  );
}
