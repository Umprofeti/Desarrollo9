let eventos = [
    {
        id: 1, // -> ID del evento
        nombre: "Noche gotica en Casco Antiguo", // -> Nombre del evento
        Fecha: "12/12/12", // -> Fecha que se realiza el evento
        detalle: "Este evento se realizará en el casco antiguo y tiene una plaza de 50 usuarios",
        comentarios: [
            {
                id:1, // -> Asociado al ID del comentario
                userId: 1 // -> Asociado con el usuario el cual escribió el comentario
            }
        ], 
        imagen: "url", // -> URL de la imagen procedente de un CDN
        usuarios: [
            {
                id:1 // -> Asociado con el ID del usuario al cual se ha inscrito en el evento
            }
        ],
        plazas: 100, // -> INT Cantidad de plazas disponibles, Cuando las plazas se acaben mostrar agotados en el front
    },
]