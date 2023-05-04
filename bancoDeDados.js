const mongoose = require('mongoose');
require('dotenv').config(); //chamando o pacote dotenv

// async se refere ao JavaScript assíncrono: , o JavaScript é uma linguagem que resolve um problema por vez. E quando a gente precisa de uma série de instruções que possuem dependência das anteriores, a gente precisa pedir para que a execução anterior seja atendida primeiro. Então, a primeira coisa que eu tenho que fazer para dizer para o JavaScript que eu vou começar a escrever um processo assíncrono é dizer que a minha função é async.

async function conectaBancoDeDados() {
	try {
		console.log('Conexão com o banco de dados iniciou');

		await mongoose.connect(process.env.MONGO_URL); //url substituída pela propriedade

		console.log('Conexão com o banco de dados feita com sucesso!');
	} catch (erro) {
		console.log(erro);
	}
}

module.exports = conectaBancoDeDados;
