import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const src = require.resolve("sql.js/dist/sql-wasm.wasm");
const dest = join(fileURLToPath(new URL("../public/sql-wasm.wasm", import.meta.url)));
mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);
console.log("Copied sql-wasm.wasm -> public/sql-wasm.wasm");
