import {data} from "./observablehq.base.js";

// ➕ Generiranje matica za sve rodove
const maticeBH = generirajMaticePoZupi(data, "Bosna");
const maticeST = generirajMaticePoZupi(data, "Stupnik");
const maticeDU = generirajMaticePoZupi(data, "Dubrovnik");
// const matice_komusina = maticeBH.find(m => m.name ==  "Komušina");
// const matice_sivsa = maticeBH.find(m => m.name ==  "Sivša");
// const matice_pecnik = maticeBH.find(m => m.name ==  "Pećnik");

// 📦 Export struktura izvora, uključujući matice
export const zapisiPages = [
  // matice_komusina,
  // matice_sivsa,
  // maticeBH.find(m => m.name ==  "Plehan"),
  // maticeBH.find(m => m.name ==  "Koraće"),  
  // maticeBH.find(m => m.name ==  "Podvučjak"),  
  // maticeBH.find(m => m.name ==  "Potočani"),    
  // matice_pecnik,  
  ...maticeBH,
  ...maticeST,
  ...maticeDU
];

// 🔁 Funkcija za generiranje matica po župi
export function generirajMaticePoZupi(data, rod = "Bosna") {
  const matice = (data.zapisi_matice ?? [])
    .filter(m => m.MATICA && m.ROD === rod && m.ZUPA);

  const mapaZupa = {};

  for (const m of matice) {
    const zupa = m.ZUPA.trim();
    if (!mapaZupa[zupa]) mapaZupa[zupa] = [];
    mapaZupa[zupa].push(m);
  }

  const rezultat = Object.entries(mapaZupa).map(([zupa, zapisi]) => {
    // Grupiraj zapise po MATICA, i uzmi prvi zapis za godinu sortiranja
    const maticeMap = new Map();

    for (const z of zapisi) {
      if (!maticeMap.has(z.MATICA)) {
        maticeMap.set(z.MATICA, {
          name: z.MATICA,
          path: `/pages/ENTITET/matica/${encodeURIComponent(z.MATICA)}`,
          geo_path: `/pages/ENTITET/matica_geo/${encodeURIComponent(z.MATICA)}`,
          godina: parseInt(z.GODINA) || 9999
        });
      }
    }

    const maticeList = Array.from(maticeMap.values())
      .sort((a, b) => a.godina - b.godina)
      .map(({ godina, ...rest }) => rest); // makni "godina" iz rezultata

    return {
      name: `${zupa} (${maticeList.length})`,
      pages: maticeList
    };
  });

  return rezultat.sort((a, b) => a.name.localeCompare(b.name));
}

