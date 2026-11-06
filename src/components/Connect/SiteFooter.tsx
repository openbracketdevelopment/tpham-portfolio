"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export function SiteFooter({ children }: { children: ReactNode }) {
  return usePathname() === "/connect" ? null : children;
}
