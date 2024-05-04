"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let inputString = process.argv[2];
const countVocal = (input) => {
    let inputLower = input.toLocaleLowerCase();
    let counter = 0;
    for (let i = 0; i < inputLower.length; i++) {
        if (inputLower.charAt(i) == 'a' || inputLower.charAt(i) == 'e' || inputLower.charAt(i) == 'i' || inputLower.charAt(i) == 'o' || inputLower.charAt(i) == 'u') {
            counter = counter + 1;
        }
    }
    return counter;
};
console.log(countVocal(inputString));
