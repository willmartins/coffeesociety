import { RichPage } from "@/components/RichPage";
import { pageMeta } from "@/lib/meta";
import { getPage } from "@/sanity/load";

export const metadata = pageMeta(
  "Lavazza Barista Challenge UK - 2027 - Coffee Society by Lavazza",
  "The Lavazza Barista Challenge UK is back and bigger than ever.",
);

export default async function ChallengePage() {
  const page = await getPage("lavazza-barista-challenge-uk-2027", "challenge");
  return (
    <main>
      <RichPage title="CALLING ALL UK BARISTAS" blocks={page.blocks} />
    </main>
  );
}
