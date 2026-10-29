import type { Metadata } from "next";
import { CookieNotice } from "@/components/CookieNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getFooter, getNavigation, getSettings } from "@/sanity/load";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coffee-society.co.uk"),
  title: {
    default: "Coffee Society by Lavazza",
    template: "%s",
  },
  description: "Coffee Society by Lavazza.",
};

export default async function RootLayout({
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
    <html lang="en-GB">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qqc7sdc.css" />
      </head>
      <body>
        <SiteHeader logoUrl={settings.logoUrl} items={navigation} />
        {children}
        <SiteFooter
          badgeUrl={settings.footerBadgeUrl}
          quickLinks={footer.quickLinks}
          compliance={footer.compliance}
          legal={footer.legal}
        />
        <CookieNotice title={settings.cookieTitle} body={settings.cookieBody} />
      </body>
    </html>
  );
}
