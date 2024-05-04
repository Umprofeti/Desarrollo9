import {genSaltSync, hashSync} from 'bcryptjs';

let passwordInput:string = process.argv[2]

const generateHash = (input:string):string => {
    let salt:string = genSaltSync(10)
    let hash:string = hashSync(salt, input);

    return hash
} 

console.log(generateHash(passwordInput));
