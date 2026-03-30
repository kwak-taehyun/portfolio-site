import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  maxWidth: 480,
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const label = style({
  fontSize: "0.875rem",
  fontWeight: 600,
  color: vars.color.text,
});

export const input = style({
  fontSize: "0.9375rem",
  paddingBlock: 12,
  paddingInline: 14,
  borderRadius: 10,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgElevated,
  color: vars.color.text,
  transition: "border-color 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: `color-mix(in srgb, ${vars.color.accent} 40%, ${vars.color.border})`,
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: vars.color.accent,
      boxShadow: `0 0 0 3px ${vars.color.accentMuted}`,
    },
  },
});

export const textarea = style([
  input,
  {
    minHeight: 140,
    resize: "vertical",
    lineHeight: 1.6,
  },
]);

export const note = style({
  fontSize: "0.8125rem",
  color: vars.color.textSubtle,
  lineHeight: 1.55,
});
