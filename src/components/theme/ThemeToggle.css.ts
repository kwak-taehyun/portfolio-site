import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const toggle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: 10,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgMuted,
  color: vars.color.textMuted,
  transition: "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
  selectors: {
    "&:hover": {
      color: vars.color.accent,
      backgroundColor: vars.color.bgElevated,
    },
    "&:active": {
      transform: "scale(0.96)",
    },
  },
});
