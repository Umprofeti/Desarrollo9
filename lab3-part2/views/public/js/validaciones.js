function validateForm() {
    var nameInput = document.querySelector('.name.entry');
    var emailInput = document.querySelector('.email.entry');
    var numberInput = document.querySelector('.number');
  
    // Validación para el nombre
    var name = nameInput.value.trim(); // Elimina espacios en blanco al principio y al final
    name = name.charAt(0).toUpperCase() + name.slice(1); // Primera letra en mayúscula
    if (!/^[a-zA-Z\s]+$/.test(name) || name.length > 20) { // Solo letras y espacios permitidos, máximo 20 caracteres
      alert('Por favor, ingresa un nombre válido (máximo 20 caracteres).');
      return false;
    }
    
    // Validación para el email
    var email = emailInput.value.trim();
    if (!email.includes('@')) { // Verifica si hay '@' en el email
      alert('Por favor, ingresa una dirección de correo electrónico válida.');
      return false;
    }
    
    // Validación para el número
    var number = numberInput.value.trim();
    if (!/^\+?\d{1,10}$/.test(number)) { // Solo números y el carácter '+', máximo 10 dígitos
      alert('Por favor, ingresa un número de teléfono válido (máximo 10 dígitos).');
      return false;
    }
  
    return true; // Si todas las validaciones pasan, retorna verdadero
  }
  
  function thanks() {
    if (validateForm()) {
      alert('¡Gracias por enviar el formulario!');
    }
  }