const express = require("express")
const router = express.Router()

function initRoutes() {

    router.get("/", (req, res) => {
        res.render("index")
    })

    router.get("/eventos", (req, res) => {
        res.render("eventos")
    })

    router.get("/formulario", (req, res) => {
        res.render("formulario")
    })

    return router;
}

module.exports = initRoutes();