import type { Metadata } from "next";
import { getSite } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import * as layout from "@/styles/layout.css";
import * as aboutStyles from "./about.css";

export const metadata: Metadata = {
  title: "소개",
  description:
    "10년 이상의 경력과 퍼블리싱·접근성·성능 전문성, 작업 철학을 소개합니다.",
};

export default function AboutPage() {
  const { about } = getSite();

  return (
    <div className={layout.container}>
      <header className={aboutStyles.pageHeader}>
        <Reveal>
          <p className={layout.sectionLabel}>About</p>
          <h1 className={layout.sectionTitle}>{about.title}</h1>
        </Reveal>
      </header>

      <section className={aboutStyles.block} aria-labelledby="career-heading">
        <Reveal>
          <h2 id="career-heading" className={aboutStyles.years}>
            {about.career.yearsLabel}
          </h2>
          <p className={aboutStyles.lead}>{about.career.summary}</p>
        </Reveal>
      </section>

      <section className={aboutStyles.block} aria-labelledby="expertise-heading">
        <Reveal>
          <h2 id="expertise-heading" className={aboutStyles.subheading}>
            전문 분야
          </h2>
        </Reveal>
        <ul className={aboutStyles.expertiseGrid}>
          {about.expertise.map((item, i) => (
            <li key={item.title} className={aboutStyles.expertiseItem}>
              <Reveal delay={0.04 * i}>
                <article className={aboutStyles.expertiseCard}>
                  <h3 className={aboutStyles.expertiseTitle}>{item.title}</h3>
                  <p className={aboutStyles.expertiseDesc}>{item.desc}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className={aboutStyles.block} aria-labelledby="philosophy-heading">
        <Reveal>
          <h2 id="philosophy-heading" className={aboutStyles.subheading}>
            {about.philosophy.title}
          </h2>
          <ul className={aboutStyles.philosophyList}>
            {about.philosophy.items.map((line) => (
              <li key={line} className={aboutStyles.philosophyItem}>
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className={aboutStyles.block} aria-labelledby="collab-heading">
        <Reveal>
          <h2 id="collab-heading" className={aboutStyles.subheading}>
            {about.collaboration.title}
          </h2>
          <p className={aboutStyles.lead}>{about.collaboration.body}</p>
        </Reveal>
      </section>
    </div>
  );
}
