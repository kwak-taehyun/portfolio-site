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

export function getFeaturedProjects(): Project[] {
  const map = new Map(projectsFile.projects.map((p) => [p.slug, p]));
  return site.home.featuredProjectSlugs
    .map((slug) => map.get(slug))
    .filter((p): p is Project => p !== undefined);
}

export function getAllProjectSlugs(): string[] {
  return projectsFile.projects.map((p) => p.slug);
}
