const express = require("express")
const router = express.Router()

const procesarFormulario = require("../controllers/agregarUsuario")
const loginUser = require("../controllers/iniciarSesión")
const {procesarArticulo, listarArticulos, listarPorCategoria} = require("../controllers/productController")


const initRoutes = () => {

    router.post("/v1/agregarUsuario/", procesarFormulario)
    router.post("/v1/loginUser/", loginUser)
    router.post("/v1/agregarObra/", procesarArticulo)
    router.get("/v1/listarObras", listarArticulos)
    router.get("/v1/products/:category", listarPorCategoria)


    return router
}

initRoutes()

module.exports = router;