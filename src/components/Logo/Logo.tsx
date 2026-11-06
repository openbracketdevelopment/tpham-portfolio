"use client";

import { useId } from "react";

export function Logo({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg width="60" height="51" viewBox="0 0 60 51" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className} role="img" aria-labelledby={`${id}-title`} focusable="false">
      <title id={`${id}-title`}>Tam Pham - Full-Stack Developer</title>
      <path d="M28 0H40V22.5V50.5H34L28 44V0Z" fill="var(--logo-shape-color, white)" />
      <path d="M7.5 12L-5.24537e-07 9.53674e-07L13 3.85426e-07L26 -1.82822e-07L26 12L7.5 12Z" fill="var(--logo-shape-color, white)" />
      <mask id={`${id}-mask`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="24" y="0" width="36" height="28">
        <ellipse cx="42" cy="14" rx="18" ry="14" fill="#C20000" />
      </mask>
      <g mask={`url(#${id}-mask)`}>
        <rect x="42" y="-11.5294" width="38.4545" height="46.9412" fill="#C20000" />
      </g>
    </svg>
  );
}
