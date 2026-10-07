import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const swiper = style({
  width: "100%",
});

globalStyle(`${swiper} .swiper-slide`, {
  height: "auto",
});

globalStyle(`${swiper} .swiper-button-prev, ${swiper} .swiper-button-next`, {
  width: 40,
  height: 40,
  marginTop: 0,
  top: "50%",
  transform: "translateY(-50%)",
  borderRadius: "50%",
  color: vars.color.text,
  // backgroundColor: `color-mix(in srgb, ${vars.color.bgElevated} 88%, transparent)`,
  // border: `1px solid ${vars.color.border}`,
  // boxShadow: vars.shadow.sm,
});

globalStyle(`${swiper} .swiper-button-prev::after, ${swiper} .swiper-button-next::after`, {
  fontSize: "0.8rem",
  fontWeight: "700",
});

globalStyle(`${swiper} .swiper-pagination`, {
  bottom: 12,
});

globalStyle(`${swiper} .swiper-pagination-bullet`, {
  width: 8,
  height: 8,
  backgroundColor: "#fff",
  opacity: 0.7,
  boxShadow: "0 0 0 1px rgba(15, 17, 21, 0.28)",
});

globalStyle(`${swiper} .swiper-pagination-bullet-active`, {
  backgroundColor: vars.color.accent,
  opacity: 1,
});
