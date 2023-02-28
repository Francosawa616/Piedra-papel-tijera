// Lista de palabras
const palabras = [
  { palabra: 'COMPUTADORA', descripcion: 'Máquina electrónica capaz de procesar información.' },
  { palabra: 'INTERNET', descripcion: 'Red de comunicaciones global que conecta computadoras y otros dispositivos.' },
  { palabra: 'SQL', descripcion: 'Lenguaje de programación utilizado para gestionar bases de datos.' },
  { palabra: 'GOOGLE', descripcion: 'Motor de búsqueda en línea y empresa tecnológica.' },
  { palabra: 'HTML', descripcion: 'Lenguaje de marcado utilizado para crear páginas web.' },
  { palabra: 'CSS', descripcion: 'Lenguaje de hojas de estilo utilizado para dar estilo a las páginas web.' },
  { palabra: 'JAVASCRIPT', descripcion: 'Lenguaje de programación utilizado para crear aplicaciones web interactivas.' },
  { palabra: 'PYTHON', descripcion: 'Lenguaje de programación utilizado para una variedad de tareas, desde scripting hasta desarrollo web y científico.' },
  { palabra: 'JAVA', descripcion: 'Lenguaje de programación popular para aplicaciones empresariales y móviles.' },
  { palabra: 'RUBY', descripcion: 'Lenguaje de programación utilizado para el desarrollo de aplicaciones web y móviles.' }
];


// Selecciona una palabra aleatoria de la lista
let palabra = palabras[Math.floor(Math.random() * palabras.length)];

// Arreglo para almacenar las letras adivinadas
let letrasAdivinadas = [];

// Arreglo para almacenar las letras incorrectas
let letrasIncorrectas = [];

// Número máximo de intentos
const maxIntentos = 6;

// Contador de intentos
let intentos = 0;

// Selecciona los elementos del DOM
const wordArea = document.getElementById('word-area');
const hangmanArea = document.getElementById('hangman-area');
const letterArea = document.getElementById('letter-area');
const resultArea = document.getElementById('result-area');

// Función para mostrar la palabra a adivinar en el DOM
function mostrarPalabra() {
  let palabraMostrada = '';
  for (let i = 0; i < palabra.palabra.length; i++) {
    if (letrasAdivinadas.indexOf(palabra.palabra[i]) !== -1) {
      palabraMostrada += palabra.palabra[i];
    } else {
      palabraMostrada += '_';
    }
    palabraMostrada += ' ';
  }
  wordArea.innerHTML = palabraMostrada;
  resultArea.innerHTML = palabra.descripcion;
}

// Función para mostrar las letras disponibles en el DOM
function mostrarLetras() {
  for (let i = 65; i <= 90; i++) {
    const letra = String.fromCharCode(i);
    const letraBtn = document.createElement('button');
    letraBtn.className = 'letter';
    letraBtn.innerHTML = letra;
    letraBtn.addEventListener('click', function() {
      if (letrasAdivinadas.indexOf(letra) === -1 && letrasIncorrectas.indexOf(letra) === -1) {
        const letraCorrecta = palabra.indexOf(letra) !== -1;
        if (letraCorrecta) {
          letrasAdivinadas.push(letra);
          mostrarPalabra();
          if (palabraCompleta()) {
            resultArea.innerHTML = '¡Felicidades, has ganado!';
            setTimeout(function() {
              reiniciarJuego();
            }, 3000);
          }
        } else {
          letrasIncorrectas.push(letra);
          intentos++;
          actualizarImagenAhorcado();
          if (intentos === maxIntentos) {
            resultArea.innerHTML = '¡Lo siento, has perdido! La palabra era: ' + palabra;
            desactivarLetras();
            reiniciarJuego();
          }
        }
        actualizarLetras();
      }
    });
    letterArea.appendChild(letraBtn);
  }
}


// Función para actualizar las letras disponibles en el DOM
function actualizarLetras() {
  const letras = letterArea.querySelectorAll('.letter');
  for (let i = 0; i < letras.length; i++) {
    const letra = letras[i].innerHTML;
    if (letrasAdivinadas.indexOf(letra) !== -1 || letrasIncorrectas.indexOf(letra) !== -1) {
      letras[i].classList.add('disabled');
    } else {
      letras[i].classList.remove('disabled');
    }
  }
}

// Función para actualizar la imagen del ahorcado en el DOM
function actualizarImagenAhorcado() {
  hangmanArea.style.backgroundImage = 'url(\'hangman' + intentos + '.png\')';
}

// Función para desactivar las letras disponibles en el DOM
function desactivarLetras() {
  const letras = letterArea.querySelectorAll('.letter');
  for (let i = 0; i < letras.length; i++) {
  letras[i].classList.add('disabled');
  }
  }
  
  // Función para verificar si se ha completado la palabra
  function palabraCompleta() {
  for (let i = 0; i < palabra.length; i++) {
  if (letrasAdivinadas.indexOf(palabra[i]) === -1) {
  return false;
  }
  }
  return true;
  }
  
  // Función para obtener una nueva palabra y reiniciar el juego
  function nuevaPalabra() {
  // Selecciona una nueva palabra aleatoria de la lista
  palabra = palabras[Math.floor(Math.random() * palabras.length)];
  // Reinicia los arreglos de letras adivinadas y letras incorrectas
letrasAdivinadas.length = 0;
letrasIncorrectas.length = 0;

// Reinicia el contador de intentos
intentos = 0;

// Actualiza la imagen del ahorcado
actualizarImagenAhorcado();

// Muestra la nueva palabra a adivinar y las letras disponibles
mostrarPalabra();
actualizarLetras();

// Limpia el resultado anterior
resultArea.innerHTML = '';
}

// Mostrar la palabra y las letras disponibles en el DOM
mostrarPalabra();
mostrarLetras();

// Función para reiniciar el juego
function reiniciarJuego() {
  setTimeout(function() {
    nuevaPalabra();
  }, 3000); // Espera 3 segundos antes de obtener una nueva palabra
}
