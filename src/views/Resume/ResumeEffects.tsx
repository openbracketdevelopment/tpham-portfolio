"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./ResumeEffects.module.scss";

type Stream = { x: number; y: number; age: number; life: number; speed: number; digits: string[]; delay: number };

export function ResumeEffects() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const root = canvas.current?.closest("[data-resume]");
    if (!root) return;
    const media = gsap.matchMedia();
    media.add("screen and (prefers-reduced-motion: no-preference)", () => {
      const elements = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(
        "header, section:not(:has(article)), section:has(article) > h2, section:has(article) > p, article",
      ));
      if (!elements.length) return;
      const visible = elements.filter(element => {
        const r = element.getBoundingClientRect();
        return r.top < innerHeight && r.bottom > 0;
      });
      const offscreen = elements.filter(element => element.getBoundingClientRect().top >= innerHeight);
      const context = gsap.context(() => {
        if (visible.length) gsap.from(visible, {
          opacity: 0, y: 20, duration: 0.8, stagger: 0.09, ease: "power3.out", clearProps: "opacity,transform",
        });
        if (offscreen.length) gsap.set(offscreen, { autoAlpha: 0, y: 24 });
      });
      const observer = new IntersectionObserver(entries => {
        const entering = entries.filter(entry => entry.isIntersecting).map(entry => entry.target);
        if (!entering.length) return;
        entering.forEach(element => observer.unobserve(element));
        context.add(() => gsap.to(entering, {
          autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out",
          clearProps: "opacity,visibility,transform",
        }));
      }, { threshold: 0.05 });
      offscreen.forEach(element => observer.observe(element));
      return () => { observer.disconnect(); context.revert(); };
    });
    return () => media.revert();
  }, []);

  useEffect(() => {
    const element = canvas.current;
    const ctx = element?.getContext("2d");
    if (!element || !ctx) return;
    let width = innerWidth;
    let height = innerHeight;
    let frame = 0;
    let last = 0;
    let streams: Stream[] = [];
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const print = matchMedia("print");
    const create = (delay = 0): Stream => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.85,
      age: 0, life: 4 + Math.random() * 5, speed: 8 + Math.random() * 12, delay,
      digits: Array.from({ length: 4 + Math.floor(Math.random() * 5) }, () => String(Math.floor(Math.random() * 10))),
    });
    const resize = () => {
      width = innerWidth;
      height = innerHeight;
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      element.width = Math.round(width * dpr);
      element.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      streams = Array.from({ length: preference.matches ? 2 : width < 768 ? 3 : 6 }, (_, index) => create(index * 0.8));
    };
    const draw = (time: number) => {
      frame = requestAnimationFrame(draw);
      if (time - last < 1000 / 18) return;
      const delta = Math.min((time - last) / 1000, 0.15);
      last = time;
      ctx.clearRect(0, 0, width, height);
      ctx.font = "12px monospace";
      ctx.textBaseline = "top";
      streams.forEach((stream, index) => {
        if (stream.delay > 0) { stream.delay -= delta; return; }
        stream.age += delta;
        stream.y += stream.speed * delta * (preference.matches ? 0.5 : 1);
        if (stream.age >= stream.life || stream.y > height + 150) {
          streams[index] = create(1 + Math.random() * 4);
          return;
        }
        const envelope = Math.min(1, stream.age / 1.5, (stream.life - stream.age) / 1.5);
        stream.digits.forEach((digit, row) => {
          if (Math.random() < 0.015) stream.digits[row] = String(Math.floor(Math.random() * 10));
          const opacity = envelope * (0.025 + (row / stream.digits.length) * 0.09);
          ctx.fillStyle = `rgba(127, 233, 224, ${opacity})`;
          ctx.fillText(digit, stream.x, stream.y - row * 17);
        });
      });
    };
    const update = () => {
      cancelAnimationFrame(frame);
      ctx.clearRect(0, 0, width, height);
      if (document.hidden || print.matches) return;
      last = performance.now();
      frame = requestAnimationFrame(draw);
    };
    resize();
    update();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", update);
    preference.addEventListener("change", update);
    print.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", update);
      preference.removeEventListener("change", update);
      print.removeEventListener("change", update);
    };
  }, []);

  return <canvas ref={canvas} className={styles.matrix} aria-hidden="true" data-resume-matrix />;
}
