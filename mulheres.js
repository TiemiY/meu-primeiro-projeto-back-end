const EXPRESS = require('express'); //iniciação do express
const ROUTER = EXPRESS.Router(); //configuração da primeira parte da rota
const cors = require('cors'); //pacote cors (Cross-origin Resource Sharing) que permite consumir essa API no front-end
const conectaBancoDeDados = require('./bancoDeDados'); // ligando ao banco de dados
conectaBancoDeDados(); //chamando a função que conecta o banco de dados

const Mulher = require('./mulherModel');

const APP = EXPRESS(); // iniciação do app
APP.use(EXPRESS.json());
APP.use(cors());

const PORTA = 3333; // criação da porta

// função GET
async function mostraMuheres(request, response) {
	try {
		const mulheresVindasDoBancoDeDados = await Mulher.find();

		response.json(mulheresVindasDoBancoDeDados);
	} catch (err) {
		console.log(err);
	}
}

//função POST
async function criaMulher(request, response) {
	const NOVA_MULHER = new Mulher({
		nome: request.body.nome,
		imagem: request.body.imagem,
		minibio: request.body.minibio,
		citacao: request.body.citacao,
	});
	try {
		const mulherCriada = await NOVA_MULHER.save();
		response.status(201).json(mulherCriada);
	} catch (err) {
		console.log(err);
	}
}

//função PATCH
async function corrigeMulher(request, response) {
	try {
		const mulherEncontrada = await Mulher.findById(request.params.id);
		if (request.body.nome) {
			mulherEncontrada.nome = request.body.nome;
		}

		if (request.body.minibio) {
			mulherEncontrada.minibio = request.body.minibio;
		}

		if (request.body.imagem) {
			mulherEncontrada.imagem = request.body.imagem;
		}
		if (request.body.citacao) {
			mulherEncontrada.citacao = request.body.citacao;
		}

		const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();

		response.json(mulherAtualizadaNoBancoDeDados);
	} catch (err) {
		console.log(err);
	}
}

// função DELETE
async function deletaMulher(request, response) {
	try {
		await Mulher.findByIdAndDelete(request.params.id);
		response.json({ mensagem: 'Mulher deletada com sucesso!' });
	} catch (err) {
		console.log(err);
	}
}

// função PORTA
function mostraPorta() {
	console.log('Servidor criado e rodando na porta', PORTA);
}

APP.use(ROUTER.get('/mulheres', mostraMuheres)); //configuração da rota GET /mulheres
APP.use(ROUTER.post('/mulheres', criaMulher)); // configuração da rota POST  /mulheres
APP.use(ROUTER.patch('/mulheres/:id', corrigeMulher)); // configuração da rota PATCH /mulheres/:id
APP.use(ROUTER.delete('/mulheres/:id', deletaMulher)); //configuraçã da rota DELETE

APP.listen(PORTA, mostraPorta); // servidor ouvindo a porta
