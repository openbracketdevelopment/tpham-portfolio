import React from "react";
import "../App.css";
import "./About.css";
// import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "./Heading";
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
      <section id="about" className="about__section section__wrap">
        <Heading
          rotationStyle="heading__rotate-none"
          headingStyle="heading__marquee-default"
          headingLabel="How Are Ya?"
          // ref={headingRef}
          className="about-header"
        />
        <div className="about__wrap">
          <div className="about__container">
            <div className="about__photo">
              {/* <div
                className="about__left-door about__door"
                ref={leftDoorRef}
              ></div> */}
              <img
                src="/assets/images/TAM_HEADSHOT_BW-3.webp"
                alt="Tam Pham"
                className="about__photo-image"
                // ref={photoRef}
              />
              {/* <div
                className="about__right-door about__door"
                ref={rightDoorRef}
              ></div> */}
            </div>
            <div className="about__bio">
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
                space. I've worked with a wide range of companies such as
                international to non-profit organizations that include - Diageo,
                EarthX, Cintra Texpress and Eagle Adventure Camps. From
                re-imagining the website design and experience for EarthX to
                building a private Single sign-on (SSO) applications for Diageo.
              </p>

              <p>
                As a growing developer and quick learner, I'm alway on the look
                out for learning newer technologies that could benefit the
                end-product. But aside from that, I'm either working on a DIY
                project at home, traveling, or spending time with my family.
              </p>
              <br></br>
              <Button
                btnLabel="Resume"
                btnUrl="/assets/files/PHAMT_RESUME.pdf"
                btnTarget="_blank"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
