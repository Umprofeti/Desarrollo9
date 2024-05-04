"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
let passwordInput = process.argv[2];
const generateHash = (input) => {
    let salt = (0, bcryptjs_1.genSaltSync)(10);
    let hash = (0, bcryptjs_1.hashSync)(salt, input);
    return hash;
};
console.log(generateHash(passwordInput));
