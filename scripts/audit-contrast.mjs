// Wide-spread text/background contrast audit across the built site.
//
// Walks every page in BOTH colour modes, and for every element that renders its
// own text computes the effective foreground against the *resolved* background
// (transparent backgrounds are walked up the ancestor chain). Reports anything
// under the WCAG 2.1 AA threshold for its size.
//
// Run via: node scripts/audit-contrast.mjs   (site must be built into public/)

import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, statSync, readdirSync } from "node:fs";
import { extname, join, normalize, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const PUBLIC_DIR = join(ROOT, "public");
const PORT = 8139;
const PREFIX = "/brand";

const MIME = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf", ".xml": "application/xml",
};

const server = createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (path.startsWith(PREFIX)) path = path.slice(PREFIX.length);
    let file = normalize(join(PUBLIC_DIR, path));
    if (!file.startsWith(PUBLIC_DIR)) return void res.writeHead(403).end();
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
    if (!existsSync(file)) return void res.writeHead(404).end("not found");
    res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
    res.end(await readFile(file));
  } catch (err) {
    res.writeHead(500).end(String(err));
  }
});

function findPages(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (!/^(scss|js|webfonts|downloads|favicons|categories|tags)$/.test(e.name)) findPages(p, acc);
    } else if (e.name === "index.html" && !p.includes("/_print/")) {
      acc.push("/" + relative(PUBLIC_DIR, p).replace(/index\.html$/, ""));
    }
  }
  return acc;
}

// Runs in the page. Returns every failing text element.
const AUDIT = () => {
  const parse = (c) => {
    const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
    return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] } : null;
  };
  const over = (fg, bg) => ({ // composite fg (with alpha) over opaque bg
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1,
  });
  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => {
    const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
    return (l1 + 0.05) / (l2 + 0.05);
  };

  // Resolve the painted background by walking ancestors through transparency.
  // Returns null when an ancestor paints a gradient or image, because the
  // effective colour behind the text cannot be read from computed style — the
  // cover block is the case in point. Those elements are skipped rather than
  // reported as failures against a wrongly-assumed white page.
  const bgOf = (el) => {
    let node = el, stack = [];
    while (node && node !== document.documentElement.parentElement) {
      const cs = getComputedStyle(node);
      if (cs.backgroundImage && cs.backgroundImage !== "none") return null;
      const c = parse(cs.backgroundColor);
      if (c && c.a > 0) { stack.push(c); if (c.a === 1) break; }
      node = node.parentElement;
    }
    let base = { r: 255, g: 255, b: 255, a: 1 };
    for (let i = stack.length - 1; i >= 0; i--) base = over(stack[i], base);
    return base;
  };

  const sel = (el) => {
    const id = el.id ? `#${el.id}` : "";
    const cls = (el.className && typeof el.className === "string")
      ? "." + el.className.trim().split(/\s+/).slice(0, 3).join(".") : "";
    return `${el.tagName.toLowerCase()}${id}${cls}`;
  };

  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const st = getComputedStyle(el);
    if (st.display === "none" || st.visibility === "hidden" || +st.opacity === 0) continue;
    // Only elements rendering their own directly-owned, non-empty text.
    const own = Array.from(el.childNodes)
      .filter((n) => n.nodeType === 3 && n.textContent.trim()).map((n) => n.textContent.trim()).join(" ");
    if (!own) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;

    const fgRaw = parse(st.color);
    if (!fgRaw) continue;
    const bg = bgOf(el);
    if (!bg) continue; // gradient/image backdrop — not measurable from computed style
    const fg = over(fgRaw, bg);
    const cr = ratio(fg, bg);

    const px = parseFloat(st.fontSize);
    const bold = (parseInt(st.fontWeight, 10) || 400) >= 700;
    const large = px >= 24 || (bold && px >= 18.66);
    const need = large ? 3 : 4.5;
    if (cr < need) {
      const chain = [];
      for (let n = el.parentElement, i = 0; n && i < 3; n = n.parentElement, i++) chain.push(sel(n));
      out.push({
        sel: sel(el), text: own.slice(0, 45), ratio: +cr.toFixed(2), need,
        color: st.color, bg: `rgb(${Math.round(bg.r)}, ${Math.round(bg.g)}, ${Math.round(bg.b)})`,
        px: +px.toFixed(1), chain: chain.join(" < "),
      });
    }
  }
  return out;
};

await new Promise((r) => server.listen(PORT, r));
const pages = findPages(PUBLIC_DIR).sort();
const browser = await chromium.launch();

const findings = new Map(); // dedupe: same selector+theme+colors across pages
let checked = 0;

// Docsy decides the theme from localStorage key `td-color-theme` in a blocking
// inline script, and dark-mode.js re-applies it after load. Setting the
// attribute from the test therefore races the theme's own JS and yields
// non-deterministic results. Instead seed localStorage before any page script
// runs and let Docsy apply the theme itself, matching what a real user gets.
for (const theme of ["light", "dark"]) {
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 1000 },
    colorScheme: theme,
  });
  await ctx.addInitScript((t) => {
    try { localStorage.setItem("td-color-theme", t); } catch {}
  }, theme);
  const page = await ctx.newPage();

  for (const rel of pages) {
    await page.goto(`http://127.0.0.1:${PORT}${PREFIX}${rel}`, { waitUntil: "load" });
    const applied = await page.getAttribute("html", "data-bs-theme");
    if (applied !== theme) throw new Error(`theme not applied on ${rel}: wanted ${theme}, got ${applied}`);
    await page.evaluate(() => document.fonts.ready);
    const res = await page.evaluate(AUDIT);
    checked++;
    for (const f of res) {
      const key = `${theme}|${f.sel}|${f.color}|${f.bg}`;
      if (!findings.has(key)) findings.set(key, { ...f, theme, pages: [rel], count: 1 });
      else {
        const e = findings.get(key);
        e.count++;
        if (e.pages.length < 3 && !e.pages.includes(rel)) e.pages.push(rel);
      }
    }
  }
  await ctx.close();
}

await browser.close();
server.close();

const all = [...findings.values()].sort((a, b) => a.ratio - b.ratio);
console.log(`\nAudited ${pages.length} pages x 2 themes = ${checked} renders`);
console.log(`Distinct failing text/background pairs: ${all.length}\n`);
for (const f of all) {
  console.log(`[${f.theme}] ${f.ratio}:1 (needs ${f.need}) ${f.px}px  ${f.sel}`);
  console.log(`    fg ${f.color}  on  bg ${f.bg}`);
  console.log(`    "${f.text}"  — ${f.count} occurrence(s), e.g. ${f.pages[0]}`);
}
if (!all.length) console.log("No contrast failures found.");
