#!/usr/bin/env node
import fs from "fs";
import path from "path";
import url from "url";


const __dirname = path.dirname(url.fileURLToPath(import.meta.url));


const projectName = process.argv[2];

if (!projectName) {
    console.log(" Please provide a project name");
    console.log(" Example: npx create-express-ts-backend my-api");
    process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);


function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

    for (const file of fs.readdirSync(src)) {
        const srcFile = path.join(src, file);
        const destFile = path.join(dest, file);

        if (fs.lstatSync(srcFile).isDirectory()) {
            copyDir(srcFile, destFile);
        } else {
            fs.copyFileSync(srcFile, destFile);
        }
    }
}

console.log("========================================");
console.log("   Created by: Jay Rathore");
console.log("========================================");

console.log(" Creating Express + TypeScript backend...");

copyDir(path.join(__dirname, "templates"), projectPath);

console.log(` Done!`);
console.log(` cd ${projectName}`);
console.log(" npm install");
console.log(" npm run dev");
