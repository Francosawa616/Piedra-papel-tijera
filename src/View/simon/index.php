<!DOCTYPE html>
<html>
  <head>
    <title>Simon Game</title>
    <link rel="stylesheet" href="../../Assets/CSS/simon.css">
  </head>
  <body>
  <a href="../gamesphpandjs.php" class="back-link">Volver</a>
    <h1>Simon Game</h1>

    <div id="game-over-message">Game Over</div>

    <div class="game-container">
      <div class="game-buttons">
        <div class="btn green" id="green"></div>
        <div class="btn red" id="red"></div>
        <div class="btn yellow" id="yellow"></div>
        <div class="btn blue" id="blue"></div>
      </div>
      <div class="game-controls">
        <button class="start-btn" id="start-button" onclick="startGame()">Start</button>
        <button class="restart-btn" id="reset-button"  onclick="resetGame()">Reset</button>
        <span id="count-display">0</span>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../../Assets/JS/simon.js"></script>
  </body>
</html>


