<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $playerChoice = $_POST['choice'];
    $computerChoice = rand(1, 3);
    $result = "";
  
    if ($playerChoice == $computerChoice) {
      $result = "Empate";
    } elseif ($playerChoice == 1 && $computerChoice == 3 ||
              $playerChoice == 2 && $computerChoice == 1 ||
              $playerChoice == 3 && $computerChoice == 2) {
      $result = "Ganaste";
    } else {
      $result = "Perdiste";
    }

    if (isset($_POST['play_again'])) {
        session_destroy();
        header("Location: index.php");
        exit;
      }
  }
?>
