const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const APP = EXPRESS();
const PORTA = 3333;

const MULHERES = [
	{
		nome: 'Simara Conceição',
		imagem: 'https://github.com/simaraconceicao.png',
		minibio: 'Desevolvedora e instrutora',
	},
	{
		nome: 'Iana Chan',
		imagem: 'https://bit.ly/3JCXBqP',
		minibio: 'Fundadora da Programaria',
	},
	{
		nome: 'Nina da Hora',
		imagem: 'https://bit.ly/3FKpFaz',
		minibio: 'Hacker antirracista',
	},
];

function mostraMuheres(request, response) {
	response.json(MULHERES);
}

function mostraPorta() {
	console.log('Servidor criado e rodando na porta', PORTA);
}

APP.use(ROUTER.get('/mulheres', mostraMuheres));
APP.listen(PORTA, mostraPorta);
