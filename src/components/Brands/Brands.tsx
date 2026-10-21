"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { FaAws, FaSlack, FaTerminal } from "react-icons/fa";
import {
  TbBrandAdobeAfterEffect,
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
  TbBrandAdobePremiere,
  TbBrandAdobeXd,
  TbBrandOpenai,
} from "react-icons/tb";
import {
  SiBitbucket,
  SiBlender,
  SiClaudecode,
  SiCraftcms,
  SiDocker,
  SiDrupal,
  SiDynatrace,
  SiFigma,
  SiGithub,
  SiGithubcopilot,
  SiGitlab,
  SiGraphql,
  SiJest,
  SiJira,
  SiKubernetes,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiOkta,
  SiPayloadcms,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiSass,
  SiShadcnui,
  SiSplunk,
  SiStatamic,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./Brands.module.scss";

type Brand = { name: string; logo?: string; icon?: IconType };

const brands: Brand[] = [
  { name: "Fidium", logo: "/assets/images/project-fidium-logo.svg" },
  { name: "Fluval" },
  { name: "Nutrience" },
  { name: "Toro", logo: "/assets/images/project-toro-logo.svg" },
  { name: "Diageo", logo: "/assets/images/client-logos_Diageo.svg" },
  { name: "EarthX", logo: "/assets/images/client-logos_EarthX.svg" },
  { name: "Baileys", logo: "/assets/images/baileys-logo.png" },
  { name: "Crown Royal", logo: "/assets/images/crown-royal-logo.svg" },
  { name: "Johnnie Walker", logo: "/assets/images/johnniewalker-logo.png" },
  { name: "Trinity Rail", logo: "/assets/images/trinity-rail-logo.svg" },
  { name: "Wilson's Seafood", logo: "/assets/images/ws-logo.svg" },
  { name: "Brain Styles", logo: "/assets/images/brainstyles-logo.png" },
  { name: "ESPS Trailer Parts", logo: "/assets/images/esps-logo.svg" },
  { name: "TEXpress", logo: "/assets/images/client-logos_TexPress.svg" },
  { name: "Holmes Millet", logo: "/assets/images/client-logos_HM_Interactive.svg" },
  { name: "VETMOTL", logo: "/assets/images/project-vetmotl-logo.svg" },
  { name: "Amdocs" },
  { name: "Linchpin" },
  { name: "Planit Advertising" },
  { name: "Gorilla Pro" },
];

const platforms: Brand[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redis", icon: SiRedis },
  { name: "Craft CMS", icon: SiCraftcms },
  { name: "WordPress", icon: SiWordpress },
  { name: "Drupal", icon: SiDrupal },
  { name: "Payload CMS", icon: SiPayloadcms },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "shadcn/ui", icon: SiShadcnui },
  { name: "MUI", icon: SiMui },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Amazon Web Services", icon: FaAws },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "GitLab", icon: SiGitlab },
  { name: "GitHub", icon: SiGithub },
  { name: "Bitbucket", icon: SiBitbucket },
  { name: "TypeScript", icon: SiTypescript },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Docker", icon: SiDocker },
  { name: "Nginx", icon: SiNginx },
  { name: "Storybook", icon: SiStorybook },
  { name: "Jest", icon: SiJest },
  { name: "PHP", icon: SiPhp },
  { name: "Sass", icon: SiSass },
  { name: "MySQL", icon: SiMysql },
  { name: "Jira", icon: SiJira },
  { name: "Figma", icon: SiFigma },
  { name: "Statamic", icon: SiStatamic },
  { name: "Okta", icon: SiOkta },
  { name: "WooCommerce", icon: SiWoocommerce },
  { name: "GitHub Copilot", icon: SiGithubcopilot },
  { name: "Photoshop", icon: TbBrandAdobePhotoshop },
  { name: "Illustrator", icon: TbBrandAdobeIllustrator },
  { name: "Adobe XD", icon: TbBrandAdobeXd },
  { name: "Premiere Pro", icon: TbBrandAdobePremiere },
  { name: "Postman", icon: SiPostman },
  { name: "After Effects", icon: TbBrandAdobeAfterEffect },
  { name: "ChatGPT", icon: TbBrandOpenai },
  { name: "Claude Code", icon: SiClaudecode },
  { name: "Blender", icon: SiBlender },
  { name: "Dynatrace", icon: SiDynatrace },
  { name: "Splunk", icon: SiSplunk },
  { name: "Oh My Zsh", icon: FaTerminal },
  { name: "Slack", icon: FaSlack },
  { name: "Lightroom" },
];

const allItems = [...brands, ...platforms];
const initialTiles = brands.slice(0, 9).flatMap((brand, index) => [brand, platforms[index]]);

function Brands() {
  const [tiles, setTiles] = useState(initialTiles);
  const [changingIndex, setChangingIndex] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tabletViewport = window.matchMedia("(min-width: 768px)");
    const desktopViewport = window.matchMedia("(min-width: 1024px)");
    let visible = false;
    let rotationTimer: ReturnType<typeof setTimeout>;
    let transitionTimer: ReturnType<typeof setTimeout>;

    const stop = () => {
      clearTimeout(rotationTimer);
      clearTimeout(transitionTimer);
      setChangingIndex(null);
    };

    const schedule = () => {
      rotationTimer = setTimeout(() => {
        const visibleTileCount = desktopViewport.matches ? initialTiles.length : tabletViewport.matches ? 12 : 4;
        const index = Math.floor(Math.random() * visibleTileCount);
        setChangingIndex(index);
        transitionTimer = setTimeout(() => {
          setTiles((current) => {
            const available = allItems.filter(
              (item) => !current.some((tile) => tile.name === item.name),
            );
            const replacement = available[Math.floor(Math.random() * available.length)];
            return current.map((tile, tileIndex) => tileIndex === index ? replacement : tile);
          });
          setChangingIndex(null);
          schedule();
        }, reducedMotion ? 0 : 800);
      }, 4000 + Math.random() * 4000);
    };

    const updateRotation = () => {
      stop();
      if (visible && !document.hidden) schedule();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateRotation();
    });
    observer.observe(section);
    document.addEventListener("visibilitychange", updateRotation);
    tabletViewport.addEventListener("change", updateRotation);
    desktopViewport.addEventListener("change", updateRotation);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateRotation);
      tabletViewport.removeEventListener("change", updateRotation);
      desktopViewport.removeEventListener("change", updateRotation);
      clearTimeout(rotationTimer);
      clearTimeout(transitionTimer);
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className={styles["brands"]} aria-labelledby="brands-title">
      <SectionHeading
        id="brands-title"
        label="Brands & tools"
        outlinedLabel="I've worked with"
      />
      <ul className={styles["brands__grid"]}>
        {tiles.map((brand, index) => {
          const Icon = brand.icon;
          return (
            <li key={index} className={styles["brands__item"]}>
              <div
                className={`${styles["brands__content"]} ${changingIndex === index ? styles["brands__content--changing"] : ""}`}
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={styles["brands__logo"]}
                    width={160}
                    height={64}
                    loading="lazy"
                  />
                ) : Icon ? (
                  <>
                    <Icon className={styles["brands__icon"]} aria-hidden="true" />
                    <span className={styles["brands__label"]}>{brand.name}</span>
                  </>
                ) : (
                  <span className={styles["brands__word"]}>{brand.name}</span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Brands;
