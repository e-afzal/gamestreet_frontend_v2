"use client";

import Image from "next/image";
import Link from "next/link";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// STYLES
import styles from "@/public/styles/component/page/home/carousel_swiper.module.scss";

// ASSET IMPORTS
import gowBanner from "@/public/images/pages/home/home_banner/god_of_war.jpg";
import ratchetBanner from "@/public/images/pages/home/home_banner/ratchet.jpg";
import xboxBanner from "@/public/images/pages/home/home_banner/series_s.jpg";

export default function CarouselSwiper() {
  const banners = [
    {
      url: "/products/consoles/610729775559cf29bcb4e5a4",
      imageUrl: gowBanner,
      alt: "God of War Banner",
    },
    {
      url: "/products/games/612ec67751895f450c4f8a3e",
      imageUrl: ratchetBanner,
      alt: "Ratchet & Clank Banner",
    },
    {
      url: "/products/consoles/610729775559cf29bcb4e5a7",
      imageUrl: xboxBanner,
      alt: "Xbox Series X Banner",
    },
  ];

  return (
    <Swiper
      className={styles.mySwiper}
      speed={1000}
      slidesPerView={1}
      spaceBetween={1}
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect={"fade"}
    >
      {banners.map((banner, index) => (
        <div key={index}>
          <SwiperSlide className={styles.swiper_slide}>
            <Link href={banner.url}>
              <Image
                src={banner.imageUrl}
                alt={banner.alt}
                className={styles.carousel_img}
              />
            </Link>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}
