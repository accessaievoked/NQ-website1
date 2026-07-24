/**
 * optimize-images.js
 *
 * Finds oversized PNG/JPEG files under src/ and public/, downsizes them to a
 * sane max resolution, and re-compresses them — all IN PLACE, same filename
 * and extension, so no import paths or component code need to change.
 *
 * Why: several images in this project (e.g. Herosection/Desktop/*.png,
 * Aboutus*.png) are full-resolution screenshots (5000px+ wide) being
 * displayed at a few hundred pixels. Shipping them as-is means every visitor
 * downloads megabytes of pixel data they never see.
 *
 * Usage:
 *   npm install --save-dev sharp
 *   node scripts/optimize-images.js            # dry run — reports savings only
 *   node scripts/optimize-images.js --apply    # actually rewrites the files
 *
 * Always run the dry run first and review the numbers. Commit (or copy the
 * folder somewhere) before running --apply so you can diff/revert if any
 * image comes out looking wrong.
 */

const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch (e) {
  console.error(
    "\nMissing dependency 'sharp'. Install it first:\n\n    npm install --save-dev sharp\n"
  );
  process.exit(1);
}

const ROOT = path.resolve(__dirname, "..");
const TARGETS = [
  path.join(ROOT, "src", "assets"),
  path.join(ROOT, "src", "Images"),
  path.join(ROOT, "public"),
];

// Nothing on this site is displayed wider than this — screenshots/photos
// coming in above it are pure waste. Small logos/icons already under this
// width are left alone (resizing up would be pointless).
const MAX_WIDTH = 1400;

const APPLY = process.argv.includes("--apply");

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg"]);

// Skip tiny files outright (favicons, small icons) — nothing meaningful to
// save, and re-encoding risks visibly degrading small crisp assets.
const MIN_SIZE_BYTES = 30 * 1024;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

function fmtKB(bytes) {
  return (bytes / 1024).toFixed(0) + "KB";
}

async function processFile(file) {
  const before = fs.statSync(file).size;
  if (before < MIN_SIZE_BYTES) {
    return {
      file: path.relative(ROOT, file),
      before,
      after: before,
      saved: 0,
      resized: false,
      fromWidth: undefined,
      toWidth: undefined,
      skipped: true,
    };
  }
  const ext = path.extname(file).toLowerCase();
  const img = sharp(file, { failOn: "none" });
  const meta = await img.metadata();

  const needsResize = meta.width && meta.width > MAX_WIDTH;
  let pipeline = img;
  if (needsResize) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  let outBuffer;
  if (ext === ".png") {
    outBuffer = await pipeline
      .png({ quality: 80, compressionLevel: 9, palette: true, effort: 10 })
      .toBuffer();
  } else {
    outBuffer = await pipeline
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();
  }

  const after = outBuffer.length;
  const saved = before - after;
  const skip = after >= before; // re-encode made it bigger (rare, tiny files) — skip

  if (APPLY && !skip) {
    fs.writeFileSync(file, outBuffer);
  }

  return {
    file: path.relative(ROOT, file),
    before,
    after: skip ? before : after,
    saved: skip ? 0 : saved,
    resized: needsResize,
    fromWidth: meta.width,
    toWidth: needsResize ? MAX_WIDTH : meta.width,
    skipped: skip,
  };
}

async function main() {
  const files = TARGETS.flatMap((dir) => walk(dir));
  if (files.length === 0) {
    console.log("No images found under src/assets, src/Images, or public.");
    return;
  }

  console.log(
    `${APPLY ? "Applying" : "Dry run —"} scanning ${files.length} images...\n`
  );

  let totalBefore = 0;
  let totalAfter = 0;
  const rows = [];

  for (const file of files) {
    try {
      const r = await processFile(file);
      totalBefore += r.before;
      totalAfter += r.after;
      rows.push(r);
    } catch (e) {
      console.warn(`  ! skipped ${path.relative(ROOT, file)}: ${e.message}`);
    }
  }

  rows
    .filter((r) => r.saved > 1024) // only show ones worth mentioning
    .sort((a, b) => b.saved - a.saved)
    .forEach((r) => {
      const resizeNote = r.resized ? ` (${r.fromWidth}px -> ${r.toWidth}px)` : "";
      console.log(
        `  ${r.file}: ${fmtKB(r.before)} -> ${fmtKB(r.after)}${resizeNote}`
      );
    });

  console.log("\n--------------------------------------------------");
  console.log(`Total: ${fmtKB(totalBefore)} -> ${fmtKB(totalAfter)}`);
  console.log(
    `Savings: ${fmtKB(totalBefore - totalAfter)} (${(
      ((totalBefore - totalAfter) / totalBefore) *
      100
    ).toFixed(1)}%)`
  );

  if (!APPLY) {
    console.log(
      "\nThis was a dry run — no files were changed. Review the numbers above,\n" +
        "then run:\n\n    node scripts/optimize-images.js --apply\n"
    );
  } else {
    console.log(
      "\nFiles rewritten in place. Run `npm run build` and spot-check a few\n" +
        "pages to confirm image quality still looks right.\n"
    );
  }
}

main();
