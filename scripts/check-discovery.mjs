import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
} from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const manifest = JSON.parse(readFileSync(
  join(root, "src/static/downloads/brand-manifest.json"), "utf8"));
const config = readFileSync(join(root, "src/hugo.yaml"), "utf8");
const version = config.match(/^  version: "([^"]+)"$/m)?.[1];
if (manifest.version !== version) throw new Error("manifest version drift");

for (const resource of manifest.resources) {
  readFileSync(join(root, resource.path));
  if (manifest.boundaries.excluded.some((path) => resource.path.startsWith(path))) {
    throw new Error(`excluded resource exposed: ${resource.path}`);
  }
}

for (const file of ["llms.txt", "llms-full.txt", "robots.txt", "sitemap.xml"]) {
  const text = readFileSync(join(root, "public", file), "utf8");
  if (!text.trim()) throw new Error(`${file} is empty`);
}

const llms = readFileSync(join(root, "public/llms.txt"), "utf8");
if (!llms.includes(version) || !llms.includes("brand-manifest.json")) {
  throw new Error("llms.txt lacks version or manifest link");
}
const full = readFileSync(join(root, "public/llms-full.txt"), "utf8");
for (const forbidden of ["context/", ".git/", "input/"]) {
  if (full.includes(forbidden)) throw new Error(`llms-full exposes ${forbidden}`);
}

const menuFixture = mkdtempSync(join(tmpdir(), "brand-release-menu-"));
try {
  mkdirSync(join(menuFixture, "v3.0.0"));
  copyFileSync(join(root, "public/index.html"), join(menuFixture, "index.html"));
  copyFileSync(
    join(root, "public/index.html"),
    join(menuFixture, "v3.0.0/index.html"),
  );
  execFileSync(
    process.execPath,
    [join(root, "scripts/sync-release-menus.mjs"), menuFixture],
  );
  const latestMenu = readFileSync(join(menuFixture, "index.html"), "utf8");
  const archivedMenu = readFileSync(
    join(menuFixture, "v3.0.0/index.html"),
    "utf8",
  );
  if (!latestMenu.includes(`aria-checked=true>${version}`)) {
    throw new Error(`latest release menu does not select ${version}`);
  }
  if (!latestMenu.includes(
    `>${version} <span class=badge>latest</span>`,
  )) {
    throw new Error(`latest release menu does not mark ${version} latest`);
  }
  if (!archivedMenu.match(/aria-checked=true[^>]*>v3\.0\.0/)) {
    throw new Error("archived release menu does not select its version");
  }
} finally {
  rmSync(menuFixture, { recursive: true, force: true });
}
console.log(`  discovery outputs verified for ${version}`);
