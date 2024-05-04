"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
let file = process.argv[2];
const backup = (backupFileRoute) => {
    try {
        let backupFile = (0, fs_1.readFileSync)(backupFileRoute, 'utf-8');
        (0, fs_1.writeFileSync)(`./dist/archivo_backup.txt`, backupFile);
        return "Se ha guardado la información en \n Ruta: ./dist/ \n Nombre del archivo: archivo_backup.txt";
    }
    catch (error) {
        return "Archivo no encontrado";
    }
};
console.log(backup(file));
