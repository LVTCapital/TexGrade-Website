// Pre-generates responsive image variants for next/image (see lib/image-loader.ts).
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { allWidths } from "../lib/image-widths.mjs";

const sourceDir = "public/images/warehouse";
const outputDir = "public/images/generated";

await mkdir(outputDir, { recursive: true });
const files = (await readdir(sourceDir)).filter((file) => file.endsWith(".webp"));
let written = 0;

await Promise.all(files.flatMap((file) => allWidths.map(async (width) => {
  const input = path.join(sourceDir, file);
  const output = path.join(outputDir, `${path.basename(file, ".webp")}-${width}.webp`);
  const [inputStat, outputStat] = await Promise.all([stat(input), stat(output).catch(() => null)]);
  if (outputStat && outputStat.mtimeMs >= inputStat.mtimeMs) return;
  await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 72, effort: 5 }).toFile(output);
  written++;
})));

console.log(`images: ${written} variants written, ${files.length * allWidths.length - written} up to date`);
