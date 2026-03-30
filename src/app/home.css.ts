import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const hero = style({
  paddingBlock: "clamp(3rem, 12vw, 6rem)",
});

export const heroGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: 24,
  alignItems: "start",
});

export const heroMain = style({
  gridColumn: "span 8",
  "@media": {
    "(max-width: 1024px)": {
      gridColumn: "1 / -1",
    },
  },
});

export const heroAside = style({
  gridColumn: "span 4",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "@media": {
    "(max-width: 1024px)": {
      gridColumn: "1 / -1",
    },
  },
});

export const kicker = style({
  fontFamily: vars.font.sans,
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: vars.color.accent,
  marginBottom: "1rem",
});

export const headline = style({
  fontSize: "clamp(2rem, 5vw, 3.25rem)",
  fontWeight: 700,
  letterSpacing: "-0.03em",
  lineHeight: 1.15,
  color: vars.color.text,
  marginBottom: "1.25rem",
});

export const intro = style({
  fontSize: "1.125rem",
  color: vars.color.textMuted,
  lineHeight: 1.75,
  maxWidth: "38rem",
  marginBottom: "1.75rem",
});

export const keywordRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginBottom: "2rem",
});

export const ctaRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
});

export const stackCard = style({
  borderRadius: 12,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgElevated,
  padding: "1.25rem",
});

export const stackTitle = style({
  fontFamily: vars.font.sans,
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: vars.color.textSubtle,
  marginBottom: "0.75rem",
});

export const stackList = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const stackItem = style({
  fontFamily: vars.font.sans,
  fontSize: "0.8125rem",
  color: vars.color.textMuted,
});

export const highlightGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: 24,
});

export const strengthCard = style({
  gridColumn: "span 4",
  borderRadius: 12,
  border: `1px solid ${vars.color.border}`,
  padding: "1.5rem",
  backgroundColor: vars.color.bgElevated,
  "@media": {
    "(max-width: 1024px)": {
      gridColumn: "span 6",
    },
    "(max-width: 640px)": {
      gridColumn: "1 / -1",
    },
  },
});

export const strengthTitle = style({
  fontSize: "1rem",
  fontWeight: 700,
  color: vars.color.text,
  marginBottom: "0.5rem",
});

export const strengthBody = style({
  fontSize: "0.9375rem",
  color: vars.color.textMuted,
  lineHeight: 1.65,
});
