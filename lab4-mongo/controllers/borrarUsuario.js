const Usuarios = require("../models/schema");
const db_conn = require("../db_conn");

db_conn()

const borrarUsuario = async (req, res) => {
    let id = req.params.id

    try {
        let datos = await Usuarios.findByIdAndDelete(id)
        res.status(200).json(datos)
    } catch (error) {
        res.status(500).send({message: "Ha ocurrido un error a la hora de eliminar el registro"})
    }
}

module.exports = borrarUsuario;