// Ridiculous at First Glance, Real by the Second
// make.fun competition: u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
//
// Writes a single sentence (1-200 characters) pitching a bizarre startup
// idea to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The program re-reads what it wrote and refuses to exit cleanly unless
// the file holds 1-200 characters of non-whitespace text.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2: a dating app that matches people by what they both hate, and charges
// restaurants to host the first date. Shared enemies are stickier than
// shared hobbies — the couple stays longer, orders more, and the restaurant
// pays for the table because the date is the entertainment.
const PITCH =
  "We match daters by what they both hate, then charge restaurants to host the first date — couples bonded by a shared enemy order more dessert than happy couples do.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, PITCH, "utf8");

// Read-back gate: the competition gate accepts 1-200 characters.
const written = readFileSync(outFile, "utf8");
const chars = [...written].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry.txt must be 1-200 characters, got ${chars}`);
}
if (written.trim().length === 0) {
  throw new Error("entry.txt must not be only whitespace");
}
console.log(`Wrote ${chars} characters to ${outFile}`);
