import Image from "next/image";

// STYLES
import styles from "@/public/styles/component/page/home/screen_bgd.module.scss";

// ASSET IMPORTS
import bundleWallpaper from "@/public/images/pages/home/bundle_red.jpg";

// A faded black background appearing on ALL single game/product pages
const ScreenBgd = ({
  grayScale = 1,
  brightNess = "35%",
  bluriness = "3px",
}) => {
  return (
    <Image
      src={bundleWallpaper}
      alt="Playstation abstract background"
      className={styles.body_bgd}
      style={{
        filter: `brightness(${brightNess}) grayscale(${grayScale}) blur(${bluriness})`,
      }}
    />
  );
};

export default ScreenBgd;
