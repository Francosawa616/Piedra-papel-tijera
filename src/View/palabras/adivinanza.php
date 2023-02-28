<?php
	$preguntas = array(
		"¿Qué animal hace 'guau guau'?" => "perro",
		"¿Qué fruta es redonda y tiene un hoyito en el medio?" => "manzana",
		"¿Qué instrumento musical tiene teclas blancas y negras?" => "piano",
        "¿Cómo se llama el sistema operativo desarrollado por Apple?" => "macos",
        "¿Cómo se llama el lenguaje de programación creado por Microsoft?" => "c#",
        "¿Cómo se llama el lenguaje de marcado utilizado para crear páginas web?" => "html",
        "¿Cómo se llama el lenguaje de estilos utilizado para dar estilo a las páginas web?" => "css",
        "¿Cómo se llama el lenguaje de programación utilizado para crear aplicaciones móviles en Android?" => "java",
        "¿Cómo se llama el lenguaje de programación utilizado para crear aplicaciones móviles en iOS?" => "swift",
        "¿Cómo se llama el lenguaje de programación utilizado para crear páginas web dinámicas?" => "javascipt",
        "¿Cómo se llama el lenguaje de programación utilizado para crear software del lado del servidor?" => "php",
        "¿Cómo se llama la base de datos más utilizada en la web?" => "mysql",
        "¿Cómo se llama el protocolo utilizado para transferir archivos a través de la web?" => "ftp"
	);

	if (isset($_POST['submit'])) {
		$respuesta = strtolower($_POST['respuesta']);
		$pregunta_actual = $_POST['pregunta_actual'];
		$respuesta_correcta = $preguntas[$pregunta_actual];
		if ($respuesta == $respuesta_correcta) {
			echo "<p>¡Correcto!</p>";
		} else {
			echo "<p>Lo siento, la respuesta es incorrecta.</p>";
		}
	}
	$pregunta_actual = array_rand($preguntas);
	echo "<h2>$pregunta_actual</h2>";
	?>