import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const p1 = join(root, "scripts", "market-cities-part1.txt");
const p2 = join(root, "scripts", "market-cities-part2.txt");
const out = join(root, "components", "icomat1-market", "market-cities.json");

const merge = (buf) =>
  buf
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

const cities = [...merge(readFileSync(p1, "utf8")), ...merge(readFileSync(p2, "utf8"))];
writeFileSync(out, JSON.stringify(cities), "utf8");
console.error("Wrote", cities.length, "cities to", out);
