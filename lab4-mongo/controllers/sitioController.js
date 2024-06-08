const axios = require("axios")
require("dotenv").config()

const PORT = process.env.PORT || 9000

const getListado = (req, res) => {
    axios.get(`http://localhost:${PORT}/api/v1/usuarios`)
    .then(datos => {
        res.render("listado", {usuarios:datos.data})
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const getVerID = (req, res) => {
    const id = req.params.id
    axios.get(`http://localhost:${PORT}/api/v1/mostrarUsuario/${id}`)
    .then(datos => {
        res.render("ver", {userInfo:datos.data.data[0]})
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const getMostrar = (req, res) => {
    res.render("agregar")
}

const postProcesar = (req, res) => {
    axios.post(`http://localhost:${PORT}/api/v1/crearUsuarios`, req.body)
    .then(datos => {
        res.redirect("/listado")
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const getModificar = (req, res) => {
    const id = req.params.id
    axios.get(`http://localhost:${PORT}/api/v1/mostrarUsuario/${id}`)
    .then(datos => {
        res.render("modificar", {dato:datos.data.data[0]})
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const putGuardar = (req, res) => {
    const id = req.params.id
    axios.put(`http://localhost:${PORT}/api/v1/actualizarUsuario/${id}`, req.body)
    .then(datos => {
        res.redirect("/listado")
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const deleteUsuario = (req, res) => {
    const id = req.params.id
    axios.delete(`http://localhost:${PORT}/api/v1/borrarUsuario/${id}`)
    .then(datos => {
        res.redirect("/listado")
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })

}

module.exports = {getListado, getVerID, getMostrar, postProcesar, getModificar, putGuardar, deleteUsuario}