"use client";

import { useEffect, useRef } from "react";
import styles from "./MarqueeHeading.module.scss";

type MarqueeHeadingProps = {
  id: string;
  label: string;
  reverse?: boolean;
  items?: (string | { text: string; lang: string })[];
  as?: "h1" | "h2";
  className?: string;
};

export function MarqueeHeading({ id, label, reverse = false, items, as: Tag = "h2", className = "" }: MarqueeHeadingProps) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const element = heading.current;
    if (!element) return;
    let visible = false;
    const update = () => element.toggleAttribute("data-running", visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);
  const phrases = items ?? [label, label];
  return (
    <Tag ref={heading} data-reveal={Tag === "h2" ? "" : undefined} id={id} className={`${styles.heading} ${className}`} aria-label={label}>
      <span className={`${styles.track} ${reverse ? styles.reverse : ""}`} aria-hidden="true">
        {[0, 1].map(copy => (
          <span key={copy} className={styles.group}>
            {phrases.map((phrase, index) => {
              const text = typeof phrase === "string" ? phrase : phrase.text;
              const lang = typeof phrase === "string" ? undefined : phrase.lang;
              return (
                <span key={`${index}-${text}`} className={styles.item}>
                  <span lang={lang} className={index % 2 === 0 ? styles.filled : styles.outlined}>{text}</span>
                  <span className={styles.star}>✳</span>
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </Tag>
  );
}
