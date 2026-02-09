import crypto from 'crypto';

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
  const md5Hash = crypto.createHash('md5').update(normalizedName).digest('hex');
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
