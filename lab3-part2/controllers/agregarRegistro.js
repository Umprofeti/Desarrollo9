let eventos = require("../models/eventos");

const agregarRegistro = (eventID, registro) => {

    let evento = eventos.find(ev => ev.id == eventID)

    evento.plazas = evento.plazas - 1

    let newRegister = {
        id: (evento.usuariosEventos.length + 1),
        userName: registro.nombre,
        userEmail: registro.userEmail,
        telefono: registro.telefono
    }

   if(evento !== undefined && evento.plazas > 0){
        evento.usuariosEventos.push(newRegister)
    };

}

module.exports = agregarRegistro;