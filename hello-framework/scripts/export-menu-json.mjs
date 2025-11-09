// hello-framework/scripts/export-menu-json.mjs
import fs from "fs/promises";
import path from "path";
import config, { dynamicPaths } from "../src/observablehq.config.js";

const outDir = path.resolve("dist");
await fs.mkdir(outDir, { recursive: true });

const payload = {
  project: config.title,
  pages: config.pages,
  entryPoints: config.entryPoints,
  dynamicPaths: dynamicPaths()
};

const outFile = path.join(outDir, "menu.json");
await fs.writeFile(outFile, JSON.stringify(payload, null, 2), "utf8");
console.log("✔ menu.json saved to", outFile);
