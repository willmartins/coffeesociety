import { PortalHub } from "@/components/PortalHub";
import { pageMeta } from "@/lib/meta";
import { getVideos } from "@/sanity/load";

export const metadata = pageMeta(
  "Portal - Coffee Society by Lavazza",
  "Your home for all things coffee training and Lavazza.",
);

export default async function PortalPage() {
  const videos = await getVideos();
  return (
    <main>
      <PortalHub videos={videos} />
    </main>
  );
}
