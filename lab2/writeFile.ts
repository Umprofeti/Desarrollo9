import { writeFileSync, existsSync } from "node:fs";

let input:string = process.argv[2];

const write = (input: string):string => {
    if (!existsSync("./dist")) {
        writeFileSync("./dist/userMessage.txt", input);
    }
    writeFileSync("./dist/userMessage.txt", input);

    return "Se ha guardado la información en \n Ruta: ./dist/ \n Nombre del archivo: numeros.txt";
};

console.log(write(input));