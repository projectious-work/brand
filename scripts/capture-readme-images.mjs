// Capture focused element screenshots from the built site for the README.
//
// These are deliberately *element* crops, not full pages: the README is a
// teaser for the documentation, so each image shows one artefact of the system
// rather than a shrunken screenshot of a whole page.
//
// Run via scripts/capture-readme-images.sh, which builds the site first.

import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const PUBLIC_DIR = join(ROOT, "public");
const OUT_DIR = join(ROOT, ".github/images");
const PORT = 8137;
// The site is built with baseURL https://…/brand/, so absolute asset paths are
// prefixed with /brand/. Serve public/ under that same prefix.
const PREFIX = "/brand";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml",
};

const server = createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (path.startsWith(PREFIX)) path = path.slice(PREFIX.length);
    let file = normalize(join(PUBLIC_DIR, path));
    if (!file.startsWith(PUBLIC_DIR)) {
      res.writeHead(403).end();
      return;
    }
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
    if (!existsSync(file)) {
      res.writeHead(404).end("not found");
      return;
    }
    res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
    res.end(await readFile(file));
  } catch (err) {
    res.writeHead(500).end(String(err));
  }
});

// Each shot: the page to visit, the element to crop, and an optional theme.
const SHOTS = [
  {
    name: "palette",
    url: "/docs/foundations/color/",
    selector: ".pj-swatches",
    caption: "core palette swatches",
  },
  {
    name: "scales",
    url: "/docs/foundations/color/",
    selector: ".pj-scale",
    nth: 0,
    grow: 2, // midnight light + dark, stacked
    caption: "12-step scales, light and dark",
  },
  {
    name: "typography",
    url: "/docs/foundations/typography/",
    selector: ".pj-type",
    caption: "type ramp specimen",
  },
  {
    name: "code",
    url: "/docs/interface/code/",
    selector: ".highlight",
    nth: 0,
    caption: "always-dark code surface",
  },
  {
    name: "components",
    url: "/docs/interface/components/",
    selector: ".td-content table",
    nth: 0,
    caption: "button variants table",
  },
  {
    name: "dark-mode",
    url: "/docs/foundations/color/",
    selector: ".pj-swatches",
    theme: "dark",
    caption: "the same swatches in dark mode",
  },
];

await mkdir(OUT_DIR, { recursive: true });
await new Promise((r) => server.listen(PORT, r));

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1180, height: 900 },
  deviceScaleFactor: 2, // retina — the README is read on high-dpi screens
});

for (const shot of SHOTS) {
  const url = `http://127.0.0.1:${PORT}${PREFIX}${shot.url}`;
  await page.goto(url, { waitUntil: "networkidle" });

  if (shot.theme) {
    await page.evaluate((t) => {
      document.documentElement.setAttribute("data-bs-theme", t);
      localStorage.setItem("theme", t);
    }, shot.theme);
    await page.waitForTimeout(300);
  }

  // Web fonts must be resolved before we crop, or the shot captures fallbacks.
  await page.evaluate(() => document.fonts.ready);

  const handles = await page.locator(shot.selector).all();
  const index = shot.nth ?? 0;
  if (!handles[index]) {
    console.error(`✗ ${shot.name}: selector ${shot.selector}[${index}] not found`);
    continue;
  }

  // Absolute page coordinates, so the clip stays valid for elements below the
  // fold. boundingBox() is viewport-relative and breaks once the page scrolls.
  const box = await page.evaluate(
    ({ selector, index, grow }) => {
      const els = Array.from(document.querySelectorAll(selector));
      const first = els[index].getBoundingClientRect();
      const last = els[index + grow - 1]?.getBoundingClientRect() ?? first;
      return {
        x: first.left + window.scrollX,
        y: first.top + window.scrollY,
        width: first.width,
        height: last.bottom + window.scrollY - (first.top + window.scrollY),
      };
    },
    { selector: shot.selector, index, grow: shot.grow ?? 1 },
  );

  const pad = 12;
  await page.screenshot({
    path: join(OUT_DIR, `${shot.name}.png`),
    fullPage: true,
    clip: {
      x: Math.max(0, box.x - pad),
      y: Math.max(0, box.y - pad),
      width: box.width + pad * 2,
      height: box.height + pad * 2,
    },
  });
  console.log(`✓ ${shot.name}.png — ${shot.caption}`);
}

await browser.close();
server.close();
