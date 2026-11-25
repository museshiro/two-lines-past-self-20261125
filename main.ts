import { mkdirSync, writeFileSync } from "node:fs";

// Two lines to your past self — make.fun entry (u-suga-two-lines-to-your-past-self-f36c83ca).
// Writes the entry to /output/entry.txt only — the grader's path.
// No relative write: the grading sandbox is read-only, so writing
// ./entry.txt would throw before the graded artifact is produced.
// Output is deterministic: same two lines, same trailing newline, every run.
const line1 =
  "On 24 November, before you call the treasure-map bounty free, check the requirements endpoint — the list API swears the fee is $0.00.";
const line2 =
  "It was $0.50, and the thirty seconds you spent checking became the rule that kept the next ninety-eight entries free.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line1 + "\n" + line2 + "\n", "utf8");
