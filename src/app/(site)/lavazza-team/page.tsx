import { TeamHub } from "@/components/TeamHub";
import { pageMeta } from "@/lib/meta";
import { getPage, getTracks } from "@/sanity/load";

export const metadata = pageMeta(
  "Lavazza Team - Coffee Society by Lavazza",
  "Welcome to your Lavazza Learning Hub!",
);

export default async function LavazzaTeamPage() {
  const [page, tracks] = await Promise.all([getPage("lavazza-team", "team"), getTracks()]);
  return (
    <main>
      <TeamHub blocks={page.blocks} tracks={tracks} />
    </main>
  );
}
