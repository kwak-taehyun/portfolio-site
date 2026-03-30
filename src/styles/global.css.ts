import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle(":root", {
  colorScheme: "dark light",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html", {
  height: "100%",
  scrollBehavior: "smooth",
});

globalStyle("body", {
  minHeight: "100%",
  backgroundColor: vars.color.bg,
  color: vars.color.text,
  fontFamily: `'Pretendard', var(--font-sans), 'Noto Sans KR', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  lineHeight: 1.65,
  overflowX: "hidden",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible", {
  outline: `2px solid ${vars.color.accent}`,
  outlineOffset: 2,
});

globalStyle("img, picture, video", {
  maxWidth: "100%",
  height: "auto",
  display: "block",
});

globalStyle("button", {
  font: "inherit",
  cursor: "pointer",
  border: "none",
  background: "none",
});

globalStyle("ul, ol", {
  listStyle: "none",
});
