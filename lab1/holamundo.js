"use strict";
// Problema 1
console.log("Hola Mundo");
// Problema 2
let nombre = "Jonathan";
let edad = 21;
//Problema 3 Imprimir concatenando
console.log("Nombre: " + nombre + " edad:" + edad.toString());
console.log(`Nombre ${nombre} edad: ${edad.toString()}`);
// Problema 4 Suma de variables utilizando template string
let numero1 = 21;
let numero2 = 30;
console.log(`${numero1 + numero2}`);
// Problema 5 Condicion para saber cual de los dos es mayor
if (numero1 > numero2)
    console.log(`El numero mayor es el ${numero1}`);
else
    console.log(`El numero mayor es el ${numero2}`);
// Problema 6
let arrNum = [1, 10, 50, 60, 25];
for (let i = 0; i < arrNum.length; i++) {
    console.log(arrNum[i]);
}
for (let i = 0; i <= 100; i++) {
    arrNum.push(Math.random());
}
// Problema 7
arrNum.forEach(num => {
    console.log(num);
});
//Problema 8
let Persona = {
    Nombre: "Jonathan",
    edad: 21,
    direccion: 'La Chorrera, Barrio Balboa, La Seda'
};
console.log(Persona);
