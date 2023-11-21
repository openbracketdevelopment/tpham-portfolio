import React from "react";
import "../App.css";
import "./FeaturedWork.css";
// import { Link } from "react-router-dom";
import Tilty from "react-tilty";
import { Button } from "../components/Button";

const earthxData = require("../projects/project-data/Earthx");
const hmiData = require("../projects/project-data/Hmi");
const diageoData = require("../projects/project-data/Diageo");
const cintraData = require("../projects/project-data/Cintra");
const espsData = require("../projects/project-data/Esps");
const mwrData = require("../projects/project-data/Mwr");
const baileysData = require("../projects/project-data/Baileys");
const crownRoyalData = require("../projects/project-data/CrownRoyal");
const trinityRailData = require("../projects/project-data/Trinity");
const brainStylesData = require("../projects/project-data/BrainStyles");
const wilsonsSeafoodData = require("../projects/project-data/WilsonsSeafood");
const johnnieWalkerData = require("../projects/project-data/JohnnieWalker");

function FeaturedWork(props) {
  return (
    <>
      <div className="fwork__wrap">
        {/* Baileys */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={baileysData.workImagePath}
              alt={baileysData.workTitle}
              title={baileysData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={baileysData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={baileysData.workLogo}
                alt={baileysData.workTitle}
                title={baileysData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={baileysData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={baileysData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* CROWN ROYAL */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={crownRoyalData.workImagePath}
              alt={crownRoyalData.workTitle}
              title={crownRoyalData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={crownRoyalData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={crownRoyalData.workLogo}
                alt={crownRoyalData.workTitle}
                title={crownRoyalData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={crownRoyalData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={crownRoyalData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* JOHNNIE WALKER */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={johnnieWalkerData.workImagePath}
              alt={johnnieWalkerData.workTitle}
              title={johnnieWalkerData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={johnnieWalkerData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={johnnieWalkerData.workLogo}
                alt={johnnieWalkerData.workTitle}
                title={johnnieWalkerData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={johnnieWalkerData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={johnnieWalkerData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* DIAGEO */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={diageoData.workImagePath}
              alt={diageoData.workTitle}
              title={diageoData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={diageoData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={diageoData.workLogo}
                alt={diageoData.workTitle}
                title={diageoData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={diageoData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={diageoData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* EARTHX */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={earthxData.workImagePath}
              alt={earthxData.workTitle}
              title={earthxData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={earthxData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={earthxData.workLogo}
                alt={earthxData.workTitle}
                title={earthxData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={earthxData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={earthxData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* HM INTERACTIVE */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={hmiData.workImagePath}
              alt={hmiData.workTitle}
              title={hmiData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={hmiData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={hmiData.workLogo}
                alt={hmiData.workTitle}
                title={hmiData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={hmiData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={hmiData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* Cintra TexPress */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={cintraData.workImagePath}
              alt={cintraData.workTitle}
              title={cintraData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={cintraData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={cintraData.workLogo}
                alt={cintraData.workTitle}
                title={cintraData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={cintraData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={cintraData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* ESPS Trailers */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={espsData.workImagePath}
              alt={espsData.workTitle}
              title={espsData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={espsData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={espsData.workLogo}
                alt={espsData.workTitle}
                title={espsData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={espsData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={espsData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* Midwest Radiology */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={mwrData.workImagePath}
              alt={mwrData.workTitle}
              title={mwrData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={mwrData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={mwrData.workLogo}
                alt={mwrData.workTitle}
                title={mwrData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={mwrData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={mwrData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* Trinity Rail */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={trinityRailData.workImagePath}
              alt={trinityRailData.workTitle}
              title={trinityRailData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={trinityRailData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={trinityRailData.workLogo}
                alt={trinityRailData.workTitle}
                title={trinityRailData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={trinityRailData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={trinityRailData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* Brainstyles */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={brainStylesData.workImagePath}
              alt={brainStylesData.workTitle}
              title={brainStylesData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={brainStylesData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={brainStylesData.workLogo}
                alt={brainStylesData.workTitle}
                title={brainStylesData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
              <Button
                btnLabel="Live"
                btnUrl={brainStylesData.workLiveLink}
                btnTarget="_blank"
              />
              <Button btnLabel="More" btnUrl={brainStylesData.workMoreLink} />
            </div>
          </a>
        </Tilty>
        {/* Wilson's Seafood */}
        <Tilty
          className="fwork"
          reverse={true}
          scale={1}
          max={5}
          perspective={900}
          reset={true}
        >
          <div className="fwork__thumbnail">
            <img
              src={wilsonsSeafoodData.workImagePath}
              alt={wilsonsSeafoodData.workTitle}
              title={wilsonsSeafoodData.workTitle}
              className="fwork__img"
            />
          </div>
          <a className="fwork__info" href={wilsonsSeafoodData.workMoreLink}>
            <h3 className="fwork__title">
              <img
                src={wilsonsSeafoodData.workLogo}
                alt={wilsonsSeafoodData.workTitle}
                title={wilsonsSeafoodData.workTitle}
              />
            </h3>
            <div className="fwork__button-group">
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
          </a>
        </Tilty>
      </div>
    </>
  );
}

export default FeaturedWork;
