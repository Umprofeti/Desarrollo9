"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readAndWrite = () => {
    for (let i = 0; i <= 100; i++) {
        fs_1.default.writeFile("./dist/numero.txt", `${i}`, (err) => {
            console.log(err);
        });
    }
};
readAndWrite();
