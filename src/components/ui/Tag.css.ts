import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const tag = style({
  display: "inline-flex",
  alignItems: "center",
  fontFamily: vars.font.mono,
  fontSize: "0.6875rem",
  fontWeight: 500,
  letterSpacing: "0.04em",
  paddingBlock: 5,
  paddingInline: 10,
  borderRadius: 999,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgMuted,
  color: vars.color.textMuted,
  transition: "border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: vars.color.accent,
      color: vars.color.accent,
      backgroundColor: vars.color.accentMuted,
    },
  },
});
