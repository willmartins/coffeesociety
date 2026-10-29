import { notFound } from "next/navigation";
import { ShortSingle } from "@/components/ShortSingle";
import { pageMeta } from "@/lib/meta";
import { getShorts } from "@/sanity/load";

export async function generateStaticParams() {
  const shorts = await getShorts();
  return shorts.map((short) => ({ slug: short.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shorts = await getShorts();
  const short = shorts.find((item) => item.slug === slug);
  return pageMeta(short?.title ?? "Short", short?.title ?? "");
}

export default async function ShortPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shorts = await getShorts();
  const short = shorts.find((item) => item.slug === slug);
  if (!short) notFound();
  return (
    <main>
      <ShortSingle short={short} />
    </main>
  );
}
