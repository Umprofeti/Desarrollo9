const express = require("express")
const router = express.Router()
const listarUsuarios = require("../controllers/listar")
const procesarUsuarios = require("../controllers/procesar")
const mostrarUsuario = require("../controllers/verUsuario")
const actualizarUsuario = require("../controllers/actualizarUsuario")
const borrarUsuario = require("../controllers/borrarUsuario")

const initRoutes = () => {

    router.get("/api/v1/usuarios", listarUsuarios)
    router.post("/api/v1/crearUsuarios", procesarUsuarios)
    router.get("/api/v1/mostrarUsuario", mostrarUsuario)
    router.put("/api/v1/actualizarUsuario", actualizarUsuario)
    router.delete("/api/v1/borrarUsuario", borrarUsuario)

    return router
}

initRoutes()

module.exports = router;