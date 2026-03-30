"use client";

import { motion } from "framer-motion";
import { useThemeMode } from "./ThemeProvider";
import * as styles from "./ThemeToggle.css";

export function ThemeToggle() {
  const { theme, toggle } = useThemeMode();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      whileTap={{ scale: 0.96 }}
    >
      {isDark ? (
        <SunIcon aria-hidden />
      ) : (
        <MoonIcon aria-hidden />
      )}
    </motion.button>
  );
}

function SunIcon({ "aria-hidden": ah }: { "aria-hidden"?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden={ah}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ "aria-hidden": ah }: { "aria-hidden"?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden={ah}>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
