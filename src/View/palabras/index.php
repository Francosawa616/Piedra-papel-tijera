<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Juego de adivinanza</title>
    <link rel="stylesheet" href="../../Assets/CSS/palabras.css">
</head>
<body>
<a href="../gamesphp.php" class="back-link">Volver</a>
	<h1>Juego de adivinanza</h1>
	<?php require 'adivinanza.php'; ?>
	<form method="post" action="">
		<input type="text" name="respuesta" placeholder="Escribe tu respuesta aquí">
		<input type="hidden" name="pregunta_actual" value="<?php echo $pregunta_actual; ?>">
		<input type="submit" name="submit" value="Responder">
	</form>
</body>
</html>