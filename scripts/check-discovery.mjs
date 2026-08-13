import { readFileSync } from "node:fs";
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
console.log(`  discovery outputs verified for ${version}`);
