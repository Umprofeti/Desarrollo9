const axios = require("axios")
require("dotenv").config()

const PORT = process.env.PORT || 9000


const getIndex = (req, res ) => {
    res.render("index")
}

const getLogin = (req, res) => {
    res.render("login")
}

const getRegistro = (req, res) => {
    res.render("registro")
}

const getDashboard = (req, res) => {
    res.render("dashboard")
}

const postProcesar = async (req, res) => {
    await axios.post(`http://localhost:${PORT}/api/v1/agregarUsuario/`, req.body)
    .then(datos => {
        res.redirect(`/login`)
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const postIniciarSesión = async (req, res) => {
    await axios.post(`http://localhost:${PORT}/api/v1/loginUser/`, req.body)
    .then(datos => {
        res.cookie('auth_token', datos.data.auth_token, { httpOnly: true });
        res.redirect(`/dashboard`)
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const getAgregar = (req, res) => {
    res.render("agregar")
}

const postAgregar = async (req, res) => {
    await axios.post(`http://localhost:${PORT}/api/v1/agregarObra/`, req.body)
    .then(datos => {
        res.redirect("/dashboard/listar")
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const getListadoObras = async (req, res) => {
    await axios.get(`http://localhost:${PORT}/api/v1/listarObras/`)
    .then(datos => {
        res.render("listado", {datos})
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const getCategoryArte = async (req, res) => {
    await axios.get(`http://localhost:${PORT}/api/v1/products/${req.params.category}`)
    .then(datos => {
        res.render("category", {datos, category:req.params.category})
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}

const getVerID = (req, res) => {
    const id = req.params.id

    .then(datos => {
        res.render("ver", {userInfo:datos.data.data[0]})
    })
    .catch(error => {
        console.log(`Error: ${error}`)
    })
}


module.exports = {getIndex, getCategoryArte ,getListadoObras,postAgregar ,getLogin, getRegistro, postProcesar, postIniciarSesión, getDashboard, getAgregar}