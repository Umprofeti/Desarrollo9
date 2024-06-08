const Usuarios = require("../models/schema")
const db_conn =  require("../db_conn")

db_conn()

const procesarFormulario = async (req, res) => {
    try {
        if(req.body.nombre != undefined && req.body.usuario != undefined && req.body.correo != undefined){
            const datos =  new Usuarios(req.body)
            await datos.save()
            res.status(200).send(datos)
        }
    } catch (error) {
        res.status(500).send({message: "Ha ocurrido un error a la hora de insertar el registro"})
    }
}

module.exports = procesarFormulario