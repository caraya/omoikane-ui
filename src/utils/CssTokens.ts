import fs from "fs";
import path from "path";

/**
 * Helpers to locate and load generated CSS token files produced by
 * @khanacademy/wonder-blocks-tokens (the token generator).
 *
 * This module provides a small, resilient API that attempts to find the
 * generated CSS (e.g. `dist/css/vars.css` or `dist/css/index.css`) and
 * return its contents. It's intentionally permissive so it works both in
 * developer checkouts and in built packages.
 */

const CANDIDATE_PATHS = [
  // monorepo package output
  
  path.join(
    __dirname,
    "..",
    "..",
    "..",
    "wonder-blocks/packages/wonder-blocks-tokens/dist/css/vars.css",
  ),
  path.join(
    __dirname,
    "..",
    "..",
    "..",
    "wonder-blocks/packages/wonder-blocks-tokens/dist/css/index.css",
  ),
  // installed package export (if the package is built into node_modules)
  path.join(
    process.cwd(),
    "node_modules",
    "@khanacademy",
    "wonder-blocks-tokens",
    "dist",
    "css",
    "vars.css",
  ),
  path.join(
    process.cwd(),
    "node_modules",
    "@khanacademy",
    "wonder-blocks-tokens",
    "dist",
    "css",
    "index.css",
  ),
];

export function findGeneratedTokenCss(): string | null {
  for (const p of CANDIDATE_PATHS) {
    try {
      if (fs.existsSync(p)) return p;
    } catch (e) {
      // ignore
    }
  }
  return null;
}

export function loadGeneratedTokenCss(): string | null {
  const p = findGeneratedTokenCss();
  if (!p) return null;
  try {
    return fs.readFileSync(p, { encoding: "utf8" });
  } catch (e) {
    return null;
  }
}

export default {
  findGeneratedTokenCss,
  loadGeneratedTokenCss,
};
