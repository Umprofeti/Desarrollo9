"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let inputNumber = process.argv[2];
const checkNum = (input) => {
    let number = parseInt(input);
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number !== 1;
};
console.log(checkNum(inputNumber));
