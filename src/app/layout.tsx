import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "../lib/metadata";
import homeData from "../views/page-data/Home.json";
import Script from "next/script";
import "../styles/tailwind.css";
import "../styles/globals.scss";
import Header from "../components/Header/Header";
import { SiteMotion } from "../components/SiteMotion/SiteMotion";

export const metadata: Metadata = {
  ...buildMetadata(homeData),
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.json",
};

export const viewport = { themeColor: "#000000" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/assets/fonts/RightGrotesk-CompactDark.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/TradeGothic-LT.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <Script id="intro-session" strategy="beforeInteractive">{`
          try {
            if (sessionStorage.getItem("portfolio:intro-seen:v2") === "1") {
              document.documentElement.setAttribute("data-intro-seen", "");
            }
          } catch {}
        `}</Script>
      </head>
      <body>
        <Header />
        <div id="page-content">{children}</div>
        <SiteMotion />
        <noscript><style>{'[data-intro-overlay] { display: none !important; }'}</style></noscript>
        <Script
          src="https://kit.fontawesome.com/fc781da2fc.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
