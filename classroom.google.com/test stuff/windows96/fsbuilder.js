"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.processFile = exports.processDir = exports.fileType = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
var fileType;
(function (fileType) {
    fileType[fileType["file"] = 0] = "file";
    fileType[fileType["directory"] = 1] = "directory";
})(fileType = exports.fileType || (exports.fileType = {}));
let rofs;
function processDir(dir) {
    console.debug(`Processing ${dir}`);
    rofs[`/${dir}`] = {
        length: 0,
        type: fileType.directory
    };
    const dirListing = fs_1.default.readdirSync(dir);
    dirListing.forEach(cFile => {
        const fileWithDir = path_1.default.posix.join(dir, cFile);
        if (fs_1.default.statSync(fileWithDir).isDirectory())
            processDir(fileWithDir);
        else
            processFile(fileWithDir);
    });
}
exports.processDir = processDir;
function processFile(file) {
    console.debug(`Processing ${file}`);
    const fileLength = fs_1.default.statSync(file).size;
    rofs[`/${file}`] = {
        length: fileLength,
        type: fileType.file
    };
}
exports.processFile = processFile;
async function build(rootDir) {
    return new Promise(resolve => {
        rofs = { "/": { length: 0, type: fileType.directory } };
        processDir(path_1.default.normalize(rootDir));
        if (rootDir == ".")
            delete rofs["/."];
        resolve(rofs);
    });
}
exports.build = build;
async function BuildAndWrite(rootDir) {
    const rofs = await build(rootDir);
    return new Promise((resolve, reject) => {
        console.debug(rofs);
        const writeStream = fs_1.default.createWriteStream(path_1.default.resolve(rootDir, "rofs.json"));
        writeStream.write(JSON.stringify(rofs));
        writeStream.end();
        writeStream.on("finish", () => resolve());
        writeStream.on("error", err => reject(err));
    });
}
exports.default = BuildAndWrite;
if (require.main === module)
    BuildAndWrite(process.argv[2]).then(() => console.log("Done"));
