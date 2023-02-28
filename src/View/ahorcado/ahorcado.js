const palabras = [
  { palabra: 'COMPUTADORA' },
  { palabra: 'INTERNET' },
  { palabra: 'SQL' },
  { palabra: 'GOOGLE' },
  { palabra: 'HTML' },
  { palabra: 'CSS' },
  { palabra: 'JAVASCRIPT' },
  { palabra: 'PYTHON' },
  { palabra: 'JAVA' },
  { palabra: 'RUBY' }
];

let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let letrasAdivinadas = [];
let letrasIncorrectas = [];
const maxIntentos = 6;
let intentos = 0;
const wordArea = document.getElementById('word-area');
const hangmanArea = document.getElementById('hangman-area');
const letterArea = document.getElementById('letter-area');
const resultArea = document.getElementById('result-area');

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
}

function mostrarLetras() {
  for (let i = 65; i <= 90; i++) {
    const letra = String.fromCharCode(i);
    const letraBtn = document.createElement('button');
    letraBtn.className = 'letter';
    letraBtn.innerHTML = letra;
    letraBtn.addEventListener('click', function() {
      if (letrasAdivinadas.indexOf(letra) === -1 && letrasIncorrectas.indexOf(letra) === -1) {
        const letraCorrecta = palabra.palabra.indexOf(letra) !== -1;
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
            resultArea.innerHTML = '¡Lo siento, has perdido! La palabra era: ' + palabra.palabra;
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

function actualizarImagenAhorcado() {
  hangmanArea.style.backgroundImage = 'url(\'hangman' + intentos + '.png\')';
}

function desactivarLetras() {
  const letras = letterArea.querySelectorAll('.letter');
  for (let i = 0; i < letras.length; i++) {
    letras[i].classList.add('disabled');
  }
}

function palabraCompleta() {
  for (let i = 0; i < palabra.palabra.length; i++) {
  if (letrasAdivinadas.indexOf(palabra.palabra[i]) === -1) {
  return false;
  }
  }
  return true;
  }
  
  function reiniciarJuego() {
  palabra = palabras[Math.floor(Math.random() * palabras.length)];
  letrasAdivinadas = [];
  letrasIncorrectas = [];
  intentos = 0;
  actualizarImagenAhorcado();
  mostrarPalabra();
  actualizarLetras();
  resultArea.innerHTML = '';
  }
  
  mostrarPalabra();
  mostrarLetras();
  actualizarImagenAhorcado();
