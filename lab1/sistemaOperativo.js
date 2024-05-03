"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
console.log(`Información del CPU: ${os_1.default.cpus()}`);
console.log(`Información del la memoria total: ${os_1.default.totalmem()}`);
console.log(`Información de la memoria libre: ${os_1.default.freemem()}`);
console.log(`Arquitectura del procesador: ${os_1.default.arch()}`);
console.log(`Ruta Base: ${os_1.default.homedir()}`);
console.log(`Nombre del host: ${os_1.default.hostname()}`);
console.log(`Interfases de red: ${os_1.default.networkInterfaces()}`);
