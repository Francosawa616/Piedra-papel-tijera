<!DOCTYPE html>
<html>
<head>
	<title>Juego de Piedra, Papel o Tijera</title>
	<link rel="stylesheet" href="../../Assets/CSS/ppt.css">
	<script src="../../Assets/JS/ppt.js"></script>
</head>
<body>
<a href="../gamesphp.php" class="back-link">Volver</a>
	<header>
		<h1>Juego de Piedra, Papel o Tijera</h1>
	</header>
	<div class="container">
		<p>Escoge una opción:</p>
		<div id="opciones">
			<button onclick="jugar('piedra')">
				<img src="../../Assets/img/piedra.png">
				<p>Piedra</p>
			</button>
			<button onclick="jugar('papel')">
				<img src="../../Assets/img/papel.png">
				<p>Papel</p>
			</button>
			<button onclick="jugar('tijera')">
				<img src="../../Assets/img/tijera.png">
				<p>Tijera</p>
			</button>
		</div>
		<p id="mensaje"></p>
	</div>
	</div>
</body>
</html>
