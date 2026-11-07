import { ArrowIcon } from "../Graphics/Graphics";
import { destinations } from "../ConnectPlayground/targets";
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
            </div>
            <div className={styles["connect__socials"]}>
              {destinations.map(target => <a key={target.id} className={styles["connect__social-link"]} href={target.href} target={target.id === "email" ? undefined : "_blank"} rel={target.id === "email" ? undefined : "noreferrer"}>{target.label}<ArrowIcon /></a>)}
            </div>
          </div>
          <div data-reveal className={styles["connect__email"]}>
            <MqButton buttonLabel="Take a shot - Take a shot - " buttonImg="/assets/images/triangle.svg" buttonImgAlt="Take a shot in the playground" buttonLink="/connect" buttonId="mq__circle-path" buttonIdHashtag="#mq__circle-path" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Connect;
