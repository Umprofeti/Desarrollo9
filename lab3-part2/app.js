require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const initRoutes = require("./routes/initRoutes")
const bodyParser = require("body-parser")
const app = express()
const {generateHash} = require("./helpers/createPassword")
const usuarios = require("./models/usuarios")


// configuraciones 
const puerto = process.env.puerto || 54112
app.set("view engine",'ejs')
app.use(cookieParser());
app.use("/public",express.static(__dirname+"/views/public"))
app.use(bodyParser.urlencoded({extended: true}))

/* 
    * Inicializar usuario por defecto con los valores establecidos en la variable de entorno
*/

const createFirtsUser = () => {
    let newUser = {
        id: (usuarios.length + 1),
        userName: process.env.username,
        JWT_TOKEN: "",
        password: generateHash(process.env.password),
        email: process.env.email
    }
    usuarios.push(newUser)
}


//rutas 
app.use("/", initRoutes)



//Inicializar proyecto
createFirtsUser()
app.listen(puerto,()=>{
 console.log(`Servidor levantado en el puerto:  http://localhost:${puerto}/`)

})