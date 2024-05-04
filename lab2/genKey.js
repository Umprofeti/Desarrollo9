"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const genKey = () => {
    let lengthSalt = Math.floor(Math.random() * 10) + 1;
    return (0, bcryptjs_1.genSaltSync)(lengthSalt);
};
console.log(genKey());
