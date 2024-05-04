"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
let passwordPlain = process.argv[2];
let hashInput = process.argv[3];
const compareHash = (password, hash) => {
    return (0, bcryptjs_1.compareSync)(password, hash);
};
console.log(compareHash(passwordPlain, hashInput));
