const usuarios = [
    {
        id: 1, // -> ID del usuario
        userName: "Pepito123", // -> Nombre de usuario
        password: "", // String con la contraseña cifrada
        JWT_TOKEN: "", // Token de autenticación del usuario cuando se logea. Tiene una duración de 1 hora
        email: "correo@correo.com", // Email del usuario al cual se registra
        nombreCompleto: "Pepito", // Nombre del usuario
        telefono: {
            prefijo: "507",
            numero: "6123-4567"
        }, // Representa el numero de telefono del usuario
        eventsAssist: [
            {
                id: 1
            }
        ], // Arreglo de eventos a los que el usuario se ha inscrito puede ser vacio si el usuario no está en ningun evento
        rol: 0, // 1 si es usuario común o 0 si es admin
    }
]