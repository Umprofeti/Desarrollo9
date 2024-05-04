import {compareSync} from 'bcryptjs';
let passwordPlain:string = process.argv[2];
let hashInput:string = process.argv[3];

const compareHash = (password:string, hash:string):boolean => {
    return compareSync(password, hash)
}

console.log(compareHash(passwordPlain, hashInput));