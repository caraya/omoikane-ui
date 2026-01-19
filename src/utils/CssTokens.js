"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findGeneratedTokenCss = findGeneratedTokenCss;
exports.loadGeneratedTokenCss = loadGeneratedTokenCss;
var fs_1 = require("fs");
var path_1 = require("path");
/**
 * Helpers to locate and load generated CSS token files produced by
 * @khanacademy/wonder-blocks-tokens (the token generator).
 *
 * This module provides a small, resilient API that attempts to find the
 * generated CSS (e.g. `dist/css/vars.css` or `dist/css/index.css`) and
 * return its contents. It's intentionally permissive so it works both in
 * developer checkouts and in built packages.
 */
var CANDIDATE_PATHS = [
    // monorepo package output
    path_1.default.join(__dirname, "..", "..", "..", "wonder-blocks/packages/wonder-blocks-tokens/dist/css/vars.css"),
    path_1.default.join(__dirname, "..", "..", "..", "wonder-blocks/packages/wonder-blocks-tokens/dist/css/index.css"),
    // installed package export (if the package is built into node_modules)
    path_1.default.join(process.cwd(), "node_modules", "@khanacademy", "wonder-blocks-tokens", "dist", "css", "vars.css"),
    path_1.default.join(process.cwd(), "node_modules", "@khanacademy", "wonder-blocks-tokens", "dist", "css", "index.css"),
];
function findGeneratedTokenCss() {
    for (var _i = 0, CANDIDATE_PATHS_1 = CANDIDATE_PATHS; _i < CANDIDATE_PATHS_1.length; _i++) {
        var p = CANDIDATE_PATHS_1[_i];
        try {
            if (fs_1.default.existsSync(p))
                return p;
        }
        catch (e) {
            // ignore
        }
    }
    return null;
}
function loadGeneratedTokenCss() {
    var p = findGeneratedTokenCss();
    if (!p)
        return null;
    try {
        return fs_1.default.readFileSync(p, { encoding: "utf8" });
    }
    catch (e) {
        return null;
    }
}
exports.default = {
    findGeneratedTokenCss: findGeneratedTokenCss,
    loadGeneratedTokenCss: loadGeneratedTokenCss,
};
