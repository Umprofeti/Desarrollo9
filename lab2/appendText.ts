import { appendFileSync } from "fs";

let text:string = process.argv[2];
let route:string = process.argv[3];

const appendText = (text:string, route:string):string => {
    try {
        appendFileSync(route, text);
        return "Se agrego el texto";
    } catch (error) {
        return "Error al agregar el texto";
    }
}

console.log(appendText(text, route));