// Contrast audit for the authoritative brand documents in brand/html/.
//
// Companion to audit-contrast.mjs (which audits the built Hugo site). These
// documents are standalone, single-mode, and styled inline, so they are opened
// from the filesystem rather than served.
//
// Run: node scripts/audit-contrast-brand.mjs

import { chromium } from "playwright";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = new URL("../brand/html", import.meta.url).pathname.replace(/\/$/, "");
const files = readdirSync(DIR).filter((f) => f.endsWith(".html")).sort();

const AUDIT = () => {
  const parse = (c) => {
    const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
    return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] } : null;
  };
  const over = (f, b) => ({
    r: f.r * f.a + b.r * (1 - f.a), g: f.g * f.a + b.g * (1 - f.a),
    b: f.b * f.a + b.b * (1 - f.a), a: 1,
  });
  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => {
    const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
    return (l1 + 0.05) / (l2 + 0.05);
  };
  const bgOf = (el) => {
    let n = el, stack = [];
    while (n && n !== document.documentElement.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== "none") return null;
      const c = parse(cs.backgroundColor);
      if (c && c.a > 0) { stack.push(c); if (c.a === 1) break; }
      n = n.parentElement;
    }
    let base = { r: 255, g: 255, b: 255, a: 1 };
    for (let i = stack.length - 1; i >= 0; i--) base = over(stack[i], base);
    return base;
  };

  // WCAG 2.1 SC 1.4.3 exempts logotypes: "text that is part of a logo or brand
  // name has no minimum contrast requirement". The wordmark sets "work" in the
  // accent by design, so lockup elements are excluded rather than recoloured.
  const isLogotype = (el) => {
    if (el.closest(".lockup, .lockup-2line, .lockup-stacked, .lockup-icon, .wordmark, .navbar-brand, .logo")) return true;
    if (/lockup|wordmark/.test(el.className || "")) return true;
    // The React-rendered lockup previews carry no stable class; the wordmark is
    // the literal string "projectious" / "work" set beside the mark.
    const t = (el.textContent || "").trim();
    // "work" plus the product-line extensions (projectious.guard, .forge, ...)
    // are all wordmark text set beside the mark.
    const wordmarkPart = /^(work|projectious|projectious\.[a-z]+|guard|forge|flow|pulse|scope)$/i;
    return wordmarkPart.test(t) && el.children.length === 0
      && /0\.02em|-0\.4px|-0\.3px/.test(el.getAttribute("style") || "") || wordmarkPart.test(t) && el.children.length === 0;
  };

  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const st = getComputedStyle(el);
    if (st.display === "none" || st.visibility === "hidden" || +st.opacity === 0) continue;
    const own = Array.from(el.childNodes)
      .filter((n) => n.nodeType === 3 && n.textContent.trim())
      .map((n) => n.textContent.trim()).join(" ");
    if (!own) continue;
    // Swatch glyphs are colour samples, not text.
    if (/^[■○●◆▪□▲△·]+$/.test(own)) continue;
    if (isLogotype(el)) continue;

    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const fgRaw = parse(st.color);
    if (!fgRaw) continue;
    const bg = bgOf(el);
    if (!bg) continue;

    const cr = ratio(over(fgRaw, bg), bg);
    const px = parseFloat(st.fontSize);
    const bold = (parseInt(st.fontWeight, 10) || 400) >= 700;
    const need = px >= 24 || (bold && px >= 18.66) ? 3 : 4.5;
    if (cr >= need) continue;

    out.push({
      cr: +cr.toFixed(2), px: +px.toFixed(1), need, t: own.slice(0, 30),
      c: st.color, bg: `rgb(${Math.round(bg.r)}, ${Math.round(bg.g)}, ${Math.round(bg.b)})`,
      // Miniature mockups (slide thumbnails, card previews) render at sizes that
      // represent an artefact rather than being read at that size.
      mini: px < 10,
    });
  }
  return out;
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 1200 } });
let real = 0, mini = 0;

for (const f of files) {
  await page.goto(`file://${join(DIR, f)}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const seen = new Map();
  for (const x of await page.evaluate(AUDIT)) {
    const k = `${x.c}|${x.bg}|${x.px}`;
    if (!seen.has(k)) seen.set(k, { ...x, n: 1 }); else seen.get(k).n++;
  }
  const rows = [...seen.values()].sort((a, b) => a.cr - b.cr);
  const r = rows.filter((x) => !x.mini);
  mini += rows.length - r.length;
  if (r.length) {
    console.log(`\n### ${f}`);
    for (const x of r) {
      console.log(`  ${x.cr}:1 (needs ${x.need}) ${x.px}px  ${x.c} on ${x.bg}  x${x.n}  "${x.t}"`);
    }
  }
  real += r.length;
}

console.log(`\nReadable-size failures: ${real}   (miniature mockup text <10px, reported separately: ${mini})`);
console.log("Excluded by rule: logotype lockups (WCAG 1.4.3), colour-swatch glyphs.");
await browser.close();
process.exit(real ? 1 : 0);
