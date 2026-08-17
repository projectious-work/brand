#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.argv[2];
if (!root) {
  throw new Error("usage: sync-release-menus.mjs <published-site-root>");
}

// The freshly built root is the authority for the supported release set.
// Deriving the list here prevents deployment post-processing from silently
// replacing a newly released version with a stale hard-coded menu.
const rootHTML = await readFile(path.join(root, "index.html"), "utf8");
const versionPanel = rootHTML.match(
  /<div class="?menu__label"?>Version<\/div>(.*?)(?:<\/div><\/div>)/s,
)?.[1];
if (!versionPanel) throw new Error("latest site has no version menu");

const releases = [...versionPanel.matchAll(
  /<a href=([^ >]+)[^>]*>(v\d+\.\d+\.\d+)(?: <span class=badge>([^<]+)<\/span>)?<\/a>/g,
)].map((match) => [match[2], match[1], match[3] || ""]);
if (!releases.length) throw new Error("latest site version menu is empty");

const latestVersion = releases.find((release) => release[2] === "latest")?.[0];
if (!latestVersion) throw new Error("latest site version menu has no latest release");

function currentVersion(file) {
  const relative = path.relative(root, file).split(path.sep);
  return /^v\d+\.\d+\.\d+$/.test(relative[0])
    ? relative[0]
    : latestVersion;
}

function docsyItems(current) {
  return releases.map(([label, url, note]) => {
    const active = label === current ? " active" : "";
    const latest = note ? " dropdown-item-latest" : "";
    const selected = label === current ? " aria-current=page" : "";
    return `<li><a class="dropdown-item${active}${latest}"${selected} href=${url}>${label}</a></li>`;
  }).join("");
}

function vanillaItems(current) {
  return releases.map(([label, url, note]) => {
    const selected = label === current;
    const badge = note ? ` <span class=badge>${note}</span>` : "";
    return `<a href=${url} role=menuitemradio aria-checked=${selected}>${label}${badge}</a>`;
  }).join("\n");
}

async function htmlFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === ".git") continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(target));
    else if (entry.name.endsWith(".html")) files.push(target);
  }
  return files;
}

let changed = 0;
for (const file of await htmlFiles(root)) {
  const source = await readFile(file, "utf8");
  const current = currentVersion(file);
  let output = source;

  if (source.includes("td-version-menu")) {
    output = output.replace(
      /(<div class="?td-version-menu dropdown"?[^>]*>.*?<ul class="?dropdown-menu"?[^>]*>).*?(<\/ul><\/div><\/li>)/s,
      `$1${docsyItems(current)}$2`,
    );
  } else {
    output = output.replace(
      /(<div class="?menu__label"?>Version<\/div>).*?(<\/div><\/div>)/s,
      `$1${vanillaItems(current)}$2`,
    );
  }

  if (output !== source) {
    await writeFile(file, output);
    changed += 1;
  }
}

console.log(`Synchronized release menus in ${changed} HTML files.`);
