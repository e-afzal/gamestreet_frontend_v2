"use client";

import Image from "next/image";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// STYLES
import styles from "@/public/styles/component/page/products/game/game_swiper.module.scss";

const GameSwiper = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        id={styles.game_swiper}
        modules={[Navigation, Thumbs]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        speed={500}
        slidesPerView={1}
      >
        {images.map((each, index) => {
          return (
            <SwiperSlide key={index} className={styles.swiper_slide}>
              <Image src={each} alt={`slide`} width={1920} height={1080} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* THUMBNAILS SWIPER */}
      <Swiper
        id={styles.thumbs_swiper}
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
      >
        {images.map((each, index) => {
          return (
            <SwiperSlide
              key={`slide - ${index}`}
              className={styles.swiper_slide}
            >
              <Image
                src={each}
                alt={`slide-${index}`}
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default GameSwiper;
