// Declaraciones
require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require('body-parser')

// Rutas
const agregar = require("./routes/agregar")
const ver = require("./routes/ver")
const procesar = require("./routes/procesar")
const listado = require("./routes/listado")

//Configuraciones
const PORT = process.env.PORT || 9000

app.set("view engine", 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

//Rutas
app.use("/agregar", agregar)

app.use("/listado", listado)

app.use("/ver", ver)

app.use("/procesar", procesar)

app.get("/", (req, res)=> {

    res.render("index")

})
//Levantar puerto
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})


