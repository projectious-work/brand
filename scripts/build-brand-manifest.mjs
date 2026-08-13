import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { parse } from "yaml";

const root = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const config = readFileSync(join(root, "src/hugo.yaml"), "utf8");
const version = config.match(/^  version: "([^"]+)"$/m)?.[1];
if (!version) throw new Error("src/hugo.yaml has no params.version");

const brand = parse(readFileSync(join(root, "src/data/brand.yaml"), "utf8"));
const resources = [
  ["identity", "normative", "src/content/docs/_index.md"],
  ["ai-guide", "normative", "src/content/docs/ai/_index.md"],
  ["foundations", "normative", "src/content/docs/foundations/_index.md"],
  ["tokens-guide", "normative", "src/content/docs/tokens.md"],
  ["logo", "normative", "src/content/docs/logo/_index.md"],
  ["typography", "normative", "src/content/docs/foundations/typography.md"],
  ["components", "normative", "src/content/docs/interface/components.md"],
  ["rendered-specimens", "example", "src/content/docs/interface/code.md"],
  ["collateral", "normative", "src/content/docs/collateral/_index.md"],
  ["licensing", "normative", "src/content/docs/governance/licensing.md"],
  ["trademark", "normative", "src/content/docs/governance/trademark.md"],
  ["provenance", "normative", "src/content/docs/governance/provenance.md"],
  ["changelog", "normative", "CHANGELOG.md"],
  ["migrations", "normative", "CHANGELOG.md"],
  ["tokens-json", "download", "src/static/downloads/tokens/tokens.json"],
  ["tokens-css", "download", "src/static/downloads/tokens/variables.css"],
  ["tokens-tailwind", "download", "src/static/downloads/tokens/tailwind.config.js"],
].map(([id, kind, path]) => ({ id, kind, path }));

const tokens = {};
for (const item of brand.core) {
  tokens[item.token] = { value: item.hex, role: item.use };
}
for (const [name, scale] of Object.entries(brand.scales)) {
  for (const mode of ["light", "dark"]) {
    scale[mode].forEach((value, index) => {
      const id = `--${name}-${mode}-${index + 1}`;
      tokens[id] = { value, role: brand.stepRoles[index], mode };
    });
  }
}

const manifest = {
  schemaVersion: 1,
  identity: "projectious.work brand",
  version,
  authority: {
    documentation: "src/content/docs/",
    structuredTokens: "src/data/brand.yaml",
  },
  boundaries: {
    publicRoots: ["src/content/docs/", "src/static/downloads/", "CHANGELOG.md"],
    excluded: ["context/", ".git/", "input/", "public/"],
  },
  resources,
  tokens,
};

const out = join(root, "src/static/downloads/brand-manifest.json");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${out}`);
