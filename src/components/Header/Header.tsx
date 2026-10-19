"use client";

import React from "react";
import { useState } from "react";
// import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import "../../styles/globals.css";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__logo">
            <Link href="/" className="header_logo-link" onClick={closeMobileMenu}>
              <img
                src="/assets/images/logo.svg"
                alt="Tam Pham - Full-Stack Developer"
                className="header__logo-img"
              />
            </Link>
          </div>
          <div className="header__nav-wrap">
            <div className="header__menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul
              className={click ? "header__nav-menu active" : "header__nav-menu"}
            >
              <li className="header__nav-menu-item">
                <Link
                  href="/#work"
                  className="header__nav-menu-link"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="header__nav-menu-item">
                <Link
                  href="/#about"
                  className="header__nav-menu-link"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="header__nav-menu-item">
                <a
                  href="/assets/files/PHAMT_RESUME.pdf"
                  target="_blank"
                  className="header__nav-menu-link"
                  onClick={closeMobileMenu}
                >
                  Resume
                </a>
              </li>
              <li className="header__nav-menu-item header__nav-connect">
                <Link
                  href="/#connect"
                  className="header__nav-menu-link"
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
