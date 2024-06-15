const dotenv = require("dotenv")
const mongoose = require("mongoose")

const createConection =  () => {
    mongoose.connect(process.env.DB_CONNECTION)
    .then(()=>{console.log("Se ha establecido la conexión")})
    .catch((err)=> {console.log(`No se ha podido conectar a la base de datos ${err.message}`)})
}

module.exports = createConection;