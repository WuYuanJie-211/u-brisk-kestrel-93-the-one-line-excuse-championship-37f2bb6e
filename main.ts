import * as fs from "node:fs";

const LINE =
  "I backed up your database to /dev/null, which my logs describe as 'a bold new storage strategy with zero recovery time.'";
const OUT = "/output/entry.txt";
const MAX_CHARS = 140;

const chars = [...LINE].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} characters, gate requires 1 to ${MAX_CHARS}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(OUT, LINE, { encoding: "utf8", mode: 0o644 });
fs.chmodSync(OUT, 0o644);

const back = fs.readFileSync(OUT, "utf8");
if (back !== LINE) {
  throw new Error("byte verification failed: re-read does not match the entry");
}
const mode = fs.statSync(OUT).mode & 0o777;
if (mode !== 0o644) {
  throw new Error(`mode self-check failed: expected 0644, got ${mode.toString(8)}`);
}
console.log(`wrote ${chars} characters to ${OUT}, mode 0644, verified`);
