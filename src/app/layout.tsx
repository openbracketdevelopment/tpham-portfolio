import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "../lib/metadata";
import homeData from "../views/page-data/Home.json";
import Script from "next/script";
import "../styles/tailwind.css";
import "../styles/globals.scss";
import Header from "../components/Header/Header";
import Connect from "../components/Connect/Connect";
import { SiteFooter } from "../components/Connect/SiteFooter";
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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(location.pathname!=="/resume"&&sessionStorage.getItem("portfolio:intro-seen:v2")!=="1"){document.documentElement.setAttribute("data-intro-pending","");document.documentElement.setAttribute("data-intro-boot","");setTimeout(function(){document.documentElement.removeAttribute("data-intro-boot");document.documentElement.removeAttribute("data-intro-pending")},12000)}}catch(e){}})()` }} />
        <style>{`html[data-intro-pending] body > header,html[data-intro-pending] #page-content{visibility:hidden}html[data-intro-boot]::after{content:"";position:fixed;inset:0;background:#000;z-index:99}html[data-intro-pending]{background:#000}`}</style>
        <link rel="preload" href="/assets/fonts/RightGrotesk-CompactDark.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/TradeGothic-LT.otf" as="font" type="font/otf" crossOrigin="anonymous" />

      </head>
      <body>
        <Header />
        <div id="page-content">{children}<SiteFooter><Connect /></SiteFooter></div>
        <SiteMotion />
        <noscript><style>{'[data-intro-overlay] { display: none !important; } html[data-intro-pending] #page-content, html[data-intro-pending] body > header { visibility: visible; } html[data-intro-boot]::after { display:none; }'}</style></noscript>
        <Script
          src="https://kit.fontawesome.com/fc781da2fc.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
