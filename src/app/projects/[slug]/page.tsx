import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug, getSite } from "@/lib/data";
import type { Project } from "@/lib/types";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import * as cardStyles from "@/components/project/ProjectCard.css";
import * as layout from "@/styles/layout.css";
import * as detail from "@/app/project-detail.css";

const toneThumb: Record<Project["thumbnailTone"], string> = {
  blue: cardStyles.thumbBlue,
  violet: cardStyles.thumbViolet,
  teal: cardStyles.thumbTeal,
  amber: cardStyles.thumbAmber,
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const site = getSite();
  if (!project) {
    return { title: "프로젝트" };
  }
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${site.meta.title}`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { detail: d } = project;
  const thumbClass =
    toneThumb[project.thumbnailTone] ?? cardStyles.thumbBlue;

  return (
    <article className={layout.container}>
      <nav className={detail.breadcrumbNav} aria-label="breadcrumb">
        <Link href="/projects" className={detail.breadcrumbLink}>
          ← 프로젝트 목록
        </Link>
      </nav>

      <header>
        <Reveal>
          <div className={`${detail.heroThumb} ${thumbClass}`}>
            <span className={cardStyles.thumbGrid} aria-hidden />
          </div>
          <div className={detail.metaBar}>
            <span>{project.year}</span>
            {project.types.map((t) => (
              <span key={t}>· {t}</span>
            ))}
          </div>
          <h1 className={detail.title}>{project.title}</h1>
          <p className={layout.sectionDesc}>{d.overview}</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginTop: "1rem",
            }}
          >
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </Reveal>
      </header>

      <StoryBlock
        label="Role"
        title="역할 및 기여도"
        body={d.role}
      />
      <StoryBlock
        label="Problem"
        title="문제 상황"
        body={d.problem}
      />
      <StoryBlock
        label="Approach"
        title="접근 방법"
        body={d.approach}
      />
      <StoryBlock
        label="Solution"
        title="해결 과정"
        body={d.solution}
      />

      <section className={detail.storySection} aria-labelledby="results-h">
        <Reveal>
          <p className={detail.storyLabel}>Outcome</p>
          <h2 id="results-h" className={detail.storyTitle}>
            결과 및 성과
          </h2>
          <ul className={detail.resultList}>
            {d.results.map((r) => (
              <li key={r} className={detail.resultItem}>
                {r}
              </li>
            ))}
          </ul>
          <div className={detail.metricsGrid}>
            {d.metrics.map((m) => (
              <div key={m.label} className={detail.metricCard}>
                <p className={detail.metricValue}>{m.value}</p>
                <p className={detail.metricLabel}>{m.label}</p>
                <p className={detail.metricCtx}>{m.context}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={detail.storySection} aria-labelledby="gallery-h">
        <Reveal>
          <p className={detail.storyLabel}>Screens</p>
          <h2 id="gallery-h" className={detail.storyTitle}>
            화면 / 인터랙션
          </h2>
          <p className={detail.storyBody}>
            실제 산출물 이미지가 있다면 이 영역에 교체할 수 있도록 그리드
            자리를 마련했습니다.
          </p>
          <div className={detail.galleryGrid}>
            {d.galleryCaptions.map((cap) => (
              <div key={cap} className={detail.galleryItem}>
                <span className={detail.galleryPattern} aria-hidden />
                <p className={detail.galleryCaption}>{cap}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </article>
  );
}

function StoryBlock({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  const id = label.toLowerCase();
  return (
    <section className={detail.storySection} aria-labelledby={`${id}-h`}>
      <Reveal>
        <p className={detail.storyLabel}>{label}</p>
        <h2 id={`${id}-h`} className={detail.storyTitle}>
          {title}
        </h2>
        <p className={detail.storyBody}>{body}</p>
      </Reveal>
    </section>
  );
}
