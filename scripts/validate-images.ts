#!/usr/bin/env npx tsx
/**
 * Validates all Wikimedia Commons image URLs in the project.
 * Run with: npx tsx scripts/validate-images.ts
 *
 * For each URL, it:
 *  1. Extracts the filename from the URL
 *  2. Recomputes the expected URL via MD5 hash
 *  3. Compares against the hardcoded URL
 *  4. Makes a HEAD request to verify the image exists
 */

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.resolve(import.meta.dirname, '../src/data');
const PAGES_DIR = path.resolve(import.meta.dirname, '../src/pages');

interface ImageRef {
  file: string;
  line: number;
  url: string;
  context: string; // surrounding text for identification
}

function getWikimediaImageUrl(fileName: string, width?: number): string {
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

/** Extract all Wikimedia URLs from .ts files */
function extractImageUrls(dirs: string[]): ImageRef[] {
  const refs: ImageRef[] = [];
  const urlPattern = /https:\/\/upload\.wikimedia\.org\/[^\s'"`,)]+/g;

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

    for (const file of files) {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');

      for (let i = 0; i < lines.length; i++) {
        const matches = lines[i].matchAll(urlPattern);
        for (const match of matches) {
          // Get context from previous lines (look for id/title)
          const contextLines = lines.slice(Math.max(0, i - 5), i + 1).join(' ');
          const idMatch = contextLines.match(/id:\s*'([^']+)'/);
          const titleMatch = contextLines.match(/title:\s*'([^']+)'/);
          const context = titleMatch?.[1] || idMatch?.[1] || file;

          refs.push({
            file: path.relative(process.cwd(), filePath),
            line: i + 1,
            url: match[0],
            context,
          });
        }
      }
    }
  }
  return refs;
}

/** Parse a Wikimedia thumb URL into its components */
function parseThumbUrl(url: string): {
  fileName: string;
  width: number;
  hashDir1: string;
  hashDir2: string;
} | null {
  // Pattern: .../thumb/{h1}/{h2}/{encodedName}/{width}px-{encodedName}
  const thumbMatch = url.match(
    /\/commons\/thumb\/([0-9a-f])\/([0-9a-f]{2})\/([^/]+)\/(\d+)px-/
  );
  if (thumbMatch) {
    const fileName = decodeURIComponent(thumbMatch[3]);
    return {
      fileName,
      width: parseInt(thumbMatch[4]),
      hashDir1: thumbMatch[1],
      hashDir2: thumbMatch[2],
    };
  }

  // Non-thumb pattern: .../commons/{h1}/{h2}/{encodedName}
  const rawMatch = url.match(
    /\/commons\/([0-9a-f])\/([0-9a-f]{2})\/([^/\s'"]+)/
  );
  if (rawMatch) {
    return {
      fileName: decodeURIComponent(rawMatch[3]),
      width: 0,
      hashDir1: rawMatch[1],
      hashDir2: rawMatch[2],
    };
  }

  return null;
}

async function checkUrlExists(url: string): Promise<{ ok: boolean; status: number }> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'FeudalspielImageValidator/1.0' },
    });
    return { ok: response.ok, status: response.status };
  } catch (e) {
    return { ok: false, status: 0 };
  }
}

/** Use Wikimedia API to get the correct thumb URL for a file */
async function getApiThumbUrl(fileName: string, width: number): Promise<string | null> {
  const title = `File:${fileName}`;
  const params = new URLSearchParams({
    action: 'query',
    titles: title,
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: String(width),
    format: 'json',
  });

  try {
    const response = await fetch(
      `https://commons.wikimedia.org/w/api.php?${params}`,
      { headers: { 'User-Agent': 'FeudalspielImageValidator/1.0' } }
    );
    const data = await response.json();
    const pages = data.query?.pages;
    if (!pages) return null;

    for (const page of Object.values(pages) as any[]) {
      if (page.imageinfo?.[0]?.thumburl) {
        return page.imageinfo[0].thumburl;
      }
    }
  } catch {
    // API call failed
  }
  return null;
}

// ---- Main ----
async function main() {
  console.log('=== Feudalspiel Image URL Validator ===\n');

  const refs = extractImageUrls([DATA_DIR, PAGES_DIR]);
  console.log(`Found ${refs.length} image URLs across source files.\n`);

  let okCount = 0;
  let hashMismatchCount = 0;
  let brokenCount = 0;
  const fixes: { ref: ImageRef; correctUrl: string }[] = [];

  for (const ref of refs) {
    const parsed = parseThumbUrl(ref.url);
    if (!parsed) {
      console.log(`  ? UNPARSEABLE: ${ref.file}:${ref.line} (${ref.context})`);
      console.log(`    ${ref.url}\n`);
      continue;
    }

    // Check MD5 hash
    const normalizedName = parsed.fileName.replace(/\s/g, '_');
    const expectedHash = crypto.createHash('md5').update(normalizedName).digest('hex');
    const expectedDir1 = expectedHash[0];
    const expectedDir2 = expectedHash.slice(0, 2);
    const hashOk = parsed.hashDir1 === expectedDir1 && parsed.hashDir2 === expectedDir2;

    if (!hashOk) {
      hashMismatchCount++;
      console.log(`  X HASH MISMATCH: ${ref.file}:${ref.line} (${ref.context})`);
      console.log(`    File: ${parsed.fileName}`);
      console.log(`    Has:      ${parsed.hashDir1}/${parsed.hashDir2}`);
      console.log(`    Expected: ${expectedDir1}/${expectedDir2}`);

      // Generate correct URL
      const correctUrl = getWikimediaImageUrl(parsed.fileName, parsed.width || undefined);
      console.log(`    Correct:  ${correctUrl}`);

      // Also try the API
      const apiUrl = await getApiThumbUrl(parsed.fileName, parsed.width || 300);
      if (apiUrl) {
        console.log(`    API URL:  ${apiUrl}`);
        fixes.push({ ref, correctUrl: apiUrl });
      } else {
        console.log(`    API: File not found on Commons (name may be wrong)`);
      }
      console.log();
      continue;
    }

    // Hash is correct, verify URL exists via HTTP
    const { ok, status } = await checkUrlExists(ref.url);
    if (ok) {
      okCount++;
      console.log(`  ✓ OK: ${ref.file}:${ref.line} (${ref.context})`);
    } else {
      brokenCount++;
      console.log(`  X BROKEN (HTTP ${status}): ${ref.file}:${ref.line} (${ref.context})`);
      console.log(`    ${ref.url}`);

      // Try API lookup
      const apiUrl = await getApiThumbUrl(parsed.fileName, parsed.width || 300);
      if (apiUrl) {
        console.log(`    API URL:  ${apiUrl}`);
        fixes.push({ ref, correctUrl: apiUrl });
      } else {
        console.log(`    API: File not found on Commons`);
      }
      console.log();
    }
  }

  // Summary
  console.log('\n=== Summary ===');
  console.log(`  Total:          ${refs.length}`);
  console.log(`  OK:             ${okCount}`);
  console.log(`  Hash mismatch:  ${hashMismatchCount}`);
  console.log(`  Broken:         ${brokenCount}`);

  if (fixes.length > 0) {
    console.log(`\n=== Suggested Fixes ===`);
    for (const fix of fixes) {
      console.log(`  ${fix.ref.file}:${fix.ref.line} (${fix.ref.context})`);
      console.log(`    Old: ${fix.ref.url}`);
      console.log(`    New: ${fix.correctUrl}`);
      console.log();
    }
  }
}

main().catch(console.error);
