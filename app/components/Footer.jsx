// STYLES
import styles from "@/public/styles/component/footer.module.scss";

// ASSET IMPORTS
import twitterLogo from "@/public/icons/twitter.png";
import youtubeLogo from "@/public/icons/youtube.png";
import appstoreIcon from "@/public/icons/appstore.svg";
import facebookLogo from "@/public/icons/facebook.png";
import instagramLogo from "@/public/icons/instagram.png";
import playstoreIcon from "@/public/icons/playstore.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const productLinks = [
    { title: "Consoles", url: "/product/consoles" },
    { title: "Video Games", url: "/product/games" },
    { title: "Accessories", url: "/product/accessories" },
    { title: "Merchandise", url: "/product/merchandises" },
  ];
  const helpLinks = [
    { title: "Contact us", url: "#" },
    { title: "Store feedback", url: "#" },
    { title: "Order Enquiry", url: "#" },
    { title: "Covid-19 protocols", url: "#" },
  ];
  const aboutLinks = [
    { title: "Store locations", url: "#" },
    { title: "About Game Street", url: "#" },
    { title: "Terms & Conditions", url: "#" },
    { title: "Privacy Policy", url: "#" },
  ];
  return (
    <>
      <footer id={styles.footer}>
        <div className={styles.find}>
          <h4 className={styles.find}>Products</h4>
          <ul>
            {productLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.help}>
          <h4 className={styles.help}>Get Help</h4>
          <ul>
            {helpLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.about}>
          <h4 className={styles.about}>About</h4>
          <ul>
            {aboutLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.app}>
          <h4 className={styles.app_title}>Mobile App</h4>
          <div className={styles.img_container}>
            <div className={styles.app_playstore}>
              <Image
                src={playstoreIcon}
                alt="Google Playstore Logo"
                className={styles.playstore}
              />
            </div>
            <div className={styles.app_appstore}>
              <Image
                src={appstoreIcon}
                alt="Apple App Store"
                className={styles.appstore}
              />
            </div>
          </div>
        </div>
        <div className={styles.signup}>
          <h4 className={styles.signup_title}>Sign up</h4>
          <p className={styles.signup_description}>
            Subscribe to receive exclusive promotions, coupons and news on
            latest events:
          </p>
          <form className={styles.signup_form}>
            <input
              type="email"
              name="email"
              id={styles.email}
              placeholder="Enter your email"
            />
            <button className={styles.signup_btn}>Join</button>
          </form>
        </div>
        <div className={styles.connect}>
          <h4 className={styles.connect_title}>Connect</h4>
          <div className={styles.social_flex}>
            <div className={styles.connect_youtube}>
              <Image src={youtubeLogo} alt="Youtube Logo" />
            </div>
            <div className={styles.connect_twitter}>
              <Image src={twitterLogo} alt="Twitter Logo" />
            </div>
            <div className={styles.connect_facebook}>
              <Image src={facebookLogo} alt="Facebook Logo" />
            </div>
            <div className={styles.connect_instagram}>
              <Image src={instagramLogo} alt="Instagram Logo" />
            </div>
          </div>
        </div>
        {/* <p className="copyright">
              Copyright (COPYRIGHT glyph) 2021 Game Street LLC. All Rights Reserved.
            </p> */}
      </footer>
    </>
  );
}
