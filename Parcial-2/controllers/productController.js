const {Product} = require("../models/schema")
const db_conn =  require("../db_conn")
db_conn()

const procesarArticulo = async (req, res) => {
    try {
        if(req.body.name != undefined && req.body.description != undefined && req.body.category != undefined && req.body.price != undefined && req.body.image != undefined){
            const datos =  new Product(req.body)
            await datos.save()
            res.status(200).send(datos)
        }
    } catch (error) {
        res.status(500).send({message: "Ha ocurrido un error a la hora de insertar el registro"})
    }
}

const listarArticulos = async(req, res) => {
    try {
        const datos =  await Product.find()
        res.status(200).send(datos)
    } catch (error) {
        res.status(500).send({message: "Ha ocurrido un error a la hora de Buscar los registros de Productos"})
    }
}

const listarPorCategoria = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {procesarArticulo, listarArticulos, listarPorCategoria}