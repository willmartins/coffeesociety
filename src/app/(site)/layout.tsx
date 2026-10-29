import { CookieNotice } from "@/components/CookieNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getFooter, getNavigation, getSettings } from "@/sanity/load";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, navigation, footer] = await Promise.all([
    getSettings(),
    getNavigation(),
    getFooter(),
  ]);

  return (
    <div className="site-shell">
      <SiteHeader logoUrl={settings.logoUrl} items={navigation} />
      {children}
      <SiteFooter
        badgeUrl={settings.footerBadgeUrl}
        quickLinks={footer.quickLinks}
        compliance={footer.compliance}
        legal={footer.legal}
      />
      <CookieNotice title={settings.cookieTitle} body={settings.cookieBody} />
    </div>
  );
}
