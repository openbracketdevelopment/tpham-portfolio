"use client";

import styles from "./Header.module.scss";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { MenuLink } from "./MenuLink";
// import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../Logo/Logo";

function Header() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";
  const header = useRef<HTMLElement>(null);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const element = header.current;
    if (!element) return;
    let previous = Math.max(0, window.scrollY);
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - previous;
      if (Math.abs(delta) > 5 || y < 30) {
        element.dataset.scrollHidden = String(!click && y > 80 && delta > 0);
        previous = y;
      }
      const photo = document.querySelector('[data-header-light]');
      const bounds = photo?.getBoundingClientRect();
      element.dataset.lightSurface = String(isAbout && !!bounds && bounds.top < 50 && bounds.bottom > 50);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    if (click) element.dataset.scrollHidden = "false";
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [pathname, isAbout, click]);

  return (
    <>
      <header ref={header} className={`${styles["header"]} ${isAbout ? styles["header--about"] : ""}`} data-menu-open={click}>
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
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{click ? <path d="m5 5 18 18M23 5 5 23" /> : <path d="M3 6h22M3 14h22M3 22h22" />}</svg>
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
