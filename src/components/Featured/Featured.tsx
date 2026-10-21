"use client";

import React from "react";
import FeaturedWork from "../FeaturedWork/FeaturedWork";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Featured() {
  // const headingRef = useRef(null);
  // useEffect(() => {
  //   const workHeading = headingRef.current;

  //   const workHeader = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#work",
  //       start: "top 80%",
  //       end: "+=3500",
  //       toggleActions: "restart none none none",
  //       scrub: true,
  //       pin: false,
  //       markers: false,
  //     },
  //   });
  //   workHeader.fromTo(
  //     workHeading,
  //     {
  //       xPercent: -20,
  //     },
  //     {
  //       xPercent: -120,
  //       duration: 5,
  //       force3D: true,
  //       ease: "linear",
  //     }
  //   );
  // }, []);
  return (
    <>
      <section id="work" className="featured__section">
        <FeaturedWork />
      </section>
    </>
  );
}

export default Featured;
