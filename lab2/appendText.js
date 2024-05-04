"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
let text = process.argv[2];
let route = process.argv[3];
const appendText = (text, route) => {
    try {
        (0, fs_1.appendFileSync)(route, text);
        return "Se agrego el texto";
    }
    catch (error) {
        return "Error al agregar el texto";
    }
};
console.log(appendText(text, route));
