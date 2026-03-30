import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const pageHeader = style({
  paddingTop: "clamp(1rem, 4vw, 2rem)",
  paddingBottom: "2rem",
});

export const block = style({
  paddingBottom: "clamp(2.5rem, 6vw, 4rem)",
  borderTop: `1px solid ${vars.color.border}`,
  paddingTop: "clamp(2rem, 5vw, 3rem)",
});

export const years = style({
  fontFamily: vars.font.sans,
  fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
  fontWeight: 600,
  letterSpacing: "-0.03em",
  color: vars.color.accent,
  marginBottom: "1rem",
});

export const lead = style({
  fontSize: "1.0625rem",
  color: vars.color.textMuted,
  lineHeight: 1.75,
  maxWidth: "44rem",
});

export const subheading = style({
  fontSize: "1.35rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: vars.color.text,
  marginBottom: "1.25rem",
});

export const expertiseGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: 20,
  listStyle: "none",
});

export const expertiseItem = style({
  gridColumn: "span 6",
  "@media": {
    "(max-width: 768px)": {
      gridColumn: "1 / -1",
    },
  },
});

export const expertiseCard = style({
  height: "100%",
  borderRadius: 12,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgElevated,
  padding: "1.35rem",
});

export const expertiseTitle = style({
  fontSize: "1rem",
  fontWeight: 700,
  color: vars.color.text,
  marginBottom: "0.5rem",
});

export const expertiseDesc = style({
  fontSize: "0.9375rem",
  color: vars.color.textMuted,
  lineHeight: 1.65,
});

export const philosophyList = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "44rem",
});

export const philosophyItem = style({
  fontSize: "1rem",
  color: vars.color.textMuted,
  lineHeight: 1.75,
  paddingLeft: "1.25rem",
  position: "relative",
  selectors: {
    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      top: "0.55em",
      width: 5,
      height: 5,
      borderRadius: "50%",
      backgroundColor: vars.color.accent,
    },
  },
});
