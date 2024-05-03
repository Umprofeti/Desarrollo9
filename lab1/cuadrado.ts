import { area, perimetro } from "./calculos";
import bcript from 'bcryptjs';

let lado = 5 

let areaCuadrado = area(lado)
let perimetroCuadrado = perimetro(lado)

let salt = bcript.genSaltSync(8)
let hash = bcript.hashSync(`${areaCuadrado+perimetroCuadrado}`, salt)

console.log(hash)


