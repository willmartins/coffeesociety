import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coffee-society.co.uk"),
  title: {
    default: "Coffee Society by Lavazza",
    template: "%s",
  },
  description: "Coffee Society by Lavazza.",
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
