const {usuarios} = require("../models/usuarios")

const procesarFormulario = (nuevoUsuario) => {

    let {id} = nuevoUsuario
    
    let user = usuarios.find(usuarios=> usuarios.id==id)
    console.log(user)
    if(user===undefined){
        usuarios.push(nuevoUsuario)
        return true
    }

    return false
}

module.exports = procesarFormulario