const express = require("express")
const router = express.Router()
const listarUsuarios = require("../controllers/listar")
const procesarUsuarios = require("../controllers/procesar")
const mostrarUsuario = require("../controllers/verUsuario")
const actualizarUsuario = require("../controllers/actualizarUsuario")
const borrarUsuario = require("../controllers/borrarUsuario")


const initRoutes = () => {

    router.get("/v1/usuarios", listarUsuarios)
    router.post("/v1/crearUsuarios", procesarUsuarios)
    router.get("/v1/mostrarUsuario/:id", mostrarUsuario)
    router.put("/v1/actualizarUsuario/:id", actualizarUsuario)
    router.delete("/v1/borrarUsuario/:id", borrarUsuario)

    return router
}

initRoutes()

module.exports = router;