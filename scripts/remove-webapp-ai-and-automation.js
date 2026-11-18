const fs = require("fs");
const p = "lib/services/webApplicationDevelopmentSubPages.js";
let s = fs.readFileSync(p, "utf8");
const marker = '"slug": "ai-and-automation"';
const start = s.indexOf(marker);
if (start < 0) {
  console.log("not found");
  process.exit(0);
}
let i = s.lastIndexOf("{", start);
let depth = 0;
let j = i;
for (; j < s.length; j++) {
  if (s[j] === "{") depth++;
  else if (s[j] === "}") {
    depth--;
    if (depth === 0) break;
  }
}
const end = j + 1;
const tail = s.slice(end).replace(/^\s*,\s*/, "");
s = s.slice(0, i) + tail;
fs.writeFileSync(p, s);
console.log("removed ai-and-automation entry");