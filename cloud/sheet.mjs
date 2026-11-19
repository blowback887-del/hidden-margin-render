import { bundle } from "@remotion/bundler";
import { selectComposition, renderFrames } from "@remotion/renderer";
import path from "node:path";
const [entry, id, out, nth = "60", from, to] = process.argv.slice(2);
const browserExecutable = process.env.CHROME;
const serveUrl = await bundle({ entryPoint: path.resolve(entry) });
const composition = await selectComposition({ serveUrl, id, browserExecutable });
const t0 = Date.now();
await renderFrames({ composition, serveUrl, outputDir: out, imageFormat: "jpeg", jpegQuality: 70, everyNthFrame: Number(nth), concurrency: 2,
  frameRange: from ? [Number(from), Math.min(Number(to), composition.durationInFrames - 1)] : null, browserExecutable,
  offthreadVideoCacheSizeInBytes: 400_000_000, onStart: ({ frameCount }) => console.log("frames", frameCount),
  onFrameUpdate: (n) => { if (n % 20 === 0) console.log("done", n, Math.round((Date.now() - t0) / 1000) + "s"); } });
console.log("ok", Math.round((Date.now() - t0) / 1000) + "s");
