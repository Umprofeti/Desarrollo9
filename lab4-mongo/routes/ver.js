const express = require("express")
const router = express.Router()

const verUsuario = require("../controllers/verUsuario");

router.get("/:id", (req, res) => {
    let {id} = req.params
    const userInfo = verUsuario(id)
    console.log(userInfo)
    res.render("ver", {userInfo})
})

module.exports = router