import { ArchiveListing } from "@/components/ArchiveListing";
import { pageMeta } from "@/lib/meta";
import { getCategories, getTrainers } from "@/sanity/load";

export const metadata = pageMeta(
  "Video Archive - Coffee Society by Lavazza",
  "Lavazza BLUE Capsule System tutorials and Coffee Society videos.",
);

export function generateStaticParams() {
  return [{ page: "2" }];
}

export default async function VideoArchivePaged() {
  const [categories, trainers] = await Promise.all([getCategories(), getTrainers()]);
  const blue = categories.find((category) => category.slug === "lavazza-blue-system");
  return (
    <main>
      <ArchiveListing
        title={blue?.title}
        description={blue?.description}
        videoEmpties={2}
        courseEmpties={2}
        trainers={trainers}
      />
    </main>
  );
}
