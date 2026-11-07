import Image from "next/image";
import styles from "./About.module.scss";
import { MarqueeHeading } from "../MarqueeHeading/MarqueeHeading";
import { Button } from "../Button/Button";

function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div data-header-light data-page-intro className={styles.photo}>
        <Image sizes="(min-width: 1024px) 50vw, 100vw" src="/assets/images/headshot.jpg" alt="Tam Pham" width={800} height={1191} />
        <span className={styles.caption}>Tam Pham II / Fort Worth, TX</span>
      </div>
      <div className={styles.bio}>
        <div data-page-intro className={styles.copy}>
          <p className={styles.eyebrow}>A little about me</p>
          <MarqueeHeading
            as="h1"
            id="about-title"
            label="How are ya?"
            items={[
              "HOW ARE YA",
              "Yōkoso",
              "HOWDY",
              "BIENVENIDO",
              "WHATS GOING ON",
              { text: "Xin chào", lang: "vi" },
              "HELLER",
              "HOLA",
              "WELCOME",
              "COMO ESTA",
            ]}
            className={styles.greeting}
          />
          <p>
            I'm Tam, a software engineer and UI/UX designer based in Fort Worth,
            TX. With 11+ years of experience across full-stack development and
            digital design, I build websites, applications, and content platforms
            that pair thoughtful interfaces with reliable engineering. I bring
            an eye for design and a problem solver's mindset to every project.
          </p>

          <p>
            My expertise spans application architecture, responsive interfaces,
            API integrations, database-backed systems, and custom content
            management. I connect user journeys and information architecture
            with reusable components, accessible interactions, and maintainable
            code. Performance, testing, and dependable deployment are part of
            how I build from the start.
          </p>

          <p>
            I like untangling complex requirements and turning them into clear,
            practical solutions. I'm hands-on from discovery and prototyping
            through development, launch, and ongoing improvement, and I enjoy
            collaborating, mentoring, and making technical decisions that serve
            both the people using a product and the team maintaining it. Away
            from the keyboard, I enjoy video games and time with my family.
          </p>
          <div className={styles.actions}>
            <Button btnLabel="Resume" btnUrl="/resume" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
