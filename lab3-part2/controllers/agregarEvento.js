let eventos = require('../models/eventos');

/* 
    ! Mirar la estructura de dato de eventos
*/

const agregarEventos = (eventData) => {
    let evento; 


    if(eventos.length == 0){
        evento = {
            id: 1,
            eventData
        }
    }

    if(eventos.length != 0){
        evento = {
            id: (eventos.length + 1),
            eventData
        }
    }

    eventos.push(evento);
}

module.exports = agregarEventos;