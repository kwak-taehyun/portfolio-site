import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const shell = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  transition:
    "box-shadow 0.28s ease, background-color 0.28s ease, padding 0.28s ease, border-color 0.28s ease, backdrop-filter 0.28s ease",
});

export const shellTop = style({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderBottomColor: "transparent",
  backdropFilter: "none",
});

export const shellScrolled = style({
  backgroundColor: `color-mix(in srgb, ${vars.color.bg} 90%, transparent)`,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  boxShadow: vars.shadow.nav,
  borderBottomColor: vars.color.border,
});

export const inner = style({
  maxWidth: 1200,
  marginInline: "auto",
  paddingInline: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
});

export const brand = style({
  fontFamily: vars.font.sans,
  fontSize: "1.25rem",
  fontWeight: 600,
  letterSpacing: "0.06em",
  color: vars.color.text,
  flexShrink: 0,
  transition: "transform 0.2s ease",
  selectors: {
    "&:hover": {
      color: vars.color.accent,
    },
  },
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: "clamp(0.5rem, 2vw, 1.75rem)",
  flex: 1,
  justifyContent: "center",
  minWidth: 0,
  "@media": {
    "(max-width: 768px)": {
      justifyContent: "flex-end",
      overflowX: "auto",
      paddingBottom: 2,
      maskImage:
        "linear-gradient(to right, transparent, black 12px, black calc(100% - 12px), transparent)",
    },
  },
});

export const navLink = style({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: vars.color.textMuted,
  paddingBlock: 6,
  paddingInline: 4,
  position: "relative",
  whiteSpace: "nowrap",
  transition: "color 0.2s ease",
  selectors: {
    "&:hover": {
      color: vars.color.text,
    },
  },
});

export const navLinkActive = style({
  color: vars.color.accent,
});

export const navLinkUnderline = style({
  position: "absolute",
  left: 4,
  right: 4,
  bottom: 0,
  height: 2,
  borderRadius: 1,
  backgroundColor: vars.color.accent,
  transformOrigin: "left",
});

export const actions = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

