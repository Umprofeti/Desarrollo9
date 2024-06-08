const express = require("express")
const router = express.Router()
const {getListado, getVerID, postProcesar, getMostrar, getModificar, putGuardar, deleteUsuario} = require("../controllers/sitioController")


const initRenderRoutes = () => {
    router.get("/listado", getListado)
    router.get("/ver/:id", getVerID)
    router.get("/agregar", getMostrar)
    router.post("/procesar", postProcesar)
    router.get("/modificar/:id", getModificar)
    router.post("/guardar/:id", putGuardar)
    router.get("/eliminar/:id", deleteUsuario)

    return router
}
initRenderRoutes()

module.exports = router