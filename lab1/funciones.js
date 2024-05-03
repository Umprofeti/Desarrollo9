"use strict";
//Problema 9
function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multiplicacion(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 === 0)
        return 'La divisón con el número 0 no está contemplada';
    else {
        return num1 / num2;
    }
}
//console.log(`El resultado de la suma es: ${suma(4,5)}`)
//console.log(`El resultado de la resta es: ${resta(20,60)}`)
//console.log(`El resultado de la multiplación es: ${multiplicacion(4,8)}`)
//console.log(`El resultado de la división: ${division(90, 0)}`) // Arroja string
//console.log(`El resultado de la división: ${division(90, 3)}`) // Arroja un numero
module.exports = { suma, resta, division, multiplicacion };
