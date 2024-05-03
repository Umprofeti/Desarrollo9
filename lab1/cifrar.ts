import bcript from 'bcryptjs'

let salt:string = bcript.genSaltSync(15)

let encryptText =  bcript.hashSync("ContraseñaFuerte:)", salt)

console.log(encryptText)

let text1 = bcript.compare("Texto", encryptText) // Texto no correcto
console.log(text1)

let text2 = bcript.compare("ContraseñaFuerte:)", encryptText) // Texto correcto

console.log(text2)


