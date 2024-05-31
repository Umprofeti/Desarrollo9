const express = require("express")
const router = express.Router()
const eventos = require("../models/eventos")

/* Controllers */
const agregarRegistro = require("../controllers/agregarRegistro");
const agregarComentario = require("../controllers/agregarComentario");



function initRoutes() {
    router.get("/", (req, res) => {
        res.render("index");
    });

    router.get("/eventos", (req, res) => {
        res.render("eventos", { eventos });
    });

    router.get("/evento/:id", (req, res) => {
        let id = req.params.id;
        let evento = eventos.find(ev => ev.id == id);
        if (!evento) {
            return res.status(404).render("404", { titulo: "Evento no encontrado" });
        }
        let comentariosEvento = evento.comentarios || []; 
        console.log("Evento:", evento);
        console.log("Comentarios del evento:", comentariosEvento);
        res.render("evento", { evento, comentarios: comentariosEvento });
    });

    router.get("/formulario/:id", (req, res) => {
        let id = req.params.id;
        let evento = eventos.find(ev => ev.id == id);
        if (!evento) {
            return res.status(404).render("404", { titulo: "Evento no encontrado" });
        }
        res.render("formulario", { id: evento.id });
    });

    router.post("/procesarRegistro/:id", (req, res) => {
        let id = req.params.id;
       
    });

 

    router.post("/comentarios/:id", (req, res) => {
        let id =  req.params.id
        const { nombre, comentario:comentarioForm, email } = req.body;
        let comentario = {
            nombre,
            email,
            comentario:comentarioForm
        }
        agregarComentario(comentario, id)
        res.redirect(`/evento/${id}`)
    });

    router.use((req, res) => {
        res.status(404).render('404', { titulo: "Página no encontrada" });
    });

    return router;
}

module.exports = initRoutes();
