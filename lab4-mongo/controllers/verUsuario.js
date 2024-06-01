const Usuarios = require("../models/schema")
const db_conn = require("../db_conn")

db_conn()
const verUsuario = (req, res) => {
    try {
        const datos = Usuarios.find({__id:req.params.id})
        res.status(200).send({data: datos})
    } catch (error) {
        res.status(500).send({message: "No se ha enconda al usuario deseado"})
    }
}

module.exports = verUsuario