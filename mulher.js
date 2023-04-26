const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const APP = EXPRESS();
const PORTA = 3333;

function mostraMulher(request, response) {
	response.json({
		nome: 'Silmara Conceição',
		imagem: 'https://github.com/simaraconceicao.png',
		minibio: 'Desenvolvedora e instrutora',
	});
}

function mostraPorta() {
	console.log('Servidor criado e rodando na porta', PORTA);
}

APP.use(ROUTER.get('/mulher', mostraMulher));
APP.listen(PORTA, mostraPorta);
