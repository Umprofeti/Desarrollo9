const express = require("express")
const router = express.Router()
const eventos = require("../models/eventos")

/* Controllers */
const agregarRegistro = require("../controllers/agregarRegistro");

const comments = []; 


function initRoutes() {

    router.get("/", (req, res) => {
        res.render("index")
    })

    router.get("/eventos", (req, res) => {
        res.render("eventos", {eventos})
    })

    router.get("/evento/:id", (req, res) => {
        let id =  req.params.id

        let evento  = eventos.find(ev => ev.id == id)

        res.render("evento", {evento})

    })

    router.get("/formulario/:id", (req, res) => {

        let id =  req.params.id

        let evento  = eventos.find(ev => ev.id == id)

        res.render("formulario", {id: evento.id})
    })

 
    router.post("/procesarRegistro/:id", (req, res) => {
        let id =  req.params.id

    })


    router.post("/comentarios", (req, res) => {
        const { nombre, comentario } = req.body;
        comments.push({ nombre, comentario });
        res.redirect("/comentarios");
    });


    router.use((req, res, next) => {
        res.status(404).render('404', { titulo: "Página no encontrada" });
    });

    return router;
}

module.exports = initRoutes();