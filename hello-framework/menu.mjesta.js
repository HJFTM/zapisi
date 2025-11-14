
import { CURRENT_PROJECT, data} from "./observablehq.base.js";
import { generirajMjestaOdObitelji} from "./menu.rodovi.js";

const mjestaBH = generirajMjestaOdObiteljiSVE(data.obitelj, "Bosna");
// const mjestaST = generirajMjestaOdObiteljiSVE(data.obitelj, "Stupnik");
// const mjestaDU = generirajMjestaOdObiteljiSVE(data.obitelj, "Dubrovnik");

const menuBH = generirajMjestaOdObiteljiSVE(data.obitelj, "Bosna");
// const menuST = generirajMjestaOdObitelji(data.obitelj, "Stupnik");
// const menuDU = generirajMjestaOdObitelji(data.obitelj, "Dubrovnik");

export const mjestaMenu = [
  //...mjestaST, ...mjestaDU,
  {
    name: "Rod Bosna",
    pages: [
      ...menuBH,
    ]
  },  
  /*
  {
    name: "Rod Stupnik (Austrougarska)",
    pages: [
      ...menuST,
    ]
  }, 
  {
    name: "Rod Dubrovnik",
    pages: [
      ...menuDU,
    ]
  },   
  {
    name: "------",
    pages: [
      { name: "Sadržaj", path: "/pages/KONCEPT/Navigacija" }
    ]
  }
  */
];

export const mjestaPages = [
  ...mjestaBH, 
  // ...mjestaST, 
  // ...mjestaDU,

  
  {
    name: "------",
    pages: [
      { name: "Sadržaj", path: "/pages/KONCEPT/Navigacija" }
    ]
  }
];

export function generirajMjestaOdObiteljiSVE(obitelji, rod = "Bosna") {
  // 1) filtriraj obitelji (samo muške loze, isti kao prije)
  const obitelj_m = obitelji.filter(
    o => o.TIP === "M" && o.ROD === rod && o.OBITELJ
  );

  const mjestaSet = new Set();

  // 2) skupi jedinstvena mjesta iz glavnog mjesta i migracija
  for (const o of obitelj_m) {
    if (o.MJESTO) mjestaSet.add(o.MJESTO.trim());

    const migracije = (o.MIGRACIJA || "")
      .split(/[,;]/)
      .map(s => s.trim())
      .filter(Boolean);

    for (const migracija of migracije) {
      mjestaSet.add(migracija);
    }
  }

  // 3) nađi najstariju godinu za svako mjesto
  const mjestaMap = new Map();

  for (const mjesto of mjestaSet) {
    let najstarijaGodina = null;

    for (const o of obitelj_m) {
      const godina = parseInt(o.GODINA, 10);
      if (!isFinite(godina)) continue;

      const migracije = (o.MIGRACIJA || "")
        .split(/[,;]/)
        .map(s => s.trim())
        .filter(Boolean);

      const mjestoMatch =
        (o.MJESTO && o.MJESTO.trim() === mjesto) || migracije.includes(mjesto);

      if (
        mjestoMatch &&
        (najstarijaGodina == null || godina < najstarijaGodina)
      ) {
        najstarijaGodina = godina;
      }
    }

    if (najstarijaGodina != null) {
      mjestaMap.set(mjesto, najstarijaGodina);
    }
  }

  // 4) definiraj podstranice (kategorije) za svako mjesto
  const kategorije = [
    { label: "Mjesto", dir: "mjesto" },
    { label: "Migracije", dir: "mjesto_migracije" },
    { label: "Stablo", dir: "mjesto_stablo" },
    { label: "Zapisi", dir: "mjesto_zapisi" },
    { label: "Obitelji", dir: "mjesto_obitelji" },
    { label: "Župe", dir: "mjesto_zupe" },
    { label: "Događaji", dir: "mjesto_dogadjaji" },
    { label: "Groblje", dir: "mjesto_groblje" }
  ];

  // 5) generiraj strukturu menija: jedno mjesto -> više podstranica
  const mjesta = Array.from(mjestaMap.entries())
    // sort po najstarijoj godini, pa po nazivu mjesta
    .sort((a, b) => {
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[0].localeCompare(b[0], "hr");
    })
    .map(([mjesto, godina]) => {
      const nazivMjesta = `${godina}. ${mjesto}`;

      const pages = kategorije.map(({ label, dir }) => ({
        name: label,
        path: `/pages/ENTITET/${dir}/${encodeURIComponent(mjesto)}`
      }));

      return {
        name: nazivMjesta,
        // opcionalno: glavna stranica mjesta – npr. prva kategorija
        path: pages[0]?.path,
        pages
      };
    });

  return mjesta;
}
