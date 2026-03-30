import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const maxContent = 1200;
const gutter = 24;

export const bodyColumn = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const main = style({
  flex: 1,
  width: "100%",
  paddingTop: 88,
  paddingBottom: 60,
  "@media": {
    "(max-width: 768px)": {
      paddingTop: 76,
    },
  },
});

export const container = style({
  width: "100%",
  maxWidth: maxContent,
  marginInline: "auto",
  paddingInline: gutter,
});

export const grid12 = style({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: gutter,
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "repeat(6, 1fr)",
    },
    "(max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const section = style({
  paddingBlock: "clamp(4rem, 10vw, 7rem)",
});

export const sectionLabel = style({
  fontFamily: vars.font.sans,
  fontSize: "0.75rem",
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: vars.color.accent,
  marginBottom: "0.75rem",
});

export const sectionTitle = style({
  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
  marginBottom: "1rem",
  color: vars.color.text,
});

export const sectionDesc = style({
  fontSize: "1.0625rem",
  color: vars.color.textMuted,
  maxWidth: "100%",
  lineHeight: 1.7,
});

export const spanFull = style({
  gridColumn: "1 / -1",
});

export const span8 = style({
  gridColumn: "span 8",
  "@media": {
    "(max-width: 1024px)": {
      gridColumn: "1 / -1",
    },
  },
});

export const span6 = style({
  gridColumn: "span 6",
  "@media": {
    "(max-width: 1024px)": {
      gridColumn: "1 / -1",
    },
  },
});

export const span4 = style({
  gridColumn: "span 4",
  "@media": {
    "(max-width: 1024px)": {
      gridColumn: "1 / -1",
    },
  },
});
