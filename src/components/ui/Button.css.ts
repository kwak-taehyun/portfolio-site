import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontSize: "0.9375rem",
  fontWeight: 600,
  paddingBlock: 12,
  paddingInline: 22,
  borderRadius: 10,
  transition:
    "background-color 0.22s ease, color 0.22s ease, border-color 0.22s ease, transform 0.2s ease, box-shadow 0.22s ease",
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: 2,
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },
});

export const primary = style([
  base,
  {
    backgroundColor: vars.color.accent,
    color: vars.color.onAccent,
    boxShadow: `0 0 0 0 ${vars.color.accentMuted}`,
    selectors: {
      "&:hover": {
        filter: "brightness(1.06)",
        boxShadow: `0 6px 24px ${vars.color.accentMuted}`,
      },
    },
  },
]);

export const secondary = style([
  base,
  {
    backgroundColor: "transparent",
    color: vars.color.text,
    border: `1px solid ${vars.color.border}`,
    selectors: {
      "&:hover": {
        borderColor: vars.color.accent,
        color: vars.color.accent,
        backgroundColor: vars.color.accentMuted,
      },
    },
  },
]);
