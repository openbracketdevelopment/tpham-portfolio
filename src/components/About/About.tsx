"use client";

import styles from "./About.module.scss";
import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { SectionHeading } from "../SectionHeading/SectionHeading";
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
      <section id="about" className={styles["about__section"]}>
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
              <SectionHeading label="How Are" outlinedLabel="Ya?" />
              <p>
                I'm a software engineer based in Fort Worth, TX, with 11+ years
                of professional experience. I build web applications and content
                platforms, bringing a design background to practical engineering
                problems.
              </p>

              <p>
                At Amdocs, I lead Craft CMS development for the shared platform
                behind seven Fidium websites and applications, working with
                React, Next.js, TypeScript and PHP. I collaborate with engineering,
                marketing and cloud teams on delivery, testing and production support.
              </p>

              <p>
                Outside of client work, I develop useful tools that solve everyday
                problems and explore new ideas and technologies. AI is part of my
                toolkit, and I'm exploring how AI agents, LLMs and MCP can work
                together to automate useful workflows as the field evolves.
                Away from the keyboard, I enjoy playing video games and spending
                time with my family.
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
