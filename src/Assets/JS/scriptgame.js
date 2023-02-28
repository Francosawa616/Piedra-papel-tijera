// Array de juegos
var games = [
	{
		title: "Pac-Man",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pac-Man.svg/1200px-Pac-Man.svg.png",
		description: "Come todos los puntos y evita a los fantasmas.",
		url: "https://www.classicgamesarcade.com/game/21667/pac-man.html"
	},
	{
		title: "Tetris",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Tetris_English.png/220px-Tetris_English.png",
		description: "Mueve las piezas para completar filas y no dejar que la pantalla se llene.",
		url: "https://www.classicgamesarcade.com/game/21587/tetris.html"
	},
	{
		title: "Space Invaders",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Space_Invaders.png/220px-Space_Invaders.png",
		description: "Dispara a los extraterrestres que intentan invadir la Tierra.",
		url: "https://www.classicgamesarcade.com/game/21581/space-invaders.html"
	},
	{
		title: "Donkey Kong",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Donkey_Kong_arcade.png/220px-Donkey_Kong_arcade.png",
		description: "Salta obstáculos y rescata a la princesa del gorila.",
		url: "https://www.classicgamesarcade.com/game/21605/donkey-kong.html"
	},
	{
		title: "Super Mario Bros.",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Super_Mario_Bros._box.png/220px-Super_Mario_Bros._box.png",
		description: "Ayuda a Mario a rescatar a la princesa del malvado Bowser.",
		url: "https://www.classicgamesarcade.com/game/21632/super-mario-bros.html"
	}
];
// Función para agregar un juego al HTML
function addGame(game) {
	// Crea un elemento div con la clase "game"
	var gameElement = document.createElement("div");
	gameElement.classList.add("game");

	// Crea un elemento img con la imagen del juego
	var imageElement = document.createElement("img");
	imageElement.src = game.image;
	gameElement.appendChild(imageElement);

	// Crea un elemento h2 con el título del juego
	var titleElement = document.createElement("h2");
	titleElement.textContent = game.title;
	gameElement.appendChild(titleElement);

	// Crea un elemento p con la descripción del juego
	var descriptionElement = document.createElement("p");
	descriptionElement.textContent = game.description;
	gameElement.appendChild(descriptionElement);

	// Crea un elemento a con el enlace al juego
	var linkElement = document.createElement("a");
	linkElement.href = game.url;
	linkElement.textContent = "Jugar";
	gameElement.appendChild(linkElement);

	// Agrega el juego al HTML
	var gamesElement = document.getElementById("games");
	gamesElement.appendChild(gameElement);
}

// Agrega cada juego al HTML
for (var i = 0; i < games.length; i++) {
	addGame(games[i]);
}

