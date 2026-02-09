#!/usr/bin/env npx tsx
/**
 * Search Wikimedia Commons for the 7 filenames that couldn't be found.
 * Uses the API search endpoint to find similar/correct names.
 */

interface SearchResult {
  query: string;
  found: boolean;
  title?: string;
  thumbUrl?: string;
}

async function searchCommons(searchTerm: string, width = 400): Promise<SearchResult> {
  // First: try exact title lookup
  const exactParams = new URLSearchParams({
    action: 'query',
    titles: `File:${searchTerm}`,
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: String(width),
    format: 'json',
  });

  const exactResp = await fetch(
    `https://commons.wikimedia.org/w/api.php?${exactParams}`,
    { headers: { 'User-Agent': 'FeudalspielSearch/1.0' } }
  );
  const exactData = await exactResp.json();
  for (const page of Object.values(exactData.query?.pages || {}) as any[]) {
    if (page.imageinfo?.[0]?.thumburl) {
      return {
        query: searchTerm,
        found: true,
        title: page.title,
        thumbUrl: page.imageinfo[0].thumburl,
      };
    }
  }

  // Second: keyword search
  const searchParams = new URLSearchParams({
    action: 'query',
    list: 'search',
    srsearch: searchTerm.replace(/[-_\.]/g, ' ').replace(/\.(jpg|png|gif|svg)$/i, ''),
    format: 'json',
    srnamespace: '6',
    srlimit: '5',
  });

  const searchResp = await fetch(
    `https://commons.wikimedia.org/w/api.php?${searchParams}`,
    { headers: { 'User-Agent': 'FeudalspielSearch/1.0' } }
  );
  const searchData = await searchResp.json();

  if (searchData.query?.search?.length > 0) {
    // Get thumb URL for first result
    const title = searchData.query.search[0].title;
    const thumbParams = new URLSearchParams({
      action: 'query',
      titles: title,
      prop: 'imageinfo',
      iiprop: 'url',
      iiurlwidth: String(width),
      format: 'json',
    });

    const thumbResp = await fetch(
      `https://commons.wikimedia.org/w/api.php?${thumbParams}`,
      { headers: { 'User-Agent': 'FeudalspielSearch/1.0' } }
    );
    const thumbData = await thumbResp.json();
    for (const page of Object.values(thumbData.query?.pages || {}) as any[]) {
      if (page.imageinfo?.[0]?.thumburl) {
        return {
          query: searchTerm,
          found: true,
          title: page.title,
          thumbUrl: page.imageinfo[0].thumburl,
        };
      }
    }
  }

  return { query: searchTerm, found: false };
}

async function main() {
  const searches = [
    // roles.ts:29 - kaufmann role image
    { context: 'Kaufmann role image', search: 'Merchant medieval painting' },
    { context: 'Kaufmann role image (alt)', search: 'Medieval merchant Hanseatic' },

    // scenarios-bauer.ts:178 - cathedral building
    { context: 'Bauer Die Entscheidung', search: 'Cathedral building medieval' },
    { context: 'Bauer Die Entscheidung (alt)', search: 'Cathbuilding' },

    // scenarios-kaufmann.ts:52 - Frankfurt fair
    { context: 'Kaufmann Auf der Messe', search: 'Frankfurt Messe medieval' },
    { context: 'Kaufmann Auf der Messe (alt)', search: 'Medieval fair market' },

    // scenarios-kaufmann.ts:136 - robbers on road
    { context: 'Kaufmann Räuber', search: 'Joos de Momper battle bridge' },
    { context: 'Kaufmann Räuber (alt)', search: 'Medieval highway robbers painting' },

    // scenarios-moench.ts:52 - forbidden book / Codex Manesse
    { context: 'Mönch verbotenes Buch', search: 'Codex Manesse Meister' },
    { context: 'Mönch verbotenes Buch (alt)', search: 'Medieval monk writing manuscript' },

    // scenarios-moench.ts:94 - plague
    { context: 'Mönch Die Pest', search: 'Doutielt plague' },
    { context: 'Mönch Die Pest (alt)', search: 'Medieval plague Black Death painting' },
    { context: 'Mönch Die Pest (alt2)', search: 'Plague burying dead medieval' },

    // intro.ts:28 - Nuremberg city view
    { context: 'Intro Nuremberg', search: 'Nuremberg chronicles NORIMBERGA' },
    { context: 'Intro Nuremberg (alt)', search: 'Schedel Weltchronik Nürnberg' },
    { context: 'Intro Nuremberg (alt2)', search: 'Nuremberg chronicles Nuremberg city view' },
  ];

  for (const { context, search } of searches) {
    console.log(`\n--- ${context} ---`);
    console.log(`  Search: "${search}"`);
    const result = await searchCommons(search);
    if (result.found) {
      console.log(`  Found:  ${result.title}`);
      console.log(`  URL:    ${result.thumbUrl}`);
    } else {
      console.log(`  NOT FOUND`);
    }
  }
}

main().catch(console.error);