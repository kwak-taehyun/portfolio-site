import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const cardWrapper = style({
  height: "100%",
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  borderRadius: 14,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgElevated,
  overflow: "hidden",
  transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: vars.shadow.md,
      borderColor: `color-mix(in srgb, ${vars.color.accent} 35%, ${vars.color.border})`,
    },
  },
});

export const thumb = style({
  aspectRatio: "16 / 9",
  position: "relative",
  overflow: "hidden",
});

export const thumbBlue = style({
  background: `linear-gradient(135deg, rgba(91, 156, 245, 0.45) 0%, ${vars.color.bgMuted} 55%, ${vars.color.bg} 100%)`,
});

export const thumbViolet = style({
  background: `linear-gradient(135deg, rgba(167, 139, 250, 0.45) 0%, ${vars.color.bgMuted} 55%, ${vars.color.bg} 100%)`,
});

export const thumbTeal = style({
  background: `linear-gradient(135deg, rgba(45, 212, 191, 0.35) 0%, ${vars.color.bgMuted} 55%, ${vars.color.bg} 100%)`,
});

export const thumbAmber = style({
  background: `linear-gradient(135deg, rgba(251, 191, 36, 0.4) 0%, ${vars.color.bgMuted} 55%, ${vars.color.bg} 100%)`,
});

export const thumbGrid = style({
  position: "absolute",
  inset: 0,
  opacity: 0.35,
  backgroundImage: `
    linear-gradient(${vars.color.border} 1px, transparent 1px),
    linear-gradient(90deg, ${vars.color.border} 1px, transparent 1px)
  `,
  backgroundSize: "24px 24px",
});

export const body = style({
  padding: "1.25rem 1.35rem 1.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  flex: 1,
});

export const meta = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "0.5rem 0.75rem",
  fontFamily: vars.font.sans,
  fontSize: "0.75rem",
  color: vars.color.textSubtle,
});

export const title = style({
  fontSize: "1.125rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: vars.color.text,
  lineHeight: 1.35,
});

export const summary = style({
  fontSize: "0.9375rem",
  color: vars.color.textMuted,
  lineHeight: 1.65,
  flex: 1,
});

export const stacks = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
});

export const readMore = style({
  fontFamily: vars.font.sans,
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: vars.color.accent,
  marginTop: 4,
  selectors: {
    [`${card}:hover &`]: {
      textDecoration: "underline",
      textUnderlineOffset: 4,
    },
  },
});
