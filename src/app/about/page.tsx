import { buildMetadata } from "../../lib/metadata";
import About from "../../components/About/About";

export const metadata = buildMetadata({
  pageTitle: "About | Tam Pham II - Software Engineer & UI/UX Designer",
  pageDescription: "Meet Tam Pham, a software engineer and UI/UX designer based in Fort Worth, Texas, with 11+ years of experience creating digital experiences.",
  canonical: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}
