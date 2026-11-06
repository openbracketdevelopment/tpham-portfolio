"use client";

import styles from "./TypedLabels.module.scss";
import React from "react";
import Typed from "typed.js";

const TypedLabels = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef<HTMLSpanElement>(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "Software Engineer^1000",
        "<span style='color:var(--color-06);'>Full-Stack Developer</span>^1000",
        "<span style='color:var(--color-01);'>Problem Solver</span>^3000",
      ],
      typeSpeed: 70,
      backSpeed: 80,
      loop: true,
    };

    // Start independently: an interrupted intro must never leave this empty.
    typed.current = new Typed(el.current as HTMLSpanElement, {
      ...options,
      startDelay: document.documentElement.hasAttribute("data-intro-active") ? 2200 : 0,
    });

    return () => {
      typed.current?.destroy();
      typed.current = null;
    };
  }, []);

  return <span className={styles["typed__big-text"]} ref={el} />;
};

export default TypedLabels;
