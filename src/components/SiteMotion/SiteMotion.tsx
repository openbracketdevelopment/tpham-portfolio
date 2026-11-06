"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Logo } from "../Logo/Logo";
import styles from "./SiteMotion.module.scss";

gsap.registerPlugin(ScrollTrigger);
const ease = "power3.out";
const INTRO_SESSION_KEY = "portfolio:intro-seen:v2";

export function SiteMotion() {
  const pathname = usePathname();
  const firstVisit = useRef(true);
  const overlay = useRef<HTMLDivElement>(null);
  const skip = useRef<() => void>(() => {});

  useLayoutEffect(() => {
    const initial = firstVisit.current;
    let seenThisSession = false;
    try { seenThisSession = sessionStorage.getItem(INTRO_SESSION_KEY) === "1"; } catch { /* Storage can be unavailable in private contexts. */ }
    const shell = overlay.current;
    if (!shell) return;
    gsap.set(shell, { display: "none" });
    const media = gsap.matchMedia();
    let active = true;
    let unlock = () => {};
    let refreshFrame = 0;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") skip.current(); };
    window.addEventListener("keydown", escape);

    media.add("all", () => {
      // Keep the printable resume in ordinary document flow at all times.
      if (pathname === "/resume") return;
      const header = document.querySelector<HTMLElement>("body > header");
      const page = document.querySelector<HTMLElement>("#page-content");
      const target = header?.querySelector<SVGSVGElement>(".header_logo-link svg");
      const mark = shell.querySelector<HTMLElement>("[data-intro-mark]")!;
      const backdrop = shell.querySelector<HTMLElement>("[data-intro-backdrop]")!;
      const fill = shell.querySelector<HTMLElement>("[data-intro-fill]")!;
      const counter = shell.querySelector<HTMLElement>("[data-intro-count]")!;
      const nav = gsap.utils.toArray<HTMLElement>("header nav li, header button[aria-controls]");
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      const timeline = gsap.timeline({ defaults: { ease } });
      let revealed = false;
      let revealContext: gsap.Context | undefined;

      const prepareScroll = () => {
        if (revealed || !active) return;
        revealed = true;
        const candidates = gsap.utils.toArray<HTMLElement>(
          '[data-reveal], [class*="project__container"], main > section:not(:has([data-reveal])):not(:has([data-page-intro]))',
        ).filter(element => !element.closest('[data-hero]') && !element.querySelector('[data-reveal]'));
        // Avoid transforming both a reveal and its ancestor.
        const elements = candidates.filter(element => !candidates.some(parent => parent !== element && parent.contains(element)));
        // Never reset a card the visitor can already see. Only arm content
        // below the viewport, while it is still safely off screen.
        const offscreen = elements.filter(element => {
          const bounds = element.getBoundingClientRect();
          return bounds.height > 0 && bounds.top >= window.innerHeight;
        });
        revealContext = gsap.context(() => {
          gsap.set(offscreen, { autoAlpha: 0, y: 36 });
          ScrollTrigger.batch(offscreen, {
            start: "top 100%",
            once: true,
            interval: 0.1,
            batchMax: 6,
            onEnter: batch => revealContext?.add(() => {
              gsap.to(batch, {
                autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.09, ease,
                clearProps: "opacity,visibility,transform",
              });
            }),
          });
        });
        refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      };

      const startHero = () => {
        document.documentElement.removeAttribute("data-intro-active");
        window.dispatchEvent(new Event("portfolio:hero-ready"));
      };
      const finish = () => {
        startHero();
        firstVisit.current = false;
        if (runIntro) {
          try { sessionStorage.setItem(INTRO_SESSION_KEY, "1"); } catch { /* The in-memory guard still prevents route replays. */ }
          document.documentElement.setAttribute("data-intro-seen", "");
        }
        unlock();
        gsap.set(shell, { display: "none" });
        if (target) gsap.set(target, { clearProps: "opacity,visibility" });
        if (shell.contains(document.activeElement)) {
          target?.closest("a")?.focus({ preventScroll: true });
        }
        prepareScroll();
      };
      const runIntro = initial && !seenThisSession && window.scrollY < 40;
      if (runIntro && target && page && header) {
        const oldOverflow = document.body.style.overflow;
        const pageInert = page.inert;
        const headerInert = header.inert;
        page.inert = true;
        header.inert = true;
        document.body.style.overflow = "hidden";
        unlock = () => {
          document.body.style.overflow = oldOverflow;
          page.inert = pageInert;
          header.inert = headerInert;
        };
        document.documentElement.setAttribute("data-intro-active", "");
        gsap.set(shell, { display: "block" });
        gsap.set(fill, { scaleX: 0, transformOrigin: "left center" });
        counter.textContent = "000";
        gsap.set(backdrop, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(mark, { autoAlpha: 1, x: (innerWidth - 150) / 2, y: (innerHeight - 127.5) / 2, width: 150, height: 127.5 });
        gsap.set(target, { autoAlpha: 0 });
        const pieces = mark.querySelectorAll("[data-logo-piece]");
        gsap.set(pieces, { clipPath: "inset(100% 0% 0% 0%)" });
        gsap.set(mark, { clipPath: "inset(0% 0% 0% 0%)" });
        const progress = { value: 0 };
        timeline.to(fill, { scaleX: 1, duration: 1.65, ease: "power2.inOut" }, 0.05)
          .to(progress, {
            value: 100, duration: 1.65, ease: "power2.inOut",
            onUpdate: () => { counter.textContent = String(Math.round(progress.value)).padStart(3, "0"); },
          }, 0.05)
          .to(mark.querySelector("[data-logo-piece] rect"), { fill: "#000", duration: 0.2 }, 0.85)
          .to(pieces, {
          clipPath: "inset(0% 0% 0% 0%)", duration: 0.8,
          stagger: 0.18, ease: "power4.inOut",
        }, 0.2)
          .to(mark, {
            clipPath: "inset(100% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut",
          }, 1.55)
          .to(backdrop, {
            clipPath: "inset(100% 0% 0% 0%)", duration: 1.1, ease: "power4.inOut",
          }, 1.85)
          .fromTo(target, {
            autoAlpha: 1, clipPath: "inset(0% 0% 100% 0%)",
          }, {
            clipPath: "inset(0% 0% 0% 0%)", duration: 0.7,
            ease: "power4.inOut", clearProps: "clipPath",
          }, 2.05)
          .to(shell.querySelector("button"), { autoAlpha: 0, duration: 0.2 }, 1.8);
      }
      const entry = runIntro ? 2.25 : 0;
      if (runIntro) timeline.from(nav, { y: -18, autoAlpha: 0, duration: 0.65, stagger: 0.08, clearProps: "all" }, entry);
      if (hero) {
        timeline.call(startHero, [], entry + 0.1);
        const background = document.querySelector("[data-hero-background]");
        if (background) timeline.fromTo(background,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut", clearProps: "clipPath" },
          runIntro ? 1.85 : 0,
        );
        timeline.from(hero.querySelectorAll("[data-hero-copy]"), {
          y: 48, clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 0,
          duration: 1.1, stagger: 0.15, clearProps: "transform,clipPath,opacity,visibility",
        }, entry + 0.1);
        const button = hero.querySelector("[data-motion-button]");
        if (button) {
          timeline.from(button.querySelector("[data-button-icon]"), {
            scale: 0.25, rotation: -100, autoAlpha: 0, duration: 0.8, ease: "back.out(1.5)", clearProps: "all",
          }, entry + 0.8);
          timeline.from(button.querySelectorAll("[data-button-letter]"), {
            opacity: 0, duration: 0.12, stagger: { each: 0.025, from: "random" }, ease: "steps(1)", clearProps: "opacity",
          }, entry + 1.1);
        }
      } else {
        const top = document.querySelectorAll('[data-page-intro], main > h1, [class*="project__hero"]');
        if (top.length) timeline.from(top, {
          y: 24, autoAlpha: 0, clipPath: "inset(0% 0% 100% 0%)", duration: 0.9, stagger: 0.1,
          clearProps: "transform,clipPath,opacity,visibility",
        }, entry);
      }
      timeline.call(finish);
      skip.current = () => { timeline.progress(1); finish(); };
      const print = () => { skip.current(); };
      window.addEventListener("beforeprint", print);
      return () => {
        window.removeEventListener("beforeprint", print);
        timeline.kill();
        revealContext?.revert();
        document.documentElement.removeAttribute("data-intro-active");
        gsap.set(shell, { display: "none" });
        unlock();
      };
    });

    return () => {
      active = false;
      cancelAnimationFrame(refreshFrame);
      media.revert();
      unlock();
      window.removeEventListener("keydown", escape);
      skip.current = () => {};
    };
  }, [pathname]);

  return (
    <div ref={overlay} data-intro-overlay className={styles.intro} aria-label="Introduction">
      <div className={styles.backdrop} data-intro-backdrop>
        <div className={styles.fill} data-intro-fill />
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.readout} aria-hidden="true">
          <span className={styles.kicker}>TP / INITIALIZING EXPERIENCE</span>
          <span className={styles.count}><span data-intro-count>000</span><small>%</small></span>
          <span className={styles.status}>SYSTEM / INTRO SEQUENCE <span>01—01</span></span>
        </div>
      </div>
      <div className={styles.mark} data-intro-mark aria-hidden="true"><Logo /></div>
      <button className={styles.skip} onClick={() => skip.current()}>Skip intro ↗</button>
    </div>
  );
}
