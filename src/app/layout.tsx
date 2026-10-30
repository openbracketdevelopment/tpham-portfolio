import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "../lib/metadata";
import homeData from "../views/page-data/Home.json";
import Script from "next/script";
import "../styles/tailwind.css";
import "../styles/globals.scss";
import Header from "../components/Header/Header";

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
      <body>
        <Header />
        {children}
        <Script
          src="https://kit.fontawesome.com/fc781da2fc.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
