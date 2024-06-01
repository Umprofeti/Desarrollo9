const Usuarios = require("../models/schema")
const db = require("../db_conn")

//Ejecuta la Base de datos
db()

const listar = async(req, res) => {
    try{
        const datos = await Usuarios.find()
        res.status(200).send(datos)
    }catch(error) {
        res.status(500).send({message: "No se han obtenido registro de los usuarios"})
    }
}


module.exports = listar