import { existsSync, writeFileSync } from "node:fs";

const lines = [
  "On 24 November, before you call the treasure-map bounty free, check the requirements endpoint \u2014 the list API swears the fee is $0.00.",
  "It was $0.50, and the thirty seconds you spent checking became the rule that kept the next ninety-eight entries free.",
];

const text = lines.join("\n") + "\n";
writeFileSync("entry.txt", text, "utf8");
if (existsSync("/output")) {
  writeFileSync("/output/entry.txt", text, "utf8");
}
