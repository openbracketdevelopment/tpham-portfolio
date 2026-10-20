"use client";

import Link from "next/link";
import styles from "../ProjectItem/ProjectItem.module.scss";
import { Button } from "../../components/Button/Button";

export type GenericProjectData = {
  workTitle: string;
  workLogo: string;
  workLiveLink: string;
  workImagePath: string;
  workDescription: string;
  workHighlights: string[];
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
            src={data.workImagePath}
            alt={data.workTitle}
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
            <Button btnLabel="See it Live" btnUrl={data.workLiveLink} btnTarget="_blank" />
          </div>
        </div>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Highlights</h3>
        </div>
        <div className={styles["project__description"]}>
          {data.workHighlights.map((h) => (
            <p key={h}>• {h}</p>
          ))}
        </div>
      </section>
      <section className={`${styles["project__container"]} ${styles["project__work-nav"]}`}>
        <Link href="/#work" className={styles["project__all-work-btn"]}>
          All Projects
        </Link>
      </section>
    </>
  );
}

export default GenericProject;
