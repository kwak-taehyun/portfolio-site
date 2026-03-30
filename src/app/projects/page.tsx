import type { Metadata } from "next";
import { getProjects, getSite } from "@/lib/data";
import { ProjectFilters } from "@/components/project/ProjectFilters";
import { Reveal } from "@/components/motion/Reveal";
import * as layout from "@/styles/layout.css";

export const metadata: Metadata = {
  title: "프로젝트",
  description:
    "업무 유형·기술 스택·연도로 필터링할 수 있는 프로젝트 목록과 스토리형 상세 페이지.",
};

export default function ProjectsPage() {
  const projects = getProjects();
  const site = getSite();

  return (
    <div className={layout.container}>
      <header style={{ paddingBottom: "2rem" }}>
        <Reveal>
          <p className={layout.sectionLabel}>Projects</p>
          <h1 className={layout.sectionTitle}>프로젝트</h1>
          <p className={layout.sectionDesc}>
            {site.meta.author}의 대표 작업물입니다. 카드를 열면 문제 → 접근 →
            해결 → 결과의 흐름으로 정리된 상세 스토리를 볼 수 있습니다.
          </p>
        </Reveal>
      </header>
      <ProjectFilters projects={projects} />
    </div>
  );
}
