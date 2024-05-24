/* 
    * Estructura de los datos
    {
        id: 1, // -> Representa el ID del evento
        nombre: "Noche gotica en Casco Antiguo", // -> Nombre del evento
        Fecha: "12/12/12", // -> Fecha que se realiza el evento
        detalle: "Este evento se realizará en el casco antiguo y tiene una plaza de 50 usuarios", 
        imagen: "url", // -> URL de la imagen procedente de un CDN
        plazas: 100, // -> INT Cantidad de plazas disponibles, Cuando las plazas se acaben mostrar agotados en el front
        usuariosEventos: [  
            {
                id: 1, -> Identificador del usuario al registrarse en el evento
                userEmail: "", -> Correo electrónico del usuario
                telefono: "", -> número de telefono del usuario
                userName: "", -> Nombre completo del usuario
            } 
        ], // Arreglo de usuarios el cual se han suscrito al evento contiene su información
        comentarios: [
            {
                id: 1, // INT Refleja el ID del comentario
                userEmail: "", // INT refleja el Correo electrónico del usuario asociado al comentario,
                comentario: "Esto es un comentario" // Comentario del usuario
            }
        ] // Arreglo de comentarios relacionado al evento
    }

*/

let eventos = [];

module.exports = eventos;
