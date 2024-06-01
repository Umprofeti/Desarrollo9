const mongoose = require("mongoose")

const UsuarioModel = mongoose.Schema({
    nombre: String,
    usuario: String,
    correo: String
})

const Usuario = mongoose.model("usuario", UsuarioModel)

module.exports= Usuario