import { readFileSync } from "node:fs";

let fileRoute:string = process.argv[2];

const readingFile = (rute:string) => {
    try {
        return readFileSync(rute, 'utf-8');
    } catch (error) {
        return 'Archivo no encontrado'
    }
}

console.log(readingFile(fileRoute))