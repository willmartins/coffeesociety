import { ArchiveListing } from "@/components/ArchiveListing";
import { pageMeta } from "@/lib/meta";
import { getTrainers } from "@/sanity/load";

export const metadata = pageMeta(
  "Courses Archive - Coffee Society by Lavazza",
  "Lavazza team courses.",
);

export default async function TeamCoursesArchivePage() {
  const trainers = await getTrainers();
  return (
    <main>
      <ArchiveListing videoEmpties={2} courseEmpties={2} trainers={trainers} />
    </main>
  );
}
