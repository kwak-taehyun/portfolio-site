import Link from "next/link";
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

  return (
    <article className={styles.cardWrapper}>
      <Link href={`/projects/${project.slug}`} className={styles.card}>
        <div className={`${styles.thumb} ${thumbTone}`}>
          <span className={styles.thumbGrid} aria-hidden />
        </div>
        <div className={styles.body}>
          <div className={styles.meta}>
            <span>{project.year}</span>
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
          <span className={styles.readMore}>스토리 보기 →</span>
        </div>
      </Link>
    </article>
  );
}
