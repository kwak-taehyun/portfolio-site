"use client";

import Image from "next/image";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroImage } from "@/app/project-detail.css";
import * as styles from "./ProjectThumbSwiper.css";

export type ThumbSlide = {
  src: string;
  width: number;
  height: number;
};

type Props = { slides: ThumbSlide[] };

export function ProjectThumbSwiper({ slides }: Props) {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      rewind
      autoHeight
      a11y={{
        containerRoleDescriptionMessage: "썸네일 슬라이드",
        prevSlideMessage: "이전 이미지",
        nextSlideMessage: "다음 이미지",
        paginationBulletMessage: "{{index}}번 이미지로 이동",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.src}>
          <Image
            src={slide.src}
            alt=""
            width={slide.width}
            height={slide.height}
            sizes="(max-width: 1200px) 100vw, 1152px"
            className={heroImage}
            preload={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
