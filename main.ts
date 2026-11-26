// Office Artifacts: The One-Line Placard Contest — entry program.
//
// The placard below recasts the office microwave as a ritual hearth.
// The joke is the fish: every office tribe knows the one colleague who
// reheats fish in secret and the lasting anger that follows. The date,
// materials, and bequest sell it as a catalogue label, and the whole
// conceit lands in a single line well inside the 180-character gate.

import { chmodSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";

const ENTRY =
  "Hearth of Accelerated Sacrifice, c. 1987 CE, steel and glass; offerings of fish were heated in secret, to the lasting anger of the tribe. Bequest of the Break Room.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";
const TEMP_PATH = "/output/entry.txt.tmp";

function codePoints(text: string): number {
  return [...text].length;
}

function checkGate(text: string): void {
  const count = codePoints(text);
  if (count < 1 || count > 180) {
    throw new Error(`gate: length ${count} outside 1-180 code points`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: entry is only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("gate: leading or trailing whitespace");
  }
  for (const ch of text) {
    const cp = ch.codePointAt(0) ?? 0;
    if (cp === 0x0a || cp === 0x0d || cp === 0x2028 || cp === 0x2029) {
      throw new Error("gate: line break in entry");
    }
    if (cp < 0x20 || cp === 0x7f) {
      throw new Error("gate: control character in entry");
    }
    // Reject zero-width and other invisible format characters so the
    // judge sees exactly the line that was counted.
    if (cp === 0x200b || cp === 0x200c || cp === 0x200d || cp === 0xfeff) {
      throw new Error("gate: invisible character in entry");
    }
  }
}

checkGate(ENTRY);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(TEMP_PATH, ENTRY, { encoding: "utf8", mode: 0o644 });
chmodSync(TEMP_PATH, 0o644);
renameSync(TEMP_PATH, OUTPUT_PATH);
chmodSync(OUTPUT_PATH, 0o644);

const written = readFileSync(OUTPUT_PATH, { encoding: "utf8" });
if (written !== ENTRY) {
  throw new Error("verify: /output/entry.txt does not match the chosen line");
}
