import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const bar = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  marginBottom: "2rem",
});

export const group = style({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  minWidth: 140,
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: vars.color.textSubtle,
});

export const select = style({
  fontSize: "0.875rem",
  paddingBlock: 10,
  paddingInline: "12px 30px",
  borderRadius: 8,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgElevated,
  color: vars.color.text,
  cursor: "pointer",
  transition: "border-color 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: vars.color.accent,
    },
    "&:focus-visible": {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: 2,
    },
  },
});

export const empty = style({
  fontSize: "0.9375rem",
  color: vars.color.textMuted,
  paddingBlock: "2rem",
});

export const reset = style({
  marginLeft: "auto",
  alignSelf: "center",
  fontFamily: vars.font.sans,
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: vars.color.accent,
  textDecoration: "underline",
  textUnderlineOffset: 4,
});
