const Usuarios = require("../models/schema")
const db_conn = require("../db_conn")

db_conn()
const verUsuario = async(req, res) => {
    try {
        const datos = await Usuarios.find({_id:req.params.id})
        res.status(200).send({data: datos})
    } catch (error) {
        res.status(500).send({message: "No se ha encontrar al usuario deseado"})
    }
}

module.exports = verUsuario