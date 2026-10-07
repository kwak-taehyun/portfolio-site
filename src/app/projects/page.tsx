import type { Metadata } from "next";
import { getProjects} from "@/lib/data";
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

  return (
    <div className={layout.container}>
      <header style={{ paddingBottom: "2rem" }}>
        <Reveal>
          <p className={layout.sectionLabel}>Projects</p>
          <h1 className={layout.sectionTitle}>프로젝트</h1>
          <p className={layout.sectionDesc}>
            참여한 주요 프로젝트를 소개합니다.
          </p>
          <p className={layout.sectionCaution}>
            (보안 정책에 따라 실제 프로젝트 화면과 소스코드는 공개하지 않습니다. 담당 업무와 구현 경험을 중심으로 정리했습니다.)
          </p>
        </Reveal>
      </header>
      <ProjectFilters projects={projects} />
    </div>
  );
}
