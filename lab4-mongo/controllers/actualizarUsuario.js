const Usuarios = require("../models/schema")
const db_conn = require("../db_conn")

db_conn()

const actualizarUsuario = async (req, res) => {
    let id = req.params.id;

    try {
        const datos = await Usuarios.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(200).send(datos)
    } catch (error) {
        res.status(500).send({message: "Ha ocurrido un error!!"})
    }

}

module.exports = actualizarUsuario