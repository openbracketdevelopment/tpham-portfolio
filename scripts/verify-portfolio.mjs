import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, rm, mkdir, writeFile, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import { join } from "node:path";

const base = process.argv[2] ?? "http://localhost:3000";
const chromePath = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const profile = await mkdtemp(join(tmpdir(), "portfolio-check-"));
const chrome = spawn(chromePath, [
  "--headless", "--no-first-run", "--no-default-browser-check", "--hide-scrollbars",
  "--remote-debugging-port=0", `--user-data-dir=${profile}`, "about:blank",
], { stdio: ["ignore", "ignore", "pipe"] });
let socket;
try {
  const endpoint = await new Promise((resolve, reject) => {
    let output = "";
    chrome.stderr.on("data", chunk => {
      output += chunk;
      const match = output.match(/DevTools listening on (ws:\/\/\S+)/);
      if (match) resolve(match[1]);
    });
    chrome.once("error", reject);
    chrome.once("exit", code => reject(new Error(`Chrome exited before readiness: ${code}`)));
  });
  socket = new WebSocket(endpoint);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let id = 0;
  const requests = new Map();
  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    const request = requests.get(message.id);
    if (!request) return;
    requests.delete(message.id);
    if (message.error) request.reject(new Error(JSON.stringify(message.error)));
    else request.resolve(message.result);
  };
  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const requestId = ++id;
    requests.set(requestId, { resolve, reject });
    socket.send(JSON.stringify({ id: requestId, method, params, sessionId }));
  });
  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  const command = (method, params) => send(method, params, sessionId);
  const evaluate = async expression => {
    const result = await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  await command("Page.enable");
  const softwareNames = ["ByteDown", "SitePaladin", "Hook, Line & Sender", "Daguerrify"];
  const featuredNames = ["Fidium Fiber", "Diageo Innovation", "ESPS Trailer Parts", "Hook, Line & Sender", "Toro Haven", "ByteDown"];
  const legacy = ["/fidium", "/esps", "/esps-parts", "/toro", "/earthx", "/hmi", "/diageo", "/cintra", "/mwr", "/brainstyles", "/trinityrail", "/wilsonsseafood", "/baileys", "/crownroyal", "/johnniewalker"];
  const routes = ["/", "/about", "/resume", "/projects", "/work", "/work/websites", "/work/apps", "/work/videos", "/work/bytedown", "/work/sitepaladin", "/work/hookline-and-sender", "/work/daguerrify", ...legacy];
  for (const route of [...routes, "/sitemap.xml", "/assets/files/PHAMT_RESUME.pdf"]) {
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 200, route);
  }
  const downloadedPdf = Buffer.from(await (await fetch(new URL("/assets/files/PHAMT_RESUME.pdf", base))).arrayBuffer());
  const localPdf = await readFile("public/assets/files/PHAMT_RESUME.pdf");
  const hash = buffer => createHash("sha256").update(buffer).digest("hex");
  assert.equal(hash(downloadedPdf), hash(localPdf), "Download does not serve the current generated PDF");
  assert.equal((await fetch(new URL("/work/not-a-project", base))).status, 404);
  assert.equal((await fetch(new URL("/vetmotl", base))).status, 404);
  const sitemap = await (await fetch(new URL("/sitemap.xml", base))).text();
  assert.ok(!sitemap.includes("/vetmotl"), "Removed project is still in the sitemap");
  for (const route of routes) assert.ok(sitemap.includes(`https://tampham.io${route}</loc>`), `Sitemap missing ${route}`);
  for (const width of [320, 390, 768, 1024, 1440, 2240]) {
    await command("Emulation.setDeviceMetricsOverride", { width, height: 1000, deviceScaleFactor: 1, mobile: width < 500 });
    for (const route of routes) {
      await command("Page.navigate", { url: new URL(route, base).href });
      let ready = false;
      for (let attempt = 0; attempt < 50; attempt++) {
        ready = await evaluate(`location.pathname === ${JSON.stringify(route)} && document.readyState === 'complete'`);
        if (ready) break;
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      assert.ok(ready, `Page not ready: ${route}`);
      const result = await evaluate(`(() => {
        const text = document.body.innerText;
        return {
          text,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
          brokenImages: [...document.images].filter(img => img.complete && img.naturalWidth === 0).map(img => img.src),
          featured: [...document.querySelectorAll('#work article h3')].map(h => h.innerText),
          tileGrid: (() => {
            const card = document.querySelector('article img')?.closest('article');
            if (!card) return null;
            const grid = card.parentElement;
            const bounds = grid.getBoundingClientRect();
            return { left: bounds.left, right: innerWidth - bounds.right, width: bounds.width, columns: getComputedStyle(grid).gridTemplateColumns.split(' ').length };
          })(),
          mobileScreenshotWidths: [...document.querySelectorAll('figure img[width="390"]')].map(img => img.getBoundingClientRect().width),
          cardImages: [...document.querySelectorAll('article img')].map(img => {
            const frame = img.parentElement.getBoundingClientRect();
            const image = img.getBoundingClientRect();
            return { fit: getComputedStyle(img).objectFit, position: getComputedStyle(img).objectPosition, github: !!img.closest('article').querySelector('a[aria-label$="source on GitHub"]'), frameWidth: frame.width, frameHeight: frame.height, imageWidth: image.width, imageHeight: image.height };
          }),
        };
      })()`);
      assert.equal(result.overflow, false, `${route} overflow at ${width}px`);
      assert.equal(result.brokenImages.length, 0, `${route}: broken images ${result.brokenImages}`);
      for (const imageWidth of result.mobileScreenshotWidths) {
        assert.ok(imageWidth <= 390, `${route}: mobile screenshot exceeds its native width at ${width}px`);
      }
      assert.ok(result.canonical, `${route}: canonical missing`);
      assert.ok(!result.links.includes("/vetmotl"), `${route}: removed project is still linked`);
      if (result.tileGrid) {
        assert.equal(result.tileGrid.columns, width >= 1024 ? 3 : width >= 768 ? 2 : 1, `${route}: incorrect tile columns`);
        if (width >= 1024) {
          assert.ok(Math.abs(result.tileGrid.left - 32) < 1 && Math.abs(result.tileGrid.right - 32) < 1, `${route}: desktop grid does not fill width with 32px gutters`);
        } else {
          assert.ok(Math.abs(result.tileGrid.width - width * 0.9) < 1, `${route}: smaller-screen grid width changed`);
        }
      }
      for (const image of result.cardImages) {
        assert.equal(image.fit, "cover", `${route}: card image does not fill its frame`);
        assert.equal(image.position, image.github ? "50% 0%" : "50% 50%", `${route}: incorrect card image alignment`);
        assert.ok(Math.abs(image.frameWidth / image.frameHeight - 16 / 9) < 0.01, `${route}: card frame is not 16:9`);
        assert.ok(Math.abs(image.imageWidth - image.frameWidth) < 1 && Math.abs(image.imageHeight - image.frameHeight) < 1, `${route}: empty space around card image`);
      }
      if (route === "/") {
        assert.deepEqual(result.featured, featuredNames);
        assert.ok(result.text.includes("I build thoughtful web experiences and reliable software, from enterprise platforms to independent tools."));
        assert.ok(!result.text.includes("Software Engineer | Full-Stack Development"));
      }
      if (route === "/" && width === 320) {
        const menu = await evaluate(`(async () => {
          const button = document.querySelector('button[aria-controls="site-navigation"]');
          if (!button) throw new Error('Navigation toggle is not an accessible button');
          button.click();
          await new Promise(resolve => setTimeout(resolve, 100));
          const opened = button.getAttribute('aria-expanded') === 'true';
          button.click();
          return opened && !!document.querySelector('#site-navigation a[href="/work"]');
        })()`);
        assert.ok(menu, "Mobile navigation did not open or expose the work route");
      }
      if (process.env.SCREENSHOT_DIR && route === "/" && [390, 1440].includes(width)) {
        await evaluate(`document.querySelector('#work').scrollIntoView({behavior:'instant'})`);
        await new Promise(resolve => setTimeout(resolve, 500));
        const screenshot = await command("Page.captureScreenshot", { format: "png" });
        await mkdir(process.env.SCREENSHOT_DIR, { recursive: true });
        await writeFile(join(process.env.SCREENSHOT_DIR, `featured-${width}.png`), Buffer.from(screenshot.data, "base64"));
      }
      if (route === "/resume") {
        for (const term of [...softwareNames, "Python", "Go (Golang)", "Rust", "Professional Experience"]) assert.ok(result.text.toLowerCase().includes(term.toLowerCase()), `Resume missing ${term}`);
        assert.ok(result.links.includes("/assets/files/PHAMT_RESUME.pdf"));
      }
      if (route === "/work/videos") {
        for (const name of ["Baileys", "Crown Royal", "Johnnie Walker"]) assert.ok(result.text.includes(name));
        assert.ok(!result.text.includes("ByteDown"));
      }
      console.log(`PASS ${width}px ${route}`);
    }
  }
  console.log("PASS routes, sitemap, featured ordering, collections, resume and responsive overflow checks.");
} finally {
  socket?.close();
  if (chrome.exitCode === null) {
    const exited = new Promise(resolve => chrome.once("exit", resolve));
    chrome.kill();
    await exited;
  }
  await rm(profile, { recursive: true, force: true });
}
