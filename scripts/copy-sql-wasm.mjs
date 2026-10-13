import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const destDir = join(fileURLToPath(new URL("../public", import.meta.url)));
mkdirSync(destDir, { recursive: true });

const copies = [
  ["sql.js/dist/sql-wasm.wasm", "sql-wasm.wasm"],
  ["sql.js/dist/sql-wasm.wasm", "sql-wasm-browser.wasm"],
  ["sql.js/dist/sql-wasm-browser.js", "sql-wasm-browser.js"],
];

for (const [from, to] of copies) {
  const src = require.resolve(from);
  const dest = join(destDir, to);
  copyFileSync(src, dest);
  console.log(`Copied ${to}`);
}
