import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const breadcrumbNav = style({
  marginBottom: "1.5rem",
});

export const breadcrumbLink = style({
  fontFamily: vars.font.sans,
  fontSize: "0.8125rem",
  color: vars.color.textMuted,
  transition: "color 0.2s ease",
  selectors: {
    "&:hover": {
      color: vars.color.accent,
    },
  },
});

export const heroThumb = style({
  borderRadius: 16,
  border: `1px solid ${vars.color.border}`,
  overflow: "hidden",
  marginBottom: "2rem",
  position: "relative",
});

export const heroThumbFrame = style({
  aspectRatio: "21 / 9",
});

export const heroImage = style({
  display: "block",
  width: "100%",
  height: "auto",
});

export const metaBar = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem 1.25rem",
  fontFamily: vars.font.sans,
  fontSize: "0.8125rem",
  color: vars.color.textSubtle,
  marginBottom: "1rem",
});

export const title = style({
  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
  fontWeight: 700,
  letterSpacing: "-0.03em",
  lineHeight: 1.2,
  color: vars.color.text,
  marginBottom: "1rem",
});

export const storySection = style({
  marginTop: "2.5rem",
  paddingTop: "2.5rem",
  borderTop: `1px solid ${vars.color.border}`,
});

export const storyTitle = style({
  fontSize: "1.25rem",
  fontWeight: 700,
  color: vars.color.text,
  marginBottom: "0.75rem",
});

export const storyBody = style({
  fontSize: "1rem",
  color: vars.color.textMuted,
  lineHeight: 1.75,
});

export const implList = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.75rem",
});

export const implTitle = style({
  fontSize: "1.0625rem",
  fontWeight: 700,
  letterSpacing: "-0.01em",
  lineHeight: 1.45,
  color: vars.color.text,
  marginBottom: "0.5rem",
});

export const stackRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
});

export const resultList = style({
  marginTop: "0.75rem",
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const resultItem = style({
  fontSize: "0.9375rem",
  color: vars.color.textMuted,
  lineHeight: 1.65,
  paddingLeft: "1.1rem",
  position: "relative",
  selectors: {
    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      top: "0.55em",
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: vars.color.accent,
    },
  },
});
