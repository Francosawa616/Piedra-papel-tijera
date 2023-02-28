function jugar(opcion) {
	var opciones = ['piedra', 'papel', 'tijera'];
	var indice = Math.floor(Math.random() * 3);
	var maquina = opciones[indice];
	var mensaje = '';
	if (opcion == maquina) {
		mensaje = 'Empate.';
	} else if ((opcion == 'piedra' && maquina == 'tijera') || (opcion == 'papel' && maquina == 'piedra') || (opcion == 'tijera' && maquina == 'papel')) {
		mensaje = 'Ganaste.';
	} else {
		mensaje = 'Perdiste.';
	}
	document.getElementById('mensaje').innerHTML = 'Elejiste ' + opcion + '. la pc eligio ' + maquina + '. ' + mensaje;
}
