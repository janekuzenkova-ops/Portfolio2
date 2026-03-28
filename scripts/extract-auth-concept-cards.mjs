/**
 * вырезает два серых кадра Concept (Welcome + Sign up) из общего экспорта info-section.png,
 * чтобы не дергать API без токена. исходник ≈ фрейм img/container в макете (Figma).
 *
 *   node scripts/extract-auth-concept-cards.mjs
 *
 * при смене макета подстрой Y_OFF (верх полосы 1440×520 @2x) и отступы.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public/images/case-auth/info-section.png");
const OUT_W = path.join(ROOT, "public/images/case-auth/img-concept-welcome.png");
const OUT_S = path.join(ROOT, "public/images/case-auth/img-concept-signup.png");

/** верх серой пары в info-section @2x (подстрой при смене экспорта) */
const Y_OFF = 3920;
const ROW_H = 1040;
/** полная ширина арта 1440@2x */
const ROW_W = 2880;
const PAD_X = 40;
const CARD_W = 1384;
const GAP = 32;

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

if (!fs.existsSync(SRC)) {
  console.error("нет файла", SRC);
  process.exit(1);
}

const tmpRow = path.join(ROOT, "node_modules/.cache/concept-row-tmp.png");
fs.mkdirSync(path.dirname(tmpRow), { recursive: true });

run(`sips -c ${ROW_H} ${ROW_W} --cropOffset ${Y_OFF} 0 "${SRC}" -o "${tmpRow}"`);
const xRight = PAD_X + CARD_W + GAP;
run(`sips -c ${ROW_H} ${CARD_W} --cropOffset 0 ${PAD_X} "${tmpRow}" -o "${OUT_W}"`);
run(`sips -c ${ROW_H} ${CARD_W} --cropOffset 0 ${xRight} "${tmpRow}" -o "${OUT_S}"`);
console.log("ok", OUT_W, OUT_S);
