import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    bg: null,
    bgElevated: null,
    bgMuted: null,
    text: null,
    textMuted: null,
    textSubtle: null,
    border: null,
    accent: null,
    accentMuted: null,
    onAccent: null,
  },
  shadow: {
    sm: null,
    md: null,
    nav: null,
  },
  font: {
    mono: null,
  },
});

export const darkTheme = createTheme(vars, {
  color: {
    bg: "#0F1115",
    bgElevated: "#161A20",
    bgMuted: "#1C2129",
    text: "#F4F5F7",
    textMuted: "#A8B0BC",
    textSubtle: "#6B7280",
    border: "rgba(255, 255, 255, 0.08)",
    accent: "#5B9CF5",
    accentMuted: "rgba(91, 156, 245, 0.15)",
    onAccent: "#0B1020",
  },
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.35)",
    md: "0 12px 40px rgba(0, 0, 0, 0.45)",
    nav: "0 8px 32px rgba(0, 0, 0, 0.35)",
  },
  font: {
    mono: "var(--font-jetbrains-mono), ui-monospace, monospace",
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    bg: "#FAFAFA",
    bgElevated: "#FFFFFF",
    bgMuted: "#F0F2F5",
    text: "#0F1115",
    textMuted: "#4B5563",
    textSubtle: "#9CA3AF",
    border: "rgba(15, 17, 21, 0.08)",
    accent: "#2563EB",
    accentMuted: "rgba(37, 99, 235, 0.12)",
    onAccent: "#FFFFFF",
  },
  shadow: {
    sm: "0 1px 2px rgba(15, 17, 21, 0.06)",
    md: "0 12px 40px rgba(15, 17, 21, 0.1)",
    nav: "0 8px 32px rgba(15, 17, 21, 0.08)",
  },
  font: {
    mono: "var(--font-jetbrains-mono), ui-monospace, monospace",
  },
});
