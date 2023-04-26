const EXPRESS = require('express');

const APP = EXPRESS();
const PORTA = 3333;

function mostraPorta() {
	console.log('Servidor criado e rodando na porta', PORTA);
}

APP.listen(PORTA, mostraPorta);
