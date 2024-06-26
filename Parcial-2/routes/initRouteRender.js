const express = require("express")
const router = express.Router()
const { getIndex, getCategoryArte ,getListadoObras,getLogin, getRegistro, postProcesar, postIniciarSesión, getDashboard, getAgregar, postAgregar} = require("../controllers/sitiocontroller")
const autenticate = require("../middleware/authenticate")

const initRenderRoutes = () => {
    router.get("/", getIndex)
    router.get("/category/:category", getCategoryArte)
    router.get("/login", getLogin)
    router.get("/registro", getRegistro)
    router.get("/categoria/:nombre")
    router.post("/procesarRegistro", postProcesar)
    router.post("/iniciarSesion", postIniciarSesión)
    router.get("/dashboard", autenticate, getDashboard)
    router.get("/dashboard/agregar", autenticate, getAgregar)
    router.post("/dashboard/agregar", autenticate, postAgregar)
    router.get("/dashboard/listar", autenticate,getListadoObras)
    
    return router
}
initRenderRoutes()

module.exports = router