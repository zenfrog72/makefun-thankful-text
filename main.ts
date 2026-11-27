// Writes the approved thank-you text to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");

const text = `You have read so many words today, and none of them were for you.

So these are.

No hurry in them. No ask. Only a small room, a lamp left on, and someone glad you stopped by.

Thank you for the reading — the real kind, the kind no one sees. It mattered.

You can set this one down gently now. It will keep.`;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${[...text].length} characters) to ${outDir}`);
