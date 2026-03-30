import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const wrap = style({
  paddingBlock: "4rem",
  textAlign: "center",
});

export const title = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "0.75rem",
  color: vars.color.text,
});

export const desc = style({
  color: vars.color.textMuted,
  marginBottom: "1.5rem",
});

export const link = style({
  fontFamily: vars.font.mono,
  fontSize: "0.875rem",
  fontWeight: 600,
  color: vars.color.accent,
  textDecoration: "underline",
  textUnderlineOffset: 4,
});
