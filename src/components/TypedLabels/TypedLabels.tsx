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
    const element = el.current;
    if (!element) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
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

    const update = () => {
      if (preference.matches) {
        typed.current?.destroy();
        typed.current = null;
        element.textContent = "Software Engineer";
        return;
      }
      if (!typed.current) {
        element.textContent = "";
        typed.current = new Typed(element, {
          ...options,
          startDelay: document.documentElement.hasAttribute("data-intro-active") ? 2200 : 0,
        });
      }
      if (visible && !document.hidden) typed.current.start();
      else typed.current.stop();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    preference.addEventListener("change", update);
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      preference.removeEventListener("change", update);
      typed.current?.destroy();
      typed.current = null;
    };
  }, []);

  return <span className={styles["typed__big-text"]} ref={el} />;
};

export default TypedLabels;
