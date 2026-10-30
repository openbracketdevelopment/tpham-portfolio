import type { Metadata } from "next";

export const SITE_URL = "https://tampham.io";
export const SITE_NAME = "Tam Pham | Developer & Designer";
export const PRIVATE_ROBOTS = { index: false, follow: false } as const;

type PageData = {
  pageTitle: string;
  pageDescription: string;
  canonical: string;
  fbOgLocale?: string;
  workLogo?: string;
};

export function buildMetadata(d: PageData): Metadata {
  const url = new URL(d.canonical, SITE_URL).href;
  const slug = d.workLogo ? d.canonical.replace(/^\/+|\/+$/g, "") : "home";
  const image = {
    url: `${SITE_URL}/assets/og/${slug}.jpg`,
    width: 1200,
    height: 630,
    alt: d.workLogo
      ? `${d.pageTitle} — project logo over the project hero image`
      : "Tam Pham logo centered on a blue and black abstract background",
  };

  return {
    title: d.pageTitle,
    description: d.pageDescription,
    authors: [{ name: "Tam Pham", url: SITE_URL }],
    robots: PRIVATE_ROBOTS,
    alternates: { canonical: url },
    openGraph: {
      title: d.pageTitle,
      description: d.pageDescription,
      url,
      type: "website",
      locale: d.fbOgLocale || "en_US",
      siteName: SITE_NAME,
      images: [{ ...image, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: d.pageTitle,
      description: d.pageDescription,
      images: [image],
    },
  };
}
