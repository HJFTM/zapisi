

import { 
  CURRENT_PROJECT, data} 
from "./observablehq.base.js";


const obiteljiBH = generirajObiteljiPoMjestu(data.obitelj, "Bosna");
// const obiteljiST = generirajObiteljiPoMjestu(data.obitelj, "Stupnik");
// const obiteljiDU = generirajObiteljiPoMjestu(data.obitelj, "Dubrovnik");

const obiteljiGEOBH = generirajObiteljiGEOpoMjestu(data.obitelj, "Bosna");
// const obiteljiGEOST = generirajObiteljiGEOpoMjestu(data.obitelj, "Stupnik");
// const obiteljiGEODU = generirajObiteljiGEOpoMjestu(data.obitelj, "Dubrovnik");

const obiteljiZapisBH = generirajObiteljiZapis(data.obitelj, "Bosna");
// const obiteljiZapisST = generirajObiteljiZapis(data.obitelj, "Stupnik");
// const obiteljiZapisDU = generirajObiteljiZapis(data.obitelj, "Dubrovnik");

const obiteljiStabloBH = generirajObiteljiStablo(data.obitelj, "Bosna");
// const obiteljiStabloST = generirajObiteljiStablo(data.obitelj, "Stupnik");
// const obiteljiStabloDU = generirajObiteljiStablo(data.obitelj, "Dubrovnik");

export const obiteljiPages = [
  ...obiteljiBH, 
  // ...obiteljiST, 
  // ...obiteljiDU,
 
 // {
 //   name: "------",
 //   pages: [
 //     { name: "Sadržaj", path: "/pages/KONCEPT/Navigacija" }
 //   ]
 // }
];

export const obiteljiPagesAll = [
  ...obiteljiBH, 
  // ...obiteljiST, ...obiteljiDU,
  ...obiteljiGEOBH, 
  // ...obiteljiGEOST, ...obiteljiGEODU,
  ...obiteljiStabloBH, 
  // ...obiteljiStabloST, ...obiteljiStabloDU,
  ...obiteljiZapisBH, 
  //...obiteljiZapisST, ...obiteljiZapisDU
];

export function generirajObiteljiPoMjestu(data, rod = "Bosna") {
  const mjestaSet = new Set();

  // 1) skup mjesta
  for (const o of data) {
    if (!o.ROD || o.ROD !== rod || !o.MJESTO || !o.OBITELJ) continue;
    mjestaSet.add(o.MJESTO.trim());
  }

  const mjesta = Array.from(mjestaSet);
  const mapaMjesta = {};

  for (const mjesto of mjesta) {
    // 2) filtriraj obitelji za to mjesto (uključujući migracije)
    const obiteljiZaMjesto = data.filter(o =>
      o.ROD === rod &&
      o.OBITELJ &&
      (
        (o.MJESTO && o.MJESTO.trim() === mjesto) ||
        (o.MIGRACIJA &&
          o.MIGRACIJA
            .split(/[,;]/)
            .map(s => s.trim())
            .includes(mjesto))
      )
    );

    // 3) grupiraj po nazivu obitelji (da izbjegnemo duplikate)
    const mapaObitelji = new Map();

    for (const o of obiteljiZaMjesto) {
      const obitelj = o.OBITELJ;
      if (!mapaObitelji.has(obitelj)) {
        const osnovni = `/pages/ENTITET/obitelj/${encodeURIComponent(obitelj)}`;
        const geo = `/pages/ENTITET/obitelj_geo/${encodeURIComponent(obitelj)}`;
        const stablo = `/pages/ENTITET/obitelj_stablo/${encodeURIComponent(obitelj)}`;
        const zapis = `/pages/ENTITET/obitelj_zapis/${encodeURIComponent(obitelj)}`;
        mapaObitelji.set(obitelj, { osnovni, geo, stablo, zapis });
      }
    }

    // 4) pretvori u strukturu menija s podstranicama
    mapaMjesta[mjesto] = Array.from(mapaObitelji.entries()).map(
      ([obitelj, paths]) => ({
        name: obitelj,
        path: paths.osnovni, // “glavna” stranica obitelji
        pages: [
          { name: "Pregled", path: paths.osnovni },
          { name: "Na karti", path: paths.geo },
          { name: "Stablo", path: paths.stablo },
          { name: "Zapis", path: paths.zapis }
        ]
      })
    );
  }

  // 5) top-level: mjesta
  return Object.entries(mapaMjesta).map(([mjesto, obitelji]) => ({
    name: mjesto,
    pages: obitelji
  }));
}


