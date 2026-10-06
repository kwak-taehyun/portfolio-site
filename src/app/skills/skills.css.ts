import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  paddingBottom: "2.5rem",
});

export const groups = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
  paddingBottom: "3rem",
});

export const group = style({
  borderTop: `1px solid ${vars.color.border}`,
  paddingTop: "2rem",
});

export const groupTitle = style({
  fontSize: "1.2rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: vars.color.text,
  marginBottom: "1.25rem",
});

export const itemList = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 10,
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
});

export const item = style({
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
      top: "0.6em",
      width: 5,
      height: 5,
      borderRadius: "50%",
      backgroundColor: vars.color.accent,
    },
  },
});

export const itemName = style({
  fontFamily: vars.font.sans,
  fontSize: "0.875rem",
  fontWeight: 600,
  color: vars.color.text,
});

export const itemDetail = style({
  fontSize: "0.875rem",
  color: vars.color.textMuted,
  lineHeight: 1.6,
});
