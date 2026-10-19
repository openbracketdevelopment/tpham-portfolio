"use client";

import styles from "./Connect.module.scss";
import React from "react";
// import { Link } from "react-router-dom";
import { Heading } from "../Heading/Heading";
import * as FaIcons from "react-icons/fa";
import { MqButton } from "../MqButton/MqButton";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

// const Mailto = ({ email, subject = "", body = "", children }) => {
//   let params = subject || body ? "?" : "";
//   if (subject) params += `subject=${encodeURIComponent(subject)}`;
//   if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

//   return <a href={`mailto:${email}${params}`}>{children}</a>;
// };

function Connect() {
  // const headingRef = useRef(null);
  // useEffect(() => {
  //   const workHeading = headingRef.current;

  //   const workHeader = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#connect",
  //       start: "top 80%",
  //       end: "bottom bottom",
  //       toggleActions: "restart none none none",
  //       scrub: true,
  //       pin: false,
  //       pinSpacing: false,
  //       markers: false,
  //     },
  //   });
  //   workHeader.fromTo(
  //     workHeading,
  //     {
  //       xPercent: 20,
  //     },
  //     {
  //       xPercent: -80,
  //       duration: 5,
  //       force3D: true,
  //       ease: "linear",
  //     }
  //   );
  // }, []);
  return (
    <>
      <section id="connect" className="connect__section section__wrap">
        <Heading
          rotationStyle="heading__rotate-none"
          headingStyle="heading__marquee-reverse"
          headingLabel="Let's Connect"
          // ref={headingRef}
          className="connect-header"
        />
        <div className={styles["connect__wrap"]}>
          <div className={styles["connect__container"]}>
            <div className={styles["connect__socials"]}>
              <a
                className={styles["connect__social-link"]}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/tamphamjr/"
              >
                <FaIcons.FaLinkedin />
              </a>
              <a
                className={styles["connect__social-link"]}
                target="_blank"
                rel="noreferrer"
                href="https://codepen.io/tampham"
              >
                <FaIcons.FaCodepen />
              </a>
              <a
                className={styles["connect__social-link"]}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/hm-tam"
              >
                <FaIcons.FaGithub />
              </a>
            </div>
            <div className={styles["connect__text"]}>
              <p>
                I'm always open for new opportunities and creative projects. If
                you have a project in mind, then let's work together. I'd love
                to hear your ideas.
              </p>
            </div>
            <div className={styles["connect__email"]}>
              <MqButton
                buttonLabel="Say Hello- Say Hello-"
                buttonImg="/assets/images/email.svg"
                buttonImgAlt="See Work"
                buttonLink="mailto:phamt@live.com"
                buttonId="mq__circle-path"
                buttonIdHashtag="#mq__circle-path"
              />
              {/* <Mailto
                email="tam@openbracket.io"
                subject="Hello"
                body="Hello world!"
              >
                Say Hello
              </Mailto> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Connect;
