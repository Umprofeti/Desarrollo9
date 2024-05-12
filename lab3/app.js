// Declaraciones
require("dotenv").config()
const express = require("express")
const app = express()
const {usuarios} = require("./models/usuarios")
const bodyParser = require('body-parser')

//Configuraciones
const PORT = process.env.PORT || 9000

app.set("view engine", 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
//Rutas
app.get("/agregar", (req, res) => {

    res.render("agregar")

})

app.get("/listado", (req, res) => {

    res.render("listado", {usuarios})

})

app.get("/ver/:id", (req, res) => {
    let {id} = req.params
    const userInfo = usuarios.find(usuarios=> usuarios.id==id)
    res.render("ver", {userInfo})

})

app.get("/", (req, res)=> {

    res.render("index")

})
//Levantar puerto
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})


