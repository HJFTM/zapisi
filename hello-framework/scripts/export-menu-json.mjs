// hello-framework/scripts/export-menu-json.mjs
import fs from "fs/promises";
import path from "path";

// Učitaj config iz root-a hello-frameworka (ne iz src/)
const { default: config, dynamicPaths } = await import(
  new URL('../observablehq.config.js', import.meta.url)
);

const outDir = path.resolve("dist");
await fs.mkdir(outDir, { recursive: true });

const payload = {
  project: config.title,
  pages: config.pages,
  entryPoints: config.entryPoints,
  dynamicPaths: dynamicPaths()
};

await fs.writeFile(path.join(outDir, "menu.json"), JSON.stringify(payload, null, 2), "utf8");
console.log("✔ menu.json saved to", path.join(outDir, "menu.json"));
