"use client";

import styles from "./Header.module.scss";
import React from "react";
import { useState } from "react";
// import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <header className={styles["header"]}>
        <nav className={styles["header__nav"]}>
          <div className={styles["header__logo"]}>
            <Link href="/" className="header_logo-link" onClick={closeMobileMenu}>
              <img
                src="/assets/images/logo.svg"
                alt="Tam Pham - Full-Stack Developer"
                className={styles["header__logo-img"]}
              />
            </Link>
          </div>
          <div className={styles["header__nav-wrap"]}>
            <div className={styles["header__menu-icon"]} onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul
              className={click ? `${styles["header__nav-menu"]} ${styles["active"]}` : styles["header__nav-menu"]}
            >
              <li className={styles["header__nav-menu-item"]}>
                <Link
                  href="/#work"
                  className={styles["header__nav-menu-link"]}
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className={styles["header__nav-menu-item"]}>
                <Link
                  href="/#about"
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
