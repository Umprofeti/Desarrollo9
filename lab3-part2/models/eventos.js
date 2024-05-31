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



let eventos = [
    {
        id: 1, // -> Representa el ID del evento
        nombre: "Noche gotica en Casco Antiguo", // -> Nombre del evento
        Fecha: "12/12/12", // -> Fecha que se realiza el evento
        detalle: "Este evento se realizará en el casco antiguo y tiene una plaza de 50 usuarios", 
        imagen: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // -> URL de la imagen procedente de un CDN
        plazas: 100, // -> INT Cantidad de plazas disponibles, Cuando las plazas se acaben mostrar agotados en el front
        usuariosEventos: [  
            {
                id: 1, //-> Identificador del usuario al registrarse en el evento
                userEmail: "", //-> Correo electrónico del usuario
                telefono: "", //-> número de telefono del usuario
                userName: "", //-> Nombre completo del usuario
            } 
        ], // Arreglo de usuarios el cual se han suscrito al evento contiene su información
        comentarios: [
            {
                eventId: 1,
                id: 1, // INT Refleja el ID del comentario
                nombre: "Miguel angel lopez",
                userEmail: "pepito@pepito.com", // INT refleja el Correo electrónico del usuario asociado al comentario,
                comentario: "Esto es un comentario" // Comentario del usuario
            }
        ] // Arreglo de comentarios relacionado al evento
    },
    {
        id: 2, // -> Representa el ID del evento
        nombre: "MyLittlePony en Panamá", // -> Nombre del evento
        Fecha: "12/12/25", // -> Fecha que se realiza el evento
        detalle: "Este evento se realizará en el casco antiguo y tiene una plaza de 50 usuarios", 
        imagen: "https://images.unsplash.com/photo-1579358733213-f5754c8733cf?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // -> URL de la imagen procedente de un CDN
        plazas: 100, // -> INT Cantidad de plazas disponibles, Cuando las plazas se acaben mostrar agotados en el front
        usuariosEventos: [  
            {
                id: 1, //-> Identificador del usuario al registrarse en el evento
                userEmail: "", //-> Correo electrónico del usuario
                telefono: "", //-> número de telefono del usuario
                userName: "", //-> Nombre completo del usuario
            } 
        ], // Arreglo de usuarios el cual se han suscrito al evento contiene su información
        comentarios: [
            {
                eventId: 2,
                id: 1, // INT Refleja el ID del comentario
                nombre: "Miguel angel lopez",
                userEmail: "pepito@pepito.com", // INT refleja el Correo electrónico del usuario asociado al comentario,
                comentario: "Esto es un comentario" // Comentario del usuario
            }
        ] // Arreglo de comentarios relacionado al evento
    },
    {
        id: 3, // -> Representa el ID del evento
        nombre: "Tarde Gaming en la UTP", // -> Nombre del evento
        Fecha: "20/06/24", // -> Fecha que se realiza el evento
        detalle: "Este evento se realizará en la UTP", 
        imagen: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // -> URL de la imagen procedente de un CDN
        plazas: 100, // -> INT Cantidad de plazas disponibles, Cuando las plazas se acaben mostrar agotados en el front
        usuariosEventos: [  
            {
              
                id: 1, //-> Identificador del usuario al registrarse en el evento
                userEmail: "", //-> Correo electrónico del usuario
                telefono: "", //-> número de telefono del usuario
                userName: "", //-> Nombre completo del usuario
            } 
        ], // Arreglo de usuarios el cual se han suscrito al evento contiene su información
        comentarios: [
            {
                eventId: 3,
                id: 1, // INT Refleja el ID del comentario
                userEmail: "pepito@uuuuu.com", // INT refleja el Correo electrónico del usuario asociado al comentario,
                comentario: "Esto es un comentario, evento tres" // Comentario del usuario
            }
            ,{
                eventId: 3,
                id: 2, // INT Refleja el ID del comentario
                userEmail: "ejemplo444@uuuuu.com", // INT refleja el Correo electrónico del usuario asociado al comentario,
                comentario: "Esto es un segundo comentario, evento tres" // Comentario del usuario
            }
        ] // Arreglo de comentarios relacionado al evento
    }
];

module.exports = eventos;
