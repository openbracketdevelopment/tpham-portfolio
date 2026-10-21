import type { Metadata } from "next";

type PageData = {
  pageTitle: string;
  pageDescription: string;
  canonical: string;
  pageUrl: string;
  pageImage?: string;
  fbOgLocale?: string;
  fbOgSiteName?: string;
  twOgCard?: string;
  twOgSite?: string;
  twOgCreator?: string;
};

export function buildMetadata(d: PageData): Metadata {
  return {
    title: d.pageTitle,
    description: d.pageDescription,
    alternates: { canonical: d.canonical },
    openGraph: {
      title: d.pageTitle,
      description: d.pageDescription,
      url: d.pageUrl,
      type: "article",
      locale: d.fbOgLocale,
      siteName: d.fbOgSiteName,
      images: d.pageImage ? [d.pageImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      site: d.twOgSite,
      creator: d.twOgCreator,
      title: d.pageTitle,
      description: d.pageDescription,
      images: d.pageImage ? [d.pageImage] : undefined,
    },
  };
}
