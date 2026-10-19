"use client";

import React from "react";
import "../../styles/globals.css";
// import { Button } from "../../components/Button/Button";
import "../ProjectItem/ProjectItem.css";
import * as FaIcons from "react-icons/fa";
import Fancybox from "../Fancybox/Fancybox";
import Link from "next/link";

import CrownRoyalData from "../project-data/CrownRoyal.json";

function crownRoyal() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className="project__hero">
        <div className="project__img-wrap">
          <img
            src={CrownRoyalData.workImagePath}
            alt={CrownRoyalData.workTitle}
            title={CrownRoyalData.workTitle}
            className="project__img"
          />
        </div>

        <h1 className="project__title">
          <img
            src={CrownRoyalData.workLogo}
            alt={CrownRoyalData.workTitle}
            title={CrownRoyalData.workTitle}
          />
        </h1>
      </section>
      <section className="project__container">
        <div className="project__info">
          <div className="project__description">
            <p>{CrownRoyalData.workDescription}</p>
          </div>
          <div className="project__technology">
            <div className="project__details">
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{CrownRoyalData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{CrownRoyalData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{CrownRoyalData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{CrownRoyalData.workCategory}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project__container">
        <div className="project__section-heading">
          <h3>Play Video</h3>
        </div>
        <div className="project__logo-showcase project__logo-showcase-full">
          <Fancybox>
            <a
              className="project__video-link"
              data-fancybox
              href={CrownRoyalData.workDesktopClip}
            >
              <FaIcons.FaPlay className="project__video-icon" />
              <img
                src="/assets/images/crown-video-thumb.webp"
                alt="Crown Royal and NFL 2022"
              />
            </a>
          </Fancybox>
        </div>
      </section>
      {/* ALL WORK */}
      <section className="project__container project__work-nav">
        <Link
          href="/#work"
          className="project__all-work-btn"
        >
          All Projects
        </Link>
      </section>
    </>
  );
}

export default crownRoyal;
