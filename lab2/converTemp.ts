const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./convertTempFunc.ts');


function main(): void {
    console.log("Convertidor de temperatura");
    console.log("1. Convertir de Celsius a Fahrenheit");
    console.log("2. Convertir de Fahrenheit a Celsius");

    const opcion: number = parseInt(prompt("Selecciona una opción (1/2): ") || '0');

    if (opcion === 1) {
        const celsius: number = parseFloat(prompt("Ingresa la temperatura en grados Celsius: ") || '0');
        const fahrenheit: number = celsiusToFahrenheit(celsius);
        console.log(`${celsius}°C son ${fahrenheit}°F`);
    } else if (opcion === 2) {
        const fahrenheit: number = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit: ") || '0');
        const celsius: number = fahrenheitToCelsius(fahrenheit);
        console.log(`${fahrenheit}°F son ${celsius}°C`);
    } else {
        console.log("Opción inválida");
    }
}

main();