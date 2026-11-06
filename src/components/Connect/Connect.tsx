import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { MqButton } from "../MqButton/MqButton";
import styles from "./Connect.module.scss";

function Connect() {
  return (
    <footer id="connect" className={styles["connect__section"]}>
      <div className={styles["connect__wrap"]}>
        <div className={styles["connect__container"]}>
          <div data-reveal className={styles["connect__content"]}>
            <div className={styles["connect__text"]}>
              <SectionHeading label="Let's" outlinedLabel="Connect" />
              <p>I'm always open for new opportunities and creative projects. If you have a project in mind, then let's work together. I'd love to hear your ideas.</p>
              <Link className={styles["connect__play"]} href="/connect">Or take a shot in the playground ↗</Link>
            </div>
            <div className={styles["connect__socials"]}>
              <a className={styles["connect__social-link"]} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tamphamjr/" aria-label="LinkedIn"><FaLinkedin /></a>
              <a className={styles["connect__social-link"]} target="_blank" rel="noreferrer" href="https://github.com/openbracketdevelopment" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>
          <div data-reveal className={styles["connect__email"]}>
            <MqButton buttonLabel="Say Hello- Say Hello-" buttonImg="/assets/images/email.svg" buttonImgAlt="Say hello by email" buttonLink="mailto:phamt@live.com" buttonId="mq__circle-path" buttonIdHashtag="#mq__circle-path" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Connect;
