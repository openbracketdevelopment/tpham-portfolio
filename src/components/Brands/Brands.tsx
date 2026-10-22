"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { FaAws, FaSlack } from "react-icons/fa";
import {
  TbBrandOpenai,
} from "react-icons/tb";
import {
  SiBitbucket,
  SiNetlify,
  SiVercel,
  SiWpengine,
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
  SiZsh,
} from "react-icons/si";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./Brands.module.scss";

type Brand = {
  name: string;
  logo?: string;
  icon?: IconType;
  keepTones?: boolean;
  productLogo?: boolean;
  hideLabel?: boolean;
};

const brands: Brand[] = [
  { name: "Fidium", logo: "/assets/images/fidium-logo.svg" },
  { name: "Toro Haven", logo: "/assets/images/toro-haven-logo.webp", keepTones: true },
  { name: "Diageo", logo: "/assets/images/client-logos_Diageo.svg" },
  { name: "Johns Hopkins University", logo: "/assets/images/johns-hopkins-university-logo.svg" },
  { name: "Crown Royal", logo: "/assets/images/crown-royal-logo.svg" },
  { name: "Fluval Aquatics", logo: "/assets/images/logo-fluval.svg" },
  { name: "Nutrience", logo: "/assets/images/nutrience-logo.svg" },
  { name: "Johnnie Walker", logo: "/assets/images/johnniewalker-logo.png" },
  { name: "Haynes Boone", logo: "/assets/images/haynesboone-logo.svg" },
  { name: "Baileys", logo: "/assets/images/baileys-logo.png" },
  { name: "Captain Morgan", logo: "/assets/images/captain-morgan-logo.webp" },
  { name: "Trinity Rail", logo: "/assets/images/trinity-logo.svg" },
  { name: "Curaleaf", logo: "/assets/images/curaleaf-logo-transparent.webp" },
  { name: "Cricketeer", logo: "/assets/images/cricketeer-logo.svg" },
  { name: "EarthX", logo: "/assets/images/client-logos_EarthX.svg" },
  { name: "VetMotl", logo: "/assets/images/VetMotl_Logo_Reg.svg" },
  { name: "Midwest Radiology", logo: "/assets/images/midwest-radiology-logo.svg" },
  { name: "Ladd Gardner Aviation Insurance", logo: "/assets/images/lga-logo-sticky-patriot.png" },
  { name: "Omnia Exterior Solutions", logo: "/assets/images/omnia-reversed.svg" },
  { name: "Bestolife", logo: "/assets/images/bestolife-logo.avif" },
  { name: "Founders Row", logo: "/assets/images/foundersrow-logo.png" },
  { name: "Eagle Adventure Camps", logo: "/assets/images/eagle-adventure-camps-logo.svg" },
  { name: "Sargent Law", logo: "/assets/images/sargent-law-logo.png" },
  { name: "Leasing Impressions", logo: "/assets/images/leasing-impressions-logo.svg" },
  { name: "Black Bear Woodcraft", logo: "/assets/images/black-bear-woodcraft-logo.svg" },
  { name: "Wilson's Seafood", logo: "/assets/images/ws-logo.svg" },
  { name: "Brain Styles", logo: "/assets/images/brainstyles-logo.png" },
  { name: "ESPS Trailers", logo: "/assets/images/esps-logo.svg" },
  { name: "TEXpress", logo: "/assets/images/client-logos_TexPress.svg" },
  { name: "Automated Food Systems", logo: "/assets/images/afs-logo.svg" },
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
  { name: "Amazon Web Services", icon: FaAws, hideLabel: true },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "WP Engine", icon: SiWpengine },
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
  { name: "PHP", icon: SiPhp, hideLabel: true },
  { name: "Sass", icon: SiSass, hideLabel: true },
  { name: "MySQL", icon: SiMysql, hideLabel: true },
  { name: "Jira", icon: SiJira },
  { name: "Figma", icon: SiFigma },
  { name: "Statamic", icon: SiStatamic },
  { name: "Okta", icon: SiOkta },
  { name: "WooCommerce", icon: SiWoocommerce, hideLabel: true },
  { name: "GitHub Copilot", icon: SiGithubcopilot },
  { name: "Photoshop", logo: "/assets/images/adobe-photoshop.svg", productLogo: true },
  { name: "Illustrator", logo: "/assets/images/adobe-illustrator.svg", productLogo: true },
  { name: "Adobe XD", logo: "/assets/images/adobe-xd.svg", productLogo: true },
  { name: "Premiere Pro", logo: "/assets/images/adobe-premierepro.svg", productLogo: true },
  { name: "Postman", icon: SiPostman },
  { name: "After Effects", logo: "/assets/images/adobe-aftereffects.svg", productLogo: true },
  { name: "ChatGPT", icon: TbBrandOpenai },
  { name: "Claude Code", icon: SiClaudecode },
  { name: "Blender", icon: SiBlender },
  { name: "Dynatrace", icon: SiDynatrace },
  { name: "Splunk", icon: SiSplunk, hideLabel: true },
  { name: "Oh My Zsh", icon: SiZsh },
  { name: "Slack", icon: FaSlack },
  { name: "Lightroom", logo: "/assets/images/adobe-lightroom.svg", productLogo: true },
];

