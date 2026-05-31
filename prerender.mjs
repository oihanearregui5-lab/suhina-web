// prerender.mjs
// Renderiza la ruta "/" del build SSR a un index.html estático.
// Se ejecuta DESPUÉS de "bun run build", y deja el HTML final en dist/client/index.html
// para poder subir dist/client tal cual a un hosting estático (FTP).

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const mod = await import("./dist/server/server.js");
const handler = mod.default ?? mod;

const res = await handler.fetch(new Request("http://localhost/"), {}, {});
const html = await res.text();

if (res.status !== 200) {
  console.error(`[prerender] Status inesperado: ${res.status}`);
  console.error(html.slice(0, 500));
  process.exit(1);
}

const out = join("dist", "client", "index.html");
writeFileSync(out, html);
console.log(`[prerender] OK -> ${out} (${html.length} bytes)`);
