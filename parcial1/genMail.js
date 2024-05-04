"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
//import fs from 'node:fs';
let Fecha = process.argv[2];
let Nombre_Persona = process.argv[3];
let Direccion = process.argv[4];
let Ciudad = process.argv[5];
let Cargo_Deseado = process.argv[6];
let Nombre_Empresa = process.argv[7];
let Area_Pertinente = process.argv[8];
let Email = process.argv[9];
let Tel = process.argv[10];
let Firma = process.argv[11];
let Destinatario = process.argv[12];
let Nombre_Archivo = process.argv[13];
let salida = process.argv[14];
let CartaData = {
    Fecha,
    Nombre_Persona,
    Direccion,
    Ciudad,
    Cargo_Deseado,
    Nombre_Empresa,
    Area_Pertinente,
    Email,
    Tel,
    Firma,
    Destinatario,
    Nombre_Archivo,
    salida
};
const genMail = (Data) => {
    let outString = `
    ${Data.Fecha}
    ${Data.Destinatario}
    ${Data.Direccion}
    ${Data.Ciudad}

    Estimado/a Señor/a,
    Me dirijo a usted con el propósito de expresar mi interés en la posición de ${Data.Cargo_Deseado} en ${Data.Nombre_Empresa}. Soy una persona motivada y comprometida, con una sólida formación en ${Data.Area_Pertinente}, y estoy entusiasmado/a con la oportunidad de contribuir al éxito de su empresa.
    Adjunto a esta carta, encontrará mi currículum vitae que detalla mi experiencia y habilidades. Estoy disponible para una entrevista en cualquier momento conveniente para usted. Puede ponerse en contacto conmigo por correo electrónico a ${Data.Email} o por teléfono al ${Data.Tel}.
    Agradezco su tiempo y consideración, y espero tener la oportunidad de discutir cómo puedo contribuir al éxito de ${Data.Nombre_Empresa}.
    Atentamente,
    ${Data.Firma}
    ${Data.Nombre_Persona}
    `;
    if (Data.salida == "1") {
        return outString;
    }
    if (Data.salida == "2") {
        if (!fs.existsSync('./dist')) {
            fs.mkdir('./dist', (err) => {
                return err?.message;
            });
        }
        fs.writeFile(`./dist/${Data.Nombre_Archivo}.txt`, outString, (err) => {
            return err?.message;
        });
        return `Se ha guardado la información en \n Ruta: ./dist/ \n Nombre del archivo: ${Data.Nombre_Archivo}.txt`;
    }
    return "Porfavor eliga la opcion 1 o 2";
};
console.log(genMail(CartaData));
