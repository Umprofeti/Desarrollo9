import { genSaltSync } from "bcryptjs";

const genKey = ():string => {

    let lengthSalt = Math. floor(Math. random()*10) + 1
    
    return genSaltSync(lengthSalt)
}

console.log(genKey());