<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Juego de Adivinanza</title>
    <link rel="stylesheet" type="text/css" href="../../Assets/CSS/adivinanza.css">
	<script src="../../Assets/JS/adivinanza.js"></script>
</head>
<body>
	<h1>Juego de Adivinanza</h1>
	<p>Intenta adivinar el número entre 1 y 100:</p>
	<form method="post">
		<input type="number" name="adivina">
		<button type="submit" name="enviar">Adivinar</button>
	</form>
	<p>
		<?php
		if(isset($_POST["enviar"])) {
			$numero = $_SESSION["numero"];
			$intentos = $_SESSION["intentos"];
			$adivina = $_POST["adivina"];
			
			if($adivina > $numero) {
				echo "Demasiado alto. Intenta de nuevo.";
			} else if($adivina < $numero) {
				echo "Demasiado bajo. Intenta de nuevo.";
			} else {
				echo "¡Correcto! Adivinaste el número en " . $intentos . " intentos.";
				unset($_SESSION["numero"]);
				unset($_SESSION["intentos"]);
			}
			
			$_SESSION["intentos"]++;
		} else {
			$_SESSION["numero"] = rand(1, 100);
			$_SESSION["intentos"] = 1;
		}
		?>
	</p>
</body>
</html>
