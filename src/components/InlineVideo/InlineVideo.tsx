"use client";

import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "./InlineVideo.module.scss";

type InlineVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

export function InlineVideo({ src, poster, label, className }: InlineVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activated, setActivated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startPlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    setActivated(true);
    video.focus();
    try {
      await video.play();
    } catch (error) {
      console.error(`Unable to play ${label}`, error);
      setError("Playback could not start. Try the video controls or download the video.");
    }
  };

  return (
    <div className={`${styles.player} ${className ?? ""}`}>
      <video
        ref={videoRef}
        className={styles.video}
        controls={activated}
        playsInline
        preload="none"
        poster={poster}
        src={src}
        aria-label={label}
        tabIndex={activated ? 0 : -1}
        onPlaying={() => setError(null)}
        onError={() => setError("This video could not load. Try downloading the video.")}
      >
        <a href={src}>Download {label}</a>
      </video>
      {!activated && (
        <button
          type="button"
          className={styles.play}
          aria-label={`Play ${label}`}
          onClick={startPlayback}
        >
          <FaPlay aria-hidden="true" />
        </button>
      )}
      {error && (
        <p className={styles.error} role="alert">
          {error} <a href={src}>Download video</a>
        </p>
      )}
    </div>
  );
}
