const express = require("express")
const router = express.Router()
const eventos = require("../models/eventos")

/* Controllers */
const agregarRegistro = require("../controllers/agregarRegistro");
const agregarComentario = require("../controllers/agregarComentario");
const verifyUser = require("../controllers/verifyUser");


/* Middleware */
const autenticate = require("../middleware/autenticate")

function initRoutes() {
    router.get("/", (req, res) => {
        res.render("index",{eventos});
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

    router.post("/procesarFormulario/:id", (req, res) => {
        let id =  req.params.id
        let registro = {
            nombre: req.body.nombre,
            userEmail: req.body.email,
            telefono: req.body.number
        }

        agregarRegistro(id, registro)

        res.redirect(`/evento/${id}`)
    })

    router.get("/login", (req, res) => {
        if(req.cookies.token){
            res.redirect("/dashboard")
        }
        if(!req.cookies.token){
            res.render("login")
        }
    })

    router.post("/userLogin", (req, res) => {

        let JWT = verifyUser(req.body.username, req.body.password)

        if(JWT != undefined ){
            res.cookie('token', JWT, { httpOnly: true });
            res.redirect("/dashboard")
        }else{
            res.redirect("/login")
        }
    })

    router.get("/dashboard/", autenticate ,(req, res) => {
        res.render("dashboard", {eventos})
    })

    router.get("/dashboard/event/:id", autenticate, (req, res) => {
        let id =  req.params.id

        let currentEvent = eventos.find(ev => ev.id == id)

        res.render("details-event", {evento: currentEvent})
    })

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
