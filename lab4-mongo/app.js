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
const initRoutes = require("./routes/initRoutes")
const initRenderRoutes = require("./routes/initRoutesRender")

//Configuraciones
const PORT = process.env.PORT || 9000

app.set("view engine", 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

//Rutas
app.use("/api", initRoutes)
app.use("/", initRenderRoutes)

app.get("*", (req, res)=> {
    res.render("404")
    
})
//Levantar puerto
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`)
})


