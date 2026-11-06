"use client";

import { useEffect, useRef, useState } from "react";
import type { Playground } from "./createPlayground";
import { destinations, type GameState } from "./targets";
import styles from "./ConnectPlayground.module.scss";

export function ConnectPlayground() {
  const host = useRef<HTMLDivElement>(null);
  const game = useRef<Playground | null>(null);
  const [state, setState] = useState<GameState>("loading");
  const [selected, setSelected] = useState(0);
  const [power, setPower] = useState(0);
  const [aimed, setAimed] = useState<number | null>(null);
  const [shots, setShots] = useState(0);
  const [hits, setHits] = useState(0);

  useEffect(() => {
    let disposed = false;
    import("./createPlayground").then(({ createPlayground }) => {
      if (disposed || !host.current) return;
      try {
        game.current = createPlayground(host.current, {
          onState: setState,
          onSelect: setSelected,
          onAim: (target, amount) => { setAimed(target); setPower(amount); },
          onShot: hit => { setShots(value => value + 1); if (hit) setHits(value => value + 1); },
        });
      } catch {
        host.current.querySelector("canvas")?.remove();
        setState("unavailable");
      }
    }).catch(() => { if (!disposed) setState("unavailable"); });
    return () => { disposed = true; game.current?.dispose(); game.current = null; };
  }, []);

  const destination = destinations[selected];
  const busy = state === "flying";
  const status = state === "hit" ? `Delivered. ${destination.label === "Email" ? "Opening your email app" : `Opening ${destination.label}`}…`
    : state === "flying" ? "On its way. Watch the landing…"
    : state === "miss" ? "A little wide. Another shot?"
    : state === "aiming" ? aimed !== null ? `${destinations[aimed].label} lined up. Let it fly.` : "Find your angle. Follow the dotted arc."
    : `Pull the ${destination.projectile} back. Aim. Let it fly.`;

  return (
    <main className={styles.page}>
      <header className={styles.intro} data-page-intro>
        <div>
          <p className={styles.eyebrow}>Connect / A little play goes a long way</p>
          <h1>TAKE A SHOT.<br /><span>MAKE A CONNECTION.</span></h1>
        </div>
        <p className={styles.description}>Big ideas start with a little back-and-forth. Pick your target. Pull back and take your shot. Land it in a target and see where it takes you.</p>
      </header>

      <section className={styles.playground} aria-label="Interactive connection playground" data-game-state={state}>
        <div className={styles.sceneTop}><span>THE CONNECTION COURT</span><span>{String(hits).padStart(2, "0")} HITS / {String(shots).padStart(2, "0")} SHOTS</span></div>
        <div ref={host} className={styles.scene}>
          <div className={styles.targetLabels}>
            {destinations.map((target, index) => (
              <button key={target.id} type="button" data-target-label={index}
                className={`${styles.targetLabel} ${selected === index ? styles.selected : ""} ${aimed === index ? styles.locked : ""}`}
                onClick={() => { setSelected(index); game.current?.aimAt(index); }} disabled={busy}
                aria-pressed={selected === index} aria-label={`Aim at ${target.label}`}>
                <span>{target.number} / {target.label}</span><strong>{target.name}</strong>
              </button>
            ))}
          </div>
          <span className={styles.pullHint} data-pull-hint aria-hidden="true">PULL BACK ↓</span>
          {(state === "loading" || state === "unavailable") && (
            <div className={styles.fallback}>
              <span className={styles.paperMark} aria-hidden="true" />
              <p>{state === "loading" ? "Setting up the court…" : "The court needs WebGL. The conversation doesn't."}</p>
              {state === "unavailable" && <p>Use the direct links below to say hello.</p>}
            </div>
          )}
        </div>
        <div className={styles.controls}>
          <div><p className={styles.status} role="status" aria-live="polite">{status}</p><p id="playground-help" className={styles.help}>Drag with your finger or mouse · Or select a target and shoot · ← → + Enter</p></div>
          <button type="button" className={styles.reset} aria-label="Reset projectile to the starting position"
            disabled={state === "loading" || state === "unavailable"} onClick={() => game.current?.reset()}>↺ Reset</button>
          <div className={styles.actions}>
            {state === "hit" ? <a href={destination.href} className={styles.primary}>{destination.action} ↗</a>
              : <button type="button" className={styles.primary} disabled={busy || state === "loading" || state === "unavailable"} onClick={() => game.current?.shootAt(selected)}>Shoot {destination.label} ↗</button>}
          </div>
        </div>
        <div className={styles.power} aria-hidden="true"><span style={{ transform: `scaleX(${power})` }} /></div>
      </section>

      <div className={styles.direct}>
        <p>MORE OF A STRAIGHT-SHOOTER?</p>
        {destinations.map(target => <a key={target.id} href={target.href}>{target.label} <span>↗</span></a>)}
      </div>
    </main>
  );
}
