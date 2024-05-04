import { writeFileSync, readFileSync } from "fs";

let file:string = process.argv[2];
const backup = (backupFileRoute: string):string => {
    try {
        let backupFile:string = readFileSync(backupFileRoute, 'utf-8');
        writeFileSync(`./dist/archivo_backup.txt`, backupFile);
        return "Se ha guardado la información en \n Ruta: ./dist/ \n Nombre del archivo: archivo_backup.txt"
    } catch (error) {
        return "Archivo no encontrado"
    }
}

console.log(backup(file))