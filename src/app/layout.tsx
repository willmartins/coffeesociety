import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - Coffee Society by Lavazza",
  description:
    "Coffee Society by Lavazza. Training, community videos and barista courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qqc7sdc.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
