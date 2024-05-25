const express = require("express")
const router = express.Router()

const comments = []; 


function initRoutes() {

    router.get("/", (req, res) => {
        res.render("index")
    })

    router.get("/eventos", (req, res) => {
        res.render("eventos")
    })

    router.get("/formulario", (req, res) => {
        res.render("formulario")
    })

 
    router.get("/comentarios", (req, res) => {
        res.render("comentarios");
    });

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