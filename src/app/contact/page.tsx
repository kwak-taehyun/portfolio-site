import type { Metadata } from "next";
import { getSite } from "@/lib/data";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import * as layout from "@/styles/layout.css";
import * as contactStyles from "./contact.css";

export const metadata: Metadata = {
  title: "연락처",
  description: "이메일·간단한 메시지 폼으로 곽태현에게 연락할 수 있습니다.",
};

export default function ContactPage() {
  const { contact } = getSite();

  return (
    <div className={layout.container}>
      <header className={contactStyles.header}>
        <Reveal>
          <p className={layout.sectionLabel}>Contact</p>
          <h1 className={layout.sectionTitle}>{contact.title}</h1>
          <p className={layout.sectionDesc}>{contact.intro}</p>
        </Reveal>
      </header>

      <div className={contactStyles.grid}>
        <Reveal className={contactStyles.aside}>
          <h2 className={contactStyles.asideTitle}>문의</h2>
          <p className={contactStyles.row}>
            <span className={contactStyles.k}>Email</span>
            <a className={contactStyles.link} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <p className={contactStyles.row}>
            <span className={contactStyles.k}>portfolio</span>
            <a
              className={contactStyles.link}
              href={contact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.portfolio.replace(/^https?:\/\//, "")}
            </a>
          </p>
        </Reveal>
        <Reveal className={contactStyles.formWrap} delay={0.06}>
          <h2 className={contactStyles.asideTitle}>메시지 보내기</h2>
          <ContactForm contact={contact} />
        </Reveal>
      </div>
    </div>
  );
}
