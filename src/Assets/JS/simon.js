// Definición de variables
var gamePattern = [];
var userPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var gameStarted = false;
var countDisplay = $("#count-display");

// Función para generar el próximo paso del juego
function nextSequence() {
userPattern = [];
level++;
$("#level-title").text("Level " + level);
var randomNum = Math.floor(Math.random() * 4);
var randomColor = buttonColors[randomNum];
gamePattern.push(randomColor);
$("#" + randomColor)
.fadeIn(100)
.fadeOut(100)
.fadeIn(100);
countDisplay.text(level);
}

// Función para animar un botón
function animatePress(currentColor) {
$("#" + currentColor).addClass("pressed");
setTimeout(function() {
$("#" + currentColor).removeClass("pressed");
}, 100);
}

// Función para manejar el click del usuario en un botón de color
$(".btn").click(function() {
if (gameStarted) {
var userColor = $(this).attr("id");
userPattern.push(userColor);
animatePress(userColor);
checkAnswer(userPattern.length - 1);
}
});

// Función para verificar la respuesta del usuario
function checkAnswer(currentLevel) {
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Start to Restart");
    startOver();
    gameStarted = false;
    countDisplay.text("0");
    $("#game-over-message").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200);
  }
}


// Función para iniciar el juego
function startGame() {
if (!gameStarted) {
gameStarted = true;
nextSequence();
}
}

// Función para reiniciar el juego
function startOver() {
gamePattern = [];
userPattern = [];
level = 0;
gameStarted = false;
$("#level-title").text("Game Over, Press Start to Restart");
countDisplay.text("0");
}

// Evento para manejar el click en el botón de inicio
$("#start-button").click(function() {
startGame();
});

function resetGame() {
  gamePattern = [];
  userPattern = [];
  level = 0;
  gameStarted = false;
  countDisplay.text("0"); // Poner el contador en 0
  $("#level-title").text("Simon Game");
}

// Evento para manejar el click en el botón de reset
$("#reset-button").click(function() {
  resetGame();
});