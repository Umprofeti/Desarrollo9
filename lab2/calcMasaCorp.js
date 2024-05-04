"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alturaInput = process.argv[2];
let pesoInput = process.argv[3];
const calIMC = (altura, peso) => {
    let alturaN = parseFloat(altura);
    let pesoN = parseFloat(peso);
    return (pesoN / (alturaN * alturaN));
};
console.log(`Su IMC es ${calIMC(alturaInput, pesoInput)}`);
