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
                I'm an interactive developer and designer with 8+ years of
                professional experience. My focus is in creating unique and
                modern experiences for the web. I am based out of Fort Worth but
                I've worked in Dallas for most of my career.
              </p>

              <p>
                My skills as developer and designer make me a great communicator
                and an exceptional problem solver in branding and in the web
                space. I have collaborated with a diverse array of
                organizations, ranging from international corporations to
                non-profit entities, including Toro, Diageo, EarthX, Cintra
                Texpress, and Eagle Adventure Camps. My experiences span from
                envisioning a fresh website design and user experience for
                EarthX to developing secure Single Sign-On (SSO) applications
                tailored for the private infrastructure of Diageo.
              </p>

              <p>
                As a growing developer and quick learner, I'm alway on the look
                out for learning new technologies that could benefit the
                end-product. But aside from that, I'm either working on a DIY
                project at home, traveling, or spending time with my family.
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
