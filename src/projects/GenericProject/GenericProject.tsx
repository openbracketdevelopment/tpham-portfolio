"use client";

import Link from "next/link";
import styles from "../ProjectItem/ProjectItem.module.scss";
import { Button } from "../../components/Button/Button";

export type GenericProjectData = {
  workSites?: {
    name: string;
    description?: string;
    url: string;
    desktopImagePath: string;
    mobileImagePath: string;
    mobileViews?: { imagePath: string; alt: string; width?: number; height?: number }[];
  }[];
  workTitle: string;
  workLogo: string;
  workLiveLink: string;
  workImagePath: string;
  workHeroImagePath?: string;
  workHeroImageAlt?: string;
  workDescription: string;
  workHighlights: string[];
  workNarrative?: string[];
  workTimeFrame: string;
  workRole: string;
  workTechnology: string;
  workCategory: string;
};

function GenericProject({ data }: { data: GenericProjectData }) {
  return (
    <>
      <section className={styles["project__hero"]}>
        <div className={styles["project__img-wrap"]}>
          <img
            src={data.workHeroImagePath ?? data.workImagePath}
            alt={data.workHeroImageAlt ?? data.workTitle}
            title={data.workTitle}
            className={styles["project__img"]}
          />
        </div>
        <h1 className={styles["project__title"]}>
          <img src={data.workLogo} alt={data.workTitle} title={data.workTitle} />
        </h1>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__info"]}>
          <div className={styles["project__description"]}>
            <p>{data.workDescription}</p>
            {data.workNarrative?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={styles["project__technology"]}>
            <div className={styles["project__details"]}>
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{data.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{data.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{data.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{data.workCategory}</p>
              </div>
            </div>
          </div>
          <div className={styles["project__btns"]}>
            {data.workSites ? (
              <nav className={styles["project__site-links"]} aria-label="Live project websites">
                {data.workSites.map((site) => (
                  <a
                    className={styles["project__site-link"]}
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    key={site.url}
                  >
                    {site.name}
                  </a>
                ))}
              </nav>
            ) : (
              <Button btnLabel="See it Live" btnUrl={data.workLiveLink} btnTarget="_blank" />
            )}
          </div>
        </div>
      </section>
      {!data.workNarrative && (
        <section className={styles["project__container"]}>
          <div className={styles["project__description"]}>
            {data.workHighlights.map((h) => (
              <p key={h}>• {h}</p>
            ))}
          </div>
        </section>
      )}
      {data.workSites && (
        <section
          className={`${styles["project__container"]} ${styles["project__site-gallery"]}`}
          aria-label="Project websites"
        >
          {data.workSites.map((site) => (
            <section className={styles["project__site"]} key={site.name}>
              <div className={styles["project__site-heading"]}>
                <h4>{site.name}</h4>
                <a
                  className={styles["project__site-link"]}
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${site.name} website in a new tab`}
                >
                  Visit website
                </a>
              </div>
              {site.description && (
                <p className={styles["project__site-description"]}>{site.description}</p>
              )}
              <div
                className={`${styles["project__site-views"]} ${site.mobileViews ? styles["project__site-views-stacked"] : ""}`}
              >
                <figure className={styles["project__site-capture"]}>
                  <div className={styles["project__browser-head"]}>
                    <div className={styles["project__browser-head-wrap"]}>
                      <div className={`${styles["project__dot"]} ${styles["project__dot-1"]}`} />
                      <div className={`${styles["project__dot"]} ${styles["project__dot-2"]}`} />
                      <div className={`${styles["project__dot"]} ${styles["project__dot-3"]}`} />
                    </div>
                  </div>
                  <img
                    className={styles["project__desktop-image"]}
                    src={site.desktopImagePath}
                    alt={`${site.name} website at a 1440 by 1000 desktop viewport`}
                    width={1440}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div className={site.mobileViews ? styles["project__site-mobile-views"] : undefined}>
                  {(site.mobileViews ?? [{
                    imagePath: site.mobileImagePath,
                    alt: `${site.name} website at a 390 by 844 mobile viewport`,
                  }]).map((view) => (
                    <figure className={styles["project__site-capture"]} key={view.imagePath}>
                      <div className={styles["project__phone-frame"]}>
                        <img
                          className={styles["project__phone-image"]}
                          src={view.imagePath}
                          alt={view.alt}
                          width={view.width ?? 390}
                          height={view.height ?? 844}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </section>
      )}
      <section className={`${styles["project__container"]} ${styles["project__work-nav"]}`}>
        <Link href="/#work" className={styles["project__all-work-btn"]}>
          All Projects
        </Link>
      </section>
    </>
  );
}

export default GenericProject;
