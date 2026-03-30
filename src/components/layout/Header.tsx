"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { NavItem } from "@/lib/types";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import * as styles from "./Header.css";

type Props = {
  siteTitle: string;
  nav: NavItem[];
};

export function Header({ siteTitle, nav }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.shell} ${scrolled ? styles.shellScrolled : styles.shellTop}`}
      initial={false}
      animate={{
        paddingTop: scrolled ? 10 : 18,
        paddingBottom: scrolled ? 10 : 18,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          {siteTitle}
        </Link>
        <nav className={styles.nav} aria-label="주요 메뉴">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
              >
                <span>{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className={styles.navLinkUnderline}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
