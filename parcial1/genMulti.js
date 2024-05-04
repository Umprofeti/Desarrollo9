"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let input = process.argv[2];
const genMulti = (input) => {
    const userNum = parseInt(input);
    let finalArray = [];
    for (let i = 0; i <= 10; i++) {
        finalArray.push(userNum * i);
    }
    return finalArray;
};
console.log(genMulti(input));