const allItems = [...brands, ...platforms];
const GLITCH_OUT_MS = 480;
const GLITCH_IN_MS = 560;
const initialTiles = brands.slice(0, 9).flatMap((brand, index) => [brand, platforms[index]]);

function Brands() {
  const [tiles, setTiles] = useState(initialTiles);
  const [glitch, setGlitch] = useState<{ index: number; phase: "out" | "in" } | null>(null);
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
      setGlitch(null);
    };

    const schedule = () => {
      rotationTimer = setTimeout(() => {
        const visibleTileCount = desktopViewport.matches ? initialTiles.length : tabletViewport.matches ? 12 : 4;
        const index = Math.floor(Math.random() * visibleTileCount);
        const swap = () => setTiles((current) => {
          const available = allItems.filter(
            (item) => !current.some((tile) => tile.name === item.name),
          );
          const replacement = available[Math.floor(Math.random() * available.length)];
          return current.map((tile, tileIndex) => tileIndex === index ? replacement : tile);
        });

        if (reducedMotion) {
          swap();
          schedule();
          return;
        }

        setGlitch({ index, phase: "out" });
        transitionTimer = setTimeout(() => {
          swap();
          setGlitch({ index, phase: "in" });
          transitionTimer = setTimeout(() => {
            setGlitch(null);
            schedule();
          }, GLITCH_IN_MS);
        }, GLITCH_OUT_MS);
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
        align="center"
      />
      <svg className={styles["brands__filters"]} aria-hidden="true" focusable="false">
        <defs>
          {[11, 47, 83, 129].map((seed, index) => (
            <filter key={seed} id={`brands-static-${index + 1}`} x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.01 0.6" numOctaves="1" seed={seed} result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={14 + index * 4} xChannelSelector="R" yChannelSelector="G" />
            </filter>
          ))}
        </defs>
      </svg>
      <ul className={styles["brands__grid"]}>
        {tiles.map((brand, index) => {
          const Icon = brand.icon;
          const phase = glitch?.index === index ? glitch.phase : null;
          return (
            <li
              key={index}
              className={`${styles["brands__item"]} ${phase ? styles["brands__item--glitching"] : ""}`}
              aria-label={brand.name}
            >
              <div
                className={`${styles["brands__content"]} ${phase ? styles[`brands__content--glitch-${phase}`] : ""}`}
              >
                {brand.logo ? (
                  <>
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={`${styles["brands__logo"]} ${brand.keepTones ? styles["brands__logo--tones"] : ""} ${brand.productLogo ? styles["brands__logo--product"] : ""}`}
                      width={160}
                      height={64}
                      loading="lazy"
                    />
                    {brand.productLogo && <span className={styles["brands__label"]}>{brand.name}</span>}
                  </>
                ) : Icon ? (
                  <>
                    <Icon className={styles["brands__icon"]} aria-hidden="true" />
                    {!brand.hideLabel && <span className={styles["brands__label"]}>{brand.name}</span>}
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
