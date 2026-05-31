// prerender.mjs
// Renderiza la home ("/") del build a un index.html estático y lo deja en dist/client,
// para poder subir dist/client tal cual a un hosting estático por FTP.
//
// Funciona tanto si el build genera un worker de Cloudflare (dist/server/index.js)
// como si genera el servidor "plano" de TanStack (dist/server/server.js). Si no
// encuentra el servidor, imprime la estructura para poder diagnosticarlo.

import { writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const SERVER_CANDIDATES = [
  "dist/server/index.js",      // Cloudflare worker (config Lovable 1.7.x)
  "dist/server/server.js",     // build plano TanStack (config Lovable 1.8.x)
  ".output/server/index.mjs",  // Nitro
];
const PUBLIC_CANDIDATES = ["dist/client", ".output/public", "dist/public"];

const firstExisting = (paths) => paths.find((p) => existsSync(p));

function tree(dir) {
  try {
    return readdirSync(dir, { recursive: true })
      .map((f) => `  ${dir}/${f}`)
      .join("\n");
  } catch {
    return `  (no existe: ${dir})`;
  }
}

const serverPath = firstExisting(SERVER_CANDIDATES);
const publicDir = firstExisting(PUBLIC_CANDIDATES);

if (!serverPath || !publicDir) {
  console.error("[prerender] No encuentro el servidor o la carpeta pública.");
  console.error("  servidor:", serverPath ?? "NO ENCONTRADO");
  console.error("  pública :", publicDir ?? "NO ENCONTRADA");
  console.error("--- contenido de dist ---\n" + tree("dist"));
  console.error("--- contenido de .output ---\n" + tree(".output"));
  process.exit(1);
}

const mod = await import(pathToFileURL(join(process.cwd(), serverPath)).href);
const handler = mod.default ?? mod;
if (!handler || typeof handler.fetch !== "function") {
  console.error(`[prerender] ${serverPath} no exporta un handler con fetch().`);
  process.exit(1);
}

const res = await handler.fetch(new Request("http://localhost/"), {}, {});
const html = await res.text();

if (res.status !== 200) {
  console.error(`[prerender] La home devolvió status ${res.status}.`);
  console.error(html.slice(0, 500));
  process.exit(1);
}

const out = join(publicDir, "index.html");
writeFileSync(out, html);
console.log(`[prerender] OK (servidor: ${serverPath}) -> ${out} (${html.length} bytes)`);
