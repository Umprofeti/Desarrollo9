"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
let salt = bcryptjs_1.default.genSaltSync(15);
let encryptText = bcryptjs_1.default.hashSync("ContraseñaFuerte:)", salt);
console.log(encryptText);
let text1 = bcryptjs_1.default.compare("Texto", encryptText); // Texto no correcto
console.log(text1);
let text2 = bcryptjs_1.default.compare("ContraseñaFuerte:)", encryptText); // Texto correcto
console.log(text2);
