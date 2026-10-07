import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";
import type { Project } from "@/lib/types";
import { Tag } from "@/components/ui/Tag";
import * as styles from "./ProjectCard.css";

const toneClass: Record<Project["thumbnailTone"], string> = {
  blue: styles.thumbBlue,
  violet: styles.thumbViolet,
  teal: styles.thumbTeal,
  amber: styles.thumbAmber,
};

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  const thumbTone = toneClass[project.thumbnailTone] ?? styles.thumbBlue;
  const thumbSrc = project.detail.thumbnail?.[0];

  return (
    <article className={styles.cardWrapper}>
      <Link href={`/projects/${project.slug}`} className={styles.card}>
        <div className={`${styles.thumb} ${thumbTone}`}>
          {thumbSrc ? (
            <Image
              src={withBasePath(thumbSrc)}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 33vw"
              className={styles.thumbImage}
            />
          ) : (
            <span className={styles.thumbGrid} aria-hidden />
          )}
        </div>
        <div className={styles.body}>
          <div className={styles.meta}>
            {project.year.map((y) => (
              <span key={y}>{y}</span>
            ))}

            {project.types.map((t) => (
              <span key={t}>· {t}</span>
            ))}
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.stacks}>
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <span className={styles.readMore}>프로젝트 상세 보기 →</span>
        </div>
      </Link>
    </article>
  );
}
