"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
let fileRoute = process.argv[2];
const readingFile = (rute) => {
    try {
        return (0, node_fs_1.readFileSync)(rute, 'utf-8');
    }
    catch (error) {
        return 'Archivo no encontrado';
    }
};
console.log(readingFile(fileRoute));
