"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./convertTempFunc.ts');
function main() {
    console.log("Convertidor de temperatura");
    console.log("1. Convertir de Celsius a Fahrenheit");
    console.log("2. Convertir de Fahrenheit a Celsius");
    const opcion = parseInt(prompt("Selecciona una opción (1/2): ") || '0');
    if (opcion === 1) {
        const celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius: ") || '0');
        const fahrenheit = celsiusToFahrenheit(celsius);
        console.log(`${celsius}°C son ${fahrenheit}°F`);
    }
    else if (opcion === 2) {
        const fahrenheit = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit: ") || '0');
        const celsius = fahrenheitToCelsius(fahrenheit);
        console.log(`${fahrenheit}°F son ${celsius}°C`);
    }
    else {
        console.log("Opción inválida");
    }
}
main();
