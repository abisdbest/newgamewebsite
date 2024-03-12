"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transpileDir = exports.transpileFile = exports.removeRequires = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const core_1 = require("@babel/core");
const rollup_1 = require("rollup");
const jszip_1 = __importDefault(require("jszip"));
const plugin_node_resolve_1 = require("@rollup/plugin-node-resolve");
const plugin_commonjs_1 = __importDefault(require("@rollup/plugin-commonjs"));
async function removeRequires(file) {
    const bundle = await (0, rollup_1.rollup)({
        input: file,
        plugins: [
            (0, plugin_node_resolve_1.nodeResolve)({
                browser: true
            }),
            (0, plugin_commonjs_1.default)()
        ]
    });
    console.log("bundle: ", bundle);
    console.log("bundle.write(): ", await bundle.write({
        format: "iife",
        file
    }));
}
exports.removeRequires = removeRequires;
async function transpileFile(file) {
    await (0, core_1.transformFileAsync)(file, {
        presets: [
            [
                "@babel/preset-env", {
                    corejs: {
                        "version": 3
                    },
                    useBuiltIns: "usage",
                    targets: {
                        "ie": "11"
                    }
                }
            ]
        ]
    }).then(result => {
        if (!result)
            return console.error(`Error transpiling ${file}`);
        fs_1.default.writeFileSync(file, result.code);
        removeRequires(file);
        console.log(`Transpiled ${file}`);
    }).catch(err => console.debug(`Failed to transpile ${file}`));
}
exports.transpileFile = transpileFile;
async function transpileDir(dir) {
    const files = fs_1.default.readdirSync(dir);
    files.forEach(async (file) => {
        const fileWithDir = path_1.default.resolve(dir, file);
        if (fs_1.default.statSync(fileWithDir).isDirectory())
            transpileDir(fileWithDir);
        else
            switch (path_1.default.extname(fileWithDir)) {
                case ".js":
                    transpileFile(fileWithDir);
                    break;
                case ".zip": {
                    break; // not iomplentmented yet
                    //notimpaelern
                    // extract the zip file, and make sure it doesn't overwrite anything
                    const zip = new jszip_1.default();
                    break;
                }
                default:
                    break;
            }
    });
}
exports.transpileDir = transpileDir;
async function transpileAll() {
    return Promise.all([
        "data",
        "dl",
        "system"
    ].map(async (dir) => transpileDir(dir)));
}
exports.default = transpileAll;
if (require.main === module) /*transpileAll();*/
    transpileFile("fak.js");
