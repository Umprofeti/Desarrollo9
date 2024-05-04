"use strict";
function generarContrasena(longitud) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }
    return contrasena;
}
const longitudContrasena = process.argv[2];
if (!isNaN(parseInt(longitudContrasena))) {
    console.log(generarContrasena(parseInt(longitudContrasena)));
}
else {
    console.log("El valor introducido no es un número");
}
