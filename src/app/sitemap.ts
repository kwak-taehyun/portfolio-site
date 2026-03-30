import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/data";

const base = () =>
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
