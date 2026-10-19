"use client";

import React from "react";
import "../../styles/globals.css";
import "./Skills.css";
import { Heading } from "../Heading/Heading";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
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
      <section id="skills" className="skills__section section__wrap">
        <Heading
          rotationStyle="heading__rotate-none"
          headingStyle="heading__marquee-reverse"
          headingLabel="My Skills"
          // ref={headingRef}
          className="work-header"
        />
        <div className="skills__wrap">
          <div className="skills__skill">
            <h3>Development</h3>
            <p>
              Curabitur vestibulum aliquam leo. Sed aliquam ultrices mauris.
              Fusce fermentum. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
          <div className="skills__skill">
            <h3>Design</h3>
            <p>
              Curabitur vestibulum aliquam leo. Sed aliquam ultrices mauris.
              Fusce fermentum. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
          <div className="skills__skill">
            <h3>UI/UX</h3>
            <p>
              Curabitur vestibulum aliquam leo. Sed aliquam ultrices mauris.
              Fusce fermentum. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
          <div className="skills__skill">
            <h3>Video</h3>
            <p>
              Curabitur vestibulum aliquam leo. Sed aliquam ultrices mauris.
              Fusce fermentum. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
          <div className="skills__skill">
            <h3>Photography</h3>
            <p>
              Curabitur vestibulum aliquam leo. Sed aliquam ultrices mauris.
              Fusce fermentum. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
          <div className="skills__skill">
            <h3>Branding</h3>
            <p>
              Curabitur vestibulum aliquam leo. Sed aliquam ultrices mauris.
              Fusce fermentum. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
          <div className="skills__skill">
            <h3>Content</h3>
            <p>
              Curabitur vestibulum aliquam leo. Sed aliquam ultrices mauris.
              Fusce fermentum. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
          <div className="skills__skill">
            <h3>Development</h3>
            <p>
              Curabitur vestibulum aliquam leo. Sed aliquam ultrices mauris.
              Fusce fermentum. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
