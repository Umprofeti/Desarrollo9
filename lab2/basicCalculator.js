"use strict";
let userInput1 = process.argv[2];
let userInput2 = process.argv[3];
let userOperator = process.argv[4];
const basicCalculator = (userInput, userInput2, userOperator) => {
    let num1 = parseInt(userInput);
    let num2 = parseInt(userInput2);
    if (!isNaN(num1) && !isNaN(num2)) {
        switch (userOperator) {
            case "+":
                return `La suma es: ${num1 + num2}`;
            case "-":
                return `La resta es: ${num1 - num2}`;
            case "*":
                return `La multiplicación es: ${num1 * num2}`;
            case "/":
                if (num2 == 0) {
                    return "La división con el número 0 no está contemplada";
                }
                else {
                    return `La división es: ${num1 / num2}`;
                }
            default:
                return "El operador no es valido";
        }
    }
    else {
        return "Uno de los operandos no es un numero";
    }
};
console.log(basicCalculator(userInput1, userInput2, userOperator));
