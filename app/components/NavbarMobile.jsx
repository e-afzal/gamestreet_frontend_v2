"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// STYLE
import styles from "@/public/styles/component/navbar_mobile.module.scss";

// ASSET IMPORTS
import navbarIcon from "@/public/icons/navbar.png";
import gameStreetLogo2 from "@/public/images/logo-horizontal.svg";
import chevronLeftCrimson from "@/public/icons/Chevron-left-crimson.svg";
import closeIcon from "@/public/icons/cancel.svg";
import logOutIcon from "@/public/icons/log_out.svg";
import userIcon from "@/public/icons/login.svg";
import cartIcon from "@/public/icons/cart.svg";

const NavbarMobile = () => {
  // CONSTS
  // REFS
  const menuImg = useRef();
  const overlayClose = useRef();
  const sidebarCloseContextMenu = useRef();
  const overlay = useRef();
  const menuBlur = useRef();
  const sidebarMenuContext = useRef();
  const secDrpdwnPs4 = useRef();
  const secDrpdwnPs5 = useRef();
  const secDrpdwnXboxSeries = useRef();
  const secDrpdwnXboxOne = useRef();
  const secDrpdwnSwitch = useRef();

  // TOGGLE SECONDARY DROPDOWN
  const togglePS4DrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.toggle("active");
      secDropdownLoop[1].ref.current.classList.remove("active");
      secDropdownLoop[2].ref.current.classList.remove("active");
      secDropdownLoop[3].ref.current.classList.remove("active");
      secDropdownLoop[4].ref.current.classList.remove("active");
    }
  };
  const togglePS5DrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.remove("active");
      secDropdownLoop[1].ref.current.classList.toggle("active");
      secDropdownLoop[2].ref.current.classList.remove("active");
      secDropdownLoop[3].ref.current.classList.remove("active");
      secDropdownLoop[4].ref.current.classList.remove("active");
    }
  };
  const toggleXboxSeriesDrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.remove("active");
      secDropdownLoop[1].ref.current.classList.remove("active");
      secDropdownLoop[2].ref.current.classList.toggle("active");
      secDropdownLoop[3].ref.current.classList.remove("active");
      secDropdownLoop[4].ref.current.classList.remove("active");
    }
  };
  const toggleXboxOneDrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.remove("active");
      secDropdownLoop[1].ref.current.classList.remove("active");
      secDropdownLoop[2].ref.current.classList.remove("active");
      secDropdownLoop[3].ref.current.classList.toggle("active");
      secDropdownLoop[4].ref.current.classList.remove("active");
    }
  };
  const toggleSwitchDrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.remove("active");
      secDropdownLoop[1].ref.current.classList.remove("active");
      secDropdownLoop[2].ref.current.classList.remove("active");
      secDropdownLoop[3].ref.current.classList.remove("active");
      secDropdownLoop[4].ref.current.classList.toggle("active");
    }
  };

  // SECONDARY-DROPDOWN consts
  let secDropdownLoop = [
    {
      platform: "PS4",
      platformFull: "Playstation 4",
      items: [
        { category: "Consoles", link: `/products/search/PS4/consoles` },
        { category: "Games", link: `/products/search/PS4/games` },
        { category: "Accessories", link: `/products/search/PS4/accessories` },
      ],
      ref: secDrpdwnPs4,
      click: togglePS4DrpdwnMenu,
    },
    {
      platform: "PS5",
      platformFull: "Playstation 5",
      items: [
        { category: "Consoles", link: `/products/search/PS5/consoles` },
        { category: "Games", link: `/products/search/PS5/games` },
        { category: "Accessories", link: `/products/search/PS5/accessories` },
        { category: "Merchandises", link: `/products/search/PS5/merchandises` },
      ],
      ref: secDrpdwnPs5,
      click: togglePS5DrpdwnMenu,
    },
    {
      platform: "Xbox Series X|S",
      platformFull: "Xbox Series X|S",
      items: [
        {
          category: "Consoles",
          link: `/products/search/Xbox Series X|S/consoles`,
        },
        { category: "Games", link: `/products/search/Xbox Series X|S/games` },
        {
          category: "Accessories",
          link: `/products/search/Xbox Series X|S/accessories`,
        },
      ],
      ref: secDrpdwnXboxSeries,
      click: toggleXboxSeriesDrpdwnMenu,
    },
    {
      platform: "Xbox One",
      platformFull: "Xbox One",
      items: [
        { category: "Consoles", link: `/products/search/Xbox One/consoles` },
        { category: "Games", link: `/products/search/Xbox One/games` },
        {
          category: "Accessories",
          link: `/products/search/Xbox One/accessories`,
        },
      ],
      ref: secDrpdwnXboxOne,
      click: toggleXboxOneDrpdwnMenu,
    },
    {
      platform: "Nintendo Switch",
      platformFull: "Nintendo Switch",
      items: [
        {
          category: "Consoles",
          link: `/products/search/Nintendo Switch/consoles`,
        },
        { category: "Games", link: `/products/search/Nintendo Switch/games` },
        {
          category: "Accessories",
          link: `/products/search/Nintendo Switch/accessories`,
        },
      ],
      ref: secDrpdwnSwitch,
      click: toggleSwitchDrpdwnMenu,
    },
  ];

  // STATE
  const [platformDetails, setPlatformDetails] = useState({});

  // HANDLERS
  const openNav = () => {
    overlay.current.classList.add("active");
    menuBlur.current.classList.add("active");
  };

  const closeNav = () => {
    overlay.current.classList.remove("active");
    menuBlur.current.classList.remove("active");
  };

  const sideBarContextHandler = (e) => {
    sidebarMenuContext.current.classList.add("active");
    const findResult = secDropdownLoop.find(
      (eachItem) => eachItem.platform === e.target.innerText
    );
    setPlatformDetails(findResult);
  };

  const closeSideBarContextHandler = () => {
    sidebarMenuContext.current.classList.remove("active");
  };

  const searchHandler = (e) => {
    // e.preventDefault();
    history.push(`/products/searchProducts`);
  };

  return (
    <nav className={styles.mobile_nav}>
      <div className={styles.nav_menu}>
        <Image
          src={navbarIcon}
          alt="Navbar Icon"
          ref={menuImg}
          onClick={openNav}
        />

        <div className={styles.menu_blur} ref={menuBlur}></div>

        <div className={styles.menu_overlay} ref={overlay}>
          <div className={styles.overlay_close}>
            <Image
              src={closeIcon}
              alt="Close Menu Icon"
              ref={overlayClose}
              onClick={closeNav}
            />
          </div>
          {/* WHEN USER LOGGED IN */}
          {/* {userInfo ? ( */}
          {/* <div className={styles.account_loggedIn}>
            <div className={styles.account_icon}>
              <Image src={userIcon} alt="User Icon" />
            </div>
            <div className={styles.account_content}>
              <p>Welcome {userInfo && userInfo.fName}!</p>
              <small>
                <Link href="/dashboard">Account Settings</Link>
              </small>
              <small>
                <Link href="/dashboard/orderHistory">Order History</Link>
              </small>
              <small>
                <Link href="/" onClick={logoutHandler}>
                  Log Out
                </Link>
              </small>
            </div>
          </div> */}
          {/* ) : ( */}
          // WHEN USER LOGGED OUT
          <div className={styles.account}>
            <div className={styles.account_icon}>
              <Image src={userIcon} alt="User Icon" />
            </div>
            <div className={styles.account_content}>
              <p>Account</p>
              <small>
                <Link href="/login">Sign in</Link> or {""}
                <Link href="/register">Create Account</Link>
              </small>
            </div>
          </div>
          {/* )} */}
          <h4>Shop by Platform</h4>
          <ul>
            {secDropdownLoop.map((eachPlatform, index) => (
              <li key={index}>
                <Link href="#" onClick={sideBarContextHandler}>
                  {eachPlatform.platform}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.menu_context} ref={sidebarMenuContext}>
          <div className={styles.overlay_return}>
            <Image src={chevronLeftCrimson} alt="return-icon" />
            <p
              className={styles.close_context}
              ref={sidebarCloseContextMenu}
              onClick={closeSideBarContextHandler}
            >
              RETURN
            </p>
          </div>
          <h4>{platformDetails.platformFull}</h4>
          <ul>
            {platformDetails.items &&
              platformDetails.items.map((eachListItem, index) => (
                <li key={index}>
                  <a href={eachListItem.link}>{eachListItem.category}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className={styles.nav_logo}>
        <Link href="/">
          <Image
            src={gameStreetLogo2}
            alt="Game Street Logo Horizontal"
            className={styles.gs_logo}
          />
        </Link>
      </div>

      <div className={styles.nav_search}>
        <form className={styles.nav_form_search} onSubmit={searchHandler}>
          <input
            type="text"
            name="search"
            id={styles.search}
            placeholder="Search product..."
          />
        </form>
      </div>
      <div className={styles.nav_cart}>
        <Link href="/cart">
          <Image src={cartIcon} alt="cart icon" />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarMobile;
