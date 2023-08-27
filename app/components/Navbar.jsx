"use client";

import Link from "next/link";
import Image from "next/image";

import { useRef, useState } from "react";

// STYLE
import styles from "@/public/styles/component/navbar.module.scss";

// PACKAGES
// import { useDispatch, useSelector } from "react-redux";

// IMAGE IMPORT
import cartIcon from "@/public/icons/cart.svg";
import gameStreetLogo from "@/public/images/logo-vertical.svg";

// REDUX - ACTION
// import { logout } from "../actions/userActions";

const Navbar = ({ history, borderBottom }) => {
  // STATES
  const [ps4MenuOpen, setPs4Menu] = useState(false);
  const [ps5MenuOpen, setPs5Menu] = useState(false);
  const [seriesMenuOpen, setSeriesMenu] = useState(false);
  const [oneMenuOpen, setOneMenu] = useState(false);
  const [switchMenuOpen, setSwitchMenu] = useState(false);

  // TARGET ELEMENTS
  const dropdown = useRef();
  const dropdownMenu = useRef();
  const cartOrb = useRef();

  // TOGGLE DROPDOWN MENU
  const toggleDropdownMenu = () => {
    dropdownMenu.current.classList.toggle("active");
  };

  // TOGGLE SECONDARY DROPDOWN
  const toggleSubMenu = (e) => {
    // GET ALL MENUs, CLOSE them and setMenu to 'false'
    for (const item of secDropdownLoop) item.setMenu(false);
    // Get element by ID and open that submenu
    const el = secDropdownLoop.find((each) => each.platform === e.target.id);
    el.setMenu(true);
    // If menuOpen, set to false, thereby closing it
    if (el.menuOpen) el.setMenu(false);
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
      menuOpen: ps4MenuOpen,
      setMenu: setPs4Menu,
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
      menuOpen: ps5MenuOpen,
      setMenu: setPs5Menu,
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
      menuOpen: seriesMenuOpen,
      setMenu: setSeriesMenu,
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
      menuOpen: oneMenuOpen,
      setMenu: setOneMenu,
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
      menuOpen: switchMenuOpen,
      setMenu: setSwitchMenu,
    },
  ];

  // REDUX RELATED
  //   const dispatch = useDispatch();
  //   const cart = useSelector((state) => state.cart);
  //   const { cartItems } = cart;
  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { userInfo } = userLogin;

  const logoutHandler = () => {
    // LOGOUT USER by emptying details
    dispatch(logout());
  };

  const searchHandler = (e) => {
    // e.preventDefault();
    history.push(`/products/searchProducts`);
  };

  return (
    <>
      {/* DESKTOP NAV */}
      <section id={styles.hero}>
        <nav className={styles.hero_nav}>
          <div className={styles.nav_logo}>
            <Link href="/">
              <Image src={gameStreetLogo} alt="Game Street Logo" />
            </Link>
          </div>
          <div className={styles.nav_searchbar}>
            <form className={styles.nav_form_search} onSubmit={searchHandler}>
              <input
                type="text"
                name="search"
                id={styles.search}
                placeholder="Search products..."
              />
            </form>
          </div>
          <ul className={styles.nav_links}>
            {/* {userInfo ? ( */}
            {/* SHOW WHEN USER LOGGED IN */}
            {/* <li>
              <div
                className={styles.dropdown}
                ref={dropdown}
                onClick={toggleDropdownMenu}
              >
                <p>My Account</p>
                <div className={styles.menu} ref={dropdownMenu}>
                  <ul>
                    <li>
                      <img
                        src={userIcon}
                        alt="User Icon"
                        className={styles.user_icon}
                      />
                      <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Image src={logOutIcon} alt="Log Out Icon" />
                      <Link href="/" onClick={logoutHandler}>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li> */}
            {/* ) : ( */}
            {/* SHOW WHEN USER LOGGED OUT */}
            <>
              <li>
                <Link href="/register">Sign up</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </>
            {/* )} */}

            <li ref={cartOrb}>
              <Link href="/cart">
                <Image src={cartIcon} alt="Cart Icon" />
              </Link>
            </li>
          </ul>
        </nav>

        <ul
          className={styles.secondary_links}
          style={{ borderBottom: borderBottom }}
        >
          {secDropdownLoop.map((eachPlatform, index) => (
            <li key={index}>
              <div
                className={styles.dropdown_secondary}
                onClick={toggleSubMenu}
                // ref={secondaryDropdown}
                // onClick={eachPlatform.click}
              >
                <p id={eachPlatform.platform} onClick={toggleSubMenu}>
                  {eachPlatform.platform}
                </p>
                <div
                  className={styles.secondary_menu}
                  // ref={eachPlatform.ref}
                  style={{ display: eachPlatform.menuOpen ? "block" : "none" }}
                >
                  <ul>
                    {eachPlatform.items.map((eachListItem, index) => (
                      <li key={index}>
                        <Link href={eachListItem.link}>
                          {eachListItem.category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Navbar;
