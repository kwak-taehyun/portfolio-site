export type NavItem = { href: string; label: string };

export type SiteMeta = {
  title: string;
  description: string;
  author: string;
  keywords: string[];
};

export type HomeData = {
  headline: string;
  description: string;
  keywords: string[];
  intro: string;
  techStackSummary: string[];
  cta: {
    primary: { href: string; label: string };
    secondary: { href: string; label: string };
  };
  highlightsIntro: string;
  featuredProjectSlugs: string[];
  strengths: { title: string; body: string }[];
  currentlyFocusing: { title: string; desc: string }[];
};

export type AboutData = {
  title: string;
  career: { yearsLabel: string; summary: string };
  expertise: { title: string; desc: string }[];
  philosophy: { title: string; items: string[] };
  collaboration: { title: string; body: string };
  assist: {title: string; body: string; items: string[]}
};

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export type SkillsPageData = {
  title: string;
  intro: string;
  groups: SkillGroup[];
};

export type ContactData = {
  title: string;
  intro: string;
  email: string;
  portfolio: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitLabel: string;
    privacyNote: string;
  };
};

export type SiteJson = {
  meta: SiteMeta;
  nav: NavItem[];
  home: HomeData;
  about: AboutData;
  skills: SkillsPageData;
  contact: ContactData;
};

export type ProjectImplementation = {
  title: string;
  body: string;
};

export type ProjectDetail = {
  overview: string;
  role: string;
  problem: string;
  decision: string;
  implementation: ProjectImplementation[];
  results: string[];
  learning: string;
};

export type Project = {
  slug: string;
  title: string;
  year: number[];
  types: string[];
  summary: string;
  stack: string[];
  thumbnailTone: "blue" | "violet" | "teal" | "amber";
  detail: ProjectDetail;
};

export type ProjectsJson = {
  projects: Project[];
};
