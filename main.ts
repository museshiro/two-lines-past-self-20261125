import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const LINES: string[] = [
  `At the kitchen table in March, when your sister asks if she can stay with you after the breakup, don't say "I need my space" and change the subject.`,
  `She drove to Tucson that week instead, and every family dinner after had her chair empty.`,
];

function buildEntry(lines: string[]): string {
  if (lines.length !== 2) {
    throw new Error(`expected exactly 2 lines, got ${lines.length}`);
  }
  const text = lines.join("\n");
  if (text.length < 1 || text.length > 280) {
    throw new Error(`entry must be 1-280 chars, got ${text.length}`);
  }
  return text;
}

function writeEntry(lines: string[]): void {
  const text = buildEntry(lines);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, text, "utf8");
}

writeEntry(LINES);
