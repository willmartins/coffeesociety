import { ArchiveListing } from "@/components/ArchiveListing";
import { pageMeta } from "@/lib/meta";
import { getTrainers } from "@/sanity/load";

export const metadata = pageMeta(
  "Training Archive - Coffee Society by Lavazza",
  "In-person Lavazza and SCA training courses.",
);

export function generateStaticParams() {
  return [{ page: "2" }];
}

export default async function TrainingArchivePaged() {
  const trainers = await getTrainers();
  return (
    <main>
      <ArchiveListing videoEmpties={2} courseEmpties={2} trainers={trainers} />
    </main>
  );
}
