let eventos = require("../models/eventos");

const agregarRegistro = (eventID, registro) => {

    let evento = eventos.find(ev => ev.id == eventID)

   if(evento !== undefined){
        evento.usuariosEventos.push(registro)
    };

}

module.exports = agregarRegistro;