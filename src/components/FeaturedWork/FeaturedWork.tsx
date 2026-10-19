"use client";

import styles from "./FeaturedWork.module.scss";
import React from "react";
// import { Link } from "react-router-dom";
import Tilty from "react-tilty";
import { Button } from "../../components/Button/Button";

import earthxData from "../../projects/project-data/Earthx.json";
import hmiData from "../../projects/project-data/Hmi.json";
import diageoData from "../../projects/project-data/Diageo.json";
import cintraData from "../../projects/project-data/Cintra.json";
import espsData from "../../projects/project-data/Esps.json";
import mwrData from "../../projects/project-data/Mwr.json";
import baileysData from "../../projects/project-data/Baileys.json";
import crownRoyalData from "../../projects/project-data/CrownRoyal.json";
import trinityRailData from "../../projects/project-data/Trinity.json";
import brainStylesData from "../../projects/project-data/BrainStyles.json";
import wilsonsSeafoodData from "../../projects/project-data/WilsonsSeafood.json";
import johnnieWalkerData from "../../projects/project-data/JohnnieWalker.json";

function FeaturedWork() {
  return (
    <>
      <div className={styles["fwork__wrap"]}>
        {/* Baileys */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={baileysData.workImagePath}
              alt={baileysData.workTitle}
              title={baileysData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={baileysData.workMoreLink}
              aria-label={baileysData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={baileysData.workLogo}
                alt={baileysData.workTitle}
                title={baileysData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={baileysData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={baileysData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* CROWN ROYAL */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={crownRoyalData.workImagePath}
              alt={crownRoyalData.workTitle}
              title={crownRoyalData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={crownRoyalData.workMoreLink}
              aria-label={crownRoyalData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={crownRoyalData.workLogo}
                alt={crownRoyalData.workTitle}
                title={crownRoyalData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={crownRoyalData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={crownRoyalData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* JOHNNIE WALKER */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={johnnieWalkerData.workImagePath}
              alt={johnnieWalkerData.workTitle}
              title={johnnieWalkerData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={johnnieWalkerData.workMoreLink}
              aria-label={johnnieWalkerData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={johnnieWalkerData.workLogo}
                alt={johnnieWalkerData.workTitle}
                title={johnnieWalkerData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={johnnieWalkerData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={johnnieWalkerData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* DIAGEO */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={diageoData.workImagePath}
              alt={diageoData.workTitle}
              title={diageoData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={diageoData.workMoreLink}
              aria-label={diageoData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={diageoData.workLogo}
                alt={diageoData.workTitle}
                title={diageoData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={diageoData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={diageoData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* EARTHX */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={earthxData.workImagePath}
              alt={earthxData.workTitle}
              title={earthxData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={earthxData.workMoreLink}
              aria-label={earthxData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={earthxData.workLogo}
                alt={earthxData.workTitle}
                title={earthxData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={earthxData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={earthxData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* HM INTERACTIVE */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={hmiData.workImagePath}
              alt={hmiData.workTitle}
              title={hmiData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={hmiData.workMoreLink}
              aria-label={hmiData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={hmiData.workLogo}
                alt={hmiData.workTitle}
                title={hmiData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={hmiData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={hmiData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* Cintra TexPress */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={cintraData.workImagePath}
              alt={cintraData.workTitle}
              title={cintraData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={cintraData.workMoreLink}
              aria-label={cintraData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={cintraData.workLogo}
                alt={cintraData.workTitle}
                title={cintraData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={cintraData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={cintraData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* ESPS Trailers */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={espsData.workImagePath}
              alt={espsData.workTitle}
              title={espsData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={espsData.workMoreLink}
              aria-label={espsData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={espsData.workLogo}
                alt={espsData.workTitle}
                title={espsData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={espsData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={espsData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* Midwest Radiology */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={mwrData.workImagePath}
              alt={mwrData.workTitle}
              title={mwrData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={mwrData.workMoreLink}
              aria-label={mwrData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={mwrData.workLogo}
                alt={mwrData.workTitle}
                title={mwrData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={mwrData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={mwrData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* Trinity Rail */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={trinityRailData.workImagePath}
              alt={trinityRailData.workTitle}
              title={trinityRailData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={trinityRailData.workMoreLink}
              aria-label={trinityRailData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={trinityRailData.workLogo}
                alt={trinityRailData.workTitle}
                title={trinityRailData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={trinityRailData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={trinityRailData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* Brainstyles */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={brainStylesData.workImagePath}
              alt={brainStylesData.workTitle}
              title={brainStylesData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={brainStylesData.workMoreLink}
              aria-label={brainStylesData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={brainStylesData.workLogo}
                alt={brainStylesData.workTitle}
                title={brainStylesData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={brainStylesData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={brainStylesData.workMoreLink} />
            </div>
          </div>
        </Tilty>
        {/* Wilson's Seafood */}
        <Tilty
          className={styles["fwork"]}
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className={styles["fwork__thumbnail"]}>
            <img
              src={wilsonsSeafoodData.workImagePath}
              alt={wilsonsSeafoodData.workTitle}
              title={wilsonsSeafoodData.workTitle}
              className={styles["fwork__img"]}
            />
          </div>
          <div className={styles["fwork__info"]}>
            <a
              className={styles["fwork__link"]}
              href={wilsonsSeafoodData.workMoreLink}
              aria-label={wilsonsSeafoodData.workTitle}
            />
            <h3 className={styles["fwork__title"]}>
              <img
                src={wilsonsSeafoodData.workLogo}
                alt={wilsonsSeafoodData.workTitle}
                title={wilsonsSeafoodData.workTitle}
              />
            </h3>
            <div className={styles["fwork__button-group"]}>
              <Button
                btnLabel="Live"
                btnUrl={wilsonsSeafoodData.workLiveLink}
                btnTarget="_blank"
              />
              <Button
                btnLabel="More"
                btnUrl={wilsonsSeafoodData.workMoreLink}
              />
            </div>
          </div>
        </Tilty>
      </div>
    </>
  );
}

export default FeaturedWork;
