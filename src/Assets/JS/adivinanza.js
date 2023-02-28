function adivinaNumero() {
    var numero = Math.floor(Math.random() * 100) + 1;
    var intentos = 0;
    var adivina = document.getElementById("adivina").value;
    var mensaje = document.getElementById("mensaje");
    
    while(adivina != numero) {
      if(adivina > numero) {
        mensaje.innerHTML = "Demasiado alto. Intenta de nuevo.";
      } else {
        mensaje.innerHTML = "Demasiado bajo. Intenta de nuevo.";
      }
      intentos++;
      adivina = prompt("Intenta de nuevo:");
    }
    
    intentos++;
    mensaje.innerHTML = "¡Correcto! Adivinaste el número en " + intentos + " intentos.";
  }
  