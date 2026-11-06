"use client";

import styles from "./Header.module.scss";
import React from "react";
import { useState } from "react";
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
                <Link
                  href="/work"
                  className={styles["header__nav-menu-link"]}
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className={styles["header__nav-menu-item"]}>
                <Link
                  href="/about"
                  className={styles["header__nav-menu-link"]}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className={styles["header__nav-menu-item"]}>
                <Link
                  href="/resume"
                  className={styles["header__nav-menu-link"]}
                  onClick={closeMobileMenu}
                >
                  Resume
                </Link>
              </li>
              <li className={`${styles["header__nav-menu-item"]} header__nav-connect`}>
                <Link
                  href="/#connect"
                  className={styles["header__nav-menu-link"]}
                  onClick={closeMobileMenu}
                >
                  Connect
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
