"use client";

import styles from "./Hero.module.scss";
import React from "react";
import Image from "next/image";
import { MqButton } from "../MqButton/MqButton";
import TypedLabels from "../TypedLabels/TypedLabels";
import { LiquidBackground } from "./LiquidBackground";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const bgRef = useRef(null);
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Touch scrolling should not drive a full-screen opacity repaint.
    if (window.matchMedia("(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      const hero = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top top",
          endTrigger: "#work",
          toggleActions: "restart none none none",
          scrub: 1,
          pin: false,
          markers: false,
        },
      });
      hero.fromTo(
        bgRef.current,
        {
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
          duration: 2,
          ease: "linear",
        }
      );
    });
    return () => context.revert();
  }, []);

  return (
    <>
      <div data-hero-background className={styles["hero__background"]} ref={bgRef}>
        <Image src="/assets/images/abstract-bg.webp" alt="" fill sizes="100vw" preload className={styles["hero__image"]} />
        <LiquidBackground />
      </div>
      <div data-hero className={styles["hero"]} ref={heroRef}>
        <div className={styles["hero__content"]}>
          <h1 data-hero-copy className={styles["hero__label"]}>
            <span className={styles["hero__intro-label"]}>Hi, I'm Tam.</span>
            <TypedLabels />
          </h1>
          <p data-hero-copy className={styles["hero__summary"]}>
            I build thoughtful web experiences and reliable software, from enterprise platforms to independent tools.
          </p>

          <div className={styles["hero__btn"]}>
            <MqButton
              buttonLabel="See Work - See Work - "
              buttonImg="/assets/images/triangle.svg"
              buttonImgAlt="See Work"
              buttonLink="#work"
              buttonId="hero__circle-path"
              buttonIdHashtag="#hero__circle-path"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
