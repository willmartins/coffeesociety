import { RichPage } from "@/components/RichPage";
import { pageMeta } from "@/lib/meta";
import { getPage } from "@/sanity/load";

export const metadata = pageMeta(
  "Cookie Policy - Coffee Society by Lavazza",
  "This website uses cookies and similar technologies.",
);

export default async function CookiePolicyPage() {
  const page = await getPage("cookie-policy", "cookies");
  return (
    <main>
      <RichPage title="Cookie Policy" blocks={page.blocks} />
    </main>
  );
}
