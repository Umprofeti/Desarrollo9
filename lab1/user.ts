import {genSaltSync, hashSync} from 'bcryptjs';

type response = {
    usuario?: string,
    salt?: string,
    hash_password?: string,
    estado: boolean
}


export const userOBJ = (user:string, password:string):response => {

    try {
        let salt = genSaltSync(8);
        let hash = hashSync(password, salt);

        let response = {
            usuario: user,
            salt: salt,
            hash_password: hash,
            estado: true
        }

        return response

    } catch (error) {
        return {estado: false}
    }
}