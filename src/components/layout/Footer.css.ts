import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const footer = style({
  marginTop: "auto",
  borderTop: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgElevated,
});

export const inner = style({
  maxWidth: 1200,
  marginInline: "auto",
  paddingInline: 24,
  paddingBlock: "2.5rem",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "1.5rem",
});

export const meta = style({
  maxWidth: 320,
});

export const title = style({
  fontFamily: vars.font.sans,
  fontSize: "0.8125rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: vars.color.text,
  marginBottom: "0.5rem",
});

export const copy = style({
  fontSize: "0.875rem",
  color: vars.color.textSubtle,
  lineHeight: 1.6,
});

export const links = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem 1.5rem",
});

export const link = style({
  fontSize: "0.875rem",
  color: vars.color.textMuted,
  transition: "color 0.2s ease",
  selectors: {
    "&:hover": {
      color: vars.color.accent,
    },
  },
});
