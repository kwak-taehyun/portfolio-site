import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug, getSite } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { getPublicImageSize } from "@/lib/imageSize";
import type { Project } from "@/lib/types";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectThumbSwiper } from "@/components/project/ProjectThumbSwiper";
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
  const slides = (d.thumbnail ?? []).map((src) => ({
    src: withBasePath(src),
    ...getPublicImageSize(src),
  }));
  const singleSlide = slides.length === 1 ? slides[0] : null;

  return (
    <article className={layout.container}>
      <nav className={detail.breadcrumbNav} aria-label="breadcrumb">
        <Link href="/projects" className={detail.breadcrumbLink}>
          ← 프로젝트 목록
        </Link>
      </nav>

      <header>
        <Reveal>
          <div
            className={
              slides.length > 0
                ? `${detail.heroThumb} ${thumbClass}`
                : `${detail.heroThumb} ${detail.heroThumbFrame} ${thumbClass}`
            }
          >
            {slides.length >= 2 ? (
              <ProjectThumbSwiper slides={slides} />
            ) : singleSlide ? (
              <Image
                src={singleSlide.src}
                alt=""
                width={singleSlide.width}
                height={singleSlide.height}
                sizes="(max-width: 1200px) 100vw, 1152px"
                className={detail.heroImage}
              />
            ) : (
              <span className={cardStyles.thumbGrid} aria-hidden />
            )}
          </div>
          <div className={detail.metaBar}>
            {project.year.map((y) => (
              <span key={y}>{y}</span>
            ))}
            {project.types.map((t) => (
              <span key={t}>· {t}</span>
            ))}
          </div>
          <h1 className={detail.title}>{project.title}</h1>
        </Reveal>
      </header>

      <DetailSection id="overview" title="프로젝트 개요">
        <p className={detail.storyBody}>{d.overview}</p>
      </DetailSection>
      <DetailSection id="role" title="나의 역할">
        <p className={detail.storyBody}>{d.role}</p>
      </DetailSection>
      <DetailSection id="problem" title="문제 / 요구사항">
        <p className={detail.storyBody}>{d.problem}</p>
      </DetailSection>
      <DetailSection id="implementation" title="구현">
        <div className={detail.implList}>
          {d.implementation.map((item) => (
            <div key={item.title}>
              <h3 className={detail.implTitle}>{item.title}</h3>
              <p className={detail.storyBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </DetailSection>
      <DetailSection id="results" title="결과">
        <ul className={detail.resultList}>
          {d.results.map((r) => (
            <li key={r} className={detail.resultItem}>
              {r}
            </li>
          ))}
        </ul>
      </DetailSection>
      <DetailSection id="stack" title="사용 기술">
        <div className={detail.stackRow}>
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </DetailSection>
      <DetailSection id="learning" title="경험">
        <p className={detail.storyBody}>{d.learning}</p>
      </DetailSection>
    </article>
  );
}

function DetailSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={detail.storySection} aria-labelledby={`${id}-h`}>
      <Reveal>
        <h2 id={`${id}-h`} className={detail.storyTitle}>
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}
