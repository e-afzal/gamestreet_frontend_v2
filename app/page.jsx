import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/page/home.module.scss";

// COMPONENTS
import ScreenBgd from "@/app/components/page/home/ScreenBgd";
import CarouselSwiper from "@/app/components/page/home/CarouselSwiper";
import TrendSwiper from "@/app/components/page/home/TrendSwiper";
import SoonSwiper from "@/app/components/page/home/SoonSwiper";

// ASSETS IMPORT
import switchBlack from "@/public/images/products/consoles/Switch-Black.jpg";
import ps4Console from "@/public/images/products/consoles/PS4-PS4_Pro_1TB_Console_with_Death_Stranding.jpg";
import ps5Console from "@/public/images/products/consoles/PS5-PS5_Console.jpg";
import miles from "@/public/images/products/box_art/PS5-Miles_Morales-Ultimate_Edition.jpg";
import xboxSeriesS from "@/public/images/products/consoles/Series_X&S-Xbox_Series_S_Console.jpg";
import xboxController from "@/public/images/products/accessories/Series_X&S-Microsoft_Xbox_Series_X_Robot_White_Wireless_Controller.jpg";
import ps4Bundle from "@/public/images/pages/home/bundle_ps4.png";
// import bundleWallpaper from "@/public/images/pages/home/bundle_red.jpg";

export default function Home() {
  const categories = [
    {
      title: "Playstation 5",
      imageUrl: ps5Console,
      url: "/products/console/PS5",
    },
    {
      title: "Playstation 4",
      imageUrl: ps4Console,
      url: "/products/console/PS4",
    },
    {
      title: "Xbox Series X|S",
      imageUrl: xboxSeriesS,
      url: "/products/console/Xbox Series X|S",
    },
    {
      title: "Nintendo Switch",
      imageUrl: switchBlack,
      url: "/products/console/Nintendo Switch",
    },
    {
      title: "Video Games",
      imageUrl: miles,
      url: "/product/games",
    },
    {
      title: "Gaming Accessories",
      imageUrl: xboxController,
      url: "/product/accessories",
    },
  ];

  return (
    <>
      <ScreenBgd />

      {/* CAROUSEL */}
      <section id={styles.carousel}>
        <CarouselSwiper />
      </section>
      {/* SECTION: TRENDING */}
      <section id={styles.trending}>
        <h2 className={styles.trending_title}>Trending</h2>
        <div className={styles.trending_carousel}>
          <TrendSwiper />
        </div>
      </section>

      {/* SECTION: PRODUCT CATEGORIES */}
      <section id={styles.products}>
        {categories.map((category, index) => (
          <div key={index} className={styles.product_card}>
            <Image
              src={category.imageUrl}
              alt={category.title}
              className={styles.product_image}
            />
            <div className={styles.product_description}>
              <h4 className={styles.product_title}>{category.title}</h4>
              <Link href={category.url} className={styles.product_link}>
                Shop All
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION: BUNDLE BANNER */}
      <section id={styles.bundle_banner}>
        <div className={styles.bundle_bgd}>
          {/* <Image src={bundleWallpaper} alt="PS4 Red Wallpaper" /> */}
        </div>
        <div className={styles.bundle_grid}>
          <div className={styles.bundle_content}>
            <h2 className={styles.bundle_title}>
              Console bundle deals from AED 1259
            </h2>
            <p className={styles.bundle_description}>
              Play your way and experience the power of gaming at home or on the
              go
            </p>
            <Link href="/product/consoles" className={styles.bundle_link}>
              Shop all
            </Link>
          </div>
          <div className={styles.bundle_img}>
            <Image src={ps4Bundle} alt="PS4 Bundle" />
          </div>
        </div>
      </section>

      {/* SECTION: UPCOMING */}
      <section id={styles.soon}>
        <h2 className={styles.soon}>Coming Soon</h2>
        <div className={styles.soon_slider}>
          <SoonSwiper />
        </div>
      </section>
    </>
  );
}
