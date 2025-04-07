//import React from 'react';

const tecnologias = [
	{ nome: 'React', descricao: 'Biblioteca para interfaces modernas.' },
	{ nome: 'TypeScript', descricao: 'Superset de JavaScript tipado.' },
	{ nome: 'Tailwind CSS', descricao: 'Utilitários para estilização rápida.' },
	{ nome: 'ESLint', descricao: 'Análise estática para manter código limpo.' },
	{ nome: 'Prettier', descricao: 'Formatador automático de código.' },
	{ nome: 'React Hooks', descricao: 'Gerencia estado e efeitos em funções.' },
	{ nome: 'React Refresh', descricao: 'Hot Reload de componentes em tempo real.' },
];

export default function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white p-6">
			<h1 className="text-4xl font-bold text-center mb-10 drop-shadow-lg">
				🚀 Tecnologias do Projeto
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
				{tecnologias.map((tech) => (
					<div
						key={tech.nome}
						className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white border-opacity-20 transition duration-300 hover:scale-105"
					>
						<h2 className="text-xl font-semibold text-white mb-2">{tech.nome}</h2>
						<p className="text-white text-sm opacity-90">{tech.descricao}</p>
					</div>
				))}
			</div>
		</div>
	);
}
