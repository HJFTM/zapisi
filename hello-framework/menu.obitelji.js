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
