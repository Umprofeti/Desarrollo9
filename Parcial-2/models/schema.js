const mongoose = require("mongoose")

const UsuarioModel = mongoose.Schema({
    nombre: String,
    nombreusuario: String,
    correo: String,
    password:String,
    JWT_TOKEN:String
})

const ProductModel = mongoose.Schema({
    name:String,
    description:String,
    category:String,
    price:Number,
    image:String
})

const Usuario = mongoose.model("usuario", UsuarioModel)
const Product = mongoose.model("product", ProductModel)

module.exports= {Usuario, Product}