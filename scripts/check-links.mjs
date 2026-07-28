// Internal link and asset checker for the built site.
//
// Hugo's REF_NOT_FOUND catches broken {{< relref >}} at build time, but not
// hand-written hrefs, mounted download paths, or images. This walks every built
// page and resolves each internal link against public/.
//
// External links are listed, not fetched — a release must not depend on
// third-party availability.
//
// Run: node scripts/check-links.mjs

import { readdirSync, existsSync, statSync, readFileSync } from "node:fs";
import { join, relative, resolve, dirname } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const PUBLIC = join(ROOT, "public");
const PREFIX = "/brand"; // matches baseURL path

if (!existsSync(PUBLIC)) {
  console.error("public/ not found — run scripts/build-docs.sh first");
  process.exit(1);
}

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

// Resolve a site-absolute or relative URL to a path inside public/.
function resolveTarget(url, fromFile) {
  let path = url.split("#")[0].split("?")[0];
  if (!path) return null; // pure anchor
  if (path.startsWith(PREFIX + "/")) path = path.slice(PREFIX.length);
  else if (path === PREFIX) path = "/";

  let abs;
  if (path.startsWith("/")) abs = join(PUBLIC, path);
  else abs = resolve(dirname(fromFile), path);

  if (!abs.startsWith(PUBLIC)) return { abs, ok: false, reason: "escapes public/" };
  if (existsSync(abs)) {
    if (statSync(abs).isDirectory()) {
      return { abs, ok: existsSync(join(abs, "index.html")), reason: "directory without index.html" };
    }
    return { abs, ok: true };
  }
  return { abs, ok: false, reason: "not found" };
}

const files = walk(PUBLIC);
const broken = [];
const external = new Set();
let checked = 0;

const ATTR = /(?:href|src)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;

for (const file of files) {
  // Script and style bodies are not markup; inline JS that builds URLs by
  // concatenation would otherwise be misread as an href.
  const html = readFileSync(file, "utf8")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  for (const m of html.matchAll(ATTR)) {
    const url = (m[1] ?? m[2] ?? m[3] ?? "").trim();
    if (!url) continue;
    if (/^(https?:)?\/\//i.test(url)) { external.add(url.split("/").slice(0, 3).join("/")); continue; }
    if (/^(mailto:|tel:|data:|javascript:)/i.test(url)) continue;
    if (url.startsWith("#")) continue;

    checked++;
    const res = resolveTarget(url, file);
    if (res && !res.ok) {
      broken.push({ page: "/" + relative(PUBLIC, file), url, reason: res.reason });
    }
  }
}

console.log(`Checked ${checked} internal links across ${files.length} pages.`);

if (external.size) {
  console.log(`External hosts referenced (not fetched): ${[...external].sort().join(", ")}`);
}

if (broken.length) {
  // Group by target so one bad path in a partial does not print 90 times.
  const byUrl = new Map();
  for (const b of broken) {
    if (!byUrl.has(b.url)) byUrl.set(b.url, { ...b, n: 0, pages: [] });
    const e = byUrl.get(b.url);
    e.n++;
    if (e.pages.length < 3) e.pages.push(b.page);
  }
  console.error(`\n${byUrl.size} broken link target(s):`);
  for (const b of byUrl.values()) {
    console.error(`  ${b.url}  (${b.reason}) — ${b.n} occurrence(s), e.g. ${b.pages[0]}`);
  }
  process.exit(1);
}

console.log("No broken internal links.");
