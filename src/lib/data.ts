import type { Project, ProjectsJson, SiteJson } from "./types";
import siteData from "@/data/site.json";
import projectsData from "@/data/projects.json";

const site = siteData as SiteJson;
const projectsFile = projectsData as ProjectsJson;

export function getSite(): SiteJson {
  return site;
}

export function getProjects(): Project[] {
  return projectsFile.projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsFile.projects.find((p) => p.slug === slug);
}

const FEATURED_FALLBACK_COUNT = 3;

export function getFeaturedProjects(): Project[] {
  const map = new Map(projectsFile.projects.map((p) => [p.slug, p]));
  const featured = site.home.featuredProjectSlugs
    .map((slug) => map.get(slug))
    .filter((p): p is Project => p !== undefined);

  if (featured.length > 0) {
    return featured;
  }

  return projectsFile.projects.slice(0, FEATURED_FALLBACK_COUNT);
}

export function getAllProjectSlugs(): string[] {
  return projectsFile.projects.map((p) => p.slug);
}
