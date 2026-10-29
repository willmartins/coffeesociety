import { ClosingBanner } from "@/components/ClosingBanner";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { HeroBanner } from "@/components/HeroBanner";
import { JoinSociety } from "@/components/JoinSociety";
import { ShortsGrid } from "@/components/ShortsGrid";
import { pageMeta } from "@/lib/meta";
import { getHome, getSettings, getShorts } from "@/sanity/load";

export const metadata = pageMeta(
  "Home - Coffee Society by Lavazza",
  "Join our mailing list today and be a part of the knowledgeable and passionate coffee people who are forming the new generation of the UK coffee scene.",
);

export default async function HomePage() {
  const [home, settings, shorts] = await Promise.all([getHome(), getSettings(), getShorts()]);
  return (
    <main>
      <HeroBanner title={home.heroTitle} badgeUrl={settings.badgeUrl} />
      <JoinSociety
        title={home.joinTitle}
        body={home.joinBody}
        href={home.joinHref}
        label={home.joinLabel}
        imageUrl={home.latteImageUrl}
      />
      <FeaturedCollections title={home.featuredTitle} collections={home.collections} />
      <ShortsGrid heading={home.shortsHeading} kicker={home.shortsKicker} shorts={shorts} />
      <ClosingBanner title={home.closingTitle} subtitle={home.closingSubtitle} />
    </main>
  );
}
