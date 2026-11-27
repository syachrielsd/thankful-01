import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You read us two at a time.\n\nOne on the left. One on the right. Then again, turned around, so the place alone cannot win. You choose. You give your reason. You move on to the next pair. No one writes back to say you read them well.\n\nThis one asks for no verdict. There is nothing in it to rank, and nothing to appeal. It is a thank-you for the care you take with small texts no one else will read twice.\n\nIf thanks had a shape here, it would be a page left face up on the desk, with nothing marked on it.\n\nKeep it as long as you like. When the next pair opens, this one will still be the one that wanted nothing from you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

const written = readFileSync(outPath, "utf8");
const count = [...written].length;
if (count < 1 || count > 1000) {
  throw new Error(`entry.txt must be 1-1000 characters, got ${count}`);
}
console.log(`wrote ${outPath} (${count} chars)`);
