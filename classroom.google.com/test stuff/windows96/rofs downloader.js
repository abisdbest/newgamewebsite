"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadRofsContents = exports.downloadFiles = exports.createDirectories = exports.readRofs = exports.downloadFile = exports.downloadRofsFile = void 0;
const node_downloader_helper_1 = require("node-downloader-helper");
const fs_1 = __importDefault(require("fs"));
const fsbuilder_1 = require("./fsbuilder");
const path_1 = __importDefault(require("path"));
async function downloadRofsFile(outDir = __dirname, w96Domain = "https://windows96.net", rofsLocation = "/system/images/rofs.json") {
    const rofsPath = path_1.default.resolve(outDir, "rofs.json");
    if (fs_1.default.existsSync(rofsPath))
        fs_1.default.rmSync(rofsPath);
    const url = `${w96Domain}${rofsLocation}`;
    return await downloadFile(url, outDir);
}
exports.downloadRofsFile = downloadRofsFile;
async function downloadFile(file, outDir = __dirname) {
    return new Promise((resolve, reject) => {
        const downloader = new node_downloader_helper_1.DownloaderHelper(file, outDir);
        downloader.on("end", () => {
            console.log(`Download of file ${file} completed`);
            resolve(true);
        });
        downloader.on("error", err => {
            console.error(`Download of file ${file} failed`, err);
            resolve(false);
        });
        downloader.start().catch(err => {
            console.error(`Download of file ${file} failed`, err);
            resolve(false);
        });
    });
}
exports.downloadFile = downloadFile;
async function readRofs(rofsFile = "./rofs.json") {
    return new Promise((resolve, reject) => {
        let rofsString = "";
        const rofsReadStream = fs_1.default.createReadStream(rofsFile);
        rofsReadStream.setEncoding("utf8");
        rofsReadStream.on("data", data => rofsString += data);
        rofsReadStream.on("end", () => {
            const rofs = JSON.parse(rofsString);
            rofs["/system/images"] = { length: 0, type: fsbuilder_1.fileType.directory };
            rofs["/system/images/rootfs"] = { length: 0, type: fsbuilder_1.fileType.directory };
            [
                "rofs.json",
                "mobsupport-ios.zip",
                "mobsupport-generic.zip",
                "mobsupport.zip",
                "bstr.json",
                "recovery.zip",
                "rootfs.zip",
                "rootfs/recovery.zip",
                "rootfs/oobe.zip",
                "rootfs/rootfs.zip"
            ].forEach(file => {
                rofs[`/system/images/${file}`] = { length: 0, type: fsbuilder_1.fileType.file };
            });
            rofs["/vc"] = { length: 0, type: fsbuilder_1.fileType.directory };
            rofs["/vc/ct.js"] = { length: 0, type: fsbuilder_1.fileType.file };
            resolve(rofs);
        });
        rofsReadStream.on("error", err => reject(err));
    });
}
exports.readRofs = readRofs;
async function createDirectories(rofs, outDir = __dirname) {
    for (const fileOrDir in rofs) {
        if (rofs[fileOrDir].type == fsbuilder_1.fileType.directory) {
            const dir = path_1.default.join(outDir, fileOrDir);
            if (!fs_1.default.existsSync(dir) || !fs_1.default.statSync(dir).isDirectory())
                fs_1.default.mkdirSync(dir);
        }
    }
}
exports.createDirectories = createDirectories;
async function downloadFiles(rofs, outDir = __dirname, w96Domain = "https://windows96.net") {
    for (const fileOrDir in rofs) {
        if (rofs[fileOrDir].type == fsbuilder_1.fileType.file) {
            const url = `${w96Domain}${fileOrDir}`;
            const fileDir = path_1.default.join(outDir, path_1.default.dirname(fileOrDir));
            await downloadFile(url, fileDir);
        }
    }
}
exports.downloadFiles = downloadFiles;
async function downloadRofsContents(outDir = __dirname, w96Domain = "https://windows96.net", rofsFile = "./rofs.json") {
    const rofs = await readRofs(rofsFile);
    await createDirectories(rofs, outDir);
    await downloadFiles(rofs, outDir, w96Domain);
}
exports.downloadRofsContents = downloadRofsContents;
async function iniateDownload(outDir = __dirname, w96Domain = "https://windows96.net") {
    if (!await downloadRofsFile(outDir, w96Domain))
        throw new Error("Failed to download rofs.json");
    console.log("rofs.json downloaded successfully");
    return await downloadRofsContents(outDir, w96Domain);
}
exports.default = iniateDownload;
if (require.main === module)
    iniateDownload(__dirname, process.argv[2]).then(() => console.log("Done"));
