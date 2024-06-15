const bcrypt = require("bcryptjs")
const users = require("../models/usuarios")
const genJWT = require("../helpers/genJWT")

const verifyUser = (userName, password) => {
    let user = users.find(user => user.userName == userName)
    
    if(user != undefined){
        if(bcrypt.compareSync(password, user.password)){
            let jwtToken = genJWT({userName, password:user.password})
            user.JWT_TOKEN = jwtToken
            return jwtToken
        }
    }
}

module.exports = verifyUser;