// FILE: hello-framework/scripts/export-menu-json.mjs
// Opis: Generira JSON meni (pages, entryPoints, dynamicPaths) za trenutni projekt
//       i sprema ga u dist/<current_project>_menu.json

import fs from "fs/promises";
import path from "path";

// 1️⃣ Učitaj glavni config (koji definira stranice i rute)
const { default: config, dynamicPaths } = await import(
  new URL("../observablehq.config.js", import.meta.url)
);

// 2️⃣ Pokušaj učitati CURRENT_PROJECT iz observablehq.base.js (ako postoji)
let CURRENT_PROJECT = null;
try {
  const baseModule = await import(
    new URL("../observablehq.base.js", import.meta.url)
  );
  CURRENT_PROJECT = baseModule?.CURRENT_PROJECT ?? null;
} catch {
  // ako nije dostupan u Node okruženju, koristi iz ENV
  CURRENT_PROJECT = process.env.CURRENT_PROJECT ?? null;
}

// 3️⃣ Ako nema ni u ENV-u ni u base.js, koristi config.title ili fallback
if (!CURRENT_PROJECT) {
  CURRENT_PROJECT = config?.title || "project";
}

// 4️⃣ Odredi naziv izlaznog fajla
const projectName = CURRENT_PROJECT;
const outFile = `${projectName}_menu.json`;

// 5️⃣ Generiraj payload
const payload = {
  project: CURRENT_PROJECT,
  pages: config.pages,
  entryPoints: config.entryPoints,
  dynamicPaths: dynamicPaths ? dynamicPaths() : [],
};

// 6️⃣ Zapiši u dist/
const outDir = path.resolve("dist/pages");
await fs.mkdir(outDir, { recursive: true });

const outPath = path.join(outDir, outFile);
await fs.writeFile(outPath, JSON.stringify(payload, null, 2), "utf8");

console.log(`✔ ${outFile} saved to ${outPath}`);
