import React from "react";
import "../App.css";
import "./Hero.css";
import { MqButton } from "./MqButton";
import TypedLabels from "./TypedLabels";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const bgRef = useRef(null);
  useEffect(() => {
    const heroBg = bgRef.current;

    const hero = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
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
      heroBg,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        duration: 2,
        ease: "linear",
      }
    );
  }, []);

  return (
    <>
      <div className="hero__background" ref={bgRef}></div>
      <div className="hero">
        <h1 className="hero__label">
          <span className="hero__intro-label">Hi, I'm Tam.</span>
          <TypedLabels />
        </h1>

        <div className="hero__btn">
          <MqButton
            buttonLabel="See Work - See Work - "
            buttonImg="/assets/images/triangle.svg"
            buttonImgAlt="See Work"
            buttonLink="#work"
            buttonId="mq__circle-path"
            buttonIdHashtag="#mq__circle-path"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
