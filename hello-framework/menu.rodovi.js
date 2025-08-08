import {
  generirajObiteljiPoMjestu,
} from "./menu.obitelji.js";

import {
  generirajMjestaOdObitelji
} from "./menu.mjesta.js";

export function getRodEntitetiIzvoriPages(rod, obitelji) {
  const obiteljiPoMjestuPages = generirajObiteljiPoMjestu(obitelji, rod);
  const mjestaPages = generirajMjestaOdObitelji(obitelji, rod);

  return [
    {
      name: `Obitelji`,
      pages: [
        { name: "  Prezime",      path: `/pages/1_Jularic/prezime_r?ROD=${encodeURIComponent(rod)}` },
        { name: "  Generacije",   path: `/pages/ROD/Generacije_R?ROD=${encodeURIComponent(rod)}` },
        { name: "  Obitelji",     path: `/pages/ROD/Obitelji_R?ROD=${encodeURIComponent(rod)}` },
        { name: "  Događaji",     path: `/pages/ROD/Dogadjaji_R?ROD=${encodeURIComponent(rod)}` },
        { name: "  Stablo",       path: `/pages/ROD/Stablo_R?ROD=${encodeURIComponent(rod)}` },
        { name: "  Bolesti",      path: `/pages/ROD/Bolesti_D?ROD=${encodeURIComponent(rod)}` },
        { name: "  Mjesta",       path: `/pages/ROD/Mjesta_R?ROD=${encodeURIComponent(rod)}` },
        { name: "  Migracije",    path: `/pages/ROD/Migracije_R?ROD=${encodeURIComponent(rod)}` },
        { name: "  Izvori*",      path: `/pages/ROD/Izvori_D?ROD=${encodeURIComponent(rod)}` },
        { name: "  Župe",         path: `/pages/ROD/Zupe_R?ROD=${encodeURIComponent(rod)}` },
      ]
    },
    {
      name: "Mjesta",
      pages: [...mjestaPages]
    },
    {
      name: "Izvori",
      pages: [
        { name: "  Popisi",        path: `/pages/ROD/Izvor_Popisi?ROD=${encodeURIComponent(rod)}` },
        { name: "  Matice",        path: `/pages/ROD/Matice_D?ROD=${encodeURIComponent(rod)}` },
        { name: "  Groblje",       path: `/pages/ROD/Groblje_D?ROD=${encodeURIComponent(rod)}` },
        { name: "  Katastar",      path: `/pages/ROD/Katastar_D?ROD=${encodeURIComponent(rod)}` },
        { name: "  Pismo / Jezik", path: `/pages/ROD/Pismo_D?ROD=${encodeURIComponent(rod)}` },
      ]
    },
    {
      name: "----------",
      pages: [
        { name: "Sadržaj", path: "/pages/KONCEPT/Navigacija" }
      ]
    }
  ];
}
