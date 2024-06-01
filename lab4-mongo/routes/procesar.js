
const express = require("express")
const router = express.Router()

const procesar = require("../controllers/procesar")

router.post("/", (req, res) => {
    let {id, nombre, usuario, correo} = req.body
    let nuevoUsuario = {
        id,
        nombre,
        usuario,
        correo
    }

    
    let result = procesar(nuevoUsuario)

    if(result){
        res.redirect("/listado")
    }

    if(!result){
        res.redirect("/agregar")
    }
})

module.exports = router