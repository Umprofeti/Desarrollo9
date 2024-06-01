const express = require("express")
const router = express.Router()

const {usuarios} = require("../models/usuarios")

router.get("/", (req, res) => {
    
    let newId
    usuarios.forEach(usuarios => {
        newId = usuarios.id
    })

    newId = Number(newId) + 1

    res.render("agregar", {newId })
})

module.exports = router