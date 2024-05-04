function generarContrasena(longitud: number): string {
    const caracteres:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let contrasena:string = '';
  
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio:number = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres.charAt(indiceAleatorio);
    }
  
    return contrasena;
}
  
const longitudContrasena:string = process.argv[2];
  
  if(!isNaN(parseInt(longitudContrasena))){
    console.log(generarContrasena(parseInt(longitudContrasena)));
  }else{
    console.log("El valor introducido no es un número");
  }