"use client";

import styles from "./Header.module.scss";
import React from "react";
import { useState } from "react";
import { MenuLink } from "./MenuLink";
// import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../Logo/Logo";

function Header() {
  const isAbout = usePathname() === "/about";
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <header className={`${styles["header"]} ${isAbout ? styles["header--about"] : ""}`} data-menu-open={click}>
        <nav className={styles["header__nav"]}>
          <div className={styles["header__logo"]}>
            <Link href="/" className="header_logo-link" onClick={closeMobileMenu}>
              <Logo className={styles["header__logo-img"]} />
            </Link>
          </div>
          <div className={styles["header__nav-wrap"]}>
            <button
              type="button"
              className={styles["header__menu-icon"]}
              onClick={handleClick}
              aria-label={click ? "Close navigation" : "Open navigation"}
              aria-expanded={click}
              aria-controls="site-navigation"
            >
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </button>
            <ul
              id="site-navigation"
              className={click ? `${styles["header__nav-menu"]} ${styles["active"]}` : styles["header__nav-menu"]}
            >
              <li className={styles["header__nav-menu-item"]}>
                <MenuLink href="/work" label="Projects" onClick={closeMobileMenu} />
              </li>
              <li className={styles["header__nav-menu-item"]}>
                <MenuLink href="/about" label="About" onClick={closeMobileMenu} />
              </li>
              <li className={styles["header__nav-menu-item"]}>
                <MenuLink href="/resume" label="Resume" onClick={closeMobileMenu} />
              </li>
              <li className={`${styles["header__nav-menu-item"]} header__nav-connect`}>
                <MenuLink href="/connect" label="Connect" onClick={closeMobileMenu} />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
