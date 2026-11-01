// Splits a composition into frame ranges for parallel rendering on GitHub Actions.
// Usage: node cloud/plan.mjs <compositionId> <chunks|auto>
import { bundle } from "@remotion/bundler";
import { selectComposition } from "@remotion/renderer";
import { appendFileSync } from "node:fs";
import path from "node:path";

const [compId, chunksArg = "auto"] = process.argv.slice(2);
if (!compId) throw new Error("Composition id is required");

const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts") });
const comp = await selectComposition({ serveUrl, id: compId });
const total = comp.durationInFrames;

// ~1 chunk per minute of video, between 1 and 20 (free plan allows 20 parallel jobs)
const auto = Math.ceil(total / (comp.fps * 60));
const n = Math.max(1, Math.min(20, chunksArg === "auto" ? auto : Number(chunksArg)));
const size = Math.ceil(total / n);

const chunks = [];
for (let i = 0; i * size < total; i++) {
  const start = i * size;
  const end = Math.min(total, start + size) - 1;
  chunks.push({ i: String(i).padStart(2, "0"), start, end });
}

console.log(`${compId}: ${total} frames @ ${comp.fps}fps (${(total / comp.fps / 60).toFixed(1)} min), ${chunks.length} chunks of ~${size} frames`);
const out = process.env.GITHUB_OUTPUT;
if (out) {
  appendFileSync(out, `matrix=${JSON.stringify({ include: chunks })}\n`);
  appendFileSync(out, `frames=${total}\n`);
}
