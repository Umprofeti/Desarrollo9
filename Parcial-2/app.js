// Declaraciones
require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")

// Rutas
const initRoutes = require("./routes/initRoutes")
const initRenderRoutes = require("./routes/initRouteRender")

//Configuraciones
const PORT = process.env.PORT || 9000

app.set("view engine", 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser());

//Rutas
app.use("/api", initRoutes)
app.use("/", initRenderRoutes)

/* app.get("*", (req, res)=> {
    res.render("404")
    
}) */
//Levantar puerto
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`)
})