"use strict";
let factorialNum = process.argv[2];
const factorial = (userInput) => {
    let num = parseInt(userInput);
    if (num <= 1) {
        return 1;
    }
    else {
        return num * factorial((num - 1).toString());
    }
};
console.log(`El factorial de ${factorialNum} es: ${factorial(factorialNum)}`);
