const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const APP = EXPRESS();
const PORTA = 3333;

function showHello(resquest, response) {
	response.send('Hello, World!');
}

function mostraPorta() {
	console.log('Servidor criado e rodando na porta', PORTA);
}

APP.use(ROUTER.get('/hello', showHello));
APP.listen(PORTA, mostraPorta);
