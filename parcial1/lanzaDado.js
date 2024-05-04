"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dadoQuantity = process.argv[2];
const lanzaDado = (input) => {
    let Quantity = parseInt(input);
    let result = [];
    for (let i = 0; i < Quantity; i++) {
        result.push((Math.floor(Math.random() * 6) + 1));
    }
    return result;
};
console.log(lanzaDado(dadoQuantity));
