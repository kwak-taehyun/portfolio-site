import type { Metadata } from "next";
import { getSite } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import * as layout from "@/styles/layout.css";
import * as skillsStyles from "./skills.css";

export const metadata: Metadata = {
  title: "기술",
  description:
    "HTML/CSS/JS, React·Vue·Next.js, 퍼포먼스, 접근성, 협업 도구 역량을 정리했습니다.",
};

export default function SkillsPage() {
  const { skills } = getSite();

  return (
    <div className={layout.container}>
      <header className={skillsStyles.header}>
        <Reveal>
          <p className={layout.sectionLabel}>Skills</p>
          <h1 className={layout.sectionTitle}>{skills.title}</h1>
          <p className={layout.sectionDesc}>{skills.intro}</p>
        </Reveal>
      </header>

      <div className={skillsStyles.groups}>
        {skills.groups.map((group, gi) => (
          <section
            key={group.id}
            className={skillsStyles.group}
            aria-labelledby={`skill-${group.id}`}
          >
            <Reveal delay={0.04 * gi}>
              <h2 id={`skill-${group.id}`} className={skillsStyles.groupTitle}>
                {group.title}
              </h2>
              <ul className={skillsStyles.itemList}>
                {group.items.map((item) => (
                  <li
                    key={`${group.id}-${item.name}`}
                    className={skillsStyles.item}
                  >
                    <span className={skillsStyles.itemName}>{item.name}</span>
                    <span className={skillsStyles.itemDetail}>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ))}
      </div>
    </div>
  );
}
