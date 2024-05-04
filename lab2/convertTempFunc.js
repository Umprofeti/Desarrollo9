"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Función para convertir grados Celsius a grados Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// Función para convertir grados Fahrenheit a grados Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius
};
