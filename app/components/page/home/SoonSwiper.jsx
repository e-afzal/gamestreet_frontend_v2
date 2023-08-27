"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// STYLES
import styles from "@/public/styles/component/page/home/soon_swiper.module.scss";

// ASSET IMPORTS
import fifa from "@/public/images/pages/home/upcoming/FIFA_22-PS5.jpg";
import nfl from "@/public/images/pages/home/upcoming/Madden_NFL_22-PS5.jpg";
import mario from "@/public/images/pages/home/upcoming/Mario_Golf-Super_Rush-Switch.jpg";
import forza from "@/public/images/pages/home/upcoming/Forza_Horizon_5-Xbox_Series_X.jpg";
import dyingLight from "@/public/images/pages/home/upcoming/Dying_Light_2-Deluxe_Edition-PS4.jpg";

export default function SoonSwiper() {
  const soonItems = [
    {
      url: "/products/games/6121b881fb1d81202c1cb212",
      imageUrl: dyingLight,
      alt: "Dying Light 2",
    },
    {
      url: "/products/games/6121b8878334f437d07b20b1",
      imageUrl: forza,
      alt: "Forza Horizon 5",
    },
    {
      url: "/products/games/6121b6ccdce536120423bb49",
      imageUrl: fifa,
      alt: "Fifa 22",
    },
    {
      url: "/products/games/6121b88cb0d1412c6c5d988a",
      imageUrl: mario,
      alt: "Mario Golf - Super Rush",
    },
    {
      url: "/products/games/6121b8ca0df85739e87895ed",
      imageUrl: nfl,
      alt: "Madden NFL 22",
    },
  ];
  const [slides, setSlides] = useState(5);
  const [spaceBtw, setSpaceBtw] = useState(45);

  useEffect(() => {
    if (window.innerWidth <= 650) {
      setSlides(3);
      setSpaceBtw(20);
    } else if (window.innerWidth <= 850) {
      setSlides(3);
    } else if (window.innerWidth > 850) {
      setSlides(5);
    }
  }, []);

  return (
    <>
      <Swiper
        // centeredSlides={true}
        slidesPerView={slides}
        spaceBetween={spaceBtw}
        speed={900}
        className={styles.soon_container}
        loop={true}
      >
        {soonItems.map((item, index) => (
          <div key={index}>
            <SwiperSlide className={styles.swiper_slide}>
              <Link href={item.url} className={styles.soon}>
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  className={styles.soon}
                />
              </Link>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
