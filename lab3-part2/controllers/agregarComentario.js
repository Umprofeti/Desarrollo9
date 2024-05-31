const events = require("../models/eventos");


const agregarComentario = (comentario, eventID) => {

    let evento = events.find(ev => ev.id == eventID)

    let comentarioID = evento.comentarios.length
    let nuevoComentario = {
        id: (comentarioID + 1),
        nombre: comentario.nombre,
        userEmail: comentario.email,
        comentario: comentario.comentario
    }

    evento.comentarios.push(nuevoComentario)
}


module.exports = agregarComentario;