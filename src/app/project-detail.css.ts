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
  aspectRatio: "21 / 9",
  borderRadius: 16,
  border: `1px solid ${vars.color.border}`,
  overflow: "hidden",
  marginBottom: "2rem",
  position: "relative",
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

export const storyLabel = style({
  fontFamily: vars.font.sans,
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: vars.color.accent,
  marginBottom: "0.65rem",
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

export const metricsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 16,
  marginTop: "1.25rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const metricCard = style({
  borderRadius: 12,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bgElevated,
  padding: "1.25rem",
});

export const metricValue = style({
  fontFamily: vars.font.sans,
  fontSize: "1.5rem",
  fontWeight: 600,
  color: vars.color.accent,
  marginBottom: 4,
});

export const metricLabel = style({
  fontSize: "0.875rem",
  fontWeight: 600,
  color: vars.color.text,
});

export const metricCtx = style({
  fontSize: "0.8125rem",
  color: vars.color.textSubtle,
  marginTop: 6,
});

export const galleryGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 16,
  marginTop: "1.25rem",
  "@media": {
    "(max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const galleryItem = style({
  borderRadius: 12,
  border: `1px solid ${vars.color.border}`,
  aspectRatio: "4 / 3",
  backgroundColor: vars.color.bgMuted,
  display: "flex",
  alignItems: "flex-end",
  padding: "1rem",
  position: "relative",
  overflow: "hidden",
});

export const galleryPattern = style({
  position: "absolute",
  inset: 0,
  opacity: 0.4,
  backgroundImage: `
    linear-gradient(${vars.color.border} 1px, transparent 1px),
    linear-gradient(90deg, ${vars.color.border} 1px, transparent 1px)
  `,
  backgroundSize: "20px 20px",
});

export const galleryCaption = style({
  position: "relative",
  zIndex: 1,
  fontSize: "0.8125rem",
  color: vars.color.textMuted,
  lineHeight: 1.5,
});
