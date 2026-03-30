"use client";

import { useState } from "react";
import type { ContactData } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import * as styles from "./ContactForm.css";

type Props = { contact: ContactData };

export function ContactForm({ contact }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[포트폴리오 문의] ${name || "이름 미입력"}`,
    );
    const body = encodeURIComponent(
      `보낸 사람: ${name}\n이메일: ${email}\n\n${message}`,
    );
    const mailto = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          {contact.form.nameLabel}
        </label>
        <input
          id="contact-name"
          name="name"
          className={styles.input}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          {contact.form.emailLabel}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className={styles.input}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          {contact.form.messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit" variant="primary">
        {contact.form.submitLabel}
      </Button>
      <p className={styles.note}>{contact.form.privacyNote}</p>
    </form>
  );
}
