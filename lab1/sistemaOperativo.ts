import os from 'os'

console.log(`Información del CPU: ${os.cpus()}`)
console.log(`Información del la memoria total: ${os.totalmem()}`)
console.log(`Información de la memoria libre: ${os.freemem()}`)
console.log(`Arquitectura del procesador: ${os.arch()}`)
console.log(`Ruta Base: ${os.homedir()}`)
console.log(`Nombre del host: ${os.hostname()}`)
console.log(`Interfases de red: ${os.networkInterfaces()}`)