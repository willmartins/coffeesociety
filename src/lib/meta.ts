import type { Metadata } from "next";

export function pageMeta(title: string, description: string): Metadata {
  const full = title.includes("Coffee Society")
    ? title
    : `${title} - Coffee Society by Lavazza`;
  return {
    title: full,
    description,
    openGraph: {
      title: full,
      description,
      locale: "en_GB",
      images: ["/media/Lavazza_Coffee_Society_Master_Badge_Aqua_Rgb.svg"],
    },
  };
}
