import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/metadata";
import { collections, professionalProjects } from "../projects/work-data";
import { softwareProjects } from "../projects/software-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/", "/about", "/resume", "/projects", "/work",
    ...collections.map(collection => `/work/${collection.id}`),
    ...softwareProjects.map(project => project.href),
    ...professionalProjects.map(project => project.href),
  ];
  return [...new Set(routes)].map(route => ({ url: `${SITE_URL}${route}` }));
}
