"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// STYLES
import styles from "@/public/styles/component/page/home/trend_swiper.module.scss";

// ASSET IMPORTS
import souls from "@/public/images/pages/home/trending/demons_souls.jpg";
import flight from "@/public/images/pages/home/trending/fs.jpg";
import gow from "@/public/images/pages/home/trending/gow.jpg";
import lou from "@/public/images/pages/home/trending/last_of_us.jpg";
import mario from "@/public/images/pages/home/trending/mario.jpg";
import ratchet from "@/public/images/pages/home/trending/ratchet.jpg";
import redemption from "@/public/images/pages/home/trending/rdr.jpg";
import uncharted from "@/public/images/pages/home/trending/uncharted.jpg";
import witcher from "@/public/images/pages/home/trending/witcher.jpg";
import zelda from "@/public/images/pages/home/trending/zelda.jpg";

export default function TrendSwiper() {
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
  }, [slides]);

  // SLIDE DATA
  const trendingItems = [
    {
      url: "/products/games/610899ab7be4872050e609fc",
      imageUrl: souls,
      alt: "Demon's Souls",
    },
    {
      url: "/products/games/610899ab7be4872050e60a03",
      imageUrl: flight,
      alt: "Microsoft Flight Simulator",
    },
    {
      url: "/products/games/610899ab7be4872050e609fa",
      imageUrl: gow,
      alt: "God of War",
    },
    {
      url: "/products/games/612ec67751895f450c4f8a3e",
      imageUrl: ratchet,
      alt: "Ratchet & Clank: Rift Apart",
    },
    {
      url: "/products/games/610899ab7be4872050e609fe",
      imageUrl: redemption,
      alt: "Red Dead Redemption",
    },
    {
      url: "/products/games/610899ab7be4872050e60a0b",
      imageUrl: mario,
      alt: "Super Mario Odyssey",
    },
    {
      url: "/products/games/610899ab7be4872050e609fb",
      imageUrl: lou,
      alt: "The Last of Us 2",
    },
    {
      url: "/products/games/610899ab7be4872050e60a0a",
      imageUrl: zelda,
      alt: "Zelda: Breath of the Wild",
    },
    {
      url: "/products/games/6121b9142b8da63678acb9df",
      imageUrl: uncharted,
      alt: "Uncharted 4",
    },
    {
      url: "/products/games/610899ab7be4872050e609fd",
      imageUrl: witcher,
      alt: "Witcher 3: Game of the Year",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={slides}
        spaceBetween={spaceBtw}
        speed={900}
        loop={true}
        className={`${styles.mySwiper} ${styles.trend_container}`}
      >
        {trendingItems.map((item, index) => (
          <div key={index}>
            <SwiperSlide className={styles.swiper_slide}>
              <Link href={item.url} className={styles.trend}>
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  className={styles.trend}
                  // style={{ width: "75%" }}
                />
              </Link>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
