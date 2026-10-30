import { buildMetadata } from "../../lib/metadata";
import Projects from "../../views/Projects/Projects";

export const metadata = buildMetadata({
  pageTitle: "Projects | Tam Pham — Developer & Designer",
  pageDescription: "Explore Tam Pham’s selected work in full-stack development, web design, branding, and motion graphics, with project details and case studies.",
  canonical: "/projects",
});

// ISR: regenerate in the background at most once per hour
export const revalidate = 3600;

export default function Route() {
  return <Projects />;
}
