const {Usuario} = require("../models/schema")
const db_conn =  require("../db_conn")
const {generateHash} = require("../lib/createPassword")

db_conn()

const procesarFormulario = async (req, res) => {
    try {
        if(req.body.nombre != undefined && req.body.usuario != undefined && req.body.correo != undefined && req.body.apellido != undefined){
            const datos =  new Usuario({
                nombre:(req.body.nombre + " " +req.body.apellido),
                nombreusuario:req.body.usuario,
                correo:req.body.correo,
                password:generateHash(req.body.password)
            })
            await datos.save()
            res.status(200).send(datos)
        }
    } catch (error) {
        res.status(500).send({message: "Ha ocurrido un error a la hora de insertar el registro"})
    }
}

module.exports = procesarFormulario