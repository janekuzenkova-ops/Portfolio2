/**
 * выгрузка PNG @2x для главной: герои 1400×810 + сабкарты из Maket/b.
 * нужен токен: Figma → Settings → Security → Personal access tokens.
 *
 *   FIGMA_ACCESS_TOKEN=... node scripts/figma-export-case-images.mjs
 *
 * file + ноды сверены с Maket/b (node-id=2693-159496):
 *   case/3 → auth header 2699:165519
 *   case/2 → promo header 2693:159551
 *   case/1 → verification header/reg 2693:159516
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public/images/cases");
const FILE_KEY = "vCzZlNer2Fixkg9ibPRxR0";

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  console.error("нет FIGMA_ACCESS_TOKEN — см. комментарий в начале скрипта");
  process.exit(1);
}

/** [имя файла в public/images/cases, node id] */
const MAP = [
  ["case-card-auth.png", "2699:165519"],
  ["case-card-promo.png", "2693:159551"],
  ["case-card-verification.png", "2693:159516"],
  ["figma-auth-sub1.png", "3054:19589"],
  ["figma-auth-sub2.png", "3054:19825"],
  ["figma-verification-sub1.png", "3054:19322"],
  ["figma-verification-sub2.png", "3054:19451"],
];

const idList = MAP.map(([, id]) => id).join(",");
const apiUrl = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${idList}&format=png&scale=2`;

const meta = await fetch(apiUrl, { headers: { "X-Figma-Token": token } });
const body = await meta.json();

if (!meta.ok || !body.images) {
  console.error("Figma API:", body);
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });

for (const [filename, nodeId] of MAP) {
  const src = body.images[nodeId];
  if (!src) {
    console.error("нет URL для ноды", nodeId, filename);
    process.exit(1);
  }
  const imgRes = await fetch(src);
  if (!imgRes.ok) {
    console.error("скачивание", filename, imgRes.status);
    process.exit(1);
  }
  const buf = Buffer.from(await imgRes.arrayBuffer());
  fs.writeFileSync(path.join(OUT, filename), buf);
  console.log("ok", filename, buf.length, "bytes");
}
