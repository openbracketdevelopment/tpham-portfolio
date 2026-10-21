import Script from "next/script";
import "../styles/tailwind.css";
import "../styles/globals.scss";
import Header from "../components/Header/Header";

export const metadata = {
  metadataBase: new URL("https://tampham.io"),
  title: "Tam Pham - Full-Stack Developer",
  description: "A Fort Worth based developer who makes unique web experiences.",
  robots: { index: false, follow: false },
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
