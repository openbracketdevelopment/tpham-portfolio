import Link from "next/link";
import { Button } from "../../components/Button/Button";
import shared from "../ProjectItem/ProjectItem.module.scss";
import styles from "./Toro.module.scss";
import data from "../project-data/Toro.json";

function ScrollPreview({ name, video, mobile = false }: {
  name: string;
  video: string;
  mobile?: boolean;
}) {
  const label = `${name} ${mobile ? "mobile" : "desktop"} scroll video`;

  return (
    <figure className={mobile ? `${shared["project__phone-frame"]} ${styles.phone}` : styles.desktop}>
      {!mobile && (
        <div className={shared["project__browser-head"]} aria-hidden="true">
          <div className={shared["project__browser-head-wrap"]}>
            {[1, 2, 3].map((dot) => (
              <div key={dot} className={`${shared["project__dot"]} ${shared[`project__dot-${dot}`]}`} />
            ))}
          </div>
        </div>
      )}
      <div className={mobile ? `${shared["project__phone-screen"]} ${styles.phoneScreen}` : shared["project__desktop-piece"]}>
        {video ? (
          <video
            className={shared["project__video"]}
            src={video}
            muted
            loop
            autoPlay
            playsInline
            aria-label={label}
          >
            <a href={video}>Download {label}</a>
          </video>
        ) : (
          <div className={styles.placeholder} role="img" aria-label={`${label} placeholder`}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect x="3" y="7" width="34" height="26" rx="4" stroke="currentColor" />
              <path d="m17 14 10 6-10 6V14Z" stroke="currentColor" strokeLinejoin="round" />
            </svg>
            <span>{name}</span>
            <span className={styles.placeholderNote}>Scroll video coming soon</span>
          </div>
        )}
      </div>
    </figure>
  );
}

export default function Toro() {
  return (
    <>
      <section className={`${shared["project__hero"]} ${styles.hero}`}>
        <div className={shared["project__img-wrap"]}>
          <img
            className={shared["project__img"]}
            src={data.workMowerImagePath}
            alt="Red Toro Haven robotic mower on a landscaped lawn"
            width={1488}
            height={768}
            fetchPriority="high"
          />
        </div>
        <h1 className={`${shared["project__title"]} ${styles.title}`}>
          <img src={data.workLogo} alt="Toro Haven Smartyard" width={1000} height={205} />
        </h1>
      </section>

      <section className={shared["project__container"]}>
        <div className={shared["project__info"]}>
          <div className={shared["project__description"]}>
            <p>{data.workDescription}</p>
          </div>
          <div className={shared["project__technology"]}>
            <div className={shared["project__details"]}>
              {[
                ["Timeframe", data.workTimeFrame],
                ["Role", data.workRole],
                ["Platforms", data.workTechnology],
                ["Category", data.workCategory],
              ].map(([label, value]) => (
                <div key={label}>
                  <h3>{label}</h3>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={shared["project__btns"]}>
            <Button btnLabel="See it Live" btnUrl={data.workLiveLink} btnTarget="_blank" />
          </div>
        </div>
      </section>

      {data.workDesktopViews.slice(0, 1).map((view) => (
        <section key={view.name} className={shared["project__container"]} aria-label={`${view.name} desktop preview`}>
          <div className={shared["project__work-desktop"]}>
            <ScrollPreview {...view} />
          </div>
        </section>
      ))}

      <section className={shared["project__container-full"]} aria-label="Toro Haven website perspective showcase">
        <div className="project__work-wall">
          <img
            src="/assets/images/toro-screen-wall-perspective-2880.webp"
            alt="Angled collage of Toro Haven website pages featuring robotic mowers and smart yard products"
            width={2880}
            height={1800}
            loading="lazy"
          />
        </div>
      </section>

      {data.workDesktopViews.slice(1).map((view) => (
        <section key={view.name} className={shared["project__container"]} aria-label={`${view.name} desktop preview`}>
          <div className={shared["project__work-desktop"]}>
            <ScrollPreview {...view} />
          </div>
        </section>
      ))}

      <section className={shared["project__container"]} aria-label="Haven mobile previews">
        <div className={styles.mobileViews}>
          {data.workMobileViews.map((view) => <ScrollPreview key={view.name} {...view} mobile />)}
        </div>
      </section>

      <section className={shared["project__container-full"]} aria-label="Toro Haven desktop and mobile website showcase">
        <div className="project__work-wall">
          <img
            src="/assets/images/toro-desktop-mobile-examples-2880.webp"
            alt="Toro Haven desktop and mobile website layouts showing the homepage, mower features, and smart yard controls"
            width={2880}
            height={1920}
            loading="lazy"
          />
        </div>
      </section>

      <section className={`${shared["project__container"]} ${shared["project__work-nav"]}`}>
        <Link href="/#work" className={shared["project__all-work-btn"]}>All Projects</Link>
      </section>
    </>
  );
}
