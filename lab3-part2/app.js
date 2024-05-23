require("dotenv").config()
const express = require("express")
const initRoutes = require("./routes/initRoutes")
const bodyParser = require("body-parser")
const app = express()



// configuraciones 
const puerto = process.env.puerto || 54112
app.set("view engine",'ejs')
app.use("/public",express.static(__dirname+"/views/public"))
app.use(bodyParser.urlencoded({extended: true}))


//rutas 
app.use("/", initRoutes)

//levantar puerto
app.listen(puerto,()=>{
 console.log(`Servidor levantado en el puerto:  http://localhost:${puerto}/`)

})