const {usuarios} = require("../models/usuarios")


const verUsuario = (id) => {
    const userInfo = usuarios.find(usuarios=> usuarios.id==id)
    return userInfo
}

module.exports = verUsuario