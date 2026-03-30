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
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "1rem 1.25rem",
  listStyle: "none",
});

export const item = style({
  gridColumn: "span 6",
  borderRadius: 10,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgElevated,
  padding: "1rem 1.15rem",
  display: "flex",
  flexDirection: "column",
  gap: 6,
  "@media": {
    "(max-width: 768px)": {
      gridColumn: "1 / -1",
    },
  },
});

export const itemName = style({
  fontFamily: vars.font.mono,
  fontSize: "0.875rem",
  fontWeight: 600,
  color: vars.color.text,
});

export const itemDetail = style({
  fontSize: "0.875rem",
  color: vars.color.textMuted,
  lineHeight: 1.6,
});
