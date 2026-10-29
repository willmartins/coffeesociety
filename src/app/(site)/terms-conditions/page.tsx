import { RichPage } from "@/components/RichPage";
import { pageMeta } from "@/lib/meta";
import { getPage } from "@/sanity/load";

export const metadata = pageMeta(
  "Terms and Conditions - Coffee Society by Lavazza",
  "Terms of Use for coffee-society.co.uk.",
);

export default async function TermsPage() {
  const page = await getPage("terms-conditions", "terms");
  return (
    <main>
      <RichPage title="Terms & conditions" blocks={page.blocks} />
    </main>
  );
}
