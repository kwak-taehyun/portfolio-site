import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  paddingBottom: "2rem",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: 32,
  paddingBottom: "3rem",
});

export const aside = style({
  gridColumn: "span 5",
  "@media": {
    "(max-width: 900px)": {
      gridColumn: "1 / -1",
    },
  },
});

export const formWrap = style({
  gridColumn: "span 7",
  "@media": {
    "(max-width: 900px)": {
      gridColumn: "1 / -1",
    },
  },
});

export const asideTitle = style({
  fontSize: "1rem",
  fontWeight: 700,
  color: vars.color.text,
  marginBottom: "1.25rem",
});

export const row = style({
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: 6,
});

export const k = style({
  fontFamily: vars.font.sans,
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: vars.color.textSubtle,
});

export const link = style({
  fontSize: "0.9375rem",
  color: vars.color.accent,
  textDecoration: "underline",
  textUnderlineOffset: 4,
  wordBreak: "break-all",
  selectors: {
    "&:hover": {
      color: vars.color.text,
    },
  },
});
