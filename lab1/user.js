import { genSaltSync, hashSync } from 'bcryptjs';
export const userOBJ = (user, password) => {
    try {
        let salt = genSaltSync(8);
        let hash = hashSync(password, salt);
        let response = {
            usuario: user,
            salt: salt,
            hash_password: hash,
            estado: true
        };
        return response;
    }
    catch (error) {
        return { estado: false };
    }
};
