import { getFeaturedProjects, getSite } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import * as layout from "@/styles/layout.css";
import * as home from "./home.css";

export default function HomePage() {
  const site = getSite();
  const featured = getFeaturedProjects();

  return (
    <>
      <section className={home.hero} aria-labelledby="home-headline">
        <div className={layout.container}>
          <div className={home.heroGrid}>
            <Reveal className={home.heroMain}>
              <p className={home.kicker}>Frontend · Publishing · a11y</p>
              <h1 id="home-headline" className={home.headline}>
                {site.home.headline}
              </h1>
              <p className={home.intro}>{site.home.intro}</p>
              <div className={home.keywordRow} aria-label="키워드">
                {site.home.keywords.map((k) => (
                  <Tag key={k}>{k}</Tag>
                ))}
              </div>
              <div className={home.ctaRow}>
                <ButtonLink href={site.home.cta.primary.href} variant="primary">
                  {site.home.cta.primary.label}
                </ButtonLink>
                <ButtonLink
                  href={site.home.cta.secondary.href}
                  variant="secondary"
                >
                  {site.home.cta.secondary.label}
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal className={home.heroAside} delay={0.08}>
              <div className={home.stackCard}>
                <h2 className={home.stackTitle}>기술 스택 요약</h2>
                <ul className={home.stackList}>
                  {site.home.techStackSummary.map((item) => (
                    <li key={item} className={home.stackItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className={layout.section}
        aria-labelledby="highlights-heading"
      >
        <div className={layout.container}>
          <Reveal>
            <p className={layout.sectionLabel}>Selected work</p>
            <h2 id="highlights-heading" className={layout.sectionTitle}>
              {site.home.highlightsIntro}
            </h2>
            <p className={layout.sectionDesc} style={{ marginBottom: "2.5rem" }}>
              문제 정의부터 결과까지 스토리로 정리한 대표 사례입니다.
            </p>
          </Reveal>
          <div className={home.highlightGrid}>
            {featured.map((project, i) => (
              <Reveal
                key={project.slug}
                className={layout.span4}
                delay={0.06 * (i + 1)}
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={layout.section} aria-labelledby="strengths-heading">
        <div className={layout.container}>
          <Reveal>
            <p className={layout.sectionLabel}>Strengths</p>
            <h2 id="strengths-heading" className={layout.sectionTitle}>
              퍼블리셔로서의 강점
            </h2>
            <p className={layout.sectionDesc} style={{ marginBottom: "2rem" }}>
              시맨틱 마크업, 웹 접근성, 반응형·크로스 브라우징, 퍼포먼스를 기본
              바탕으로 일합니다.
            </p>
          </Reveal>
          <div className={home.highlightGrid}>
            {site.home.strengths.map((s, i) => (
              <Reveal
                key={s.title}
                className={home.strengthCard}
                delay={0.05 * i}
              >
                <h3 className={home.strengthTitle}>{s.title}</h3>
                <p className={home.strengthBody}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
