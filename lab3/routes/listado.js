const express = require("express")
const router = express.Router()

const listarUsuarios = require("../controllers/listar")

router.get("/", (req, res) => {
    let usuarios = listarUsuarios()
    res.render("listado", {usuarios})
})


module.exports = router