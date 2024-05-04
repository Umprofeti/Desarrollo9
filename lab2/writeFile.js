"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
let input = process.argv[2];
const write = (input) => {
    if (!(0, node_fs_1.existsSync)("./dist")) {
        (0, node_fs_1.writeFileSync)("./dist/userMessage.txt", input);
    }
    (0, node_fs_1.writeFileSync)("./dist/userMessage.txt", input);
    return "Se ha guardado la información en \n Ruta: ./dist/ \n Nombre del archivo: numeros.txt";
};
console.log(write(input));
