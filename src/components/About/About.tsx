"use client";

import styles from "./About.module.scss";
import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Heading } from "../Heading/Heading";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  // const headingRef = useRef(null);
  // const leftDoorRef = useRef(null);
  // const rightDoorRef = useRef(null);
  // const photoRef = useRef(null);
  // useEffect(() => {
  //   const workHeading = headingRef.current;
  //   const leftDoor = leftDoorRef.current;
  //   const rightDoor = rightDoorRef.current;
  //   const aboutPhoto = photoRef.current;

  //   const workHeader = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#about",
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
  //       xPercent: -50,
  //     },
  //     {
  //       xPercent: 140,
  //       duration: 5,
  //       force3D: true,
  //       ease: "linear",
  //     }
  //   );

  //   // ScrollTrigger.matchMedia({
  //   //   // large
  //   //   "(min-width: 768px)": function () {
  //   //     const openDoors = gsap.timeline({
  //   //       scrollTrigger: {
  //   //         trigger: "#about",
  //   //         start: "top center",
  //   //         end: "bottom bottom",
  //   //         toggleActions: "restart none none none",
  //   //         scrub: true,
  //   //         pin: false,
  //   //         markers: false,
  //   //       },
  //   //     });
  //   //     openDoors.add("start").fromTo(
  //   //       leftDoor,
  //   //       {
  //   //         xPercent: -65,
  //   //       },
  //   //       {
  //   //         xPercent: -125,

  //   //         duration: 5,
  //   //         ease: "linear",
  //   //       },
  //   //       "start"
  //   //     );
  //   //     openDoors.fromTo(
  //   //       rightDoor,
  //   //       {
  //   //         xPercent: 0,
  //   //       },
  //   //       {
  //   //         xPercent: 100,

  //   //         duration: 5,
  //   //         ease: "linear",
  //   //       },
  //   //       "start"
  //   //     );
  //   //     openDoors.fromTo(
  //   //       aboutPhoto,
  //   //       {
  //   //         scale: 0.1,
  //   //       },
  //   //       {
  //   //         scale: 1,
  //   //         duration: 5,
  //   //         ease: "linear",
  //   //       },
  //   //       "start"
  //   //     );
  //   //   },

  //   //   // small
  //   //   "(max-width: 767px)": function () {
  //   //     const openDoors = gsap.timeline({
  //   //       scrollTrigger: {
  //   //         trigger: "#about",
  //   //         start: "top 70%",
  //   //         end: "center 50%",
  //   //         toggleActions: "restart none none none",
  //   //         scrub: true,
  //   //         pin: false,
  //   //         markers: false,
  //   //       },
  //   //     });
  //   //     openDoors.add("start").fromTo(
  //   //       leftDoor,
  //   //       {
  //   //         xPercent: 10,
  //   //       },
  //   //       {
  //   //         xPercent: -40,

  //   //         duration: 5,
  //   //         ease: "linear",
  //   //       },
  //   //       "start"
  //   //     );
  //   //     openDoors.fromTo(
  //   //       rightDoor,
  //   //       {
  //   //         xPercent: 30,
  //   //       },
  //   //       {
  //   //         xPercent: 150,

  //   //         duration: 5,
  //   //         ease: "linear",
  //   //       },
  //   //       "start"
  //   //     );
  //   //     openDoors.fromTo(
  //   //       aboutPhoto,
  //   //       {
  //   //         scale: 0.1,
  //   //       },
  //   //       {
  //   //         scale: 1.2,
  //   //         duration: 5,
  //   //         ease: "linear",
  //   //       },
  //   //       "start"
  //   //     );
  //   //   },
  //   //   // all
  //   //   all: function () {},
  //   // });
  // }, []);
  return (
    <>
      <section id="about" className={`${styles["about__section"]} section__wrap`}>
        <Heading
          rotationStyle="heading__rotate-none"
          headingStyle="heading__marquee-default"
          headingLabel="How Are Ya?"
          // ref={headingRef}
          className="about-header"
        />
        <div className={styles["about__wrap"]}>
          <div className={styles["about__container"]}>
            <div className={styles["about__photo"]}>
              {/* <div
                className={`${styles["about__left-door"]} about__door`}
                ref={leftDoorRef}
              ></div> */}
              <img
                src="/assets/images/headshot.jpg"
                alt="Tam Pham"
                className={styles["about__photo-image"]}
                // ref={photoRef}
              />
              {/* <div
                className={`${styles["about__right-door"]} about__door`}
                ref={rightDoorRef}
              ></div> */}
            </div>
            <div className={styles["about__bio"]}>
              <h4>
                If you made it this far, <br />
                then let me tell you a little about myself.
              </h4>
              <p>
                I'm a software engineer and designer with 11+ years of
                experience, based in Fort Worth, TX. I enjoy building clean,
                fast, and thoughtful web experiences that people actually like
                using.
              </p>

              <p>
                These days I work mostly with React, Next.js, and Craft CMS,
                creating headless content platforms and reusable UI that help
                engineering, design, and marketing teams move faster. At
                Amdocs, I led the build of the Craft CMS and Next.js sites
                behind Fidium Fiber.
              </p>

              <p>
                I'm a problem solver at heart who loves a good challenge and
                working closely with great teams. Outside of work, you'll find
                me learning new things as a software engineer, playing video
                games, or spending time with my family.
              </p>
              <br></br>
              <Button
                btnLabel="Resume"
                btnUrl="/resume"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
