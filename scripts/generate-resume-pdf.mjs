import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, existsSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const output = resolve(process.argv[3] ?? "public/assets/files/PHAMT_RESUME.pdf");
const chrome = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
if (!existsSync(chrome)) throw new Error("Set CHROME_PATH to your Chrome/Chromium executable.");
const response = await fetch(new URL("/resume", baseUrl));
if (!response.ok) throw new Error(`Resume page returned HTTP ${response.status}`);
const profile = mkdtempSync(resolve(tmpdir(), "portfolio-resume-"));
mkdirSync(dirname(output), { recursive: true });
try {
  execFileSync(chrome, [
    "--headless", "--no-first-run", "--no-default-browser-check",
    `--user-data-dir=${profile}`, "--no-pdf-header-footer",
    "--virtual-time-budget=5000", `--print-to-pdf=${output}`,
    new URL("/resume", baseUrl).href,
  ], { stdio: ["ignore", "ignore", "pipe"], timeout: 60000 });
  if (!existsSync(output)) throw new Error("Chrome did not create the resume PDF.");
  console.log(`Generated ${output}. Validate text order and render every page before publishing.`);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
