// Browser-safe MD5 implementation for Wikimedia hashing.
function md5Hex(input: string): string {
  const data = new TextEncoder().encode(input);

  const rotateLeft = (x: number, c: number) => (x << c) | (x >>> (32 - c));
  const add = (a: number, b: number) => (a + b) >>> 0;

  const f = (x: number, y: number, z: number) => (x & y) | (~x & z);
  const g = (x: number, y: number, z: number) => (x & z) | (y & ~z);
  const h = (x: number, y: number, z: number) => x ^ y ^ z;
  const i = (x: number, y: number, z: number) => y ^ (x | ~z);

  const toWordArray = (bytes: Uint8Array): number[] => {
    const bitLen = bytes.length * 8;
    const withPadding = new Uint8Array((((bitLen + 64) >>> 9) << 6) * 4);
    withPadding.set(bytes);
    withPadding[bytes.length] = 0x80;

    const view = new DataView(withPadding.buffer);
    view.setUint32(withPadding.length - 8, bitLen >>> 0, true);
    view.setUint32(withPadding.length - 4, Math.floor(bitLen / 0x100000000), true);

    const words: number[] = [];
    for (let idx = 0; idx < withPadding.length; idx += 4) {
      words.push(view.getUint32(idx, true));
    }
    return words;
  };

  const words = toWordArray(data);
  let a = 0x67452301;
  let b = 0xefcdab89;
  let c = 0x98badcfe;
  let d = 0x10325476;

  const s = [
    7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
    5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
    4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
    6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21,
  ];

  const k = Array.from({ length: 64 }, (_, idx) =>
    Math.floor(Math.abs(Math.sin(idx + 1)) * 0x100000000) >>> 0
  );

  for (let offset = 0; offset < words.length; offset += 16) {
    let aa = a;
    let bb = b;
    let cc = c;
    let dd = d;

    for (let j = 0; j < 64; j += 1) {
      let div16 = Math.floor(j / 16);
      let fResult = 0;
      let gIndex = 0;

      switch (div16) {
        case 0:
          fResult = f(b, c, d);
          gIndex = j;
          break;
        case 1:
          fResult = g(b, c, d);
          gIndex = (5 * j + 1) % 16;
          break;
        case 2:
          fResult = h(b, c, d);
          gIndex = (3 * j + 5) % 16;
          break;
        default:
          fResult = i(b, c, d);
          gIndex = (7 * j) % 16;
      }

      const temp = d;
      d = c;
      c = b;
      const sum = add(add(a, fResult), add(k[j], words[offset + gIndex]));
      b = add(b, rotateLeft(sum, s[j]));
      a = temp;
    }

    a = add(a, aa);
    b = add(b, bb);
    c = add(c, cc);
    d = add(d, dd);
  }

  const toHex = (num: number) => num.toString(16).padStart(8, '0');
  return `${toHex(a)}${toHex(b)}${toHex(c)}${toHex(d)}`;
}

/**
 * Generates a Wikimedia Commons image URL from a file name using MD5 hash.
 * This avoids relying on LLM-generated URLs which are often hallucinated.
 *
 * @param fileName - The exact Wikimedia Commons file name (e.g. "Mönch.jpg")
 * @param width - Thumbnail width in pixels (omit for full-size)
 * @returns The correct Wikimedia Commons URL
 */
export function getWikimediaImageUrl(fileName: string, width?: number): string {
  const normalizedName = fileName.replace(/\s/g, '_');
  const md5Hash = md5Hex(normalizedName);
  const dir1 = md5Hash[0];
  const dir2 = md5Hash.slice(0, 2);
  const encodedName = encodeURIComponent(normalizedName);

  if (width) {
    return `https://upload.wikimedia.org/wikipedia/commons/thumb/${dir1}/${dir2}/${encodedName}/${width}px-${encodedName}`;
  }
  return `https://upload.wikimedia.org/wikipedia/commons/${dir1}/${dir2}/${encodedName}`;
}

/**
 * Searches Wikimedia Commons for images matching a search term.
 * Returns the first result's URL or null.
 */
export async function searchCommonsImage(
  searchTerm: string,
  width = 300
): Promise<{ title: string; url: string } | null> {
  const params = new URLSearchParams({
    action: 'query',
    list: 'search',
    srsearch: searchTerm,
    format: 'json',
    srnamespace: '6', // File namespace
    srprop: 'snippet',
    origin: '*',
  });

  const response = await fetch(
    `https://commons.wikimedia.org/w/api.php?${params}`
  );
  const data = await response.json();

  if (data.query?.search?.length > 0) {
    const title = data.query.search[0].title as string;
    const fileName = title.replace('File:', '');
    return {
      title,
      url: getWikimediaImageUrl(fileName, width),
    };
  }
  return null;
}

/**
 * Validates a Wikimedia Commons image URL by making a HEAD request.
 * Returns true if the image exists (HTTP 200).
 */
export async function validateImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}
