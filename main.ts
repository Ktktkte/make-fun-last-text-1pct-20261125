import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Last Text at One Percent — the dying phone's final text message.
const LINE =
  "Last text before I die: I forwarded all your secrets to the toaster. It knows about the 3 a.m. snacks. Good luck.";

// The gate is 1-200 characters for the whole file; the line itself must
// fit it before the trailing newline is added.
if (LINE.length < 1 || LINE.length > 200) {
  console.error(`error: entry must be 1-200 characters, got ${LINE.length}`);
  process.exit(1);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
