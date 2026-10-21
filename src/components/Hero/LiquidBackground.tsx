"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./Hero.module.scss";

export function LiquidBackground() {
  const id = useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const ambientRef = useRef<SVGFEDisplacementMapElement>(null);
  const oilRef = useRef<SVGFEDisplacementMapElement>(null);
  const gradientRef = useRef<SVGRadialGradientElement>(null);
  const disturbanceRef = useRef<SVGImageElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = window.scrollY < window.innerHeight;
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let energy = 0;

    const render = (time: number) => {
      frame = requestAnimationFrame(render);
      if (time - lastTime < 1000 / 24) return;
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;
      elapsed += delta;
      const easing = 1 - Math.exp(-delta * 4);
      x += (targetX - x) * easing;
      y += (targetY - y) * easing;
      energy *= Math.exp(-delta * 1.4);

      ambientRef.current?.setAttribute("scale", String(18 + Math.sin(elapsed * 0.18) * 12));
      oilRef.current?.setAttribute("scale", String(45 + Math.sin(elapsed * 0.4) * 15));
      gradientRef.current?.setAttribute("cx", String(x));
      gradientRef.current?.setAttribute("cy", String(y));
      disturbanceRef.current?.setAttribute("opacity", String(energy * 0.65));
    };

    const update = () => {
      cancelAnimationFrame(frame);
      energy = 0;
      disturbanceRef.current?.setAttribute("opacity", "0");
      if (preference.matches) ambientRef.current?.setAttribute("scale", "0");
      if (!visible || document.hidden || preference.matches) return;
      lastTime = performance.now();
      frame = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      if (!visible || document.hidden || preference.matches || event.pointerType !== "mouse") return;
      const bounds = svg.getBoundingClientRect();
      const nextX = event.clientX - bounds.left;
      const nextY = event.clientY - bounds.top;
      if (nextX < 0 || nextY < 0 || nextX > bounds.width || nextY > bounds.height) return;
      energy = Math.min(1, energy + Math.hypot(nextX - targetX, nextY - targetY) / 350);
      targetX = nextX;
      targetY = nextY;
    };

    const onScroll = () => {
      const nextVisible = window.scrollY < window.innerHeight;
      if (nextVisible === visible) return;
      visible = nextVisible;
      update();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("visibilitychange", update);
    preference.addEventListener("change", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("visibilitychange", update);
      preference.removeEventListener("change", update);
    };
  }, []);

  return (
    <svg ref={svgRef} className={styles["hero__liquid"]} aria-hidden="true">
      <defs>
        <filter id={`${id}-drift`} x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="2" seed="8" result="noise" />
          <feDisplacementMap ref={ambientRef} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id={`${id}-oil`} x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.012" numOctaves="2" seed="12" result="noise" />
          <feDisplacementMap ref={oilRef} in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <radialGradient ref={gradientRef} id={`${id}-falloff`} gradientUnits="userSpaceOnUse" cx="0" cy="0" r="300">
          <stop offset="0" stopColor="white" />
          <stop offset="1" stopColor="black" />
        </radialGradient>
        <mask id={`${id}-cursor`}>
          <rect width="100%" height="100%" fill={`url(#${id}-falloff)`} />
        </mask>
      </defs>
      <g filter={`url(#${id}-drift)`}>
        <image href="/assets/images/abstract-bg.jpg" x="-3%" y="-3%" width="106%" height="106%" preserveAspectRatio="xMidYMid slice" />
        <g mask={`url(#${id}-cursor)`}>
          <image
            ref={disturbanceRef}
            href="/assets/images/abstract-bg.jpg"
            x="-3%"
            y="-3%"
            width="106%"
            height="106%"
            preserveAspectRatio="xMidYMid slice"
            filter={`url(#${id}-oil)`}
            opacity="0"
          />
        </g>
      </g>
    </svg>
  );
}
