import fidium from "./project-data/Fidium.json";
import earthx from "./project-data/Earthx.json";
import hmi from "./project-data/Hmi.json";
import diageo from "./project-data/Diageo.json";
import cintra from "./project-data/Cintra.json";
import esps from "./project-data/Esps.json";
import espsParts from "./project-data/EspsParts.json";
import mwr from "./project-data/Mwr.json";
import brainstyles from "./project-data/BrainStyles.json";
import trinity from "./project-data/Trinity.json";
import toro from "./project-data/Toro.json";
import seafood from "./project-data/WilsonsSeafood.json";
import baileys from "./project-data/Baileys.json";
import crown from "./project-data/CrownRoyal.json";
import johnnie from "./project-data/JohnnieWalker.json";

export type Collection = "websites" | "apps" | "videos";
export type WorkProject = {
  id: string;
  name: string;
  summary: string;
  category: string;
  collection: Collection;
  context: "Professional / client" | "Independent";
  technologies: string[];
  href: string;
  image?: string;
  imageAlt?: string;
  screenshots?: { image: string; alt: string; width: number; height: number }[];
  github?: string;
  live?: string;
  status?: string;
};

export type SoftwareProject = WorkProject & {
  problem: string;
  audience: string;
  role: string;
  features: string[];
  decisions: string[];
  validation: string[];
  limitations: string[];
  resumeBullets: string[];
};

export const collections: { id: Collection; name: string; description: string }[] = [
  { id: "websites", name: "Websites & platforms", description: "Professional websites, commerce and enterprise content platforms." },
  { id: "apps", name: "Applications & tools", description: "Independent software, backend services and professional application work." },
  { id: "videos", name: "Video & motion", description: "Client video, motion graphics and visual-effects work." },
];

type LegacyData = {
  workMoreLink: string;
  workImagePath: string;
};

function legacy(data: LegacyData, name: string, summary: string, technologies: string[], collection: Collection = "websites", category = "Website"): WorkProject {
  return {
    id: data.workMoreLink.slice(1), name, summary, technologies, collection, category,
    context: "Professional / client", href: data.workMoreLink,
    image: data.workImagePath, imageAlt: `${name} project cover`,
  };
}

export const professionalProjects: WorkProject[] = [
  legacy(fidium, "Fidium Fiber", "A shared enterprise content platform serving seven websites and applications across marketing, customer access and purchasing.", ["Craft CMS", "Next.js", "React", "GraphQL", "Redis"], "websites", "Enterprise web platform"),
  legacy(diageo, "Diageo Innovation", "A React application for authenticated employee access to downloadable brand assets.", ["React", "Okta", "OpenID Connect", "JavaScript"], "apps", "Web application"),
  legacy(espsParts, "ESPS Trailer Parts", "A custom Shopify storefront that organizes trailer parts into shoppable collections.", ["Shopify", "Liquid", "JavaScript"], "websites", "E-commerce website"),
  legacy(toro, "Toro Haven", "A responsive product-launch site built with custom Gutenberg blocks.", ["WordPress", "PHP", "Gutenberg"]),
  legacy(earthx, "EarthX", "An event and content website with a custom calendar, commerce and single sign-on.", ["WordPress", "Okta", "WooCommerce"]),
  legacy(hmi, "HM Interactive", "An agency website combining a tailored CMS with scroll-based interactions.", ["Craft CMS", "PHP", "GSAP", "Lottie"]),
  { ...legacy(cintra, "Cintra TEXpress Saver", "A reimagined mobile UX for lane information, commuter discounts and carpooling.", ["Proto.io", "Illustrator", "Photoshop"], "apps", "Application UX prototype"), status: "Design / prototype" },
  legacy(esps, "ESPS Trailers", "A WordPress website and brand identity for a trailer repair and parts business.", ["WordPress", "PHP", "jQuery"]),
  legacy(mwr, "Midwest Radiology", "A content-managed website with a searchable physician directory and location map.", ["Statamic", "PHP", "Laravel"]),
  legacy(brainstyles, "Brainstyles", "A landing page introducing personality assessments through scroll-based interaction.", ["WordPress", "PHP", "GSAP"]),
  legacy(trinity, "TrinityRail", "A redesigned rail-industry website and content experience.", ["WordPress", "PHP"]),
  legacy(seafood, "Wilson's Seafood", "A responsive WordPress landing page with scroll-based interactions.", ["WordPress", "PHP", "GSAP"]),
  legacy(baileys, "Baileys S'mores", "Motion graphics and visual effects adapted for multiple social video formats.", ["After Effects", "Photoshop"], "videos", "Video / motion graphics"),
  legacy(crown, "Crown Royal & NFL", "A promotional video built from supplied brand assets, copy and storyboard.", ["After Effects", "Photoshop"], "videos", "Video / motion graphics"),
  legacy(johnnie, "Johnnie Walker", "A brand video combining motion graphics and visual effects.", ["After Effects", "Photoshop"], "videos", "Video / motion graphics"),
];
