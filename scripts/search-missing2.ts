#!/usr/bin/env npx tsx
/**
 * More targeted searches for the 7 missing images.
 */

async function getThumb(title: string, width = 400): Promise<string | null> {
  const params = new URLSearchParams({
    action: 'query',
    titles: title,
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: String(width),
    format: 'json',
  });
  const resp = await fetch(
    `https://commons.wikimedia.org/w/api.php?${params}`,
    { headers: { 'User-Agent': 'FeudalspielSearch/1.0' } }
  );
  const data = await resp.json();
  for (const page of Object.values(data.query?.pages || {}) as any[]) {
    if (page.imageinfo?.[0]?.thumburl) return page.imageinfo[0].thumburl;
    if (page.imageinfo?.[0]?.url) return page.imageinfo[0].url;
  }
  return null;
}

async function main() {
  const candidates: [string, string[]][] = [
    // 1. Kaufmann role image - medieval merchant painting
    ['Kaufmann role (merchant painting)', [
      'File:Petrus Christus 003.jpg',  // "A Goldsmith in his Shop" by Petrus Christus
      'File:Quentin Matsys - Portrait of a Man - WGA14237.jpg',
      'File:Hans Holbein der Jüngere - Der Kaufmann Georg Gisze - Google Art Project.jpg',
      'File:Jan Gossaert 005.jpg',
    ]],

    // 2. Cathedral building
    ['Bauer Die Entscheidung (cathedral building)', [
      'File:Construction.of" the Temple at Jerusalem.jpg',
      'File:Reims Cathedral, exterior (1).jpg',
      'File:Cathédrale de Reims Vitraux de Marc Chagall.jpg',
      'File:Medieval construction of building.jpg',
      'File:Turmbau.jpg',  // Tower of Babel - medieval illustration
    ]],

    // 3. Frankfurt fair / medieval trade fair
    ['Kaufmann Auf der Messe (trade fair)', [
      'File:Frankfurter Messe im Mittelalter.jpg',
      'File:Strigel, Bernhard - Augsburger Marktszene - 15th Century.jpg',
      'File:Bartholomäusmarkt Frankfurt.jpg',
      'File:Medieval market.jpg',
    ]],

    // 4. Robbers/bandits - Joos de Momper
    ['Kaufmann Räuber (robbers)', [
      'File:Joos de Momper - A mountainous landscape with a bridge.jpg',
      'File:Joos de Momper II and Jan Brueghel I - An extensive mountainous landscape with figures on a bridge.jpg',
      'File:Joos de Momper - Landscape with Figures on a Bridge.jpg',
      'File:Überfall auf Kaufleute im Mittelalter.jpg',
    ]],

    // 5. Meister des Codex Manesse - scribe/monk
    ['Mönch verbotenes Buch (Codex Manesse)', [
      'File:Meister der Manessischen Liederhandschrift 001.jpg',
      'File:Codex Manesse (mini) Schreiber.jpg',
      'File:Codex Manesse 006r Meister Heinrich Frauenlob.jpg',
      'File:Monk at work.jpg',
    ]],

    // 6. Plague / Pest image
    ['Mönch Die Pest (plague)', [
      'File:Plague in an Ancient City LACMA AC1997.10.1 (1 of 2).jpg',
      "File:The plague of Florence in 1348, as described in Boccaccio's Wellcome L0004057.jpg",
      'File:Doutielt 1.jpg',
      'File:Pieter Bruegel I-The Triumph of Death.jpg',
      'File:1346-1353 spread of the Black Death in Europe map.svg',
      'File:Burying Plague Victims of Tournai.jpg',
    ]],

    // 7. Nuremberg chronicles - NORIMBERGA page
    ['Intro Nuremberg (chronicles page)', [
      'File:Nuremberg chronicles - NORIMBERGA.png',
      'File:Nuremberg chronicles - Nuremberga.png',
      'File:Nuremberg Chronicles f 099v100r.jpg',
      'File:Nürnberg Schedel.jpg',
      'File:Nuremberg chronicles f 099v100r.png',
    ]],
  ];

  for (const [context, titles] of candidates) {
    console.log(`\n=== ${context} ===`);
    for (const title of titles) {
      const url = await getThumb(title);
      console.log(`  ${url ? 'OK' : 'MISSING'}: ${title}`);
      if (url) console.log(`    ${url}`);
    }
  }
}

main().catch(console.error);