export function generirajObiteljiGEOpoMjestu(data, rod = "Bosna") {
  const mjestaSet = new Set();

  for (const o of data) {
    if (!o.ROD || o.ROD !== rod || !o.MJESTO || !o.OBITELJ) continue;
    mjestaSet.add(o.MJESTO.trim());
  }

  const mjesta = Array.from(mjestaSet);
  const mapaMjesta = {};

  for (const mjesto of mjesta) {
    mapaMjesta[mjesto] = data
      .filter(o =>
        o.ROD === rod &&
        o.OBITELJ &&
        (
          (o.MJESTO && o.MJESTO.trim() === mjesto) ||
          (o.MIGRACIJA && o.MIGRACIJA.split(/[,;]/).map(s => s.trim()).includes(mjesto))
        )
      )
      .map(o => ({
        name: o.OBITELJ,
        path: `/pages/ENTITET/obitelj_geo/${encodeURIComponent(o.OBITELJ)}`,
        pathEncoded2: `/pages/ENTITET/obitelj_geo/${encodeURIComponent(encodeURIComponent(o.OBITELJ))}`
        
      }));
  }

  return Object.entries(mapaMjesta).map(([mjesto, obitelji]) => ({
    name: mjesto,
    pages: obitelji
  }));
}


export function generirajObiteljiZapis(data, rod = "Bosna") {
  const mjestaSet = new Set();

  for (const o of data) {
    if (!o.ROD || o.ROD !== rod || !o.MJESTO || !o.OBITELJ) continue;
    mjestaSet.add(o.MJESTO.trim());
  }

  const mjesta = Array.from(mjestaSet);
  const mapaMjesta = {};

  for (const mjesto of mjesta) {
    mapaMjesta[mjesto] = data
      .filter(o =>
        o.ROD === rod &&
        o.OBITELJ &&
        (
          (o.MJESTO && o.MJESTO.trim() === mjesto) ||
          (o.MIGRACIJA && o.MIGRACIJA.split(/[,;]/).map(s => s.trim()).includes(mjesto))
        )
      )
      .map(o => ({
        name: o.OBITELJ,
        path: `/pages/ENTITET/obitelj_zapis/${encodeURIComponent(o.OBITELJ)}`,
        pathEncoded2: `/pages/ENTITET/obitelj_zapis/${encodeURIComponent(encodeURIComponent(o.OBITELJ))}`
        
      }));
  }

  return Object.entries(mapaMjesta).map(([mjesto, obitelji]) => ({
    name: mjesto,
    pages: obitelji
  }));
}
export function generirajObiteljiStablo(data, rod = "Bosna") {
  const mjestaSet = new Set();

  for (const o of data) {
    if (!o.ROD || o.ROD !== rod || !o.MJESTO || !o.OBITELJ) continue;
    mjestaSet.add(o.MJESTO.trim());
  }

  const mjesta = Array.from(mjestaSet);
  const mapaMjesta = {};

  for (const mjesto of mjesta) {
    mapaMjesta[mjesto] = data
      .filter(o =>
        o.ROD === rod &&
        o.OBITELJ &&
        (
          (o.MJESTO && o.MJESTO.trim() === mjesto) ||
          (o.MIGRACIJA && o.MIGRACIJA.split(/[,;]/).map(s => s.trim()).includes(mjesto))
        )
      )
      .map(o => ({
        name: o.OBITELJ,
        path: `/pages/ENTITET/obitelj_stablo/${encodeURIComponent(o.OBITELJ)}`,
        pathEncoded2: `/pages/ENTITET/obitelj_stablo/${encodeURIComponent(encodeURIComponent(o.OBITELJ))}`
        
      }));
  }

  return Object.entries(mapaMjesta).map(([mjesto, obitelji]) => ({
    name: mjesto,
    pages: obitelji
  }));
}
