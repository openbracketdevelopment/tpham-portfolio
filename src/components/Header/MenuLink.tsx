"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./Header.module.scss";

type MenuLinkProps = { href: string; label: string; onClick: () => void };

export function MenuLink({ href, label, onClick }: MenuLinkProps) {
  const link = useRef<HTMLAnchorElement>(null);
  const animation = useRef<gsap.core.Timeline | null>(null);
  const letters = () => link.current?.querySelectorAll("[data-menu-letter]") ?? [];

  const play = () => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || animation.current?.isActive()) return;
    gsap.set(letters(), { clearProps: "opacity,transform" });
    const sequence = gsap.timeline();
    animation.current = sequence;
    // Hard on/off changes, with independent irregular timing per glyph.
    // No translation or easing: the text stays perfectly stationary.
    Array.from(letters()).forEach(letter => {
      const start = Math.random() * 0.18;
      sequence.set(letter, { opacity: 0 }, start)
        .set(letter, { opacity: 1 }, start + 0.035)
        .set(letter, { opacity: 0 }, start + 0.075 + Math.random() * 0.045)
        .set(letter, { opacity: 1 }, start + 0.14 + Math.random() * 0.1)
        .set(letter, { opacity: 0 }, start + 0.28 + Math.random() * 0.06)
        .set(letter, { opacity: 1, clearProps: "opacity" }, start + 0.38 + Math.random() * 0.1);
    });
  };
  const reset = () => {
    animation.current?.kill();
    gsap.set(letters(), { clearProps: "opacity,transform" });
  };
  useEffect(() => () => { animation.current?.kill(); }, []);

  return (
    <Link ref={link} href={href} aria-label={label} className={styles["header__nav-menu-link"]}
      onPointerEnter={event => { if (event.pointerType === "mouse") play(); }}
      onPointerLeave={reset} onFocus={play} onBlur={reset}
      onClick={() => { reset(); onClick(); }}>
      <span aria-hidden="true" className={styles["header__letters"]}>
        {Array.from(label).map((letter, index) => <span key={index} data-menu-letter>{letter === " " ? "\u00a0" : letter}</span>)}
      </span>
    </Link>
  );
}
