"use client";

import styles from "./Connect.module.scss";
import React from "react";
// import { Link } from "react-router-dom";
import { SectionHeading } from "../SectionHeading/SectionHeading";
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
      <section id="connect" className={styles["connect__section"]}>
        <div className={styles["connect__wrap"]}>
          <div className={styles["connect__container"]}>
            <div className={styles["connect__content"]}>
              <div className={styles["connect__text"]}>
                <SectionHeading label="Let's" outlinedLabel="Connect" />
                <p>
                  I'm always open for new opportunities and creative projects. If
                  you have a project in mind, then let's work together. I'd love
                  to hear your ideas.
                </p>
              </div>
              <div className={styles["connect__socials"]}>
                <a
                  className={styles["connect__social-link"]}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/tamphamjr/"
                  aria-label="LinkedIn"
                >
                  <FaIcons.FaLinkedin />
                </a>
                <a
                  className={styles["connect__social-link"]}
                  target="_blank"
                  rel="noreferrer"
                  href="https://codepen.io/tampham"
                  aria-label="CodePen"
                >
                  <FaIcons.FaCodepen />
                </a>
                <a
                  className={styles["connect__social-link"]}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hm-tam"
                  aria-label="GitHub"
                >
                  <FaIcons.FaGithub />
                </a>
              </div>
            </div>
            <div className={styles["connect__email"]}>
              <MqButton
                buttonLabel="Say Hello- Say Hello-"
                buttonImg="/assets/images/email.svg"
                buttonImgAlt="Say hello by email"
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
