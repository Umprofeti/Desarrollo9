"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNum = process.argv[2];
const tablaMultiplicar = (userNum) => {
    let numInt = parseInt(userNum);
    if (!isNaN(numInt)) {
        for (let i = 0; i <= 12; i++) {
            console.log(`${i} x ${numInt} = ${i * numInt}`);
        }
    }
    else {
        console.log("El valor introducido no es un número");
    }
};
