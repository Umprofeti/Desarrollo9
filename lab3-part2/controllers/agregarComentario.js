const events = require("../models/eventos");


const agregarComentario = (eventID, comentario) => {
    let evento = events.find(ev => ev.id == eventID)

   if(evento !== undefined){
        evento.comentarios.push(comentario)
    };
}


module.exports = agregarComentario;