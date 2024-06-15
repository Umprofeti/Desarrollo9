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

const postProcesar = (req, res) => {
    axios.post(`http://localhost:${PORT}/api/v1/agregarUsuario/`, req.body)
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
        console.log(datos)
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
        res.redirect("/dashboard/listado")
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



const getMostrar = (req, res) => {
    res.render("agregar")
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

module.exports = {getIndex, postAgregar ,getLogin, getRegistro, postProcesar, postIniciarSesión, getDashboard, getAgregar}