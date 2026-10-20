"use client";

import Tilty from "react-tilty";
import styles from "../FeaturedWork/FeaturedWork.module.scss";
import { Button } from "../Button/Button";
import fidium from "../../projects/project-data/Fidium.json";
import toro from "../../projects/project-data/Toro.json";
import vetmotl from "../../projects/project-data/Vetmotl.json";

const items = [fidium, toro, vetmotl];

function LatestWork() {
  return (
    <>
      {items.map((item) => (
        <Tilty
          key={item.workMoreLink}
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={item.workImagePath}
              alt={item.workTitle}
              title={item.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={item.workMoreLink}
              aria-label={item.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img src={item.workLogo} alt={item.workTitle} title={item.workTitle} />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button btnLabel="Live" btnUrl={item.workLiveLink} btnTarget="_blank" />
              <Button btnLabel="More" btnUrl={item.workMoreLink} />
            </div>
          </div>
        </Tilty>
      ))}
    </>
  );
}

export default LatestWork;
