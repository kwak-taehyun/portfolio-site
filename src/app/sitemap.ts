import type { MetadataRoute } from "next";
import { getAllProjectSlugs, getSiteUrl } from "@/lib/data";

export const dynamic = "force-static";

const base = () => getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const root = base();
  const slugs = getAllProjectSlugs();

  const staticPaths = [
    "",
    "/about",
    "/projects",
    "/skills",
    "/contact",
  ].map((path) => ({
    url: `${root}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPaths = slugs.map((slug) => ({
    url: `${root}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPaths, ...projectPaths];
}
