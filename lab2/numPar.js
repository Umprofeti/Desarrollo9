"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userInput = process.argv[2];
const isPar = (userInput) => {
    let userNum = parseInt(userInput);
    if (!isNaN(userNum)) {
        if (userNum % 2 == 0) {
            return `El número ${userNum} Es par`;
        }
        else {
            return `El número ${userNum} No es par`;
        }
    }
    else {
        return "El valor introducido no es un número";
    }
};
console.log(isPar(userInput));
